export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  dribbble?: string;
  github?: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  email: string;
  url: string;
  intro: string;
  social: SocialLinks;
  resume: {
    href: string;
    label: string;
    updatedAt?: string;
  };
  nav: { label: string; href: string }[];
};

export type ImageRef = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
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

export type CaseStudySection = {
  id: string;
  kind: CaseStudySectionKind;
  title: string;
  content?: string;
  enabled?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  impact: string;
  cover: ImageRef;
  timeline?: string;
  featured: boolean;
  order: number;
  sections: CaseStudySection[];
  related?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
};
