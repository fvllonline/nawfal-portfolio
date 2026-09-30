import type { NavLink } from "@/lib/types"

/**
 * Navbar center links (Contact = CTA à droite).
 * Accueil / Avis = ancres homepage
 * Projets / Expérience / Compétences = pages dédiées
 */
export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/#home" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projects" },
  { label: "Expérience", href: "/experiences" },
]
