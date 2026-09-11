"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import { motion, useReducedMotion } from "framer-motion"
import { siteConfig } from "@/data"
import { easeOutExpo } from "@/components/ui/motion"

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-24 sm:pb-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herobg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <motion.div
        className="pointer-events-none absolute -right-[20%] -top-[10%] h-[320px] w-[320px] rounded-full bg-primary/10 blur-[120px] sm:-right-[10%] sm:-top-[20%] sm:h-[500px] sm:w-[500px]"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-[10%] -left-[20%] h-[280px] w-[280px] rounded-full bg-secondary/10 blur-[120px] sm:-bottom-[20%] sm:-left-[10%] sm:h-[500px] sm:w-[500px]"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container-ln relative z-10 mx-auto flex max-w-3xl justify-center">
        <div className="flex w-full flex-col items-center space-y-5 text-center sm:space-y-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="label-ln">{siteConfig.availability}</span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOutExpo }}
            className="heading-display leading-[0.95]"
          >
            <span className="block">NAWFAL ADDAOUI</span>
          </motion.h1>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: easeOutExpo }}
            className="heading-md text-foreground-muted"
          >
            {siteConfig.title}
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: easeOutExpo }}
            className="body-lg mx-auto max-w-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42, ease: easeOutExpo }}
            className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/#projects"
                className="gradient-bg glow-sm flex min-h-12 w-full items-center justify-center rounded-xl px-8 py-4 font-mono text-sm text-white sm:inline-flex sm:w-auto"
              >
                Voir les projets
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/#contact"
                className="flex min-h-12 w-full items-center justify-center rounded-xl border border-border-strong bg-background/30 px-8 py-4 font-mono text-sm text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-white/5 sm:inline-flex sm:w-auto"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex justify-center gap-5 pt-2"
          >
            <SocialIcon href={siteConfig.github} label="GitHub">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/nawfal-addaoui-40b651248/"
              label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={`mailto:${siteConfig.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/naoufal.addaoui.3"
              label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/fvllonline/"
              label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </SocialIcon>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={label}
        className="flex h-11 w-11 items-center justify-center text-foreground-muted transition-colors hover:text-primary"
      >
        {children}
      </Link>
    </motion.div>
  )
}
