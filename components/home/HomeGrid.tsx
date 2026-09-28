import { AboutColumn } from "@/components/home/AboutColumn";
import { HighlightedWork } from "@/components/home/HighlightedWork";
import { SideProjects } from "@/components/home/SideProjects";
import { Writings } from "@/components/home/Writings";
import { Playground } from "@/components/home/Playground";
import { CareerJourney } from "@/components/home/CareerJourney";
import { Reveal } from "@/components/motion/Reveal";

export function HomeGrid() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
        <Reveal className="min-w-0">
          <AboutColumn />
        </Reveal>

        <Reveal className="min-w-0" delayMs={50}>
          <HighlightedWork />
        </Reveal>

        <Reveal className="flex min-w-0 flex-col gap-4" delayMs={100}>
          <SideProjects />
          <Writings />
          <Playground />
        </Reveal>
      </div>

      <Reveal className="mt-4" delayMs={120}>
        <CareerJourney />
      </Reveal>
    </div>
  );
}
