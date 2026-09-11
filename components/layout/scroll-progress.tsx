"use client"

import { useEffect, useState } from "react"

/**
 * Lightweight top progress bar — no Framer Motion scroll listeners / springs.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onMq = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onMq)

    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? doc.scrollTop / max : 0)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      mq.removeEventListener("change", onMq)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  if (reduceMotion) return null

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-primary-bright to-secondary"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  )
}
