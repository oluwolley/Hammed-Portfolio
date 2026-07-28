import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function ResumeSection() {
  const { resume } = siteConfig;

  return (
    <Section id="resume" ariaLabelledby="resume-heading">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-border bg-muted/30 px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
            <SectionHeading
              id="resume-heading"
              title="Resume"
              description="Download a PDF overview of experience, skills, and selected work."
            />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={resume.href} download>
                {resume.label}
              </ButtonLink>
              {resume.updatedAt ? (
                <p className="text-sm text-muted-foreground">Updated {resume.updatedAt}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
