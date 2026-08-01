"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "projects",
  "experience",
  "certifications",
  "testimonials",
  "contact",
] as const

/**
 * Tracks which homepage section is in view.
 * On `/projects/*`, forces "projects" as active.
 */
export function useActiveSection() {
  const pathname = usePathname()
  const [active, setActive] = useState("home")

  useEffect(() => {
    if (pathname?.startsWith("/projects")) {
      setActive("projects")
      return
    }

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return active
}

/** Extract section id from href like `/#about` or `#about` */
export function sectionIdFromHref(href: string): string | null {
  const hash = href.includes("#") ? href.split("#")[1] : null
  return hash || null
}
