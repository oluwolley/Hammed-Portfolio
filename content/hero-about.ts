import type { HeroHighlightKey } from "./hero-cards";

export type AboutTextPart = {
  text: string;
  /** When set, this span highlights while the matching card is active */
  highlight?: HeroHighlightKey;
};

export type AboutParagraph = {
  parts: AboutTextPart[];
};

/** About copy with highlightable terms tied to hero definition cards */
export const heroAbout: AboutParagraph[] = [
  {
    parts: [
      { text: "I turn ideas into clear " },
      { text: "flows", highlight: "flows" },
      { text: ", " },
      { text: "prototype", highlight: "prototype" },
      { text: " and intuitive " },
      { text: "affordance", highlight: "affordance" },
      { text: " that make products easier to use." },
    ],
  },
  {
    parts: [
      { text: "I'm a Product designer who " },
      { text: "codes", highlight: "code" },
      {
        text: " (using AI), we call that vibe coding in this AI era.",
      },
    ],
  },
  {
    parts: [
      {
        text: "Outside work, I love watching football and trying new things out whether is starting another streak on Duolingo, or Ice-skating.",
      },
    ],
  },
];
