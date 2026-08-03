"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/** Scrolls to hash target after client navigation (e.g. /projects → /#contact) */
export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (!hash) return
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
      }, 80)
    }

    scrollToHash()
    window.addEventListener("hashchange", scrollToHash)
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [pathname])

  return null
}
