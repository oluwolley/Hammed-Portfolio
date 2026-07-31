import type { Website } from "../types";

export const websites: Website[] = [
  {
    slug: "kinetik-studio",
    title: "Kinetic",
    description: "Digital design studio",
    mockup: {
      src: "/images/websites/kinetik-studio/mockup.jpg",
      alt: "Kinetic digital design studio landing page",
      width: 1600,
      height: 900,
      cardBackground: "#0B0B0C",
    },
    url: "https://studio.hammedshotola.com/kinetik",
    status: "live",
    order: 1,
  },
  {
    slug: "medlink",
    title: "MedLink",
    description: "Digital Healthcare Platform",
    mockup: {
      src: "/images/websites/medlink/mockup.jpg",
      alt: "MedLink healthcare platform hero with consultation booking UI",
      width: 1600,
      height: 900,
      cardBackground: "#F5F9FC",
    },
    url: "https://studio.hammedshotola.com/medlink",
    status: "live",
    order: 2,
  },
  {
    slug: "remotehub",
    title: "RemoteHub",
    description: "Modern remote job platform",
    mockup: {
      src: "/images/websites/remotehub/mockup.jpg",
      alt: "RemoteHub job platform homepage with search and remote career messaging",
      width: 1600,
      height: 900,
      cardBackground: "#111118",
    },
    url: "https://studio.hammedshotola.com/remotehub",
    status: "live",
    order: 3,
  },
  {
    slug: "finpeak",
    title: "FinPeak",
    description: "Sleek fintech platform",
    mockup: {
      src: "/images/websites/finpeak/mockup.jpg",
      alt: "FinPeak fintech dashboard homepage",
      width: 1600,
      height: 900,
      cardBackground: "#07111F",
    },
    url: "https://studio.hammedshotola.com/finpeak",
    status: "live",
    order: 4,
  },
  {
    slug: "greengrid",
    title: "GreenGrid Energy",
    description: "Renewable energy platform",
    mockup: {
      src: "/images/websites/greengrid/mockup.jpg",
      alt: "GreenGrid Energy solar dashboard homepage",
      width: 1600,
      height: 900,
      cardBackground: "#F4FAF6",
    },
    url: "https://studio.hammedshotola.com/greengrid",
    status: "live",
    order: 5,
  },
  {
    slug: "skillnest",
    title: "SkillNest",
    description: "Premium e-learning platform",
    mockup: {
      src: "/images/websites/skillnest/mockup.jpg",
      alt: "SkillNest e-learning platform homepage",
      width: 1600,
      height: 900,
      cardBackground: "#FFFAF5",
    },
    url: "https://studio.hammedshotola.com/skillnest",
    status: "live",
    order: 6,
  },
  {
    slug: "eventflow",
    title: "EventFlow",
    description: "Premium event platform",
    mockup: {
      src: "/images/websites/eventflow/mockup.jpg",
      alt: "EventFlow dark purple event platform homepage with glass cards",
      width: 1600,
      height: 900,
      cardBackground: "#0A0908",
    },
    url: "https://studio.hammedshotola.com/eventflow",
    status: "live",
    order: 7,
  },
  {
    slug: "fleetiq",
    title: "FleetIQ",
    description: "Enterprise logistics dashboard",
    mockup: {
      src: "/images/websites/fleetiq/mockup.jpg",
      alt: "FleetIQ fleet overview dashboard with usage chart and dispatch logs",
      width: 1600,
      height: 900,
      cardBackground: "#F7F7F9",
    },
    url: "https://studio.hammedshotola.com/fleetiq",
    status: "live",
    order: 8,
  },
  {
    slug: "synapseflow",
    title: "SynapseFlow",
    description: "AI collaboration workspace",
    mockup: {
      src: "/images/websites/synapseflow/mockup.jpg",
      alt: "SynapseFlow AI workspace landing page with indigo hero and product dashboard",
      width: 1600,
      height: 900,
      cardBackground: "#FAFBFC",
    },
    url: "https://studio.hammedshotola.com/synapseflow",
    status: "live",
    order: 9,
  },
];

export function getAllWebsites(): Website[] {
  return [...websites].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getLiveWebsites(): Website[] {
  return getAllWebsites().filter((site) => site.status === "live");
}
