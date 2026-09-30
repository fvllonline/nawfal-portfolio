import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteShell } from "@/components/layout"
import { FreelancePlatformsSection } from "@/components/sections/freelance-platforms-section"
import { ServicesCatalog } from "@/components/services/services-catalog"
import { FadeIn } from "@/components/ui/motion"
import { services, siteConfig } from "@/data"

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
          <FadeIn className="mb-12 max-w-2xl sm:mb-16 lg:mb-20">
            <p className="label-ln">Services</p>
            <h1 className="heading-lg mt-3">
              Tous mes <span className="text-primary">packs</span>
            </h1>
            <p className="body-md mt-4 max-w-xl">
              Une offre claire, classée par intention. Parcourez à votre rythme,
              puis ouvrez un service pour voir les packs en détail.
            </p>
            <p className="mt-5 font-mono text-xs text-foreground-muted">
              {services.length} services · tarifs en MAD
            </p>
          </FadeIn>

          <ServicesCatalog />

          <FadeIn delay={0.12} className="mt-16 border-t border-border/70 pt-12 text-center sm:mt-20 sm:pt-14">
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
