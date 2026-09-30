import Image from "next/image"
import { freelancePlatforms } from "@/data"
import { cn } from "@/lib/utils"

type FreelancePlatformLinksProps = {
  /** icons = logo circles · text = name links · both = logo + name */
  variant?: "icons" | "text" | "both"
  className?: string
  label?: string
  size?: "sm" | "md"
}

export function FreelancePlatformLinks({
  variant = "icons",
  className,
  label,
  size = "sm",
}: FreelancePlatformLinksProps) {
  const iconSize = size === "md" ? "h-11 w-11" : "h-9 w-9"
  const logoSize = size === "md" ? "h-6 w-6" : "h-5 w-5"

  return (
    <div className={cn("space-y-2.5", className)}>
      {label ? (
        <p className="label-ln text-foreground-muted">{label}</p>
      ) : null}

      <nav
        aria-label="Profils freelance"
        className={cn(
          "flex flex-wrap items-center",
          variant === "text" ? "gap-x-4 gap-y-2" : "gap-2.5"
        )}
      >
        {freelancePlatforms.map((platform) => {
          if (variant === "text") {
            return (
              <a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground-muted transition-colors hover:text-primary"
              >
                {platform.name}
              </a>
            )
          }

          return (
            <a
              key={platform.id}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${platform.name} — ${platform.tagline}`}
              title={platform.name}
              className={cn(
                "group inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 transition-colors hover:border-primary/40 hover:bg-primary/5",
                variant === "both" ? "px-2.5 py-1.5" : iconSize,
                variant === "icons" && "justify-center"
              )}
            >
              <span
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-md bg-white",
                  logoSize
                )}
              >
                <Image
                  src={platform.logo}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-contain p-0.5"
                  sizes="24px"
                />
              </span>
              {variant === "both" && (
                <span className="font-mono text-[11px] text-foreground-muted transition-colors group-hover:text-primary">
                  {platform.name}
                </span>
              )}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
