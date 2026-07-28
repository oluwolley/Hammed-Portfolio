import Image from "next/image";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <Section
      id="hero"
      ariaLabelledby="hero-heading"
      className="relative overflow-hidden pt-16 sm:pt-24 md:pt-32 [@media(max-height:700px)]:py-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,0,0,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,255,255,0.08),transparent)]"
      />
      <Container>
        <Reveal>
          <div className="flex items-center gap-3">
            {siteConfig.avatar ? (
              <span className="relative inline-block size-10 shrink-0 overflow-hidden rounded-full bg-[#F3F3F3] ring-1 ring-border sm:size-11">
                <Image
                  src={siteConfig.avatar.src}
                  alt={siteConfig.avatar.alt}
                  width={112}
                  height={112}
                  sizes="44px"
                  className="size-full rounded-full object-cover object-[center_38%]"
                  priority
                />
              </span>
            ) : null}
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {siteConfig.title}
            </p>
          </div>
          <h1
            id="hero-heading"
            className="mt-4 max-w-5xl text-[clamp(2.75rem,11vw,6rem)] font-medium leading-[1.02] tracking-tight break-words"
          >
            {siteConfig.shortName ?? siteConfig.name}
          </h1>

          <figure className="mt-8 max-w-3xl border-l-2 border-foreground/15 pl-4 sm:mt-10 sm:pl-6 md:mt-12 md:pl-8">
            <blockquote className="font-serif text-base leading-relaxed text-foreground/90 sm:text-lg md:text-xl md:leading-relaxed">
              {siteConfig.quote.map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-4 sm:mt-5" : undefined}>
                  {paragraph}
                </p>
              ))}
            </blockquote>
          </figure>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 md:mt-14">
            <ButtonLink href="/#work" className="w-full sm:w-auto">
              View selected work
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary" className="w-full sm:w-auto">
              Get in touch
            </ButtonLink>
          </div>
          <SocialLinks className="mt-10" />
        </Reveal>
      </Container>
    </Section>
  );
}
