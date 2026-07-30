import type { Website } from "../types";

export const websites: Website[] = [
  {
    slug: "kinetik-studio",
    title: "Kinetik® — Interface studio",
    description:
      "A concept site for a fictional design studio: WebGL hero, scroll-scrubbed typography, and schematic product mockups. Built with Next.js, GSAP, and Three.js.",
    mockup: {
      src: "/images/websites/kinetik-studio/mockup.jpg",
      alt: "Kinetik studio landing page with a WebGL orb behind the headline 'Interfaces that move people'",
      width: 1600,
      height: 1001,
      cardBackground: "#0B0B0C",
    },
    url: "https://studio.hammedshotola.com/kinetik",
    status: "live",
    order: 1,
  },
];

export function getAllWebsites(): Website[] {
  return [...websites].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getLiveWebsites(): Website[] {
  return getAllWebsites().filter((site) => site.status === "live");
}
