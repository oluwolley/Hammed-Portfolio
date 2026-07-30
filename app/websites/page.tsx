import type { Metadata } from "next";
import { getAllWebsites } from "@/content/websites";
import { siteConfig } from "@/content/site";
import { absoluteUrl, truncateDescription } from "@/lib/seo";
import { Container, Section } from "@/components/ui/Container";
import { WebsitesHero } from "@/components/websites/WebsitesHero";
import { WebsiteCard } from "@/components/websites/WebsiteCard";
import { Reveal } from "@/components/motion/Reveal";

const pageIntro =
  "Welcome to my digital sandbox. The projects in this section aren't client commissions or real-world brands they are fully functional, conceptual websites built from the ground up.";

const description = truncateDescription(
  `No briefs, no boundaries just design and pure code. ${pageIntro}`,
);

export const metadata: Metadata = {
  title: "Websites",
  description,
  alternates: {
    canonical: "/websites",
  },
  openGraph: {
    title: `Websites | ${siteConfig.name}`,
    description,
    url: absoluteUrl("/websites"),
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Websites | ${siteConfig.name}`,
    description,
  },
};

export default function WebsitesPage() {
  const sites = getAllWebsites();

  return (
    <Section
      id="websites"
      ariaLabelledby="websites-heading"
      className="pt-16 sm:pt-24 md:pt-28"
    >
      <Container>
        <Reveal>
          <WebsitesHero />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {sites.map((website, index) => (
            <li key={website.slug}>
              <Reveal delayMs={index * 60}>
                <WebsiteCard website={website} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
