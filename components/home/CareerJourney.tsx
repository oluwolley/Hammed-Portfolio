import Image from "next/image";
import {
  careerColumns,
  careerYears,
  type CareerColumn,
  type CareerEvent,
} from "@/content/home";
import { Panel, SectionLabel } from "@/components/home/Panel";
import { cn } from "@/lib/utils";

function CareerCard({
  event,
  className,
}: {
  event: CareerEvent;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-background/60 p-4",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-2.5">
        {event.logo ? (
          <span className="relative size-[18px] shrink-0 overflow-hidden rounded-full">
            <Image
              src={event.logo.src}
              alt={event.logo.alt || ""}
              fill
              sizes="18px"
              className="object-cover"
            />
          </span>
        ) : (
          <span className="inline-flex size-[18px] shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[9px] font-bold text-muted-foreground">
            F
          </span>
        )}
        <span className="truncate text-[11px] text-muted-foreground">
          {event.company}
        </span>
      </div>
      <p className="text-sm font-semibold text-foreground">{event.role}</p>
      <p className="mt-1 text-[11px] text-muted-foreground">{event.period}</p>
    </article>
  );
}

/**
 * Year markers sit on an even rail with 2026 at the far left and 2019 at the far right.
 */
const YEAR_COUNT = careerYears.length;
const YEAR_LAST = YEAR_COUNT - 1;

function yearIndex(year: string): number {
  return careerYears.indexOf(year as (typeof careerYears)[number]);
}

/** Percent position along the line (0 = left/2026, 100 = right/2019). */
function yearPos(index: number): number {
  return (index / YEAR_LAST) * 100;
}

/** Percent left/width for a start→end year range on the rail. */
function rangeStyle(startYear: string, endYear: string): {
  left: string;
  width: string;
} {
  const start = yearIndex(startYear);
  const end = yearIndex(endYear);
  const from = Math.min(start, end);
  const to = Math.max(start, end);

  const leftPct = yearPos(from);
  const rightPct = yearPos(to);
  // Single-year roles still get a readable card width
  const widthPct =
    to === from
      ? 100 / YEAR_LAST
      : Math.max(rightPct - leftPct, 100 / YEAR_LAST);

  const inset = 0.4;
  return {
    left: `${leftPct + inset}%`,
    width: `${Math.max(widthPct - inset * 2, 7)}%`,
  };
}

function columnRange(column: CareerColumn): { left: string; width: string } {
  // Mecor anchors to the far left; Freelance begins immediately after it.
  if (column.id === "mecor") {
    const inset = 0.4;
    return {
      left: `${inset}%`,
      width: `${Math.max(yearPos(1) - inset * 2, 7)}%`,
    };
  }
  if (column.id === "freelance") {
    const inset = 0.4;
    const leftPct = yearPos(1);
    const rightPct = yearPos(yearIndex("2024"));
    return {
      left: `${leftPct + inset}%`,
      width: `${Math.max(rightPct - leftPct + 100 / YEAR_LAST - inset * 2, 7)}%`,
    };
  }
  return rangeStyle(column.startYear, column.endYear);
}

export function CareerJourney() {
  return (
    <Panel id="journey" ariaLabelledby="journey-heading" className="gap-6">
      <SectionLabel id="journey-heading">Career Journey</SectionLabel>

      <div className="hidden overflow-x-auto md:block">
        <div className="relative min-w-[1100px]">
          <div className="relative mb-5 flex justify-between">
            {careerYears.map((year, index) => {
              const isLast = index === YEAR_LAST;
              return (
                <div
                  key={year}
                  className={cn(
                    "flex flex-col gap-2",
                    isLast ? "items-end" : "items-start",
                  )}
                >
                  <span className="text-sm font-semibold text-foreground">
                    {year}
                  </span>
                  <span className="h-4 w-px bg-border" aria-hidden />
                </div>
              );
            })}
          </div>
          <div
            className="absolute left-0 right-0 top-[1.65rem] h-px bg-border"
            aria-hidden
          />

          {/*
            Mecor sits at the far left; Freelance starts immediately after.
            Remaining roles stretch across their year ranges. Youverify stacks under Xend.
          */}
          <div className="relative h-[230px]">
            {careerColumns.map((column, index) => {
              const style = columnRange(column);
              const stacked = column.events.length > 1;
              // More recent roles paint above older ones in overlap zones
              const zIndex = careerColumns.length - index;

              return (
                <div
                  key={column.id}
                  className={cn(
                    "absolute top-0",
                    stacked && "flex flex-col gap-3",
                  )}
                  style={{ ...style, zIndex }}
                >
                  {column.events.map((event) => (
                    <CareerCard
                      key={event.id}
                      event={event}
                      className={
                        column.id === "mecor" ? "shadow-sm" : undefined
                      }
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-3 md:hidden">
        {careerColumns.flatMap((column) =>
          column.events.map((event) => (
            <li key={event.id}>
              <CareerCard event={event} />
            </li>
          )),
        )}
      </ul>
    </Panel>
  );
}
