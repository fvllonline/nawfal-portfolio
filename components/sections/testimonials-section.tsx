"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { testimonials } from "@/data"
import { FadeIn } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import { TestimonialAvatar } from "./testimonial-avatar"
import { TestimonialQuoteCard } from "./testimonial-quote-card"
import { cn } from "@/lib/utils"

const PANEL_ID = "testimonial-active-panel"

/** Desktop absolute placements — organic, asymmetric */
const desktopLayout: Record<
  string,
  { top: string; left: string; size: "sm" | "md" | "lg"; delay: number }
> = {
  mina: { top: "4%", left: "12%", size: "lg", delay: 0.2 },
  youness: { top: "8%", left: "78%", size: "md", delay: 0.8 },
  ayman: { top: "58%", left: "6%", size: "md", delay: 1.4 },
  issraa: { top: "62%", left: "84%", size: "lg", delay: 0.5 },
}

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState(testimonials[0]?.id ?? "")

  const active = useMemo(
    () => testimonials.find((t) => t.id === activeId) ?? testimonials[0],
    [activeId]
  )

  if (!active) return null

  return (
    <section id="testimonials" className="section-ln relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/bg/bg_testi.png"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/85" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-ln relative z-10">
        <FadeIn className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="label-ln">Témoignages</p>
          <h2 className="heading-lg mt-3">
            Ce qu&apos;ils disent{" "}
            <span className="text-primary">de moi</span>
          </h2>
          <p className="body-md mx-auto mt-4 max-w-md">
            Quelques mots de ceux avec qui j&apos;ai eu le plaisir de
            collaborer.
          </p>
        </FadeIn>

        <LazyMount minHeight={420} rootMargin="180px 0px">
          {/* —— Mobile / tablet: avatar row + card —— */}
          <div className="lg:hidden">
            <div
              className="mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
              role="group"
              aria-label="Sélectionner un témoignage"
            >
              {testimonials.map((t, i) => (
                <TestimonialAvatar
                  key={t.id}
                  testimonial={t}
                  active={t.id === active.id}
                  size={i % 2 === 0 ? "md" : "sm"}
                  floatDelay={i * 0.4}
                  onSelect={setActiveId}
                  controlsId={PANEL_ID}
                />
              ))}
            </div>
            <TestimonialQuoteCard testimonial={active} id={PANEL_ID} />
          </div>

          {/* —— Desktop: organic stage —— */}
          <div className="relative hidden min-h-[560px] lg:block">
            {/* Soft network connectors */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1="18"
                y1="12"
                x2="50"
                y2="48"
                stroke="rgba(0,217,181,0.12)"
                strokeWidth="0.25"
              />
              <line
                x1="82"
                y1="14"
                x2="50"
                y2="48"
                stroke="rgba(0,217,181,0.1)"
                strokeWidth="0.25"
              />
              <line
                x1="12"
                y1="68"
                x2="50"
                y2="52"
                stroke="rgba(0,217,181,0.1)"
                strokeWidth="0.25"
              />
              <line
                x1="88"
                y1="72"
                x2="50"
                y2="52"
                stroke="rgba(0,217,181,0.12)"
                strokeWidth="0.25"
              />
              <circle
                cx="50"
                cy="50"
                r="18"
                fill="none"
                stroke="rgba(0,217,181,0.06)"
                strokeWidth="0.2"
              />
            </svg>

            {testimonials.map((t) => {
              const layout = desktopLayout[t.id]
              if (!layout) return null
              return (
                <div
                  key={t.id}
                  className={cn("absolute z-20 -translate-x-1/2 -translate-y-1/2")}
                  style={{ top: layout.top, left: layout.left }}
                >
                  <TestimonialAvatar
                    testimonial={t}
                    active={t.id === active.id}
                    size={layout.size}
                    floatDelay={layout.delay}
                    onSelect={setActiveId}
                    controlsId={PANEL_ID}
                  />
                </div>
              )
            })}

            <div className="absolute left-1/2 top-1/2 z-10 w-[min(100%,36rem)] -translate-x-1/2 -translate-y-1/2 px-4">
              <TestimonialQuoteCard testimonial={active} id={PANEL_ID} />
            </div>
          </div>
        </LazyMount>
      </div>
    </section>
  )
}
