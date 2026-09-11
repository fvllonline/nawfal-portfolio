"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { serviceIcons } from "@/components/services/service-icons"
import type { Service } from "@/lib/types"

type ProjectServiceOfferProps = {
  projectTitle: string
  projectSlug: string
  service: Service
}

export function ProjectServiceOffer({
  projectTitle,
  projectSlug,
  service,
}: ProjectServiceOfferProps) {
  const [open, setOpen] = useState(false)
  const Icon = serviceIcons[service.icon]
  const storageKey = `service-offer-dismissed:${projectSlug}`

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey)) return
    } catch {
      // ignore
    }

    const t = window.setTimeout(() => setOpen(true), 1400)
    return () => window.clearTimeout(t)
  }, [storageKey])

  const dismiss = () => {
    setOpen(false)
    try {
      sessionStorage.setItem(storageKey, "1")
    } catch {
      // ignore
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-md sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0"
          role="status"
          aria-live="polite"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl border border-primary/30 p-4 shadow-[0_0_40px_rgba(0,229,160,0.15)] sm:p-5">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Fermer la suggestion"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-foreground-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3 pr-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                  <Sparkles className="h-3 w-3" />
                  Service recommandé
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Ce projet{" "}
                  <span className="font-medium text-primary">{projectTitle}</span>{" "}
                  est lié à{" "}
                  <span className="font-medium">{service.title}</span>.
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Découvrez les packs Starter / Pro / Business et demandez un
                  devis.
                </p>
                <Link
                  href={`/services/${service.id}`}
                  onClick={dismiss}
                  className="label-md-ln mt-3 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Voir le service
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
