import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/content/types";

type RelatedProjectsProps = {
  projects: Project[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects.length) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-20 border-t border-border pt-16 md:mt-24">
      <h2 id="related-heading" className="text-2xl font-medium tracking-tight">
        Related projects
      </h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
