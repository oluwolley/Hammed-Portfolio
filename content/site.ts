import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Hammed Shotola",
  shortName: "Hammed",
  title: "Product Designer",
  credential: "UK Global Talent",
  email: "hammedthedesigner@gmail.com",
  url: "https://hammedshotola.com",
  avatar: {
    src: "/images/hammed.jpg",
    alt: "Portrait of Hammed Shotola",
    width: 560,
    height: 560,
  },
  intro:
    "I turn ideas into clear flows, prototype and intuitive product that make products easier to use. Product designer who codes with AI.",
  quote: [
    "I turn ideas into clear flows, prototype and intuitive product that make products easier to use.",
    "I'm a Product designer who codes (using AI), we call that vibe coding in this AI era.",
    "Outside work, I love watching football and trying new things out whether is starting another streak on Duolingo, or Ice-skating.",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/hshotola/",
  },
  resume: {
    href: "/Hammed's CV.pdf",
    downloadFileName: "Hammed's CV.pdf",
    label: "Download resume (PDF)",
    updatedAt: "2026",
    available: true,
  },
  nav: [
    { label: "Works", href: "/#work" },
    { label: "Resume", href: "/Hammed's CV.pdf" },
    { label: "Contact", href: "/#contact" },
  ],
};
