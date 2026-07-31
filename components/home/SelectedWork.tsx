import { getFeaturedProjects } from "@/content/projects";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <Section id="work" ariaLabelledby="work-heading" className="bg-muted/20">
      <Container>
        <Reveal>
          <SectionHeading id="work-heading" title="Selected work" />
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal delayMs={index * 60}>
                <ProjectCard project={project} priority={index < 2} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
