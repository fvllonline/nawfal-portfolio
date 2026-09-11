import { siteConfig } from "@/data"
import { cn } from "@/lib/utils"

type NapBlockProps = {
  className?: string
  /** Compact footer style vs contact card */
  variant?: "footer" | "contact"
}

/**
 * NAP visible et cohérent (Nom · Adresse · Téléphone).
 * Doit rester identique à Google Business Profile.
 */
export function NapBlock({ className, variant = "footer" }: NapBlockProps) {
  const { nap, phone, phoneDisplay, email } = siteConfig

  if (variant === "contact") {
    return (
      <address
        className={cn(
          "not-italic rounded-2xl border border-border bg-card/40 p-5",
          className
        )}
      >
        <p className="font-display text-lg font-semibold text-foreground">
          {nap.name}
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-primary">
          Développeur Full-Stack · Freelance
        </p>
        <p className="mt-4 text-sm text-foreground-muted">{nap.addressLine}</p>
        <p className="mt-3 flex flex-col gap-1 text-sm">
          <a
            href={`tel:${phone}`}
            className="text-foreground transition-colors hover:text-primary"
          >
            {phoneDisplay}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-foreground-muted transition-colors hover:text-primary"
          >
            {email}
          </a>
        </p>
        <p className="mt-4 text-xs text-foreground-muted/70">
          Zone d&apos;intervention : Casablanca &amp; Maroc (présentiel ou
          remote).
        </p>
      </address>
    )
  }

  return (
    <address
      className={cn(
        "not-italic max-w-xs text-center text-xs text-foreground-muted/60 md:text-left",
        className
      )}
    >
      <span className="block text-foreground-muted/80">
        {nap.name} · Développeur Full-Stack
      </span>
      <span className="mt-1 block">{nap.addressLine}</span>
      <a
        href={`tel:${phone}`}
        className="mt-1 inline-block transition-colors hover:text-primary"
      >
        {phoneDisplay}
      </a>
    </address>
  )
}
