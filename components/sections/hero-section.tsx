"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { projects, siteConfig } from "@/data"
import { easeOutExpo } from "@/components/ui/motion"

/** Tech badges drawn only from stacks present in real projects / site copy */
const HERO_TECH = [
  "React",
  "Next.js",
  "Laravel",
  "React Native",
  "Express.js",
  "Tailwind CSS",
] as const

export function HeroSection() {
  const reduce = useReducedMotion()
  const projectCount = projects.length

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/bg/bg_hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/75" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div
          className="animate-ambient-glow pointer-events-none absolute -right-[15%] top-[10%] h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px] sm:h-[480px] sm:w-[480px]"
        />
        <div
          className="animate-ambient-glow-delayed pointer-events-none absolute -left-[10%] bottom-[5%] h-[280px] w-[280px] rounded-full bg-secondary/10 blur-[120px] sm:h-[400px] sm:w-[400px]"
        />
      </div>

      <div className="container-ln relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="label-ln">{siteConfig.availability}</span>
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: easeOutExpo }}
              className="mt-6 font-display text-lg font-semibold tracking-tight sm:text-xl"
            >
              <span className="text-foreground">Nawfal </span>
              <span className="gradient-text">ADDAOUI</span>
            </motion.p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-foreground-muted">
              {siteConfig.title}
            </p>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: easeOutExpo }}
              className="heading-display mt-6 max-w-xl leading-[0.95]"
            >
              <span className="block text-foreground">Des idées</span>
              <span className="block gradient-text">en applications</span>
              <span className="block text-foreground">qui comptent.</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: easeOutExpo }}
              className="body-lg mt-5 max-w-lg"
            >
              Je conçois et développe des solutions web et mobiles modernes,
              performantes et sur mesure, avec React, Next.js, Laravel et React
              Native.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: easeOutExpo }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href="/projects"
                className="gradient-btn glow-sm inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-mono text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border-strong bg-card/40 px-7 py-3.5 font-mono text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-white/5"
              >
                Me contacter
              </Link>
            </motion.div>

            <motion.ul
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: easeOutExpo }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {HERO_TECH.map((tech) => (
                <li key={tech} className="chip-muted">
                  {tech}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: easeOutExpo }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:max-w-md"
            >
              <Stat value={`${projectCount}`} label="Projets" />
              <Stat value="4" label="Expériences" />
              <Stat value="Freelance" label="Disponible" />
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:max-w-none"
          >
            <div className="glow-box relative overflow-hidden rounded-2xl border border-border bg-card p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={siteConfig.portrait}
                  alt={`Portrait de ${siteConfig.fullName}`}
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  quality={80}
                />
              </div>
            </div>
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-foreground sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
        {label}
      </p>
    </div>
  )
}
