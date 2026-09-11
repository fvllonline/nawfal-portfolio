import Link from "next/link"
import { Terminal } from "lucide-react"
import { siteConfig } from "@/data"

const footerLinks = siteConfig.socials.filter(
  (s) => s.icon === "github" || s.icon === "linkedin" || s.icon === "mail"
)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-[#0b0f10] py-8 md:py-10">
      <div className="container-ln flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link
            href="/#home"
            className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
            aria-label={`${siteConfig.fullName} — Développeur Full-Stack Casablanca`}
          >
            <Terminal className="h-5 w-5" aria-hidden />
            <span className="font-display text-xl font-semibold tracking-tighter">
              {siteConfig.name}
            </span>
          </Link>
          <p className="label-md-ln text-foreground-muted/80">
            © {year} {siteConfig.fullName}. Tous droits réservés.
          </p>
          {/* NAP — Nom, Adresse, Téléphone (cohérent avec le schema) */}
          <p className="max-w-xs text-center text-xs text-foreground-muted/60 md:text-left">
            {siteConfig.fullName} · Développeur Full-Stack ·{" "}
            {siteConfig.location}
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-xs text-foreground-muted/60 transition-colors hover:text-primary"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <nav
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          aria-label="Liens sociaux"
        >
          {footerLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="label-md-ln flex min-h-11 items-center px-2 text-foreground-muted transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(110,255,192,0.5)]"
            >
              {social.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
