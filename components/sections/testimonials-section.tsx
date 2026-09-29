"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Quote, Star } from "lucide-react"
import { testimonials } from "@/data"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"

export function TestimonialsSection() {
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
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="label-ln">Témoignages</p>
          <h2 className="heading-lg mt-3">
            Ce qu&apos;ils disent{" "}
            <span className="text-primary">de moi</span>
          </h2>
        </FadeIn>

        <LazyMount minHeight={280} rootMargin="180px 0px">
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {testimonials.map((t) => {
              const initials = t.name
                .replace(/^(M\.|Mme\.?|Mlle\.?)\s*/i, "")
                .split(/\s+/)
                .filter(Boolean)
                .slice(0, 2)
                .map((part) => part[0]?.toUpperCase() ?? "")
                .join("")

              return (
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
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted">
                      {t.image ? (
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          loading="lazy"
                          className="object-cover"
                          sizes="44px"
                        />
                      ) : (
                        <span className="font-mono text-xs font-semibold text-primary">
                          {initials || "?"}
                        </span>
                      )}
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
              )
            })}
          </Stagger>
        </LazyMount>
      </div>
    </section>
  )
}
