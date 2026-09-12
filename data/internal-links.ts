/**
 * Maillage sémantique — source unique Services ↔ Projets.
 * Max 2–3 projets par service, 2–3 services par projet.
 */

export type ExtraInternalLink = {
  href: string
  label: string
}

/** Service → slugs projets (ordre d’affichage) */
export const serviceProjectSlugs: Record<string, string[]> = {
  website: ["adam-adventure-tours", "dupond-cafe"],
  ecommerce: ["breezoria", "zacastore"],
  web_app: ["monpasstcf", "quick-stay"],
  mobile_app: ["monpasstcf"],
  seo: ["adam-adventure-tours"],
  redesign: ["dupond-cafe", "adam-adventure-tours"],
  uiux: ["monpasstcf", "dupond-cafe"],
  wordpress: [],
  api_backend: ["quick-stay", "monpasstcf"],
  consulting: ["monpasstcf", "quick-stay", "adam-adventure-tours"],
  maintenance: ["monpasstcf", "quick-stay", "breezoria"],
}

/** Service → 1–2 services complémentaires */
export const serviceComplementaryIds: Record<string, string[]> = {
  website: ["seo", "uiux"],
  ecommerce: ["seo", "maintenance"],
  web_app: ["api_backend", "uiux"],
  mobile_app: ["api_backend", "web_app"],
  seo: ["website", "maintenance"],
  redesign: ["seo", "website"],
  maintenance: ["seo", "website"],
  uiux: ["website", "mobile_app"],
  wordpress: ["seo", "maintenance"],
  api_backend: ["web_app", "mobile_app"],
  consulting: ["web_app", "seo"],
}

/** Liens hors projets (ex. accueil sur la page SEO) */
export const serviceExtraLinks: Record<string, ExtraInternalLink[]> = {
  seo: [{ href: "/", label: "Voir le portfolio (accueil)" }],
  wordpress: [
    { href: "/services/website", label: "Site vitrine (Next.js / sur mesure)" },
  ],
}

/** Projet → services associés (le 1er = principal) */
export const projectServiceIds: Record<string, string[]> = {
  monpasstcf: ["mobile_app", "web_app", "api_backend"],
  "quick-stay": ["web_app", "api_backend"],
  breezoria: ["ecommerce", "website"],
  zacastore: ["ecommerce"],
  "dupond-cafe": ["website", "uiux", "redesign"],
  "adam-adventure-tours": ["website", "seo", "redesign"],
}

/** Projet → projets similaires (2 max) */
export const similarProjectSlugs: Record<string, string[]> = {
  monpasstcf: ["quick-stay"],
  "quick-stay": ["monpasstcf"],
  breezoria: ["zacastore"],
  zacastore: ["breezoria"],
  "dupond-cafe": ["adam-adventure-tours"],
  "adam-adventure-tours": ["dupond-cafe"],
}

export const footerServiceIds = [
  "website",
  "ecommerce",
  "web_app",
  "mobile_app",
  "seo",
] as const

export const footerProjectSlugs = [
  "monpasstcf",
  "quick-stay",
  "breezoria",
  "adam-adventure-tours",
] as const
