import type { Metadata } from "next";
import type { Project } from "@/content/types";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/utils";

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncateDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

export function defaultOgImage() {
  return {
    url: siteConfig.avatar?.src ?? "/images/hammed.jpg",
    width: siteConfig.avatar?.width ?? 400,
    height: siteConfig.avatar?.height ?? 400,
    alt: siteConfig.avatar?.alt ?? `${siteConfig.name} portrait`,
  };
}

export function buildRootMetadata(): Metadata {
  const title = `${siteConfig.name} | ${siteConfig.title}`;
  const description = siteConfig.intro;
  const ogImage = defaultOgImage();

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: getSiteUrl() }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    keywords: [
      "Product Designer",
      "UX Designer",
      "Hammed Shotola",
      "Fintech design",
      "Case studies",
      "Portfolio",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: getSiteUrl(),
      siteName: siteConfig.name,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "portfolio",
  };
}

export function buildHomeJsonLd() {
  const sameAs = [siteConfig.social.linkedin].filter(Boolean) as string[];

  const person = {
    "@type": "Person",
    "@id": `${getSiteUrl()}/#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.intro,
    url: getSiteUrl(),
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.avatar?.src ?? "/images/hammed.jpg"),
    sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: `${siteConfig.name} | Portfolio`,
    url: getSiteUrl(),
    description: siteConfig.intro,
    publisher: { "@id": `${getSiteUrl()}/#person` },
    inLanguage: "en-GB",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };
}

export function buildProjectJsonLd(project: Project) {
  const url = absoluteUrl(`/projects/${project.slug}`);
  const description = truncateDescription(
    project.seo?.description ?? project.impact,
  );

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: project.seo?.title ?? project.title,
    headline: project.title,
    description,
    url,
    image: absoluteUrl(project.cover.src),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
    about: project.role,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      name: `${siteConfig.name} | Portfolio`,
      url: getSiteUrl(),
    },
  };
}

export function buildProjectMetadata(project: Project): Metadata {
  const title = project.seo?.title ?? `${project.title} | Case Study`;
  const description = truncateDescription(
    project.seo?.description ??
      project.sections.find((s) => s.kind === "overview")?.content ??
      project.impact,
  );
  const url = absoluteUrl(`/projects/${project.slug}`);
  const image = {
    url: project.cover.src,
    width: project.cover.width,
    height: project.cover.height,
    alt: project.cover.alt,
  };

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image.url],
    },
  };
}
