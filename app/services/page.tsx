import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteShell } from "@/components/layout"
import { FreelancePlatformsSection } from "@/components/sections/freelance-platforms-section"
import { serviceIcons } from "@/components/services/service-icons"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { services, siteConfig } from "@/data"
import type { ServicePack } from "@/lib/types"

function formatStartingPrice(pack: ServicePack) {
  const amount = new Intl.NumberFormat("fr-MA").format(pack.price)
  const suffix = pack.billing === "monthly" ? " / mois" : ""
  return `${amount} ${pack.currency}${suffix}`
}

export const metadata: Metadata = {
  title: "Services & packs",
  description: `Tous les services et packs en MAD de ${siteConfig.fullName} : sites web, mobile, e-commerce, APIs, design, SEO, ads et plus. Freelance Full-Stack à Casablanca.`,
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: `Services & packs | ${siteConfig.fullName}`,
    description:
      "Packs clairs en MAD pour le web, le mobile, les APIs, le design et l'acquisition.",
    type: "website",
    locale: "fr_MA",
    url: `${siteConfig.url}/services`,
  },
}

export default function ServicesIndexPage() {
  return (
    <SiteShell>
      <section className="section-ln relative min-h-[100dvh] overflow-hidden pt-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/bg/bg_service.jpg"
            alt=""
            fill
            priority
            className="object-cover object-left"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/80" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container-ln relative z-10">
          <FadeIn className="mb-10 max-w-2xl sm:mb-14">
            <p className="label-ln">Services</p>
            <h1 className="heading-lg mt-3">
              Tous mes <span className="text-primary">packs</span>
            </h1>
            <p className="body-md mt-4 max-w-xl">
              Offres claires en MAD pour le web, le mobile, les APIs, le design
              et l&apos;acquisition. Choisissez un service pour voir le détail
              des packs et demander un devis.
            </p>
            <p className="mt-4 font-mono text-xs text-foreground-muted">
              {services.length} services
            </p>
          </FadeIn>

          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {services.map((service) => {
              const Icon = serviceIcons[service.icon]
              const startingPack = [...service.packs].sort(
                (a, b) => a.price - b.price
              )[0]
              const popular = service.packs.find((p) => p.popular)

              return (
                <StaggerItem key={service.id}>
                  <article className="glass-card group flex h-full flex-col rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>

                    <h2 className="heading-sm text-lg">
                      <Link
                        href={`/services/${service.id}`}
                        className="transition-colors hover:text-primary group-hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    </h2>

                    <p className="body-md mt-2 flex-1 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-border pt-4">
                      {startingPack && (
                        <p className="font-mono text-xs text-foreground-muted">
                          À partir de{" "}
                          <span className="text-primary">
                            {formatStartingPrice(startingPack)}
                          </span>
                        </p>
                      )}
                      <p className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
                        {service.packs.length} pack
                        {service.packs.length > 1 ? "s" : ""}
                        {popular ? ` · ${popular.name} populaire` : ""}
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.id}`}
                      className="label-md-ln mt-5 inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      Voir les packs
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                </StaggerItem>
              )
            })}
          </Stagger>

          <FadeIn delay={0.15} className="mt-12 text-center sm:mt-16">
            <p className="body-md mx-auto max-w-md">
              Un besoin hors pack ? Décrivez votre projet, je vous réponds avec
              un devis adapté.
            </p>
            <Link
              href="/#contact"
              className="gradient-btn glow-sm mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-mono text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </FadeIn>
        </div>
      </section>

      <FreelancePlatformsSection />
    </SiteShell>
  )
}
