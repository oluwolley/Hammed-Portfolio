import Image from "next/image";
import { careerEvents, careerYears } from "@/content/home";
import { Panel, SectionLabel } from "@/components/home/Panel";

export function CareerJourney() {
  return (
    <Panel id="journey" ariaLabelledby="journey-heading" className="gap-6">
      <SectionLabel id="journey-heading">Career Journey</SectionLabel>

      <div className="hidden overflow-x-auto md:block">
        <div className="relative min-w-[720px]">
          <div className="mb-6 grid grid-cols-8 gap-2">
            {careerYears.map((year) => (
              <div key={year} className="flex flex-col items-start gap-2">
                <span className="text-sm font-semibold text-foreground">{year}</span>
                <span className="h-4 w-px bg-border" aria-hidden />
              </div>
            ))}
          </div>
          <div className="absolute left-0 right-0 top-[1.65rem] h-px bg-border" aria-hidden />
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {careerEvents.map((event) => (
          <li
            key={event.id}
            className="rounded-xl border border-border bg-background/60 p-4"
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
          </li>
        ))}
      </ul>
    </Panel>
  );
}
