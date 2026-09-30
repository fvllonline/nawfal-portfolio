"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { freelancePlatforms } from "@/data"
import { FadeIn, easeOutExpo } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import { cn } from "@/lib/utils"
import type { FreelancePlatform } from "@/data"

const PANEL_ID = "freelance-platform-panel"

const desktopLayout: Record<
  string,
  { top: string; left: string; size: "sm" | "md" | "lg"; delay: number }
> = {
  upwork: { top: "8%", left: "14%", size: "lg", delay: 0.15 },
  freelancer: { top: "10%", left: "82%", size: "md", delay: 0.7 },
  fiverr: { top: "68%", left: "10%", size: "md", delay: 1.1 },
  malt: { top: "66%", left: "86%", size: "lg", delay: 0.45 },
}

const sizeMap = {
  sm: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
  lg: "h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20",
} as const

function PlatformOrb({
  platform,
  active,
  size = "md",
  floatDelay = 0,
  className,
  onSelect,
}: {
  platform: FreelancePlatform
  active: boolean
  size?: "sm" | "md" | "lg"
  floatDelay?: number
  className?: string
  onSelect: (id: string) => void
}) {
  const reduce = useReducedMotion()

  return (
    <motion.button
      type="button"
      aria-label={`Profil ${platform.name}`}
      aria-pressed={active}
      aria-controls={PANEL_ID}
      onClick={() => onSelect(platform.id)}
      onMouseEnter={() => onSelect(platform.id)}
      onFocus={() => onSelect(platform.id)}
      className={cn(
        "group relative flex shrink-0 items-center justify-center rounded-full outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        sizeMap[size],
        className
      )}
      animate={reduce ? undefined : { y: [0, -6, 0] }}
      transition={
        reduce
          ? undefined
          : {
              duration: 4.8 + floatDelay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: floatDelay,
            }
      }
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-[-7px] rounded-full border border-primary/30 transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0"
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-[-14px] rounded-full border border-primary/12 transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0"
        )}
      />

      <span
        className={cn(
          "relative block h-full w-full overflow-hidden rounded-full border bg-white transition-all duration-300",
          active
            ? "scale-[1.08] border-primary shadow-[0_0_22px_rgba(0,217,181,0.35)]"
            : "scale-100 border-primary/20 opacity-70 shadow-[0_10px_28px_rgba(0,0,0,0.35)] group-hover:scale-[1.08] group-hover:border-primary/60 group-hover:opacity-100"
        )}
      >
        <Image
          src={platform.logo}
          alt=""
          fill
          loading="lazy"
          className="object-contain p-2.5"
          sizes="80px"
        />
      </span>

      {active && (
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,217,181,0.8)]"
        />
      )}
    </motion.button>
  )
}

function PlatformCard({ platform }: { platform: FreelancePlatform }) {
  const reduce = useReducedMotion()

  return (
    <div
      id={PANEL_ID}
      role="region"
      aria-live="polite"
      aria-atomic="true"
      className="relative mx-auto w-full max-w-md"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          key={platform.id}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: easeOutExpo }}
          className="glass-card relative overflow-hidden rounded-2xl border border-border p-6 text-center shadow-[0_0_40px_rgba(0,217,181,0.06)] sm:p-8"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white">
            <div className="relative h-10 w-10">
              <Image
                src={platform.logo}
                alt=""
                fill
                loading="lazy"
                className="object-contain"
                sizes="40px"
              />
            </div>
          </div>

          <p className="label-ln">{platform.tagline}</p>
          <h3 className="heading-sm mt-2 text-xl">{platform.name}</h3>
          <p className="body-md mx-auto mt-3 max-w-sm">{platform.description}</p>

          <a
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn glow-sm mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Voir mon profil
            <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
          </a>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}

export function FreelancePlatformsSection() {
  const [activeId, setActiveId] = useState(freelancePlatforms[0]?.id ?? "")

  const active = useMemo(
    () =>
      freelancePlatforms.find((p) => p.id === activeId) ??
      freelancePlatforms[0],
    [activeId]
  )

  if (!active) return null

  return (
    <section
      id="freelance-platforms"
      className="section-ln relative overflow-hidden border-t border-border/60"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/30 to-background" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
      </div>

      <div className="container-ln relative z-10">
        <FadeIn className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="label-ln">Présence freelance</p>
          <h2 className="heading-lg mt-3">
            Retrouvez-moi sur les{" "}
            <span className="text-primary">plateformes</span>
          </h2>
          <p className="body-md mx-auto mt-4 max-w-md">
            Upwork, Freelancer, Fiverr et Malt : explorez un logo, puis ouvrez
            mon profil pour collaborer.
          </p>
        </FadeIn>

        <LazyMount minHeight={400} rootMargin="160px 0px">
          {/* Mobile */}
          <div className="lg:hidden">
            <div
              className="mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
              role="group"
              aria-label="Choisir une plateforme"
            >
              {freelancePlatforms.map((p, i) => (
                <PlatformOrb
                  key={p.id}
                  platform={p}
                  active={p.id === active.id}
                  size={i % 2 === 0 ? "md" : "sm"}
                  floatDelay={i * 0.35}
                  onSelect={setActiveId}
                />
              ))}
            </div>
            <PlatformCard platform={active} />
          </div>

          {/* Desktop: floating network */}
          <div className="relative hidden min-h-[520px] lg:block">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1="18"
                y1="14"
                x2="50"
                y2="48"
                stroke="rgba(0,217,181,0.12)"
                strokeWidth="0.25"
              />
              <line
                x1="82"
                y1="16"
                x2="50"
                y2="48"
                stroke="rgba(0,217,181,0.1)"
                strokeWidth="0.25"
              />
              <line
                x1="14"
                y1="72"
                x2="50"
                y2="54"
                stroke="rgba(0,217,181,0.1)"
                strokeWidth="0.25"
              />
              <line
                x1="86"
                y1="70"
                x2="50"
                y2="54"
                stroke="rgba(0,217,181,0.12)"
                strokeWidth="0.25"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="rgba(0,217,181,0.06)"
                strokeWidth="0.2"
              />
            </svg>

            {freelancePlatforms.map((p) => {
              const layout = desktopLayout[p.id]
              if (!layout) return null
              return (
                <div
                  key={p.id}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ top: layout.top, left: layout.left }}
                >
                  <PlatformOrb
                    platform={p}
                    active={p.id === active.id}
                    size={layout.size}
                    floatDelay={layout.delay}
                    onSelect={setActiveId}
                  />
                </div>
              )
            })}

            <div className="absolute left-1/2 top-1/2 z-10 w-[min(100%,26rem)] -translate-x-1/2 -translate-y-1/2 px-4">
              <PlatformCard platform={active} />
            </div>
          </div>
        </LazyMount>
      </div>
    </section>
  )
}
