import type { Project } from "../types";

export const domeProject: Project = {
  slug: "design-system",
  title: "DOME - Scalable Design System",
  role: "Lead Product Designer",
  impact:
    "How we create a scalable design system which reduces the design - development friction by 32%",
  tagline: "Designed scalable design system which reduce design development friction",
  cover: {
    src: "/images/projects/dome/cover.webp",
    alt: "Image showing the Design system at Zome",
    width: 2000,
    height: 1743,
    cardBackground: "#F5F5F5",
  },
  timeline: "Design systems",
  featured: true,
  order: 4,
  mediaFit: "cover",
  related: ["iris", "xend-finance"],
  seo: {
    title: "DOME - Scalable Design System",
    description:
      "Dome - How I create a scalable design system at Zome which reduces the design - development by 32% - Design systems",
  },
  sections: [
    {
      id: "background",
      kind: "overview",
      title: "Background",
      content:
        "Over time, we identified inconsistencies across our projects from UI patterns to design decisions, which led to longer design cycles, duplicated efforts, and a lack of cohesion in user experiences. Without clear guidelines or a unified structure, our design environment had become fragmented and inconsistent. Accessibility standards were often overlooked, and there was no single source of truth to anchor decisions.\n\nThe product team had essentially built a Figma file packed with legacy components and different colour styles. But to deliver impact across diverse projects and platforms, what we truly needed was a lightweight, flexible backpack, something agile enough that it is adaptable.\n\nTo address this, I led the creation of a centralised, scalable Design System to unify our workflow, increase efficiency, and improve collaboration across design and development teams.",
    },
    {
      id: "the-problem",
      kind: "problem",
      title: "The Problem",
      content:
        "Despite working on several products, our internal design process suffered from:\n\n- Inconsistent UI components across project\n- Lack of reusable assets, leading to duplicated effort\n- Poor handoff between design and development\n- No shared documentation for standards or best practices\n\nThese gaps slowed us down and affected the quality and scalability of our digital products.",
    },
    {
      id: "research-and-discovery",
      kind: "research",
      title: "Research and Discovery",
      content:
        "We kicked off with a discovery sprint to understand pain points:\n\n- Designer Interviews: Highlighted inefficiencies with repeated component creation\n- Developer Feedback: Noted inconsistencies in handoff specs and front-end patterns\n- Audit: We audited 6+ past design files, spotting multiple versions of similar buttons, modals, and grids",
    },
    {
      id: "key-findings",
      kind: "insights",
      title: "Key Findings",
      content:
        "- Every team created their own UI components, wasting time\n- Developers rebuilt similar patterns repeatedly\n- No version control or source of truth existed\n- Onboarding new team members took longer than necessary",
    },
    {
      id: "the-impact",
      kind: "metrics",
      title: "The Impact",
      metrics: [
        { label: "Faster design cycles due to reusable components", value: "30%" },
        {
          label: "Reduction in design development friction with shared Figma library + documentation",
          value: "32%",
        },
        { label: "Less time to onboard new designers", value: "50%" },
      ],
      content:
        "Consistent UI across projects, improving brand perception.",
    },
    {
      id: "approach-solution",
      kind: "process",
      title: "Approach - Solution",
      content:
        "We adopted an Atomic Design methodology and broke down our system into:\n\n- Foundations: Colors, Typography, Grid, Icons\n- Components: Buttons, Forms, Modals, Cards, etc.\n- Templates: Layouts for dashboards, listings, detail pages\n- We used Figma as our source of truth, ensuring shared styles, components, and libraries.",
    },
    {
      id: "colour-palette",
      kind: "finalUi",
      title: "What did we ship",
      content: "Branded colour palette: Defining the different overlapping layers and colour hierarchy",
      images: [
        {
          src: "/images/projects/dome/colors.webp",
          alt: "Branded colour palette: Defining the different overlapping layers and colour hierarchy",
          width: 2000,
          height: 1062,
        },
      ],
    },
    {
      id: "buttons",
      kind: "finalUi",
      title: "Buttons",
      content:
        "A small set of buttons was enough to meet our current design needs each thoughtfully built with all the necessary nested variants",
      images: [
        {
          src: "/images/projects/dome/buttons.webp",
          alt: "A small set of buttons was enough to meet our current design needs each thoughtfully built with all the necessary nested variants",
          width: 2000,
          height: 1162,
        },
      ],
    },
    {
      id: "typography",
      kind: "finalUi",
      title: "Typography",
      content: "Typography properly space with enough line height",
      images: [
        {
          src: "/images/projects/dome/typography.webp",
          alt: "Typography properly space with enough line height",
          width: 2000,
          height: 2324,
        },
      ],
    },
    {
      id: "spacing",
      kind: "finalUi",
      title: "Spacing",
      content: "8px spacing scale to create more consistent and responsive layouts",
      images: [
        {
          src: "/images/projects/dome/spacing.webp",
          alt: "8px spacing scale to create more consistent and responsive layouts",
          width: 2000,
          height: 2324,
        },
      ],
    },
    {
      id: "next-steps",
      kind: "nextSteps",
      title: "Next Steps",
      content:
        "- Continuous accessibility checks for all components\n- Integrate the system into our client proposals as part of delivery\n- Evolve system based on feedback and new projects\n- Automate sync between Figma and Storybook using plugins",
    },
    {
      id: "key-learnings",
      kind: "lessons",
      title: "Key Learnings and Takeaways",
      content:
        "Creating a Design System wasn't just about organising components, it was about enabling better collaboration, reducing waste, and setting a scalable foundation for future growth. It became a tool for alignment, not just aesthetics.\n\n- Design Systems are not one-size-fits-all they must grow with your team\n- Early collaboration with developers is crucial to avoid design-debt\n- Clear documentation is as important as beautiful components\n- A good system enables creativity, not restricts it",
    },
  ],
};
