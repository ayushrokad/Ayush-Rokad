export interface ExperienceEntry {
  company: string;
  shortName: string;
  role: string;
  period: string;
  description: string;
}

export interface ProjectHighlight {
  id: string;
  number: string;
  period: string;
  title: string;
  company: string;
  role: string;
  description: string;
  categories: string[];
  focusAreas?: string;
  confidentialNotice?: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const portfolioData = {
  meta: {
    title: "Ayush Rokad — Product & UI/UX Designer",
    description:
      "Ayush Rokad is a Product and UI/UX Designer based in Surat, shaping thoughtful digital products with clarity and character. 3+ years of experience in mobile apps, web design, and scalable design systems.",
    author: "Ayush Rokad",
    siteUrl: "https://ayushrokad.com",
    keywords: [
      "Ayush Rokad",
      "Product Designer",
      "UI/UX Designer",
      "Design Systems",
      "Mobile App Design",
      "Web Design",
      "Interaction Design",
      "Surat Designer",
    ],
  },
  navigation: {
    brand: "AYUSH ROKAD®",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Highlights", href: "#highlights" },
      { label: "Expertise", href: "#expertise" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Let's talk",
      href: "#contact",
    },
  },
  hero: {
    badge: "DIGITAL PRODUCT DESIGNER",
    locationYear: "SURAT, INDIA · 2026",
    headline: {
      line1: "Designer based in ",
      highlight: "Surat.",
      line2: "Shaping digital products",
      line3: "with clarity and character.",
    },
    subtext:
      "I'm Ayush Rokad, a UI/UX & Product Designer with 3+ years of experience turning complex requirements into thoughtful, intuitive digital experiences.",
    metadata: [
      { label: "LOCATION", value: "Surat, Gujarat, India" },
      { label: "EXPERIENCE", value: "3+ Years" },
      { label: "AVAILABILITY", value: "Open to Work" },
    ],
  },
  about: {
    eyebrow: "01 / ABOUT ME",
    headline: "Good design begins with understanding.",
    paragraphs: [
      "I started my career designing mobile experiences, building a strong foundation in visual design, interaction and interface consistency. My work later evolved into product-focused design, where I took greater ownership of UX flows, features and complete digital experiences.",
      "I enjoy turning complex business requirements into simple, usable experiences and collaborating with founders, product teams and developers to bring ideas to life.",
    ],
    metrics: [
      {
        value: "3+",
        label: "Years of experience",
      },
      {
        value: "150+",
        label: "Small mobile apps designed",
      },
    ] as MetricItem[],
  },
  experience: {
    eyebrow: "02 / EXPERIENCE",
    headline: "Where I've been.",
    entries: [
      {
        company: "Letmegrab E-Commerce Platform Pvt. Ltd.",
        shortName: "Letmegrab",
        role: "UI/UX Designer",
        period: "Dec 2024 — Oct 2026",
        description:
          "Designed and refined mobile and web experiences across a local commerce ecosystem, working on product features, UX flows, prototypes and design-system foundations.",
      },
      {
        company: "Code Infosys",
        shortName: "Code Infosys",
        role: "UI/UX Designer",
        period: "Jul 2023 — Oct 2024",
        description:
          "Designed more than 150 small mobile applications across utility, tutorial, guide and gaming concepts, with a focus on visual quality and interaction design.",
      },
    ] as ExperienceEntry[],
  },
  experienceHighlights: {
    eyebrow: "03 / EXPERIENCE HIGHLIGHTS",
    timelineSpan: "2023 — 2026",
    headline: "A selection of experiences that shaped my work.",
    introduction:
      "Products, platforms and interfaces I've contributed to throughout my design journey.",
    projects: [
      {
        id: "local-commerce-ecosystem",
        number: "01",
        period: "2024 — 2026",
        title: "Local Commerce Ecosystem",
        company: "LETMEGRAB",
        role: "PRODUCT DESIGN",
        description:
          "A multi-sided commerce platform connecting local businesses with customers through shopping, store management and flexible order fulfilment.",
        categories: ["E-commerce", "Mobile", "Product Design", "UX Flows"],
        focusAreas:
          "Seller management · Inventory · Customer shopping · Multi-store checkout · Pickup & delivery",
      },
      {
        id: "mobile-applications-collection",
        number: "02",
        period: "2023 — 2024",
        title: "150+ Mobile Applications",
        company: "CODE INFOSYS",
        role: "UI/UX DESIGN",
        description:
          "A collection of small mobile products across different categories, focused on clear interfaces, visual consistency and interactive experiences.",
        categories: ["Mobile UI", "Utility", "Tutorials", "Gaming", "Interaction"],
        focusAreas:
          "Mobile interfaces · Visual design · Reusable patterns · Basic animations",
      },
      {
        id: "confidential-banking-product",
        number: "03",
        period: "Confidential",
        title: "Confidential Banking Product",
        company: "CONFIDENTIAL",
        role: "UI/UX DESIGN",
        description:
          "UI/UX design contributions to a confidential banking product.",
        categories: ["Banking", "Mobile", "UI/UX"],
        confidentialNotice:
          "Project details intentionally limited due to confidentiality.",
      },
    ] as ProjectHighlight[],
  },
  expertise: {
    eyebrow: "04 / EXPERTISE",
    headline: "What I do",
    items: [
      {
        id: "product-design",
        number: "01",
        title: "Product design",
        description:
          "Thoughtful digital products from early ideas to polished experiences.",
      },
      {
        id: "ui-ux-design",
        number: "02",
        title: "UI/UX design",
        description:
          "Intuitive user journeys and visually consistent interfaces.",
      },
      {
        id: "mobile-app-design",
        number: "03",
        title: "Mobile app design",
        description:
          "Purposeful interfaces designed for real-world mobile use.",
      },
      {
        id: "web-design",
        number: "04",
        title: "Web design",
        description:
          "Responsive experiences that balance usability and visual clarity.",
      },
      {
        id: "design-systems",
        number: "05",
        title: "Design systems",
        description:
          "Reusable components and scalable interface patterns.",
      },
      {
        id: "interaction-design",
        number: "06",
        title: "Interaction design",
        description:
          "Prototypes, motion concepts and meaningful micro-interactions.",
      },
    ] as ExpertiseItem[],
  },
  toolkit: {
    eyebrow: "05 / TOOLKIT",
    headline: "Tools of the trade.",
    subtext:
      "From interface exploration and design systems to interactive prototypes and motion.",
    tools: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Rive",
      "Lottie",
      "Premiere Pro",
    ],
  },
  philosophy: {
    eyebrow: "06 / APPROACH",
    headline: "How I think about design.",
    statement: "“Make the complex feel simple.”",
    body: "My approach starts with understanding the problem, organizing the experience and refining the details. I believe good interfaces should feel intuitive, consistent and purposeful.",
    process: [
      "Understand",
      "Structure",
      "Design",
      "Prototype",
      "Collaborate",
      "Refine",
    ],
  },
  contact: {
    eyebrow: "HAVE SOMETHING IN MIND?",
    headline: "Let's make something meaningful.",
    email: "ayushrokad@gmail.com",
    copyright: "© 2026 Ayush Rokad",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ayushrokad/",
        isExternal: true,
      },
      {
        label: "Resume",
        href: "/resume.pdf",
        isExternal: true,
      },
    ] as SocialLink[],
  },
};
