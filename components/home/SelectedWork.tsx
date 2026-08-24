import { getFeaturedProjects } from "@/content/projects";
import { Container, Section } from "@/components/ui/Container";
import { FeaturedProjectRow } from "@/components/home/FeaturedProjectRow";
import { Reveal } from "@/components/motion/Reveal";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <Section id="work" ariaLabelledby="work-heading" className="pt-8 sm:pt-10 md:pt-12">
      <Container>
        <Reveal>
          <h2
            id="work-heading"
            className="text-[clamp(1.75rem,4vw,2rem)] font-medium tracking-tight text-foreground"
          >
            Featured Work
          </h2>
        </Reveal>
        <ul className="mt-12 flex flex-col gap-16 sm:mt-16 sm:gap-20 md:gap-24">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal delayMs={index * 40}>
                <FeaturedProjectRow project={project} priority={index < 2} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
