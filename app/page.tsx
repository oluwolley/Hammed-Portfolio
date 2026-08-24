import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Contact } from "@/components/home/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { buildHomeJsonLd } from "@/lib/seo";
import { getSiteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | ${siteConfig.title}`,
  },
  description: siteConfig.intro,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.intro,
    url: getSiteUrl(),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.intro,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildHomeJsonLd()} />
      <Hero />
      <SelectedWork />
      <Contact />
    </>
  );
}
