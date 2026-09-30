"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { services } from "@/data"
import { FadeIn, easeOutExpo } from "@/components/ui/motion"
import { serviceIcons } from "@/components/services/service-icons"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/types"

const PAGE_SIZE = 4
const AUTO_MS = 7000

function chunkServices(items: Service[], size: number) {
  const pages: Service[][] = []
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size))
  }
  return pages
}

export function ServicesSection() {
  const pages = useMemo(() => chunkServices(services, PAGE_SIZE), [])
  const reduce = useReducedMotion()
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const pageCount = pages.length

  const goTo = useCallback(
    (index: number) => {
      setPage(((index % pageCount) + pageCount) % pageCount)
    },
    [pageCount]
  )

  const next = useCallback(() => goTo(page + 1), [goTo, page])
  const prev = useCallback(() => goTo(page - 1), [goTo, page])

  useEffect(() => {
    if (reduce || paused || pageCount <= 1) return
    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [reduce, paused, pageCount])

  return (
    <section id="services" className="section-ln relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/bg/bg_service.jpg"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-left"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/80" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-ln relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <FadeIn className="lg:col-span-5">
          <p className="label-ln">Services</p>
          <h2 className="heading-lg mt-3">
            Des solutions sur mesure
            <br />
            <span className="text-primary">pour vos projets</span>
          </h2>
          <p className="body-lg mt-4 max-w-md">
            Packs clairs en MAD pour le web, le mobile, les APIs, le design et
            l&apos;acquisition (Google, Meta, TikTok Ads), du brief au
            déploiement.
          </p>
          <Link
            href="/services"
            className="label-md-ln mt-6 inline-flex items-center gap-2 text-primary hover:underline"
          >
            Voir tous les packs
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>

          {pageCount > 1 && (
            <div className="mt-8 flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Services précédents"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Services suivants"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="ml-2 font-mono text-[11px] text-foreground-muted">
                {page + 1} / {pageCount}
              </p>
            </div>
          )}
        </FadeIn>

        <div
          className="lg:col-span-7"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false)
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              aria-live="polite"
            >
              {pages[page]?.map((service) => {
                const Icon = serviceIcons[service.icon]
                return (
                  <article
                    key={service.id}
                    className="glass-card group flex h-full flex-col rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="heading-sm text-lg">
                      <Link
                        href={`/services/${service.id}`}
                        className="transition-colors hover:text-primary group-hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <p className="body-md mt-2 flex-1 line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.id}`}
                      className="label-md-ln mt-4 inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      En savoir plus
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {pageCount > 1 && (
            <div
              className="mt-6 flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Pages de services"
            >
              {pages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === page}
                  aria-label={`Afficher les services ${index * PAGE_SIZE + 1} à ${Math.min((index + 1) * PAGE_SIZE, services.length)}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === page
                      ? "w-8 bg-primary"
                      : "w-2 bg-foreground-muted/40 hover:bg-primary/50"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
