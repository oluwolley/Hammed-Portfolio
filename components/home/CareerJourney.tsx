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
 * Year rail weights — 2019 is pushed far right so roles can stretch.
 * Index 0 = 2026 … index 7 = 2019.
 */
const YEAR_WEIGHTS = [0.7, 0.85, 1, 1.05, 1.15, 1.3, 1.35, 2.7] as const;
const YEAR_TRACK = YEAR_WEIGHTS.map((w) => `minmax(0,${w}fr)`).join(" ");
const WEIGHT_TOTAL = YEAR_WEIGHTS.reduce((sum, w) => sum + w, 0);

function yearIndex(year: string): number {
  return careerYears.indexOf(year as (typeof careerYears)[number]);
}

/** Percent left/width for a start→end year range on the weighted rail. */
function rangeStyle(startYear: string, endYear: string): {
  left: string;
  width: string;
} {
  const start = yearIndex(startYear);
  const end = yearIndex(endYear);
  const from = Math.min(start, end);
  const to = Math.max(start, end);

  let leftUnits = 0;
  for (let i = 0; i < from; i += 1) leftUnits += YEAR_WEIGHTS[i]!;
  let widthUnits = 0;
  for (let i = from; i <= to; i += 1) widthUnits += YEAR_WEIGHTS[i]!;

  // Inset slightly so neighboring cards don't touch
  const inset = 0.35;
  const leftPct = (leftUnits / WEIGHT_TOTAL) * 100 + inset;
  const widthPct = (widthUnits / WEIGHT_TOTAL) * 100 - inset * 2;

  return {
    left: `${leftPct}%`,
    width: `${Math.max(widthPct, 6)}%`,
  };
}

function columnRange(column: CareerColumn): { left: string; width: string } {
  return rangeStyle(column.startYear, column.endYear);
}

export function CareerJourney() {
  return (
    <Panel id="journey" ariaLabelledby="journey-heading" className="gap-6">
      <SectionLabel id="journey-heading">Career Journey</SectionLabel>

      <div className="hidden overflow-x-auto md:block">
        <div className="relative min-w-[1100px]">
          <div
            className="mb-5 grid gap-2"
            style={{ gridTemplateColumns: YEAR_TRACK }}
          >
            {careerYears.map((year) => (
              <div key={year} className="flex flex-col items-start gap-2">
                <span className="text-sm font-semibold text-foreground">{year}</span>
                <span className="h-4 w-px bg-border" aria-hidden />
              </div>
            ))}
          </div>
          <div
            className="absolute left-0 right-0 top-[1.65rem] h-px bg-border"
            aria-hidden
          />

          {/*
            Year-aligned stretches on one row.
            Mecor is reduced to 2025; Freelance / Dash / Xend / Great Brands
            span their full ranges. Youverify stacks under Xend.
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
