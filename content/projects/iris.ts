import type { Project } from "../types";

export const irisProject: Project = {
  slug: "iris",
  title: "Iris - Streamlining back office tools",
  role: "Product Designer",
  impact:
    "Redesigning our back-office tools to align with business needs, eliminate expensive third-party CRM dependencies, and boost customer support efficiency by 80%",
  tagline: "Streamlined the customer support tools to reduce the resolution time by half",
  cover: {
    src: "/images/projects/iris/cover-card.png",
    alt: "IRIS analytics dashboard showing call metrics, CSAT ratings, and user activities",
    width: 4841,
    height: 3222,
  },
  cardCover: {
    src: "/images/projects/iris/cover-card.png",
    alt: "IRIS analytics dashboard showing call metrics, CSAT ratings, and user activities",
    width: 4841,
    height: 3222,
  },
  timeline: "CMS · Web application",
  featured: true,
  order: 3,
  mediaFit: "cover",
  related: ["xend-finance", "design-system"],
  seo: {
    title: "Iris - Streamlining back office tools",
    description:
      "IRIS: streamline the customer support tools to reduce resolution time. CMS | Web application",
  },
  sections: [
    {
      id: "background",
      kind: "overview",
      title: "Background",
      content:
        "Behind every B2C product is a suite of back-office tools that support its operation, ranging from customer support systems that resolve issues and manage communication, to admin dashboards that track key metrics like signup rates, abandonment, and transactions. These tools will also include compliance platforms to verify user eligibility, and sales or marketing systems that sync with the product to deliver promotions and marketing materials.",
    },
    {
      id: "the-problem",
      kind: "problem",
      title: "The Problem",
      content:
        "These tools operate independently and asynchronously, resulting in significant costs for the business, especially when many offer only a single feature, yet charge per user for a full suite of capabilities the business doesn't need. Switching between multiple platforms also disrupts workflow, causing the support team to lose context and prolonging the time it takes to complete tasks efficiently.",
    },
    {
      id: "the-solution",
      kind: "decisions",
      title: "The Solution",
      content:
        "The solution was to redesign the back-office system using the existing tool as a foundation, expanding it to accommodate the needs of multiple teams. The goal was to create a unified platform where each team member could access the specific tools they need to support customers effectively. The new system is modular and configurable based on team roles and responsibilities, while also incorporating role-based access control to ensure proper permission management.",
    },
    {
      id: "my-role",
      kind: "process",
      title: "My Role",
      content:
        "As the lead designer, I engaged with all key stakeholders to understand their context, goals, and behaviours. I defined the overall design direction, created interactive prototypes, and developed research materials to inform and guide the project. Additionally, I produced a design strategy document outlining our vision and principles, ensuring alignment and consistency across all teams.\n\nBeyond design, I was also responsible for:\n\n- Strategic oversight: Defining the project vision, goals, and success metrics.\n- Cross-discipline collaboration: I worked closely with engineers (backend and frontend) to accommodate technical requirements.\n- Stakeholder management: Aligning input from executives and ensuring project alignment.",
    },
    {
      id: "the-impact",
      kind: "metrics",
      title: "The Impact",
      metrics: [
        { label: "Decrease in average handling time", value: "64.5%" },
        { label: "Decrease in cost spent on third-party tools", value: "40%" },
        {
          label: "Increase in operational efficiency by the customer support team",
          value: "52%",
        },
      ],
    },
    {
      id: "research",
      kind: "research",
      title: "Research - Understanding the needs of the key stakeholders",
      content:
        "I conducted usability interviews where users navigated both the old and current wallet screens to complete key tasks. The goal of this research was to understand how support teams carry out their tasks and to gain insights into the roles of other stakeholders involved in monitoring or managing support operations.\n\nKey actions taken:\n\n- Conducted interviews with customer support agents, team leads, product managers (PMs), and operations teams.\n- Observed support teams directly at their workstations to understand their workflows and pain points.\n- Synthesised findings into actionable insights to inform the design process.\n- Developed recommendations and proposed a new user flow that diverges from the fragmented platforms currently used to manage user issues and complaints.",
    },
    {
      id: "design-approach",
      kind: "process",
      title: "Design Approach - Key features",
      content:
        "- Analytics dashboard: Customised analytics tailored to stakeholder needs, providing an overview of customer behaviour, transactions, sign-up numbers, and more.\n- Unified customer view: A comprehensive 360-degree customer profile accessible to all teams, with visibility and data filtered based on team roles and permissions.\n- Email integration: Seamless email management within IRIS, allowing team members to read and respond to emails without leaving the platform.\n- Permissions and role management: Stakeholders can customise user roles and access permissions during onboarding to fit their specific team requirements.\n- App store review integration: Customer support teams can view and respond to app ratings and user comments directly from IRIS.",
    },
    {
      id: "analytics-dashboard",
      kind: "finalUi",
      title: "What did we ship",
      content: "Analytics dashboard: Customised analytics tailored to stakeholder needs",
      images: [
        {
          src: "/images/projects/iris/analytics.webp",
          alt: "Analytics dashboard: Customised analytics tailored to stakeholder needs",
          width: 2000,
          height: 1360,
        },
      ],
    },
    {
      id: "unified-customer-view",
      kind: "finalUi",
      title: "Unified Customer View",
      content:
        "Unified customer view: A comprehensive 360-degree customer profile accessible to all teams",
      images: [
        {
          src: "/images/projects/iris/customer-view.webp",
          alt: "Unified customer view: A comprehensive 360-degree customer profile accessible to all teams",
          width: 2000,
          height: 1375,
        },
      ],
    },
    {
      id: "messaging",
      kind: "finalUi",
      title: "Messaging",
      content: "Messaging: In-app chat with customer, edit chat, upload file, assign chat.",
      images: [
        {
          src: "/images/projects/iris/messaging.webp",
          alt: "Messaging: In-app chat with customer, edit chat, upload file, assign chat.",
          width: 2000,
          height: 1335,
        },
      ],
    },
    {
      id: "email",
      kind: "finalUi",
      title: "Email",
      content: "Email: Send, reply, forward mail, upload document",
      images: [
        {
          src: "/images/projects/iris/email.jpg",
          alt: "Email: Send, reply, forward mail, upload document",
          width: 2000,
          height: 1294,
        },
      ],
    },
    {
      id: "app-review",
      kind: "finalUi",
      title: "App Review",
      content: "App review: iOS and Android review, reply to app store comments.",
      images: [
        {
          src: "/images/projects/iris/app-review.webp",
          alt: "App review: iOS and Android review, reply to app store comments.",
          width: 1999,
          height: 1289,
        },
      ],
    },
    {
      id: "settings",
      kind: "finalUi",
      title: "Settings",
      content: "Settings: Invite member, assign roles, create modules that feed into the systems",
      images: [
        {
          src: "/images/projects/iris/settings.webp",
          alt: "Settings: Invite member, assign roles, create modules that feed into the systems",
          width: 1999,
          height: 1323,
        },
      ],
    },
    {
      id: "usability-testing",
      kind: "iterations",
      title: "Usability testing: Refining the experience",
      content:
        "During prototype testing, I collaborated closely with the compliance, customer support, engineering, and sales & marketing teams. Their feedback resulted in two key improvements:\n\n- Information architecture: The first iteration of the navigation was overwhelming and failed to accommodate all necessary pages effectively. To address this, I conducted a card-sorting session with the team to create more logical groupings. I also introduced a collapsible navigation bar to optimise the experience across different device viewports.\n- Third-party API integration: Integrating with a third-party API required specific validations, such as API keys or passwords for each request. Through collaboration with the development team, I identified this requirement early on and adjusted the onboarding flow to seamlessly incorporate these validation steps.",
    },
    {
      id: "key-learnings",
      kind: "lessons",
      title: "Key Learnings and Takeaways",
      content:
        "Redesigning a complex CRM platform involving multiple stakeholders with tight constraints can be challenging, but I was able to balance needs. The key learnings include:\n\n- Researching: Researching new domains like API integration and permission- and role-based interfaces allowed me to learn and stay informed to design intuitive solutions.\n- Cross-team alignment: Regular sync sessions ensure alignment between product, design, and engineering teams throughout the project.",
    },
  ],
};
