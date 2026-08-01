"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Terminal, Menu, X } from "lucide-react"
import { useEffect, useState, type MouseEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { navLinks, siteConfig } from "@/data"
import { useScrolled } from "@/hooks/use-scrolled"
import {
  useActiveSection,
  sectionIdFromHref,
} from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(50)
  const active = useActiveSection()
  const pathname = usePathname()
  const router = useRouter()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = sectionIdFromHref(href)
    if (!id) return

    // Same-page hash scroll
    if (pathname === "/") {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        window.history.replaceState(null, "", `/#${id}`)
      }
      setOpen(false)
      return
    }

    // From project page → home + hash
    e.preventDefault()
    setOpen(false)
    router.push(`/#${id}`)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b border-white/10 transition-all duration-300",
        "bg-[#101415]/70 backdrop-blur-xl",
        "shadow-[0_0_40px_rgba(110,255,192,0.15)]",
        scrolled && "bg-[#101415]/90 shadow-[0_0_30px_rgba(110,255,192,0.1)]"
      )}
    >
      <nav
        className={cn(
          "container-ln flex items-center justify-between transition-all duration-300",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "/#home")}
          className="group flex items-center gap-2 text-primary transition-transform active:scale-95"
          aria-label={`${siteConfig.fullName} — Home`}
        >
          <Terminal
            className="h-6 w-6 transition-transform group-hover:rotate-6"
            aria-hidden
          />
          <span className="font-display text-xl font-bold tracking-tighter">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop links — xl to avoid cramped 7-link row on tablets */}
        <div className="hidden items-center gap-5 xl:flex xl:gap-7">
          {navLinks.map((link) => {
            const id = sectionIdFromHref(link.href)
            const isActive = id === active

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "label-md-ln relative whitespace-nowrap transition-colors duration-300",
                  isActive
                    ? "text-primary"
                    : "text-foreground-muted hover:text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    aria-hidden
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile / tablet toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-primary xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <div className="container-ln flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => {
                const id = sectionIdFromHref(link.href)
                const isActive = id === active

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "label-md-ln flex min-h-11 items-center gap-3 rounded-xl px-4 py-3 transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground-muted hover:bg-white/5 hover:text-primary"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {isActive && (
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-primary"
                          aria-hidden
                        />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
