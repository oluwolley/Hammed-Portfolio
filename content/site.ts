import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Hammed Shotola",
  title: "Product Designer",
  email: "shotolahammed01@gmail.com",
  url: "https://hammedshotola.com",
  intro:
    "I design clear, thoughtful product experiences — from research and strategy through polished UI and developer handoff.",
  social: {
    linkedin: "https://www.linkedin.com/in/shotola/",
  },
  resume: {
    href: "/resume.pdf",
    label: "Download resume (PDF)",
    updatedAt: "2026",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Resume", href: "/#resume" },
    { label: "Contact", href: "/#contact" },
  ],
};
