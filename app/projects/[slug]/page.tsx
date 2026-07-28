import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/content/projects";
import { Container } from "@/components/ui/Container";

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

  return {
    title: `${project.title} — Case Study`,
    description: project.sections.find((s) => s.kind === "overview")?.content,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const overview = project.sections.find((s) => s.kind === "overview");

  return (
    <Container className="py-16 md:py-24">
      <Link
        href="/#work"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to portfolio
      </Link>
      <header className="mt-8 max-w-3xl">
        <p className="text-sm text-muted-foreground">{project.role}</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{project.impact}</p>
      </header>
      <article className="mt-12 max-w-3xl font-serif text-lg leading-relaxed text-muted-foreground">
        <h2 className="font-sans text-xl font-medium text-foreground">{overview?.title ?? "Overview"}</h2>
        <p className="mt-4">{overview?.content}</p>
        <p className="mt-6 font-sans text-sm">Full case study template — Phase 4.</p>
      </article>
    </Container>
  );
}
