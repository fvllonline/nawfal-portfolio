"use client"

import type { ReactNode } from "react"
import { useInViewOnce } from "@/hooks/use-in-view-once"
import { cn } from "@/lib/utils"

type LazyMountProps = {
  children: ReactNode
  /** Placeholder while waiting for the section to approach the viewport */
  fallback?: ReactNode
  className?: string
  rootMargin?: string
  /** Min height so layout doesn’t jump before mount */
  minHeight?: number | string
}

/**
 * Mounts children only when near the viewport — avoids fetching carousel /
 * gallery images on initial paint.
 */
export function LazyMount({
  children,
  fallback,
  className,
  rootMargin = "280px 0px",
  minHeight = 280,
}: LazyMountProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ rootMargin })

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={!inView && !fallback ? { minHeight } : undefined}
    >
      {inView ? children : (fallback ?? null)}
    </div>
  )
}
