import { siteConfig } from "@/content/site";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
  return (
    <Section id="contact" ariaLabelledby="contact-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="contact-heading"
            title="Contact"
            description="Open to product design roles and selective collaborations. The fastest way to reach me is email."
          />
          <p className="mt-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="break-all text-lg font-medium tracking-tight underline-offset-4 hover:underline sm:text-xl md:text-2xl"
            >
              {siteConfig.email}
            </a>
          </p>
          <SocialLinks className="mt-8" />
        </Reveal>
      </Container>
    </Section>
  );
}
