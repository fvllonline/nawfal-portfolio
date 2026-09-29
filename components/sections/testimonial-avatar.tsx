"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/lib/types"

type TestimonialAvatarProps = {
  testimonial: Testimonial
  active: boolean
  size?: "sm" | "md" | "lg"
  floatDelay?: number
  className?: string
  onSelect: (id: string) => void
  controlsId: string
}

const sizeMap = {
  sm: "h-12 w-12 sm:h-14 sm:w-14",
  md: "h-14 w-14 sm:h-16 sm:w-16",
  lg: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
} as const

export function TestimonialAvatar({
  testimonial,
  active,
  size = "md",
  floatDelay = 0,
  className,
  onSelect,
  controlsId,
}: TestimonialAvatarProps) {
  const reduce = useReducedMotion()
  const label = `Témoignage de ${testimonial.name}`

  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-pressed={active}
      aria-controls={controlsId}
      onClick={() => onSelect(testimonial.id)}
      onMouseEnter={() => onSelect(testimonial.id)}
      onFocus={() => onSelect(testimonial.id)}
      className={cn(
        "group relative flex shrink-0 items-center justify-center rounded-full outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        sizeMap[size],
        className
      )}
      animate={
        reduce
          ? undefined
          : {
              y: [0, -5, 0],
            }
      }
      transition={
        reduce
          ? undefined
          : {
              duration: 5 + floatDelay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: floatDelay,
            }
      }
    >
      {/* Active halo */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-[-6px] rounded-full border border-primary/25 transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0"
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-[-12px] rounded-full border border-primary/10 transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0"
        )}
      />

      <span
        className={cn(
          "relative block h-full w-full overflow-hidden rounded-full border bg-background-secondary transition-all duration-300",
          active
            ? "scale-[1.08] border-primary shadow-[0_0_20px_rgba(0,217,181,0.35)]"
            : "scale-100 border-primary/25 opacity-65 shadow-[0_8px_24px_rgba(0,0,0,0.35)] group-hover:scale-[1.08] group-hover:border-primary/70 group-hover:opacity-100 group-hover:shadow-[0_0_16px_rgba(0,217,181,0.25)]"
        )}
      >
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt=""
            fill
            loading="lazy"
            className="object-cover"
            sizes="72px"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-mono text-xs text-primary">
            {testimonial.name
              .replace(/^(M\.|Mme\.?|Mlle\.?)\s*/i, "")
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((p) => p[0]?.toUpperCase() ?? "")
              .join("")}
          </span>
        )}
      </span>

      {active && (
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,217,181,0.8)]"
        />
      )}
    </motion.button>
  )
}
