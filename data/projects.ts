import type { Project } from "@/lib/types"

/** Shared placeholder assets until real project screenshots are added */
const img = {
  cover: "/herobg.jpg",
  alt: "/placeholder.jpg",
  portrait: "/PRFLN.png",
  brand: "/cisco.jpg",
}

/**
 * Featured projects — temporary set while waiting for remaining case studies.
 * Sourced from CV + user brief.
 */
export const projects: Project[] = [
  {
    slug: "monpasstcf",
    title: "MonPassTCF",
    subtitle:
      "Mobile application for TCF exam preparation — practice, track progress, and stay exam-ready.",
    shortDescription:
      "Mobile app for TCF exam preparation with real-time feedback, AI support, and progress tracking.",
    description: [
      "MonPassTCF is a mobile-first ed-tech product designed to help candidates prepare for the Test de Connaissance du Français (TCF). It covers listening, reading, structure, and writing with a structured, data-driven approach.",
      "Built during a PFE internship at Alvon Digital Group, the platform combines a full-stack architecture (Express.js, React Native, Next.js), AI integration via Groq, real-time social features, gamification, and an admin dashboard.",
      "The goal: a premium, distraction-free study experience that feels like a polished app — on the go or at home.",
    ],
    coverImage: img.cover,
    gallery: [img.cover, img.alt, img.portrait, img.brand],
    technologies: [
      "React Native",
      "Next.js",
      "Express.js",
      "Groq AI",
      "MySQL",
    ],
    type: "Mobile Application",
    year: "2026",
    role: "Full-Stack Developer",
    features: [
      {
        title: "Adaptive Simulations",
        description:
          "Timed exam simulations that mirror the real TCF format and difficulty.",
        icon: "zap",
      },
      {
        title: "AI-Assisted Practice",
        description:
          "Groq-powered assistance to guide learners and improve weak areas.",
        icon: "sparkles",
      },
      {
        title: "Progress Tracking",
        description:
          "Clear dashboards to follow CEFR-level progress over time.",
        icon: "chart",
      },
      {
        title: "Social & Gamification",
        description:
          "Real-time social features and gamification to keep motivation high.",
        icon: "users",
      },
    ],
    challenges: [
      {
        challenge: "Real-time Features on Mobile",
        challengeDetail:
          "Delivering social and sync features without hurting battery life or UX on mid-range devices.",
        solution: "Efficient Real-time Stack",
        solutionDetail:
          "Optimized API payloads and selective real-time updates so the app stays responsive under load.",
      },
    ],
    quote:
      "A study companion that feels like a product — not another pile of PDFs.",
    featured: true,
  },
  {
    slug: "breezoria",
    title: "Breezoria",
    subtitle:
      "Modern e-commerce storefront built for conversion, speed, and a smooth shopping journey.",
    shortDescription:
      "E-commerce website with catalog, cart, and a polished checkout experience.",
    description: [
      "Breezoria is a customizable e-commerce website focused on clean product presentation and a frictionless path from discovery to purchase.",
      "The storefront emphasizes performance, responsive layout, and a clear merchandising structure suitable for a growing online brand.",
    ],
    coverImage: "/Breezoria/miniature-breezoria.png",
    gallery: [
      "/Breezoria/1-landing-page.png",
      "/Breezoria/2-product-details.png",
      "/Breezoria/3-panier.png",
      "/Breezoria/4-formulaire.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    type: "E-commerce Website",
    year: "2025",
    role: "Full-Stack Developer",
    features: [
      {
        title: "Product Catalog",
        description:
          "Browsable catalog with clear categories and product detail pages.",
        icon: "shopping-bag",
      },
      {
        title: "Cart & Checkout",
        description:
          "Streamlined cart flow designed for mobile and desktop shoppers.",
        icon: "credit-card",
      },
      {
        title: "Responsive Storefront",
        description:
          "Mobile-first shopping UI that stays sharp on large screens.",
        icon: "smartphone",
      },
      {
        title: "Brand-Ready UI",
        description:
          "Customizable layout ready for branding and seasonal campaigns.",
        icon: "palette",
      },
    ],
    challenges: [
      {
        challenge: "Speed vs Rich Product Media",
        challengeDetail:
          "High-quality product imagery risked slowing the first load on mobile networks.",
        solution: "Optimized Media Delivery",
        solutionDetail:
          "Lazy-loaded images and prioritized above-the-fold content to keep Core Web Vitals healthy.",
      },
    ],
    quote: "An e-com store should feel effortless from the first scroll.",
    featured: true,
  },
  {
    slug: "zacastore",
    title: "ZacaStore",
    subtitle:
      "E-commerce website built to showcase products and convert visitors into customers.",
    shortDescription:
      "E-commerce website with product browsing, cart, and a clean storefront experience.",
    description: [
      "ZacaStore is an e-commerce website designed for a clear product hierarchy and a fast shopping experience.",
      "It focuses on a clean storefront, responsive product pages, and a checkout path that stays simple on every device.",
    ],
    coverImage: "/ZacaStore/miniature-zacastore.png",
    gallery: [
      "/ZacaStore/1-landing-page.png",
      "/ZacaStore/2-products.png",
      "/ZacaStore/3-about.png",
      "/ZacaStore/4-product1.png",
      "/ZacaStore/5-product2.png",
      "/ZacaStore/6-panier.png",
      "/ZacaStore/7-formulaire.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "MySQL"],
    type: "E-commerce Website",
    year: "2025",
    role: "Full-Stack Developer",
    features: [
      {
        title: "Storefront Grid",
        description:
          "Product listing with filters and a clear visual hierarchy.",
        icon: "layout-dashboard",
      },
      {
        title: "Product Pages",
        description:
          "Detailed product views with images, pricing, and CTAs.",
        icon: "shopping-bag",
      },
      {
        title: "Cart Experience",
        description:
          "Persistent cart and a straightforward path to checkout.",
        icon: "credit-card",
      },
      {
        title: "Admin-Ready Structure",
        description:
          "Architecture prepared for catalog updates and order handling.",
        icon: "server",
      },
    ],
    challenges: [
      {
        challenge: "Catalog Clarity",
        challengeDetail:
          "Too many products without structure makes shoppers bounce quickly.",
        solution: "Clear Merchandising UI",
        solutionDetail:
          "Organized categories and scannable cards so users find what they need fast.",
      },
    ],
    quote: "Good e-commerce is clarity — products first, friction last.",
    featured: true,
  },
  {
    slug: "dupond-cafe",
    title: "Dupond Café",
    subtitle:
      "Showcase website for an artisanal café — ambiance, menu, and a warm digital presence.",
    shortDescription:
      "Showcase website for Dupond Café with elegant visuals and a clear brand story.",
    description: [
      "Dupond Café is a showcase (vitrine) website that presents the café’s atmosphere, menu highlights, and brand personality online.",
      "Built with React + Vite and Tailwind CSS, and deployed on Vercel, it prioritizes elegant visuals and a simple visitor journey.",
    ],
    coverImage: "/DupondCafe/miniature-dupondcafe.png",
    gallery: [
      "/DupondCafe/1-landing-page.png",
      "/DupondCafe/2-menu.png",
      "/DupondCafe/3-gallery.png",
      "/DupondCafe/4-contact.png",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Vercel"],
    type: "Showcase Website",
    year: "2024",
    role: "Frontend Developer",
    liveUrl: undefined,
    features: [
      {
        title: "Brand Storytelling",
        description:
          "Warm visual layout that reflects the café’s artisanal identity.",
        icon: "coffee",
      },
      {
        title: "Menu Highlights",
        description:
          "Clear presentation of signature items and offers.",
        icon: "file-text",
      },
      {
        title: "Responsive Design",
        description:
          "Looks sharp on phones, tablets, and desktop screens.",
        icon: "monitor",
      },
    ],
    challenges: [
      {
        challenge: "Atmosphere Online",
        challengeDetail:
          "Translating a physical café vibe into a lightweight web experience.",
        solution: "Visual-First Layout",
        solutionDetail:
          "Strong photography hierarchy and restrained typography to keep the site inviting without heavy load.",
      },
    ],
    quote: "A café site should feel like walking in before you arrive.",
    featured: true,
  },
  {
    slug: "adam-adventure-tours",
    title: "Adam Adventure Tours",
    subtitle:
      "Showcase website for a tourism brand — from needs analysis to Next.js deployment.",
    shortDescription:
      "Showcase website for Adam Adventure Tours, built with Next.js and deployed on Vercel.",
    description: [
      "End-to-end design and development of the Adam Adventure Tours & Tourism showcase website during an internship.",
      "Scope covered needs analysis, technology choices, graphic design, Next.js integration, Vercel deployment, and ongoing maintenance.",
      "The result is a fast, professional tourism presence ready to welcome visitors and clients online.",
    ],
    coverImage: "/AdamAdventureTours/miniature-adamadventuretours.png",
    gallery: [
      "/AdamAdventureTours/1-landing-page.png",
      "/AdamAdventureTours/2-about.png",
      "/AdamAdventureTours/3-services.png",
      "/AdamAdventureTours/4-tours.png",
      "/AdamAdventureTours/5-details-tour.png",
      "/AdamAdventureTours/6-packages.png",
      "/AdamAdventureTours/7-contact.png",
    ],
    technologies: ["Next.js", "React", "Vercel", "UI Design"],
    type: "Showcase Website",
    year: "2025",
    role: "Web Developer",
    liveUrl: "https://adamadventuretours.com",
    features: [
      {
        title: "Brand Showcase",
        description:
          "Clear presentation of tours, atmosphere, and tourism offerings.",
        icon: "sparkles",
      },
      {
        title: "Custom Design",
        description:
          "Graphic design aligned with the travel brand identity.",
        icon: "palette",
      },
      {
        title: "Next.js + Vercel",
        description:
          "Modern stack with fast deployment and easy maintenance.",
        icon: "zap",
      },
    ],
    challenges: [
      {
        challenge: "From Brief to Live Site",
        challengeDetail:
          "Delivering a complete vitrine site in a short internship window.",
        solution: "Focused Delivery Pipeline",
        solutionDetail:
          "Tight scope: analysis → design → Next.js build → Vercel ship → maintain.",
      },
    ],
    quote: "A tourism brand deserves a site as inviting as the destination.",
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
