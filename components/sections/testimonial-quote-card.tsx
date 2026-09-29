"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Linkedin, Quote, Star } from "lucide-react"
import { easeOutExpo } from "@/components/ui/motion"
import type { Testimonial } from "@/lib/types"

type TestimonialQuoteCardProps = {
  testimonial: Testimonial
  id: string
}

export function TestimonialQuoteCard({
  testimonial,
  id,
}: TestimonialQuoteCardProps) {
  const reduce = useReducedMotion()

  return (
    <div
      id={id}
      role="region"
      aria-live="polite"
      aria-atomic="true"
      className="relative mx-auto w-full max-w-xl"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          key={testimonial.id}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="glass-card relative overflow-hidden rounded-2xl border border-border p-6 shadow-[0_0_40px_rgba(0,217,181,0.06)] sm:p-8"
        >
          <Quote
            className="pointer-events-none absolute right-5 top-5 h-12 w-12 text-primary/15 sm:h-14 sm:w-14"
            aria-hidden
          />

          <div className="mb-4 flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-primary text-primary"
                aria-hidden
              />
            ))}
          </div>

          <p className="body-md relative z-10 italic text-foreground">
            &ldquo;{testimonial.content}&rdquo;
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-primary/30 bg-muted">
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="44px"
                />
              ) : null}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                {testimonial.linkedin && (
                  <Link
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${testimonial.name} sur LinkedIn`}
                    className="shrink-0 text-foreground-muted transition-colors hover:text-primary"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
              <p className="truncate font-mono text-[11px] text-primary">
                {testimonial.role} {testimonial.company}
              </p>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}
