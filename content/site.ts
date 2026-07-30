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
    "Product (UX) Designer turning complex systems into simple, human-centred experiences, with a focus on accessibility, security, and usability in fintech and regulation-heavy products.",
  quote: [
    "Hi, I'm a Product (UX) Designer with a strong focus on turning complex systems into simple, human-centred experiences.",
    "I design digital products that simplify complex systems, I bring clarity, structure, and empathy to every interface.",
    "I care deeply about accessibility, security, and real-world usability, especially in fintech, e-commerce, and regulation-heavy environments.",
    "If it's complex, I make it clear. If it's clunky, I make it work, always with empathy, structure, and intention.",
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
