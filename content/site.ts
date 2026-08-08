import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Hammed Shotola",
  shortName: "Hammed S",
  title: "Product Designer",
  credential: "UK Global Talent",
  email: "shotolahammed01@gmail.com",
  url: "https://hammedshotola.com",
  avatar: {
    src: "/images/hammed.jpg",
    alt: "Portrait of Hammed Shotola",
    width: 560,
    height: 560,
  },
  intro:
    "Product Designer turning complex systems into simple, human-centred experiences, with a focus on accessibility, security, and usability in fintech and regulation-heavy products.",
  quote: [
    "Hi, I'm a Product Designer with experience building scalable digital products for both mobile and web platforms. I have a unique foundation in customer advocacy.",
    "I design digital products that simplify complex systems. I bring clarity, structure, and empathy to every interface.",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/shammed/",
  },
  resume: {
    href: "/resume.pdf",
    label: "Download resume (PDF)",
    updatedAt: "2026",
    available: true,
  },
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Studio", href: "/websites" },
    { label: "Resume", href: "/#resume" },
    { label: "Contact", href: "/#contact" },
  ],
};
