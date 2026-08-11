import type { Project } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";

type CaseStudyWebsiteCtaProps = {
  project: Project;
};

export function CaseStudyWebsiteCta({ project }: CaseStudyWebsiteCtaProps) {
  if (!project.website) return null;

  return (
    <div className="mt-16 border-t border-border pt-10 md:mt-20 md:pt-12">
      <ButtonLink
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        {project.websiteLabel ?? "Visit website"}
      </ButtonLink>
    </div>
  );
}
