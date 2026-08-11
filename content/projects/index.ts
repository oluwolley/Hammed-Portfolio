import type { Project } from "../types";
import { dashProject } from "./dash";
import { xendProject } from "./xend";
import { irisProject } from "./iris";
import { odaProject } from "./oda";
import { domeProject } from "./dome";

export const projects: Project[] = [
  dashProject,
  xendProject,
  irisProject,
  odaProject,
  domeProject,
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

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const listed = getFeaturedProjects();
  const index = listed.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? listed[index - 1]! : null,
    next: index < listed.length - 1 ? listed[index + 1]! : null,
  };
}

export function getRelatedProjects(slugs: string[] | undefined, currentSlug: string): Project[] {
  if (!slugs?.length) return [];
  return slugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => getProject(slug))
    .filter((p): p is Project => p != null && p.featured)
    .slice(0, 2);
}
