import type { ImageRef } from "./types";

export type AboutFact = {
  label: string;
  body: string;
};

export type HighlightedWorkItem = {
  slug: string;
  title: string;
  role: string;
  platform: string;
  /** Finished homepage thumbnail (own background); fills the frame instead of the project cover */
  thumb?: ImageRef;
};

export type SideProject = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  icon: ImageRef;
};

export type WritingItem = {
  id: string;
  title: string;
  date: string;
  href?: string;
};

export type CareerEvent = {
  id: string;
  company: string;
  role: string;
  period: string;
  /** Year marker this card aligns under on the timeline */
  year: string;
  logo?: ImageRef;
};

export type CareerColumn = {
  id: string;
  /** Most recent year this role covers (left on the rail) */
  startYear: string;
  /** Oldest year this role covers (right on the rail) */
  endYear: string;
  events: CareerEvent[];
};

export type PlaygroundItem = {
  id: string;
  alt: string;
  image: ImageRef;
  href?: string;
  background?: string;
  /** Image is a finished thumbnail (own background) and should fill the frame */
  fill?: boolean;
};

export const homeAbout = {
  headline:
    "Hey, I'm currently a design expert at Mecor Intelligence. Previously at Dash, Xend, Youverify and GreatBrands",
  body: "I turn ideas into clear flows, prototype and intuitive product that make products easier to use. I also vibe code",
  portrait: {
    src: "/images/home/profile.png",
    alt: "Portrait of Hammed Shotola",
    width: 1024,
    height: 1024,
  } satisfies ImageRef,
  facts: [
    {
      label: "Role",
      body: "Product designer and vibe coder. I love getting hands dirty in figma and i now enjoy implementing my deign using AI tools too.",
    },
    {
      label: "Focus",
      body: "My main focus is product design & Vibe code, but I also dabble in brand & illustration.",
    },
    {
      label: "Stack",
      body: "Cursor, Claude Code, Codex, Figma, User testing, Miro, Figjam",
    },
  ] satisfies AboutFact[],
};

export const highlightedWork: HighlightedWorkItem[] = [
  {
    slug: "dash",
    title: "DasH Finance Mobile APP",
    role: "Research | Product Design",
    platform: "Mobile APP",
    thumb: {
      src: "/images/home/work/dash.png",
      alt: "Dash app send money and home balance screens on two phones",
      width: 834,
      height: 440,
    },
  },
  {
    slug: "xend-finance",
    title: "Xend Finance",
    role: "Product Design",
    platform: "Mobile APP",
    thumb: {
      src: "/images/home/work/xend.png",
      alt: "Xend Finance app home and send money screens on two phones",
      width: 834,
      height: 440,
    },
  },
  {
    slug: "iris",
    title: "IRIS Dashboard",
    role: "Product Design",
    platform: "Web APP",
    thumb: {
      src: "/images/home/work/iris.png",
      alt: "IRIS dashboard overview screen on a desktop monitor",
      width: 834,
      height: 440,
    },
  },
  {
    slug: "oda-merchant",
    title: "ODA",
    role: "Product Design",
    platform: "Mobile APP",
    thumb: {
      src: "/images/home/work/oda.png",
      alt: "ODA merchant app home and product list screens on two phones",
      width: 3732,
      height: 4096,
    },
  },
];

export const sideProjects: SideProject[] = [
  {
    id: "islam-app",
    title: "The Islam App",
    description: "App that shows prayer direction and prayer times in real time",
    ctaLabel: "Download App",
    icon: {
      src: "/images/home/side-projects/islam.png",
      alt: "",
      width: 72,
      height: 72,
    },
  },
  {
    id: "minimotion",
    title: "Minimotion",
    description: "Animate vectors, object and export as gif or MP4",
    ctaLabel: "Explore Project",
    icon: {
      src: "/images/home/side-projects/minimotion.png",
      alt: "",
      width: 72,
      height: 72,
    },
  },
  {
    id: "clipstack",
    title: "Clipstack",
    description: "Never lose everything you copy, Copy and paste anywhere",
    ctaLabel: "Download on Mac",
    icon: {
      src: "/images/home/side-projects/clipstack.png",
      alt: "",
      width: 72,
      height: 72,
    },
  },
  {
    id: "figma-plugins",
    title: "Figma Plugins",
    description: "Plugins to speed up your design process",
    ctaLabel: "Go to Figma community",
    icon: {
      src: "/images/home/side-projects/figma-plugins.png",
      alt: "",
      width: 72,
      height: 72,
    },
  },
];

