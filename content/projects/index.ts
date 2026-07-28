import type { Project } from "../types";

const placeholderCover = {
  src: "/images/projects/placeholder.svg",
  alt: "Project cover placeholder",
  width: 1200,
  height: 800,
};

const stubSections = (title: string) => [
  {
    id: "overview",
    kind: "overview" as const,
    title: "Overview",
    content: `${title} — case study content coming in Phase 4. This placeholder confirms routing and content wiring.`,
  },
];

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    role: "Lead Product Designer",
    impact: "Impact metric placeholder",
    cover: placeholderCover,
    timeline: "2025",
    featured: true,
    order: 1,
    sections: stubSections("Project One"),
  },
  {
    slug: "project-two",
    title: "Project Two",
    role: "Product Designer",
    impact: "Impact metric placeholder",
    cover: placeholderCover,
    timeline: "2024",
    featured: true,
    order: 2,
    sections: stubSections("Project Two"),
  },
  {
    slug: "project-three",
    title: "Project Three",
    role: "Product Designer",
    impact: "Impact metric placeholder",
    cover: placeholderCover,
    timeline: "2024",
    featured: true,
    order: 3,
    sections: stubSections("Project Three"),
  },
  {
    slug: "project-four",
    title: "Project Four",
    role: "Product Designer",
    impact: "Impact metric placeholder",
    cover: placeholderCover,
    timeline: "2023",
    featured: true,
    order: 4,
    sections: stubSections("Project Four"),
  },
];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}
