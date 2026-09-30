import Link from "next/link"
import { freelancePlatforms, siteConfig } from "@/data"

const pageLinks = [
  { label: "Accueil", href: "/#home" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projects" },
  { label: "Expérience", href: "/experiences" },
  { label: "Contact", href: "/#contact" },
] as const

const socialLinks = siteConfig.socials.filter(
  (s) => s.icon === "github" || s.icon === "linkedin" || s.icon === "mail"
)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background-secondary">
      <div className="container-ln grid gap-10 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/#home"
            className="font-display text-lg font-bold tracking-tight"
            aria-label={`Accueil, ${siteConfig.nap.name}`}
          >
            <span className="text-foreground">Nawfal </span>
            <span className="text-primary">ADDAOUI</span>
          </Link>
          <p className="mt-3 max-w-xs font-mono text-xs leading-relaxed text-foreground-muted">
            Développeur Full-Stack · {siteConfig.location}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground-muted">
            {siteConfig.availability}
          </p>
        </div>

        <div>
          <p className="label-ln mb-4 text-foreground-muted">Navigation</p>
          <nav aria-label="Liens rapides" className="flex flex-col gap-2.5">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-foreground-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="label-ln mb-4 text-foreground-muted">Freelance</p>
          <nav aria-label="Profils freelance" className="flex flex-col gap-2.5">
            {freelancePlatforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground-muted transition-colors hover:text-primary"
              >
                {platform.name}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="label-ln mb-4 text-foreground-muted">Contact</p>
          <nav aria-label="Contact et réseaux" className="flex flex-col gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-mono text-xs text-foreground-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-mono text-xs text-foreground-muted transition-colors hover:text-primary"
            >
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-ln flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="font-mono text-[11px] text-foreground-muted">
            © {year} {siteConfig.nap.name}
          </p>
          <p className="font-mono text-[11px] text-foreground-muted">
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </div>
    </footer>
  )
}