export const writings: WritingItem[] = [
  {
    id: "live-now",
    title: "Live now not later",
    date: "Jan 22, 2026",
  },
  {
    id: "friction-to-flow",
    title: "Friction to Flow: A case of Peacock TV",
    date: "Jan 10, 2025",
  },
  {
    id: "travel-link",
    title: "Travel Link: Airline booking website",
    date: "Mar 28, 2020",
  },
  {
    id: "amadeus",
    title: "How to book a flight using Amadeus and such services",
    date: "Oct 11, 2017",
  },
];

export const careerYears = [
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
] as const;

export const careerColumns: CareerColumn[] = [
  {
    id: "mecor",
    startYear: "2026",
    endYear: "2026",
    events: [
      {
        id: "mecor",
        company: "Mecor Intelligence",
        role: "Design Expert",
        period: "2026",
        year: "2026",
        logo: {
          src: "/images/home/career/mecor.png",
          alt: "",
          width: 36,
          height: 36,
        },
      },
    ],
  },
  {
    id: "freelance",
    startYear: "2025",
    endYear: "2024",
    events: [
      {
        id: "freelance",
        company: "Freelance",
        role: "Product Designer",
        period: "2024 - 2026",
        year: "2024",
      },
    ],
  },
  {
    id: "dash",
    startYear: "2023",
    endYear: "2022",
    events: [
      {
        id: "dash",
        company: "Dash Finance",
        role: "Product Designer",
        period: "2022 - 2023",
        year: "2023",
        logo: {
          src: "/images/home/career/dash.png",
          alt: "",
          width: 36,
          height: 36,
        },
      },
    ],
  },
  {
    id: "xend-youverify",
    startYear: "2022",
    endYear: "2021",
    events: [
      {
        id: "xend",
        company: "Xend Finance",
        role: "Product Designer",
        period: "2021 - 2022",
        year: "2021",
        logo: {
          src: "/images/home/career/xend.png",
          alt: "",
          width: 36,
          height: 36,
        },
      },
      {
        id: "youverify",
        company: "Youverify",
        role: "Product Designer",
        period: "2021",
        year: "2021",
        logo: {
          src: "/images/home/career/youverify.png",
          alt: "",
          width: 36,
          height: 36,
        },
      },
    ],
  },
  {
    id: "greatbrands",
    startYear: "2021",
    endYear: "2019",
    events: [
      {
        id: "greatbrands",
        company: "Great brands (BA Distribution)",
        role: "UI/UX designer",
        period: "2019 - 2021",
        year: "2019",
        logo: {
          src: "/images/home/career/greatbrands.png",
          alt: "",
          width: 36,
          height: 36,
        },
      },
    ],
  },
];

/** @deprecated Prefer careerColumns — kept for any leftover imports */
export const careerEvents: CareerEvent[] = careerColumns.flatMap(
  (column) => column.events,
);

export const playgroundItems: PlaygroundItem[] = [
  {
    id: "first-frame",
    alt: "Playground mobile UI experiment",
    fill: true,
    image: {
      src: "/images/home/playground/first-frame.png",
      alt: "Playground mobile UI experiment",
      width: 147,
      height: 122,
    },
  },
  {
    id: "second-frame",
    alt: "Qibla app playground screen",
    fill: true,
    image: {
      src: "/images/home/playground/second-frame.png",
      alt: "Qibla app playground screen",
      width: 147,
      height: 122,
    },
  },
  {
    id: "third-frame",
    alt: "Design mockup playground screen",
    fill: true,
    image: {
      src: "/images/home/playground/third-frame.png",
      alt: "Design mockup playground screen",
      width: 147,
      height: 122,
    },
  },
  {
    id: "fourth-frame",
    alt: "Web dashboard on a laptop mockup",
    fill: true,
    image: {
      src: "/images/home/playground/fourth-frame.png",
      alt: "Web dashboard on a laptop mockup",
      width: 147,
      height: 122,
    },
  },
];
