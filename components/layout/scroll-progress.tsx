"use client"

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"

/** Thin mint progress bar at top of viewport */
export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  if (reduce) return null

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-primary-bright to-secondary"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
