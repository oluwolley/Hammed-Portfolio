import type { MetadataRoute } from "next";
import { getFeaturedProjects } from "@/content/projects";
import { getSiteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: base,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  const projects = getFeaturedProjects().map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [home, ...projects];
}
