export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface ProjectHighlight {
  id: string;
  number: string;
  company: string;
  period: string;
  title: string;
  description: string;
  bullets: string[];
  scope: string;
  status: string;
}

export interface SkillItem {
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
    title: "Ayush Rokad | UI/UX & Product Designer in Surat",
    description:
      "UI/UX and product designer in Surat, India. 3+ years designing mobile and web apps, from UX flows and design systems to prototypes. Open to work.",
    author: "Ayush Rokad",
    siteUrl: "https://ayush-rokad.vercel.app",
    canonicalUrl: "https://ayush-rokad.vercel.app/",
  },
  navigation: {
    brand: "AYUSH ROKAD",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Selected Work", href: "#work" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Get in touch",
      href: "#contact",
    },
  },
  hero: {
    eyebrow: "Ayush Rokad · UI/UX & Product Designer",
    headline: {
      line1: "I turn tangled product",
      line2: "requirements into",
      highlight: "clear, easy-to-use experiences.",
    },
    intro:
      "I'm Ayush, a product designer with 3+ years of work on mobile and web products. I shape features, user flows and interfaces, usually in the gap where user needs, business goals and technical limits pull in different directions.",
    ctas: {
      primary: {
        label: "See my work",
        href: "#work",
      },
      secondary: {
        label: "Say hello",
        href: "#contact",
      },
    },
    chips: [
      {
        label: "Experience",
        value: "3+ years",
      },
      {
        label: "Availability",
        value: "Open to work",
        isStatus: true,
      },
      {
        label: "Focus",
        value: "Mobile & web",
      },
      {
        label: "Location",
        value: "Surat, India (remote anywhere)",
      },
    ],
  },
  about: {
    eyebrow: "01 / ABOUT",
    headline: "From first idea to finished interface.",
    paragraphs: [
      "I started out designing mobile apps, which taught me the unglamorous things that make an interface feel right: consistency, small interaction details and shipping on a deadline. At Letmegrab I moved into product design proper, taking on feature thinking, end-to-end UX flows and components built to grow with the product.",
      "I work closely with founders, product teams and developers. I work out what the business needs, raise technical constraints early, and hand over designs that are ready to build.",
    ],
    tagline: "Designed around users, built to scale.",
    metrics: [
      {
        value: "3+",
        label: "Years of experience",
      },
      {
        value: "150+",
        label: "Mobile apps designed",
      },
    ] as MetricItem[],
  },
  experience: {
    eyebrow: "02 / EXPERIENCE",
    headline: "Where I've worked.",
    entries: [
      {
        company: "Letmegrab E-Commerce Platform Pvt. Ltd.",
        role: "UI/UX Designer",
        period: "Dec 2024 – Oct 2026",
        summary:
          "I designed mobile and web experiences for the customer, seller and admin sides of a local commerce platform.",
        bullets: [
          "Owned UX flows and high-fidelity UI for core modules and later updates",
          "Designed inventory, multi-store checkout, seller verification and store operations",
          "Built and maintained the Figma component library the design system grew from",
          "Worked directly with the founder and developers to keep designs practical to build",
        ],
      },
      {
        company: "Code Infosys",
        role: "UI/UX Designer",
        period: "Jul 2023 – Oct 2024",
        summary:
          "I designed small mobile apps across very different concepts, as part of a 15-person design and development team.",
        bullets: [
          "Designed 150+ apps: utilities, tutorials, guides and games",
          "Produced high-fidelity UI, reusable patterns and interactive prototypes",
          "Added simple animations and micro-interactions to lightweight apps and games",
          "Delivered consistent UI on real project deadlines",
        ],
      },
    ] as ExperienceEntry[],
  },
  selectedWork: {
    eyebrow: "03 / SELECTED WORK",
    headline: "Products I've worked on.",
    intro: "A few of the platforms and apps I've helped build.",
    projects: [
      {
        id: "seller-app",
        number: "01",
        title: "Local Commerce Seller App",
        company: "Letmegrab",
        period: "2024–2026",
        description:
          "A seller app that lets local merchants run their whole store from one place: catalog, inventory, orders and customer engagement.",
        bullets: [
          "Redesigned existing seller modules to make them easier to use",
          "Mapped UX flows for catalog, inventory, orders and merchant verification",
          "Added Store Highlights and an Alerts view that surfaces what needs attention",
          "Kept Figma components and prototypes organised as the product grew",
        ],
        scope: "2,000+ screens and modules (approx.)",
        status: "In testing, pre-launch",
      },
      {
        id: "customer-app",
        number: "02",
        title: "Local Commerce Customer App",
        company: "Letmegrab",
        period: "2024–2026",
        description:
          "A shopping app that helps people find and buy from stores near them, built around easy multi-store ordering and flexible fulfilment.",
        bullets: [
          "Shaped the customer journey, from discovering nearby stores to checkout",
          "Designed multi-store checkout so split orders stay clear",
          "Designed in-store pickup and doorstep delivery, chosen per store and per order",
          "Prototyped key flows and documented component states and interactions",
        ],
        scope: "1,800+ screens and modules (approx.)",
        status: "In testing, pre-launch",
      },
      {
        id: "mobile-apps",
        number: "03",
        title: "150+ Mobile Applications",
        company: "Code Infosys",
        period: "2023–2024",
        description:
          "A large set of small apps: utility tools, tutorials, guides and light games.",
        bullets: [
          "Designed clear, accessible interfaces across very different app categories",
          "Built reusable UI patterns that sped up each new app",
          "Added basic animation and micro-interactions to the games",
          "Shipped alongside developers on active release schedules",
        ],
        scope: "150+ apps",
        status: "Shipped and live",
      },
    ] as ProjectHighlight[],
  },
  skills: {
    eyebrow: "04 / SKILLS",
    headline: "What I do best.",
    items: [
      {
        id: "product-ux",
        number: "01",
        title: "Product & UX flows",
        description:
          "User journeys, feature design, wireframes and information architecture for complex requirements.",
      },
      {
        id: "mobile-web-ui",
        number: "02",
        title: "Mobile & web UI",
        description:
          "Production-ready interfaces designed for real phones and real desktops.",
      },
      {
        id: "design-systems",
        number: "03",
        title: "Design systems",
        description:
          "Component libraries, type tokens and interface guidelines in Figma.",
      },
      {
        id: "prototyping",
        number: "04",
        title: "Interactive prototyping",
        description:
          "Clickable prototypes for usability tests, founder reviews and developer handoff.",
      },
      {
        id: "micro-interactions",
        number: "05",
        title: "Micro-interactions & motion",
        description:
          "Subtle animation, state feedback and transitions in Rive, Lottie and Figma.",
      },
      {
        id: "dev-collaboration",
        number: "06",
        title: "Developer collaboration",
        description:
          "Clear component specs and steady communication, so designs adapt to technical limits instead of breaking on them.",
      },
    ] as SkillItem[],
  },
  toolkit: {
    eyebrow: "05 / TOOLKIT",
    headline: "Tools I use.",
    intro: "What I reach for daily, from first sketch to final handoff.",
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
    eyebrow: "06 / HOW I WORK",
    headline: "How I work.",
    statement:
      "“I try to make complicated requirements easy to follow, keep interfaces consistent, and stay close to developers so what I design can actually be built.”",
    body: "For familiar flows I go straight to high-fidelity design. When a problem needs more exploring, I start with wireframes. Either way, the process is practical and iterative.",
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
    eyebrow: "GET IN TOUCH",
    headline: "Got a product or feature that needs designing?",
    subheadline:
      "Open to full-time and part-time roles, remote anywhere or on-site in Surat, Gujarat.",
    email: "ayushrokad@gmail.com",
    helperText: "Click to copy my email.",
    copyright: "© 2026 Ayush Rokad",
    resumeFileName: "ayush-rokad-product-designer-resume.pdf",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ayushrokad/",
        isExternal: true,
      },
      {
        label: "Resume (PDF)",
        href: "/ayush-rokad-product-designer-resume.pdf",
        isExternal: true,
      },
    ] as SocialLink[],
  },
};
