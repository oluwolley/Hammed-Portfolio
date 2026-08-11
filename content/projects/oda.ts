import type { Project } from "../types";

export const odaProject: Project = {
  slug: "oda-merchant",
  title: "ODA Merchant",
  role: "Founding Product Designer",
  impact:
    "How I designed ODA, a B2B e-commerce platform that empowers stores of all sizes by connecting them with reliable suppliers.",
  tagline: "ODA - Powering local commerce",
  cover: {
    src: "/images/projects/oda/cover.jpg",
    alt: "ODA Merchant app screens showing sign in, home, order tracking, and category selection",
    width: 4124,
    height: 2044,
    cardBackground: "#FFFFFF",
  },
  cardCover: {
    src: "/images/projects/oda/cover.jpg",
    alt: "ODA Merchant app screens showing sign in, home, order tracking, and category selection",
    width: 4124,
    height: 2044,
    cardBackground: "#FFFFFF",
  },
  timeline: "e-Commerce",
  featured: true,
  order: 4,
  mediaFit: "contain",
  related: ["iris", "design-system"],
  seo: {
    title: "ODA Merchant",
    description:
      "ODA Merchant: designing a B2B e-commerce platform that connects merchants with suppliers and riders. e-Commerce",
  },
  sections: [
    {
      id: "background",
      kind: "overview",
      title: "Background",
      content:
        "ODA is a B2B e-commerce platform that empowers stores of all sizes by connecting them with reliable suppliers. The product serves a network of more than 60,000 merchants and 6,000+ riders, with fulfilment handled through ODA's rider network.",
    },
    {
      id: "the-problem",
      kind: "problem",
      title: "The Problem",
      content:
        "The business faced challenges distributing inventory efficiently across its network. Merchants often struggled to access needed stock, leading them to source from other merchants through fragmented and inefficient processes.\n\nThe challenge was to make it easier for merchants to access and transfer inventory with ODA Merchant while using ODA's rider network to fulfil deliveries seamlessly.",
    },
    {
      id: "my-role",
      kind: "process",
      title: "My Role",
      content:
        "I was responsible for understanding the relationship between merchants and riders and identifying opportunities to improve the fulfilment experience.\n\nI spoke with merchants to understand their ordering behaviours, inventory needs, and challenges across different categories. I also engaged with riders to understand their existing delivery processes and the challenges they faced.\n\nUsing these insights, I explored how technology could better connect merchants with riders and create a more seamless, efficient fulfilment experience.",
    },
    {
      id: "the-impact",
      kind: "metrics",
      title: "The Impact",
      metrics: [
        { label: "Merchant monthly signups", value: "30%" },
        { label: "Product views per month", value: "18,000" },
        { label: "Monthly transactions", value: "31%" },
      ],
    },
    {
      id: "understanding-our-user",
      kind: "research",
      title: "Understanding our user",
      content:
        "To understand the needs of both merchants and riders, I conducted merchant and rider interviews and visited a merchant in person to observe how they operate their business. I wanted to understand how merchants currently order and manage inventory, as well as how riders receive, accept, and fulfil deliveries.\n\nKey findings — merchants:\n\n- 86% use Android devices, making Android a key consideration for the experience.\n- B2B ordering is quantity-driven, with merchants typically ordering larger quantities than a typical B2C customer.\n- Merchants prefer to see only relevant product categories rather than being overwhelmed by products they don't sell.\n- They expect a fast, simple ordering experience: select what they need and place an order with minimal steps.\n\nKey findings — riders:\n\n- Riders want the flexibility to accept or reject delivery requests.\n- They want to batch multiple orders when destinations are within a similar proximity.\n- They need clear visibility of order quantities before accepting a delivery.\n- Riders want to confirm the order with the merchant at pickup to reduce errors and potential disputes.",
    },
    {
      id: "onboarding",
      kind: "finalUi",
      title: "What did I ship? Onboarding",
      content:
        "We were introducing a new way for merchants to shop and a simpler way for riders to receive and fulfil orders. Because these workflows were different from what users might already be familiar with, it was important to help both merchants and riders understand how the platform works from the moment they first open the app.\n\nTo achieve this, we designed a simple onboarding flow that introduces users to the key features and explains what they can expect when using the app. The goal was to make the experience easy to understand, reduce uncertainty, and help users confidently get started.",
      images: [
        {
          src: "/images/projects/oda/onboarding.jpg",
          alt: "ODA onboarding screens for merchants and riders, including role selection",
          width: 2404,
          height: 1110,
        },
      ],
    },
    {
      id: "challenging-the-assumption",
      kind: "decisions",
      title: "Challenging the initial assumption",
      content:
        "We initially assumed that one app could serve both merchants and riders. However, during a stakeholder workshop, the development team highlighted that combining both experiences could increase app size, affect performance, and introduce unnecessary features for each user group.\n\nThis feedback challenged our initial direction, so I went back and redesigned the experience around two separate apps — one for merchants and one for riders. This led to the creation of ODA Merchant and ODA Riders, each focused on the specific needs and workflows of its users.\n\nThis reinforced the importance of involving technical stakeholders early to ensure design decisions are scalable, performant, and user-focused.",
    },
    {
      id: "oda-merchant",
      kind: "finalUi",
      title: "ODA Merchant",
      images: [
        {
          src: "/images/projects/oda/merchant.jpg",
          alt: "ODA Merchant app screens for browsing products, managing orders, and checkout",
          width: 2400,
          height: 1110,
        },
      ],
    },
    {
      id: "oda-rider",
      kind: "finalUi",
      title: "ODA Rider",
      images: [
        {
          src: "/images/projects/oda/rider.jpg",
          alt: "ODA Rider app screens for accepting deliveries, viewing order quantities, and pickup confirmation",
          width: 2400,
          height: 1110,
        },
      ],
    },
    {
      id: "personalised-experience",
      kind: "finalUi",
      title: "Personalised merchant experience",
      content:
        "One of the key challenges during merchant onboarding was creating a personalised experience without overwhelming users with irrelevant product categories. Since the platform serves B2B merchants across different industries, a food retailer, for example, shouldn't have to navigate through electronics or other categories that aren't relevant to their business.\n\nTo solve this, we introduced category selection during onboarding, allowing merchants to choose the categories most relevant to their business. Their selections then shape the products and content they see across the platform.",
      images: [
        {
          src: "/images/projects/oda/personalise-row.jpg",
          alt: "Merchant onboarding flow with signup, store details, category selection, and payment",
          width: 3200,
          height: 1286,
        },
      ],
    },
    {
      id: "home-and-search",
      kind: "finalUi",
      title: "Home and search",
      content:
        "Unlike B2C shoppers, merchants often know exactly what they need and want to complete purchases quickly. We designed the home experience around relevance, speed, and visibility.\n\nI introduced a discounted products section to promote products the parent distribution company wanted to sell, balancing merchant relevance with commercial goals. Since B2B merchants often search for specific products rather than browse, we made search highly prominent to help them find products and complete orders faster. Merchants can easily view their order status and track deliveries, giving them visibility throughout the fulfilment journey.",
      images: [
        {
          src: "/images/projects/oda/home-search.jpg",
          alt: "ODA Merchant home, shop, and cart screens designed for fast B2B ordering",
          width: 2400,
          height: 1110,
        },
      ],
    },
    {
      id: "other-screens",
      kind: "finalUi",
      title: "Order details and category management",
      content:
        "I designed a dedicated order details page to give merchants real-time visibility into their products, including acceptance status, current location, and delivery progress. I also introduced a category management feature, allowing merchants to customise their feed and discover more relevant products. Together, these features give merchants greater visibility, control, and personalisation throughout their experience.",
      images: [
        {
          src: "/images/projects/oda/other.jpg",
          alt: "ODA Merchant order details and category management screens",
          width: 2400,
          height: 1110,
        },
      ],
    },
    {
      id: "reflection",
      kind: "lessons",
      title: "Reflection",
      content:
        "This project taught me that designing for local commerce starts with understanding context. B2B experiences can be very different from B2C, particularly when designing for merchants with varying levels of digital confidence.\n\n- Research before designing: Understanding merchants' daily workflows, behaviours, and constraints was essential to creating an experience that felt simple and efficient rather than overly complex.\n- The solution isn't always an app: We learned that a mobile app alone wouldn't meet every merchant's needs. This led us to introduce a USSD experience, allowing merchants to place orders directly from their phones, even without mobile data.\n- Design around real-world constraints: Limited access to mobile data became one of our biggest design considerations. We focused on making the product lightweight, fast, and data-efficient, ensuring merchants could use it reliably regardless of their connectivity.",
    },
  ],
};
