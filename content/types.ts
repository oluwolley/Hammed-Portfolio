export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  dribbble?: string;
  github?: string;
};

export type SiteConfig = {
  name: string;
  /** Compact name used in the sticky header */
  shortName?: string;
  title: string;
  /** Line shown under the role in the hero (e.g. visa / recognition) */
  credential?: string;
  email: string;
  url: string;
  /** Short line for SEO / meta description */
  intro: string;
  /** Hero positioning quote (displayed below name) */
  quote: string[];
  /** Circular portrait shown beside the title in the hero */
  avatar?: ImageRef;
  social: SocialLinks;
  resume: {
    href: string;
    label: string;
    updatedAt?: string;
    /** When false, show email CTA instead of a broken PDF link */
    available?: boolean;
  };
  nav: { label: string; href: string }[];
};

export type ImageRef = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Soft fill behind contain-fit covers on project cards */
  cardBackground?: string;
};

export type CaseStudySectionKind =
  | "overview"
  | "problem"
  | "businessGoals"
  | "research"
  | "insights"
  | "personas"
  | "journey"
  | "painPoints"
  | "competitive"
  | "process"
  | "wireframes"
  | "iterations"
  | "decisions"
  | "finalUi"
  | "prototype"
  | "accessibility"
  | "handoff"
  | "outcome"
  | "metrics"
  | "lessons"
  | "nextSteps";

export type MetricItem = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  id: string;
  kind: CaseStudySectionKind;
  title: string;
  content?: string;
  images?: ImageRef[];
  embedUrl?: string;
  metrics?: MetricItem[];
  enabled?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  impact: string;
  /** Short line on homepage work cards (falls back to impact) */
  tagline?: string;
  cover: ImageRef;
  /** Optional homepage card image (falls back to cover) */
  cardCover?: ImageRef;
  timeline?: string;
  featured: boolean;
  order: number;
  /** How case study media fills its frame. Default: contain */
  mediaFit?: "cover" | "contain";
  sections: CaseStudySection[];
  related?: string[];
  /** Live product site. Omit to hide the case study website CTA. */
  website?: string;
  /** Button label for the website CTA. Default: Visit website */
  websiteLabel?: string;
  seo?: {
    title?: string;
    description?: string;
  };
};

export type WebsiteStatus = "live" | "comingSoon";

/** Live marketing / product sites shown on the Websites gallery */
export type Website = {
  slug: string;
  title: string;
  description: string;
  mockup: ImageRef;
  /** Live URL when status is "live" */
  url: string;
  status: WebsiteStatus;
  order?: number;
};
