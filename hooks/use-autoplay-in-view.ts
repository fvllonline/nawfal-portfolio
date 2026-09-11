"use client"

import { useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

type AutoplayPlugin = {
  play: () => void
  stop: () => void
}

/**
 * Plays Embla Autoplay only while the carousel is in (or near) the viewport.
 * Also respects prefers-reduced-motion.
 */
export function useAutoplayInView(
  api: CarouselApi | undefined,
  options?: { rootMargin?: string; threshold?: number }
) {
  const rootMargin = options?.rootMargin ?? "80px 0px"
  const threshold = options?.threshold ?? 0.2

  useEffect(() => {
    if (!api) return

    const autoplay = api.plugins()?.autoplay as AutoplayPlugin | undefined
    if (!autoplay) return

    const root = api.rootNode()
    if (!root) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const sync = (inView: boolean) => {
      if (reduceMotion.matches || !inView) autoplay.stop()
      else autoplay.play()
    }

    // Stop until we know visibility — avoids timer work below the fold
    autoplay.stop()

    const observer = new IntersectionObserver(
      ([entry]) => {
        sync(Boolean(entry?.isIntersecting))
      },
      { rootMargin, threshold }
    )

    observer.observe(root)

    const onReduceChange = () => {
      if (reduceMotion.matches) autoplay.stop()
    }
    reduceMotion.addEventListener("change", onReduceChange)

    return () => {
      observer.disconnect()
      reduceMotion.removeEventListener("change", onReduceChange)
      autoplay.stop()
    }
  }, [api, rootMargin, threshold])
}
