import type { LucideIcon } from "lucide-react"
import {
  Database,
  Globe,
  Palette,
  Smartphone,
} from "lucide-react"

/**
 * Skills derived only from stacks present in projects / site / experience.
 * Do not invent technologies.
 */
export const skillPills = [
  "React",
  "Next.js",
  "React Native",
  "Laravel",
  "Express.js",
  "Tailwind CSS",
  "MySQL",
  "Vite",
  "Vercel",
  "PHP",
  "Postman",
  "Figma",
  "Groq AI",
] as const

export type HomepageServiceCard = {
  id: string
  title: string
  description: string
  href: string
  icon: LucideIcon
}

/** Four homepage service families mapped to real /services pages */
export const homepageServiceCards: HomepageServiceCard[] = [
  {
    id: "web",
    title: "Développement Web",
    description:
      "Sites vitrines, landing pages et applications web Full-Stack avec React, Next.js et Laravel.",
    href: "/services/website",
    icon: Globe,
  },
  {
    id: "mobile",
    title: "Applications Mobiles",
    description:
      "Apps Android et iOS avec React Native / Expo: une base, deux stores.",
    href: "/services/mobile_app",
    icon: Smartphone,
  },
  {
    id: "api",
    title: "API & Bases de données",
    description:
      "APIs REST Laravel ou Node : authentification, documentation et déploiement.",
    href: "/services/api_backend",
    icon: Database,
  },
  {
    id: "uiux",
    title: "UI/UX & Design",
    description:
      "Interfaces Figma web et mobile, prototypes et design system avant le développement.",
    href: "/services/uiux",
    icon: Palette,
  },
]
