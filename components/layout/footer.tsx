import Link from "next/link"
import { siteConfig } from "@/data"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background-secondary py-8 md:py-10">
      <div className="container-ln flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4">
        <Link
          href="/#home"
          className="font-display text-base font-bold tracking-tight"
          aria-label={`Accueil, ${siteConfig.nap.name}`}
        >
          <span className="text-foreground">Nawfal </span>
          <span className="text-primary">ADDAOUI</span>
        </Link>

        <p className="font-mono text-xs text-foreground-muted">
          © {year} {siteConfig.nap.name}
        </p>

        <p className="font-mono text-xs text-foreground-muted">
          Développeur Full-Stack
        </p>
      </div>

      <nav
        aria-label="Liens rapides"
        className="container-ln mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border pt-6"
      >
        {[
          { label: "Projets", href: "/#projects" },
          { label: "Expérience", href: "/#experience" },
          { label: "Services", href: "/#services" },
          { label: "Contact", href: "/#contact" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-xs text-foreground-muted transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
