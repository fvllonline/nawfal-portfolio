export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: "github" | "linkedin" | "facebook" | "instagram" | "mail" | "phone"
}

export type SoftSkill = {
  name: string
  icon: "zap" | "users" | "lightbulb"
}

export type Language = {
  name: string
  level: number
  label: string
}

export type ServicePack = {
  name: string
  price: number
  currency: string
  delivery?: string
  billing?: "monthly" | "one-time"
  popular?: boolean
  features: string[]
}

export type Service = {
  id: string
  title: string
  description: string
  icon:
    | "globe"
    | "shopping-bag"
    | "layout"
    | "smartphone"
    | "search"
    | "refresh"
    | "wrench"
    | "palette"
    | "wordpress"
    | "server"
    | "message-square"
  packs: ServicePack[]
  /** Contenu SEO longue forme (page /services/[id]) */
  content?: ServicePageContent
}

export type ServicePageContent = {
  /** H1 optimisé local */
  h1: string
  /** Paragraphes d’autorité */
  intro: string[]
  benefits: string[]
  idealFor: string[]
  process: string[]
  /** Un lien contextuel dans le texte (maillage, max 1 par page) */
  seeAlso?: {
    before: string
    href: string
    label: string
    after?: string
  }
}

export type ServiceGeneralTerms = {
  currency: string
  payment: string
  customQuote: boolean
  supportAfterDelivery: string
  maintenanceAvailable: boolean
  note: string
}

export type Experience = {
  id: string
  year: string
  period: string
  company: string
  role: string
  contractType?: string
  description: string
  highlights?: string[]
  technologies: string[]
  link?: string
  current?: boolean
}

export type Education = {
  id: string
  period: string
  institution: string
  degree: string
  status: "En cours" | "Terminé"
}

export type ProjectFeature = {
  title: string
  description: string
  icon: string
}

export type ProjectChallenge = {
  challenge: string
  challengeDetail: string
  solution: string
  solutionDetail: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  shortDescription: string
  description: string[]
  coverImage: string
  gallery: string[]
  technologies: string[]
  type: string
  year: string
  role: string
  liveUrl?: string
  githubUrl?: string
  /** Still being developed — not 100% finished */
  inProgress?: boolean
  /** Primary service to suggest on this project page */
  relatedServiceId: string
  /** Extra services to suggest alongside the primary one */
  relatedServiceIds?: string[]
  features: ProjectFeature[]
  challenges?: ProjectChallenge[]
  quote?: string
  featured: boolean
}

export type Certification = {
  id: string
  name: string
  institution: string
  category: "Langue" | "Programmation" | "Sécurité" | "Autre"
  icon: "globe" | "code" | "shield"
  logo: string
  pdfPath?: string
  pdfPaths?: string[]
}

export type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
  linkedin?: string
}

export type SiteNap = {
  /** Nom affiché partout (NAP) — doit matcher Google Business */
  name: string
  streetAddress?: string
  addressLocality: string
  addressRegion: string
  addressCountry: string
  addressCountryName: string
  /** Ligne adresse lisible (sans téléphone) */
  addressLine: string
  /** Coordonnées ville (service area Casablanca) */
  geo: {
    latitude: number
    longitude: number
  }
}

export type SiteConfig = {
  name: string
  fullName: string
  title: string
  location: string
  email: string
  phone: string
  phoneDisplay: string
  tagline: string
  /** SEO meta description (search / social) */
  seoDescription: string
  /** Default document title for the homepage */
  seoTitle: string
  availability: string
  bio: string
  url: string
  github: string
  linkedin: string
  portrait: string
  /** NAP local SEO — source unique pour schema, footer, contact */
  nap: SiteNap
  cv: {
    fr: string
    en: string
    de: string
  }
  socials: SocialLink[]
  formspreeEndpoint: string
}
