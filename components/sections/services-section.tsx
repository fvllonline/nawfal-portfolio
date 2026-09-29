"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { homepageServiceCards } from "@/data"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"

export function ServicesSection() {
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
            Packs clairs en MAD pour le web, le mobile, les APIs et le design,
            du brief au déploiement, pour startups et entreprises au Maroc.
          </p>
          <Link
            href="/services/website"
            className="label-md-ln mt-6 inline-flex items-center gap-2 text-primary hover:underline"
          >
            Voir tous les packs
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </FadeIn>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {homepageServiceCards.map((card) => {
            const Icon = card.icon
            return (
              <StaggerItem key={card.id}>
                <article className="glass-card group flex h-full flex-col rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="heading-sm text-lg">
                    <Link
                      href={card.href}
                      className="transition-colors hover:text-primary group-hover:text-primary"
                    >
                      {card.title}
                    </Link>
                  </h3>
                  <p className="body-md mt-2 flex-1 line-clamp-3">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="label-md-ln mt-4 inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    En savoir plus
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
