export type HeroPortraitCard = {
  id: string;
  kind: "portrait";
  imageSrc: string;
  imageAlt: string;
};

export type HeroDefinitionCard = {
  id: string;
  kind: "definition";
  /** Matches a highlight key in the about copy */
  highlightKey: "flows" | "prototype" | "affordance" | "code";
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  icon: "flows" | "prototype" | "affordance" | "code";
  iconBackground: string;
  iconForeground: string;
};

export type HeroStackCard = HeroPortraitCard | HeroDefinitionCard;

export type HeroHighlightKey = HeroDefinitionCard["highlightKey"];

export const heroStackCards: HeroStackCard[] = [
  {
    id: "portrait",
    kind: "portrait",
    imageSrc: "/images/hero/portrait-card.jpg",
    imageAlt: "Pencil sketch portrait of Hammed Shotola",
  },
  {
    id: "flows",
    kind: "definition",
    highlightKey: "flows",
    word: "flows",
    phonetic: "[Flohz]",
    partOfSpeech: "noun",
    definition:
      "A visual map showing the path a user takes through a product to complete a task step by step.",
    icon: "flows",
    iconBackground: "#FFE8D6",
    iconForeground: "#E67A2E",
  },
  {
    id: "prototype",
    kind: "definition",
    highlightKey: "prototype",
    word: "pro·to·type",
    phonetic: "[Proh-tuh-tayp]",
    partOfSpeech: "noun",
    definition:
      "An early, testable version of a design which can range from low-fidelity sketches to high-fidelity, clickable simulation of the final product.",
    icon: "prototype",
    iconBackground: "#D8F5E5",
    iconForeground: "#1F9D57",
  },
  {
    id: "affordance",
    kind: "definition",
    highlightKey: "affordance",
    word: "af·for·dance",
    phonetic: "[Uh-Fawr-Duhns]",
    partOfSpeech: "noun",
    definition:
      "A visual or physical cue that suggests how an element should be used (e.g. a button that looks pressable).",
    icon: "affordance",
    iconBackground: "#F3E8FF",
    iconForeground: "#7C3AED",
  },
  {
    id: "code",
    kind: "definition",
    highlightKey: "code",
    word: "code",
    phonetic: "[kohd]",
    partOfSpeech: "noun",
    definition:
      "The logic beneath the interface that transforms ideas into products people can actually use.",
    icon: "code",
    iconBackground: "#DCEBFF",
    iconForeground: "#2F6FED",
  },
];
