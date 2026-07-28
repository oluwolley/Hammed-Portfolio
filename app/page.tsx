import Link from "next/link";
import { siteConfig } from "@/content/site";
import { getFeaturedProjects } from "@/content/projects";
import { Container, Section } from "@/components/ui/Container";

export default function HomePage() {
  const projects = getFeaturedProjects();

  return (
    <>
      <Section id="hero" ariaLabelledby="hero-heading">
        <Container>
          <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
          <h1 id="hero-heading" className="mt-3 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{siteConfig.intro}</p>
          <p className="mt-8 text-sm text-muted-foreground">Phase 3 — full hero design coming next.</p>
        </Container>
      </Section>

      <Section id="about" ariaLabelledby="about-heading">
        <Container>
          <h2 id="about-heading" className="text-2xl font-medium tracking-tight md:text-3xl">
            About
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Professional introduction, background, design philosophy, and tools — placeholder for Phase 3.
          </p>
        </Container>
      </Section>

      <Section id="work" ariaLabelledby="work-heading">
        <Container>
          <h2 id="work-heading" className="text-2xl font-medium tracking-tight md:text-3xl">
            Selected work
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block rounded-xl border border-border p-6 transition-colors hover:bg-muted"
                >
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.role}</p>
                  <p className="mt-2 text-sm">{project.impact}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="resume" ariaLabelledby="resume-heading">
        <Container>
          <h2 id="resume-heading" className="text-2xl font-medium tracking-tight md:text-3xl">
            Resume
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Download a PDF version of my resume.
          </p>
          <a
            href={siteConfig.resume.href}
            className="mt-8 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
          >
            {siteConfig.resume.label}
          </a>
        </Container>
      </Section>

      <Section id="contact" ariaLabelledby="contact-heading">
        <Container>
          <h2 id="contact-heading" className="text-2xl font-medium tracking-tight md:text-3xl">
            Contact
          </h2>
          <p className="mt-4 text-muted-foreground">
            <a href={`mailto:${siteConfig.email}`} className="underline-offset-4 hover:underline">
              {siteConfig.email}
            </a>
          </p>
          {siteConfig.social.linkedin && (
            <p className="mt-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                LinkedIn
              </a>
            </p>
          )}
        </Container>
      </Section>
    </>
  );
}
