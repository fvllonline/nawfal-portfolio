"use client"

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Shared easing — premium, slightly overshoot-free */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
}

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
  direction?: "up" | "left" | "right" | "none" | "scale"
  duration?: number
}

const directionVariants: Record<
  NonNullable<FadeInProps["direction"]>,
  Variants
> = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  none: fadeIn,
  scale: scaleIn,
}

export function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
  direction = "up",
  duration = 0.6,
}: FadeInProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={directionVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  )
}

/** Hover lift for interactive cards */
export function HoverLift({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: easeOutExpo } }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Animated progress bar — fills when in view */
export function AnimatedBar({
  value,
  className,
  delay = 0,
}: {
  value: number
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-muted", className)}>
      <motion.div
        className="glow-sm h-full rounded-full bg-primary"
        initial={{ width: reduce ? `${value}%` : 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: easeOutExpo }}
      />
    </div>
  )
}

/** Page enter transition wrapper */
export function PageTransition({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  )
}
