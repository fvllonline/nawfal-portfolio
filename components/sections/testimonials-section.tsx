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
      <div className="container-ln">
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="label-ln">Témoignages</p>
          <h2 className="heading-lg mt-3">
            Ce qu&apos;ils disent{" "}
            <span className="text-primary">de moi</span>
          </h2>
        </FadeIn>

        <LazyMount minHeight={280} rootMargin="180px 0px">
          <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <article className="glass-card relative flex h-full flex-col rounded-2xl border border-border p-5 transition-colors hover:border-primary/30 sm:p-6">
                  <Quote
                    className="absolute right-4 top-4 h-8 w-8 text-primary/20"
                    aria-hidden
                  />
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-primary text-primary"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="body-md relative z-10 flex-1 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-semibold text-foreground">
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
                            <Linkedin className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                      <p className="truncate font-mono text-[11px] text-primary">
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
