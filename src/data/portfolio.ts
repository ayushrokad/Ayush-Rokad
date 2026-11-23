export interface ExperienceEntry {
  company: string;
  shortName: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ProjectHighlight {
  id: string;
  number: string;
  tag: string;
  company: string;
  period: string;
  title: string;
  discipline: string;
  description: string;
  responsibilities: string[];
  scope: {
    metric: string;
    label: string;
    detail: string;
  };
  status: string;
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
    title: "Ayush Rokad — UI/UX & Product Designer",
    description:
      "Ayush Rokad is a UI/UX & Product Designer with 3+ years of experience designing mobile and web products. Experienced in UX flows, high-fidelity UI, design systems, and prototyping.",
    author: "Ayush Rokad",
    siteUrl: "https://ayushrokad.com",
    keywords: [
      "Ayush Rokad",
      "Product Designer",
      "UI/UX Designer",
      "Mobile App Design",
      "Design Systems",
      "Prototyping",
      "Surat Designer",
    ],
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
    badge: "UI/UX & PRODUCT DESIGNER",
    availabilityBadge: "AVAILABLE FOR OPPORTUNITIES",
    headline: {
      line1: "I turn complex product",
      line2: "requirements into",
      highlight: "clear digital experiences.",
    },
    subtext:
      "I'm Ayush Rokad. With 3+ years of experience across mobile and web products, I shape product features, user flows and interfaces — bringing user needs, business goals and technical realities together.",
    ctas: {
      primary: {
        label: "Explore my experience",
        href: "#work",
      },
      secondary: {
        label: "Let's talk",
        href: "#contact",
      },
    },
    proofPoints: [
      {
        value: "3+",
        label: "Years of experience",
      },
      {
        value: "Mobile & Web",
        label: "Product experience",
      },
      {
        value: "Open",
        label: "Full-time & part-time",
        isStatus: true,
      },
    ],
  },
  about: {
    eyebrow: "01 / ABOUT",
    headline: "Design digital products from idea to interface.",
    paragraphs: [
      "I started my design career working on mobile applications, building hands-on experience in visual design, interface consistency and interaction details. At Letmegrab, my role expanded into product-focused design, taking greater ownership of feature thinking, complete UX flows and scalable components.",
      "I work comfortably alongside founders, product teams and developers to understand business requirements, resolve technical constraints and deliver polished digital experiences.",
    ],
    metrics: [
      {
        value: "3+",
        label: "Years of experience",
      },
      {
        value: "150+",
        label: "Mobile applications designed",
      },
    ] as MetricItem[],
  },
  experience: {
    eyebrow: "02 / EXPERIENCE",
    headline: "Work history.",
    entries: [
      {
        company: "Letmegrab E-Commerce Platform Pvt. Ltd.",
        shortName: "Letmegrab",
        role: "UI/UX Designer",
        period: "Dec 2024 — Oct 2026",
        description:
          "Designed mobile and web experiences across Customer, Seller and Admin platforms in a local commerce ecosystem.",
        highlights: [
          "Owned UX flows and high-fidelity UI for core product modules and updates",
          "Worked on inventory, multi-store checkout, seller verification and store operations",
          "Maintained structured Figma components and design-system foundations",
          "Collaborated directly with the founder and developers to balance UX with technical feasibility",
        ],
      },
      {
        company: "Code Infosys",
        shortName: "Code Infosys",
        role: "UI/UX Designer",
        period: "Jul 2023 — Oct 2024",
        description:
          "Designed small mobile applications across diverse product concepts in a 15-person design and development team.",
        highlights: [
          "Designed 150+ small mobile applications spanning utility, tutorial, guide and gaming concepts",
          "Created high-fidelity UI, reusable interface patterns and interactive prototypes",
          "Built basic animations and micro-interactions for lightweight mobile experiences",
          "Delivered rapid, consistent UI execution under real project timelines",
        ],
      },
    ] as ExperienceEntry[],
  },
  experienceHighlights: {
    eyebrow: "03 / SELECTED WORK",
    headline: "Key product experiences.",
    introduction:
      "A focused summary of products and platforms I've contributed to throughout my career.",
    projects: [
      {
        id: "seller-app",
        number: "01",
        tag: "SELLER EXPERIENCE",
        company: "LETMEGRAB",
        period: "2024 — 2026",
        discipline: "E-COMMERCE · MOBILE · PRODUCT DESIGN",
        title: "Local Commerce Seller App",
        description:
          "A comprehensive seller platform for local merchants to manage their digital store, inventory, orders and customer engagement in one connected experience.",
        responsibilities: [
          "Redesigned and modernized existing seller modules for improved usability",
          "Designed UX flows for product catalog, inventory, orders and merchant verification",
          "Created Store Highlights and an Alerts experience for attention-required items",
          "Maintained organized Figma components and interactive prototypes",
        ],
        scope: {
          metric: "2,000+",
          label: "Approx. screens / modules",
          detail: "Across the complete seller product ecosystem",
        },
        status: "Testing / Pre-launch",
      },
      {
        id: "customer-app",
        number: "02",
        tag: "CUSTOMER EXPERIENCE",
        company: "LETMEGRAB",
        period: "2024 — 2026",
        discipline: "E-COMMERCE · MOBILE · UX / PRODUCT DESIGN",
        title: "Local Commerce Customer App",
        description:
          "A shopping experience helping customers discover and purchase from nearby local stores, with a focus on simplifying multi-store ordering and flexible fulfillment.",
        responsibilities: [
          "Structured customer shopping journeys and local store product discovery",
          "Designed multi-store checkout to make split orders clear and manageable",
          "Implemented in-store pickup and doorstep delivery options at store and order level",
          "Created interactive prototypes, component states and detailed interaction flows",
        ],
        scope: {
          metric: "1,800+",
          label: "Approx. screens / modules",
          detail: "Across the customer shopping experience",
        },
        status: "Testing / Pre-launch",
      },
      {
        id: "mobile-apps",
        number: "03",
        tag: "MOBILE APPLICATIONS",
        company: "CODE INFOSYS",
        period: "2023 — 2024",
        discipline: "MOBILE · UI/UX · INTERACTIVE DESIGN",
        title: "150+ Mobile Applications",
        description:
          "A broad collection of small mobile applications across utility tools, tutorials, guides and lightweight mobile games.",
        responsibilities: [
          "Designed clear, accessible mobile interfaces across varied application categories",
          "Created reusable UI patterns and scalable component foundations",
          "Developed basic animations and micro-interactions for lightweight mobile games",
          "Collaborated within a multidisciplinary team to ship apps under active release schedules",
        ],
        scope: {
          metric: "150+",
          label: "Small mobile applications",
          detail: "Utility, tutorial, guide & gaming applications",
        },
        status: "Shipped & Live",
      },
    ] as ProjectHighlight[],
  },
  expertise: {
    eyebrow: "04 / SKILLS",
    headline: "Capabilities & focus areas.",
    items: [
      {
        id: "product-ux",
        number: "01",
        title: "Product & UX Flows",
        description:
          "User journeys, feature design, wireframes and information architecture for complex requirements.",
      },
      {
        id: "mobile-web-ui",
        number: "02",
        title: "Mobile & Web UI",
        description:
          "Polished, production-ready interfaces designed for real-world mobile and desktop use.",
      },
      {
        id: "design-systems",
        number: "03",
        title: "Design Systems",
        description:
          "Scalable component libraries, typography tokens and consistent interface guidelines in Figma.",
      },
      {
        id: "prototyping",
        number: "04",
        title: "Interactive Prototyping",
        description:
          "Clickable prototypes for usability testing, founder reviews and developer handoff.",
      },
      {
        id: "micro-interactions",
        number: "05",
        title: "Micro-interactions & Motion",
        description:
          "Subtle animations, state feedback and transition concepts using Rive, Lottie and Figma.",
      },
      {
        id: "dev-collaboration",
        number: "06",
        title: "Developer Collaboration",
        description:
          "Clear component specs and active communication to adapt designs within technical constraints.",
      },
    ] as ExpertiseItem[],
  },
  toolkit: {
    eyebrow: "05 / TOOLKIT",
    headline: "Tools & software.",
    subtext:
      "Design and prototyping tools used daily to take ideas from exploration to production.",
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
    headline: "Working methodology.",
    statement:
      "“I focus on making complex product requirements easier to understand, keeping interfaces consistent, and working closely with developers to ensure technical feasibility.”",
    body: "My process is practical and iterative. I usually work directly in high-fidelity design for familiar flows, while using wireframes when a problem requires deeper exploration.",
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
    headline: "Have a product or feature that needs design?",
    subheadline:
      "Open to Full-Time and Part-Time opportunities — Remote or On-Site across Surat, Gujarat.",
    email: "ayushrokad@gmail.com",
    copyright: "© 2026 Ayush Rokad",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ayushrokad/",
        isExternal: true,
      },
      {
        label: "Download Resume (PDF)",
        href: "/resume.pdf",
        isExternal: true,
      },
    ] as SocialLink[],
  },
};
