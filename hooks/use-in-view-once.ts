"use client"

import { useEffect, useRef, useState } from "react"

type UseInViewOnceOptions = {
  /** Expand the detection area before the element enters the viewport */
  rootMargin?: string
  /** Skip observer and treat as visible immediately */
  enabled?: boolean
}

/**
 * Becomes true once the element intersects the viewport (then stays true).
 * Used to defer mounting heavy media until the user is near the section.
 */
export function useInViewOnce<T extends Element = HTMLDivElement>({
  rootMargin = "240px 0px",
  enabled = true,
}: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(!enabled)

  useEffect(() => {
    if (!enabled || inView) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setInView(true)
        observer.disconnect()
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [enabled, inView, rootMargin])

  return { ref, inView }
}
