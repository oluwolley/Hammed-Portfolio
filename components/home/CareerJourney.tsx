import Image from "next/image";
import { careerColumns, careerYears, type CareerEvent } from "@/content/home";
import { Panel, SectionLabel } from "@/components/home/Panel";

function CareerCard({ event }: { event: CareerEvent }) {
  return (
    <article className="rounded-xl border border-border bg-background/60 p-4">
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
 * Cards align to the 8-year rail (2026 → 2019), all on one row.
 * Only Xend Finance + Youverify stack (both 2021).
 * Great Brands is anchored under 2019.
 */
const COLUMN_SPAN: Record<string, string> = {
  mecor: "1 / 3",
  freelance: "3 / 5",
  dash: "5 / 6",
  "xend-youverify": "6 / 7",
  greatbrands: "7 / 9",
};

export function CareerJourney() {
  return (
    <Panel id="journey" ariaLabelledby="journey-heading" className="gap-6">
      <SectionLabel id="journey-heading">Career Journey</SectionLabel>

      <div className="hidden overflow-x-auto md:block">
        <div className="relative min-w-[960px]">
          <div className="mb-5 grid grid-cols-8 gap-2">
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

          <div className="grid grid-cols-8 items-start gap-x-3">
            {careerColumns.map((column) => {
              const stacked = column.events.length > 1;
              return (
                <div
                  key={column.id}
                  className={stacked ? "flex min-w-0 flex-col gap-4" : "min-w-0"}
                  style={{ gridColumn: COLUMN_SPAN[column.id] }}
                >
                  {column.events.map((event) => (
                    <CareerCard key={event.id} event={event} />
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
