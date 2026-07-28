import type { Project } from "../types";

export const dashProject: Project = {
  slug: "dash",
  title: "Designing Dash Remittance App",
  role: "Lead Product Designer",
  impact:
    "How we expand the product offering of dash in new market by designing a product that foster engagement.",
  tagline:
    "Expanded the product offering of dash in new market by designing a product that foster engagement",
  cover: {
    src: "/images/projects/dash/cover.webp",
    alt: "Image Showing the fully designed Interface of dash app",
    width: 3840,
    height: 2175,
    cardBackground: "#EAF6F1",
  },
  cardCover: {
    src: "/images/projects/dash/cover-card.jpg",
    alt: "Dash remittance app on two phones showing balance, transactions, and send flow",
    width: 1024,
    height: 892,
    cardBackground: "#FFFFFF",
  },
  timeline: "Fintech · Bank · Remittance",
  featured: true,
  order: 1,
  related: ["xend-finance", "iris"],
  seo: {
    title: "Designing Dash Remittance App",
    description:
      "Dash App Increasing the user engagement of a remittance App by 23%. - Fintech | Bank | Remittance",
  },
  sections: [
    {
      id: "background",
      kind: "overview",
      title: "Background",
      content:
        "Dash, in an attempt to expand into other markets, discovered that the UK has the largest number of migrants due to the need for skilled workers. As we ventured into this market, we acknowledged the necessity of tackling fresh challenges and delivering customised services that surpass our current offerings.\n\nWe pinpointed a prevalent issue encountered by immigrants in the UK: the complexity and challenges associated with cross-border transfers.",
    },
    {
      id: "my-role",
      kind: "process",
      title: "My Role",
      content:
        "I led the design of Dash Remittance app, working closely with designers, engineers, and product managers. My focus was to understand the business goals and understand the user pain point and behaviours design the end-to-end visual design.",
    },
    {
      id: "the-impact",
      kind: "metrics",
      title: "The Impact",
      metrics: [
        { label: "User acquisition in the first 3 months", value: "48,330" },
        { label: "Increase in user engagement every month", value: "23%" },
        {
          label: "Task completion on every transaction initiated by customers every month",
          value: "89%",
        },
      ],
    },
    {
      id: "why-is-this-a-problem",
      kind: "problem",
      title: "Why is this a Problem",
      content:
        "According to Migration Observatory, Net Migration Hits 824,000 in 2022, 60 percentage of these Immigrants migrated from underserved countries. Sending money back home to either family or personal use became stressful in-efficient, unreliable, and broken. Dash saw an opportunity and decided to solve this problem associated with International Remittance.\n\nUsers faced multiple challenges with existing remittance services which include\n\n- High fees and poor exchange rates\n- Lack of trust and security concerns\n- Complicated user flows\n- Limited cash pick-up option\n- No real-time tracking",
    },
    {
      id: "how-do-our-user-feel",
      kind: "research",
      title: "How do our user feel?",
      content:
        "Working together with the PMS, and Key stakeholders, I interview users and Survey was sent out with two objectives in mind:\n\n- Understand the context, pain points, behaviour of diaspora's in the UK using International money transfer products to send funds to abroad.\n- Understand their priorities while choosing a remittance app.",
    },
    {
      id: "key-findings",
      kind: "insights",
      title: "Key Findings",
      content:
        "- 73% would switch providers due to lack of security\n- 67% lose money due to poor exchange rates\n- 54% prioritise low fees and fast delivery\n- Real-time tracking and flexible delivery options were high priorities",
    },
    {
      id: "design-approach",
      kind: "process",
      title: "Design Approach",
      content:
        "Before diving into design i set up some How might we Questions that address the key problem we are solving:\n\n- How might we make the onboarding seamless and frictionless for users\n- How might we reduce the waiting period for both sender and receiver\n- How might we communicate the exchange rate\n- How might we make the send money experience seamless.\n- How might we make the app secure.",
    },
    {
      id: "frictionless-onboarding",
      kind: "finalUi",
      title: "What did we ship",
      content:
        "Frictionless onboarding that is compliant with AML and KYC Policy\n\nTo make onboarding easy and smooth while staying compliant with AML and KYC rules, we need to balance business needs with a good user experience. I designed a simplified process that uses a third-party API to verify users, which cuts down the number of steps they need to take.",
      images: [
        {
          src: "/images/projects/dash/onboarding-1.webp",
          alt: "Image Showing the fully the onbairding screens of dash app",
          width: 3840,
          height: 2175,
        },
        {
          src: "/images/projects/dash/onboarding-2.webp",
          alt: "Image Showing the fully the onbairding screens of dash app",
          width: 3840,
          height: 2235,
        },
      ],
    },
    {
      id: "designing-for-trust",
      kind: "decisions",
      title: "Designing for trust",
      content:
        "Designing for trust means clearly showing users the exchange rates and any extra fees at each step, without making it too complicated. I also redesigned the currency conversion process to make it easier for users to convert money from one currency to another",
      images: [
        {
          src: "/images/projects/dash/send-1.webp",
          alt: "Image Showing the fully the Send money screens of dash app",
          width: 3840,
          height: 2466,
        },
        {
          src: "/images/projects/dash/send-2.webp",
          alt: "Image Showing the fully the Send money screens of dash app",
          width: 3840,
          height: 2556,
        },
      ],
    },
    {
      id: "how-did-we-do",
      kind: "outcome",
      title: "How did we do",
      content:
        "This design led to Instant success\n\n- Over 48,000 new users joined the Dash platform, helping to boost user growth across Dash's ecosystem and in the markets where Dash already operates\n- 23% increase in user engagement monthly on dash remittance app\n- 89% Task completion on every transaction that is initiated by Customers every month",
    },
    {
      id: "key-learnings",
      kind: "lessons",
      title: "Key Learnings and Takeaways",
      content:
        "- Build for adoption: Building the MVP is just the first step make sure to optimise it for maximum user adoption afterward.\n- Cross - Functional Collaboration: Collaborating with both direct and indirect stakeholders makes me understand that Crafting seamless user experience especially in fintech space must align with the regulatory requirements\n- Feedback is Key: I gained insights into how early feedback from user testing can inform the design process.",
    },
  ],
};
