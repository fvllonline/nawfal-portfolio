"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Quote, Star } from "lucide-react"
import { testimonials } from "@/data"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-ln">
      <div className="container-ln overflow-hidden rounded-3xl bg-accent/40 py-12 sm:rounded-[40px] sm:py-section-sm md:py-section">
        <FadeIn className="mb-10 px-2 text-center sm:mb-16 sm:px-4">
          <p className="label-ln">Témoignages</p>
          <h2 className="heading-lg mt-2">Avis clients & collaborateurs</h2>
          <p className="body-md mx-auto mt-4 max-w-2xl">
            Ce que disent ceux qui ont travaillé avec un développeur Full-Stack
            basé à Casablanca.
          </p>
        </FadeIn>

        <LazyMount minHeight={320}>
          <Stagger className="grid grid-cols-1 gap-6 px-2 sm:gap-8 sm:px-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <article className="glass-card relative flex h-full flex-col rounded-2xl p-5 sm:rounded-3xl sm:p-8">
                  <Quote
                    className="absolute right-5 top-4 h-10 w-10 text-primary/20 sm:right-8 sm:top-6 sm:h-14 sm:w-14"
                    aria-hidden
                  />
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="body-md relative z-10 flex-1 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate font-semibold text-foreground">
                        {t.name}
                      </p>
                      {t.linkedin && (
                        <Link
                          href={t.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.name} sur LinkedIn`}
                          className="shrink-0 text-foreground-muted transition-colors hover:text-primary"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    <p className="label-md-ln truncate text-primary">
                      {t.role} {t.company}
                    </p>
                  </div>
                </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </LazyMount>
      </div>
    </section>
  )
}
