import { siteConfig } from "@/content/site";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  return (
    <Section id="contact" ariaLabelledby="contact-heading">
      <Container>
        <Reveal>
          <div className="flex max-w-3xl flex-col items-start gap-8">
            <h2
              id="contact-heading"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-tight tracking-tight text-foreground"
            >
              Have an ambitious project in mind? Let&apos;s create something lasting.
            </h2>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-full border border-transparent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground",
                  "transition-[opacity,background-color,color] duration-200 hover:opacity-90",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
                )}
              >
                Email
              </a>
              {siteConfig.social.linkedin ? (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  <LinkedInIcon className="h-4 w-4 shrink-0" />
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
