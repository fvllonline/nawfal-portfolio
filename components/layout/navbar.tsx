"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"
import { useEffect, useState, type MouseEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { navLinks, siteConfig } from "@/data"
import { useScrolled } from "@/hooks/use-scrolled"
import {
  useActiveSection,
  isNavLinkActive,
  sectionIdFromHref,
} from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)
  const active = useActiveSection()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const closeMenu = () => {
    setOpen(false)
    document.body.style.overflow = ""
  }

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = sectionIdFromHref(href)
    const pathPart = href.split("#")[0]
    const path = pathPart === "" ? "/" : pathPart

    closeMenu()

    // Homepage anchors
    if (path === "/") {
      if (!hash) return
      e.preventDefault()
      e.stopPropagation()
      if (pathname === "/") {
        window.requestAnimationFrame(() => {
          window.setTimeout(() => {
            scrollToId(hash)
            window.history.replaceState(null, "", `/#${hash}`)
          }, 40)
        })
        return
      }
      router.push(`/#${hash}`)
      return
    }

    // Same dedicated page + hash (e.g. already on /experiences)
    if (pathname === path && hash) {
      e.preventDefault()
      e.stopPropagation()
      window.requestAnimationFrame(() => {
        window.setTimeout(() => {
          scrollToId(hash)
          window.history.replaceState(null, "", `${path}#${hash}`)
        }, 40)
      })
    }
    // Otherwise let <Link> navigate normally
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-[70] w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 shadow-[0_0_30px_rgba(0,217,181,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className={cn(
          "container-ln relative z-[72] flex items-center justify-between transition-all duration-300",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "/#home")}
          className="group font-display text-lg font-bold tracking-tight transition-opacity hover:opacity-90 sm:text-xl"
          aria-label={`${siteConfig.fullName}, Accueil`}
        >
          <span className="text-foreground">Nawfal </span>
          <span className="text-primary">ADDAOUI</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(link.href, active)

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

        <div className="hidden lg:block">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="label-md-ln inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-80"
          >
            Me contacter
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="relative z-[72] flex h-11 w-11 items-center justify-center text-primary lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[68] bg-background/55 lg:hidden"
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-[71] max-h-[min(70dvh,calc(100dvh-4.5rem))] overflow-y-auto overscroll-contain border-t border-border bg-background/98 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <div className="container-ln flex flex-col gap-1 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
                {navLinks.map((link, i) => {
                  const isActive = isNavLinkActive(link.href, active)

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          "label-md-ln flex min-h-12 touch-manipulation items-center gap-3 rounded-xl px-4 py-3 transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground-muted active:bg-white/5 active:text-primary"
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
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="label-md-ln mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-primary"
                >
                  Me contacter
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
