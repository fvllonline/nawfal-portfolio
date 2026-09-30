"use client"

import { usePathname } from "next/navigation"

/**
 * Page-level active key for the navbar.
 * Accueil / Projets / Expérience stay lit for the whole page
 * (no section observer — that made the dot vanish or jump to Compétences).
 */
export function useActiveSection() {
  const pathname = usePathname()

  if (pathname?.startsWith("/services")) return "services"
  if (pathname?.startsWith("/projects")) return "projects"
  if (pathname?.startsWith("/experiences")) return "experience"
  if (pathname === "/") return "home"
  return "home"
}

/**
 * Whether a nav link owns the active indicator for the current page.
 */
export function isNavLinkActive(href: string, activePage: string): boolean {
  if (href === "/services" || href.startsWith("/services/")) {
    return activePage === "services"
  }
  if (href.startsWith("/projects")) return activePage === "projects"
  if (href === "/experiences") return activePage === "experience"
  if (href.startsWith("/experiences#")) return false
  if (href === "/#home" || href === "/") return activePage === "home"
  if (href.startsWith("/#")) return false
  return false
}

/** Extract section id from href like `/#about` or `#about` */
export function sectionIdFromHref(href: string): string | null {
  const hash = href.includes("#") ? href.split("#")[1] : null
  return hash || null
}
