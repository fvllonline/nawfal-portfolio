import Link from "next/link"
import { Terminal } from "lucide-react"
import {
  footerProjectSlugs,
  footerServiceIds,
  getProjectBySlug,
  getServiceById,
  getServiceShortLabel,
  siteConfig,
} from "@/data"
import { NapBlock } from "@/components/seo/nap-block"

const footerSocials = siteConfig.socials.filter(
  (s) => s.icon === "github" || s.icon === "linkedin" || s.icon === "mail"
)

export function Footer() {
  const year = new Date().getFullYear()
  const footerServices = footerServiceIds
    .map((id) => getServiceById(id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
  const footerProjects = footerProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))

  return (
    <footer className="w-full border-t border-border bg-[#0b0f10] py-10 md:py-12">
      <div className="container-ln grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
            aria-label={`Accueil — ${siteConfig.nap.name}`}
          >
            <Terminal className="h-5 w-5" aria-hidden />
            <span className="font-display text-xl font-semibold tracking-tighter">
              {siteConfig.name}
            </span>
          </Link>
          <p className="label-md-ln text-foreground-muted/80">
            © {year} {siteConfig.nap.name}. Tous droits réservés.
          </p>
          <NapBlock variant="footer" />
        </div>

        <nav aria-label="Services">
          <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-wider text-foreground-muted sm:text-left">
            Services
          </p>
          <ul className="flex flex-col items-center gap-2 sm:items-start">
            {footerServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.id}`}
                  className="label-md-ln text-foreground-muted transition-colors hover:text-primary"
                >
                  {getServiceShortLabel(service.id, service.title)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Projets">
          <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-wider text-foreground-muted sm:text-left">
            Projets
          </p>
          <ul className="flex flex-col items-center gap-2 sm:items-start">
            {footerProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="label-md-ln text-foreground-muted transition-colors hover:text-primary"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Contact et CV">
          <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-wider text-foreground-muted sm:text-left">
            Contact
          </p>
          <ul className="flex flex-col items-center gap-2 sm:items-start">
            <li>
              <Link
                href="/#contact"
                className="label-md-ln text-foreground-muted transition-colors hover:text-primary"
              >
                Demander un devis
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.cv.fr}
                download="CV-NAWFAL-French.pdf"
                className="label-md-ln text-foreground-muted transition-colors hover:text-primary"
              >
                Télécharger le CV
              </a>
            </li>
            {footerSocials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="label-md-ln text-foreground-muted transition-colors hover:text-primary"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
