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
  tag: string;
  company: string;
  period: string;
  title: string;
  discipline: string;
  description: string;
  keyExperiences?: string[];
  responsibilities: string[];
  scope: {
    metric: string;
    label: string;
    detail: string;
  };
  status: string;
  focus?: string;
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
    headline: "Products I've helped shape.",
    introduction:
      "A selection of digital products, platforms and experiences I've contributed to throughout my design journey — from complex commerce ecosystems to mobile applications.",
    projects: [
      {
        id: "seller-experience",
        number: "01",
        tag: "SELLER EXPERIENCE",
        company: "LETMEGRAB",
        period: "2024 — 2026",
        discipline: "E-COMMERCE · MOBILE · PRODUCT DESIGN",
        title: "Local Commerce — Seller Experience",
        description:
          "A comprehensive seller platform designed to help local businesses manage their stores and operate their online presence. The experience brings together inventory, order management, store operations and seller engagement in one connected ecosystem.",
        responsibilities: [
          "Refined and modernized existing product modules, improving interface consistency and usability.",
          "Designed new product features and UX flows based on business requirements.",
          "Worked across inventory management, orders, brands, categories, product management and seller verification.",
          "Designed features such as Store Highlights and an Alerts experience for items requiring attention.",
          "Maintained structured Figma components, design-system foundations and interactive prototypes.",
          "Collaborated directly with the founder and development team to translate business requirements into practical, technically feasible experiences.",
        ],
        scope: {
          metric: "2,000+",
          label: "Approx. screens / modules",
          detail: "Across the seller product experience",
        },
        status: "Testing / Pre-launch",
      },
      {
        id: "customer-experience",
        number: "02",
        tag: "CUSTOMER EXPERIENCE",
        company: "LETMEGRAB",
        period: "2024 — 2026",
        discipline: "E-COMMERCE · MOBILE · UX / PRODUCT DESIGN",
        title: "Local Commerce — Customer Experience",
        description:
          "A customer-facing shopping experience built around discovering and purchasing from nearby local businesses. The product focuses on simplifying multi-store shopping, checkout and flexible fulfilment through in-store pickup and doorstep delivery.",
        keyExperiences: [
          "Multi-store shopping and checkout",
          "Store-specific in-store pickup and doorstep delivery",
          "Product discovery and shopping journeys",
          "Customer order and post-purchase experiences",
        ],
        responsibilities: [
          "Designed and refined customer-facing UX flows across the shopping journey.",
          "Worked on a multi-store checkout experience to make complex orders easier to understand.",
          "Structured pickup and doorstep delivery options at the individual store and order level.",
          "Created high-fidelity interfaces, interactive prototypes and detailed interaction states.",
          "Focused on making multi-store purchasing and order fulfilment more intuitive.",
        ],
        scope: {
          metric: "1,800+",
          label: "Approx. screens / modules",
          detail: "Across the customer product experience",
        },
        status: "Testing / Pre-launch",
      },
      {
        id: "mobile-applications",
        number: "03",
        tag: "MOBILE APPLICATIONS",
        company: "CODE INFOSYS",
        period: "2023 — 2024",
        discipline: "MOBILE · UI/UX · INTERACTIVE DESIGN",
        title: "150+ Mobile Applications",
        description:
          "A diverse collection of more than 150 small mobile applications spanning utility tools, tutorials, guides and lightweight gaming experiences. Working across different product concepts helped build a strong foundation in interface design, visual consistency and interaction design.",
        responsibilities: [
          "Designed mobile interfaces across a wide range of application concepts.",
          "Created high-fidelity UI and reusable interface patterns.",
          "Developed basic animations and interactive experiences for lightweight mobile games and applications.",
          "Translated product requirements into clear, visually polished mobile interfaces.",
          "Worked alongside a multidisciplinary design and development team.",
        ],
        scope: {
          metric: "150+",
          label: "Small mobile applications",
          detail: "Utility, tutorial, gaming & guides",
        },
        status: "Shipped / Live on App Store & Play Store",
        focus: "Mobile UI · Visual Design · Interaction Design · Basic Animation",
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
