"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/** Scrolls to hash target after client navigation (e.g. /projects → /#contact) */
export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const hash = window.location.hash.replace("#", "")
    if (!hash) return

    // Wait for sections to paint
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
    }, 80)

    return () => window.clearTimeout(t)
  }, [pathname])

  return null
}
