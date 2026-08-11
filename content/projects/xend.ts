import type { Project } from "../types";

export const xendProject: Project = {
  slug: "xend-finance",
  title: "Xend Finance - A Cryptocurrency Bank",
  role: "Product Designer",
  impact:
    "How we increased user acquisition through the redesign of the Xend Finance mobile app",
  tagline: "Drove and increased user acquisition through the redesign of the Xend mobile app",
  cover: {
    src: "/images/projects/xend/cover.webp",
    alt: "Image showing the screens of the Xend app",
    width: 1903,
    height: 1052,
    cardBackground: "#EEF2F7",
  },
  cardCover: {
    src: "/images/projects/xend/cover-card.jpg",
    alt: "Xend Finance app on two phones showing account balance and send money flow",
    width: 960,
    height: 836,
    cardBackground: "#FFFFFF",
  },
  timeline: "Banking · Crypto · Savings",
  featured: true,
  order: 2,
  related: ["dash", "iris"],
  website: "https://apps.apple.com/us/app/xend-finance-wallet/id1587050825",
  websiteLabel: "Download app",
  seo: {
    title: "Xend Finance - A Cryptocurrency Bank",
    description:
      "Xend: driving user acquisition through redesign of the Xend mobile app. Banking | Crypto | Savings",
  },
  sections: [
    {
      id: "background",
      kind: "overview",
      title: "Background",
      content:
        "Xend Finance is a global crypto platform with an open Web3 infrastructure. Xend Finance is using the power of decentralised finance (DeFi) to build a digital bank. Xend aimed to evolve from a simple wallet app with over 500,000 users into a full digital bank powered by crypto.",
    },
    {
      id: "my-role",
      kind: "process",
      title: "My Role",
      content:
        "As part of the core team, I helped redesign their mobile platforms to solve user pain points and deliver a smoother experience. My role involved reviewing the current design and working closely with the team to understand any technical limitations. The goal was to create a new interface that solves the problem while taking the existing codebase into account, avoiding a complete backend infrastructure overhaul due to our tight timeline.",
    },
    {
      id: "the-impact",
      kind: "metrics",
      title: "The Impact",
      metrics: [
        { label: "Increase in monthly sign-ups compared to the previous design", value: "29%" },
        { label: "Reduction in failed transactions", value: "89%" },
        { label: "Reduction in customer support tickets", value: "30%" },
      ],
    },
    {
      id: "understanding-the-problem",
      kind: "problem",
      title: "Understanding the Problem",
      content:
        "To understand the reason why we were redesigning the existing platform, I spoke with the various stakeholders and below are the challenges I was able to uncover.\n\nThe engineering team: The team needed a redesign that maintained the existing code architecture due to limited time and increasing code complexity.\n\nThe business stakeholders: This team prioritised timely delivery without compromising requirements, but the heavy engineering workload and frequent requests created bottlenecks that affected turnaround time.\n\nData from analytics tools: This shows that the key business issue is the \"lengthy process,\" which accounts for 26.2% of support tickets. Analytics reveal that 27% of users drop off during onboarding and 18% abandon the app during the funding process.",
    },
    {
      id: "how-do-our-user-feel",
      kind: "research",
      title: "How do our users feel?",
      content:
        "I conducted usability interviews where users navigated both the old and current wallet screens to complete key tasks. The goal was to assess task completion and identify areas of difficulty through observation.",
    },
    {
      id: "user-quotes",
      kind: "insights",
      title: "User Quotes",
      content:
        "\"Why do I have to type my bank name? Why is it not loading the bank by default when I enter my account number?\"\n\n\"On this page there are so many things to do. I find it difficult to easily understand all these actions. I just want to fund my account.\"\n\n\"Why is this signup process lengthy? Do I have to fill all this to use this app?\"",
    },
    {
      id: "design-approach",
      kind: "process",
      title: "Design Approach",
      content:
        "Before diving into design, I proposed solutions on how to achieve this redesign and collaborated with PMs to set up KPIs to measure the success of this redesign.\n\nThe goals of the project include:\n\n- Design a refresh of the current app that is intuitive and easy to sign up for.\n- A seamless verification process that doesn't interfere with app usage.\n- An app that enables users to complete basic tasks with ease and without feeling overwhelmed.\n- Enhance the user experience by enabling users to perform tasks and increase the task completion rate.",
    },
    {
      id: "multi-stage-onboarding",
      kind: "finalUi",
      title: "What did we ship",
      content:
        "Multi-stage onboarding and verification\n\nOne of the key pieces of feedback we received during design workshops and user interviews was that the signup and onboarding process felt too lengthy. To address this, I streamlined the flow into a multi-step process separating signup from verification. Clear taglines and helpful microcopy guided users through the experience, allowing quick registration without immediate identity verification. This approach ultimately reduced drop-off rates and improved user acquisition.",
      images: [
        {
          src: "/images/projects/xend/before.webp",
          alt: "Image showing the screens designed before the redesign",
          width: 1999,
          height: 995,
        },
        {
          src: "/images/projects/xend/after.webp",
          alt: "Image showing the screens designed after the redesign",
          width: 1829,
          height: 995,
        },
      ],
    },
    {
      id: "new-verification",
      kind: "accessibility",
      title: "New Verification",
      content:
        "The banking and fintech sector operates under strict regulatory requirements. To ensure compliance with federal laws, anti-money laundering (AML), and know your customer (KYC) regulations, the app implements a simplified verification process. This approach balances regulatory needs with a smooth user experience, gathering essential information without creating unnecessary friction.",
      images: [
        {
          src: "/images/projects/xend/verification.webp",
          alt: "Image showing the verification flows of the Xend app",
          width: 1715,
          height: 1716,
        },
      ],
    },
    {
      id: "services",
      kind: "decisions",
      title: "Services",
      content:
        "We expanded our service offerings by partnering with multiple service providers, enabling users to conveniently pay for a variety of services including cable, airtime, data, and more directly within the app. Additionally, we integrated an in-app chat feature that was absent from the previous design, enhancing user communication and accessibility.",
      images: [
        {
          src: "/images/projects/xend/services.webp",
          alt: "Image showing other service screens of the Xend app",
          width: 1942,
          height: 1269,
        },
      ],
    },
    {
      id: "how-did-we-do",
      kind: "outcome",
      title: "How did we do",
      content:
        "The product's success was evaluated using predefined metrics established at the project's inception. We conducted a comprehensive comparison against the initial UX audit and goals:\n\n- 29% increase in new sign-ups, increasing customer acquisition\n- 89% reduction in failed transactions\n- Reduced customer support workload by reducing support tickets by 30%\n- 41% decrease in drop-off rate during onboarding\n- Improved task completion across all core flows",
    },
    {
      id: "key-learnings",
      kind: "lessons",
      title: "Key Learnings and Takeaways",
      content:
        "- UX improvement: Small UX improvements can drive big adoption gains, even without significant changes in the backend code.\n- Collaboration: Early collaboration with developers helped balance design vision and technical constraints.\n- Feedback is key: Designing for Web3 requires simplification without compromising security.",
    },
  ],
};
