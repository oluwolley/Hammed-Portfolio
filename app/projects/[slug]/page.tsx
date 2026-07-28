import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject, getProjectSlugs } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { getVisibleSections } from "@/lib/case-study";
import { getSiteUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { CaseStudyChrome } from "@/components/projects/CaseStudyChrome";
import { CaseStudyHero } from "@/components/projects/CaseStudyHero";
import { CaseStudySectionBlock } from "@/components/projects/CaseStudySection";
import { ProjectPager } from "@/components/projects/ProjectPager";
import {
  MobileTableOfContents,
  TableOfContents,
} from "@/components/projects/TableOfContents";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const overview = project.sections.find((s) => s.kind === "overview")?.content;
  const description = project.seo?.description ?? overview ?? project.impact;
  const title = project.seo?.title ?? `${project.title} — Case Study`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${getSiteUrl()}/projects/${project.slug}`,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const sections = getVisibleSections(project.sections);
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <CaseStudyChrome>
      <Container className="py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_220px] xl:gap-20">
          <article>
            <CaseStudyHero project={project} />
            <MobileTableOfContents sections={sections} />
            <div className="mt-10 space-y-0 md:mt-12">
              {sections.map((section) => (
                <CaseStudySectionBlock
                  key={section.id}
                  section={section}
                  mediaFit={project.mediaFit}
                />
              ))}
            </div>
            <ProjectPager previous={previous} next={next} />
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-20 pt-2">
              <TableOfContents sections={sections} />
            </div>
          </aside>
        </div>
      </Container>
    </CaseStudyChrome>
  );
}
