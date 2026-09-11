"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { experiences } from "@/data"
import { FadeIn, easeOutExpo } from "@/components/ui/motion"
import type { Experience } from "@/lib/types"

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)
  const latest = experiences[0]
  const older = experiences.slice(1)
  const remaining = older.length

  return (
    <section id="experience" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-16 text-center">
          <p className="label-ln">Parcours</p>
          <h2 className="heading-lg mt-2">Expérience professionnelle</h2>
        </FadeIn>

        <div className="timeline-thread relative mx-auto max-w-3xl space-y-8 sm:space-y-10">
          {latest && <ExperienceCard exp={latest} index={0} />}

          <AnimatePresence initial={false}>
            {showAll &&
              older.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, height: 0, y: -12 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: easeOutExpo, delay: i * 0.05 }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 sm:pb-10">
                    <ExperienceCard exp={exp} index={i + 1} />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {remaining > 0 && (
          <FadeIn className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border-strong px-6 py-3 font-mono text-sm text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
            >
              {showAll ? (
                <>
                  Voir moins <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Voir plus ({remaining}) <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience
  index: number
}) {
  const isActive = index === 0 || exp.current
  const isInternal = exp.link?.startsWith("/")

  return (
    <div className="group relative">
      <motion.div
        className={`timeline-node z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background ${
          isActive
            ? "border-primary glow-sm"
            : "border-foreground-muted/40 group-hover:border-primary"
        }`}
        whileHover={{ scale: 1.15 }}
      >
        <motion.div
          className={`h-2 w-2 rounded-full ${
            isActive
              ? "bg-primary"
              : "bg-foreground-muted/40 group-hover:bg-primary"
          }`}
          animate={
            isActive
              ? { scale: [1, 1.35, 1], opacity: [1, 0.7, 1] }
              : undefined
          }
          transition={
            isActive
              ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        />
      </motion.div>

      <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            {exp.contractType && (
              <span className="chip-mint mb-2 inline-block">
                {exp.contractType}
              </span>
            )}
            <h3 className="heading-sm">{exp.role}</h3>
            <p className="label-md-ln mt-1 text-primary">{exp.company}</p>
          </div>
          <span className="w-fit shrink-0 rounded-full bg-muted px-4 py-1.5 font-mono text-xs text-foreground-muted">
            {exp.period}
          </span>
        </div>

        <p className="body-md">{exp.description}</p>

        {exp.highlights && exp.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {exp.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-foreground-muted"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span key={tech} className="chip-muted">
              {tech}
            </span>
          ))}
        </div>

        {exp.link && (
          <Link
            href={exp.link}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            className="label-md-ln mt-4 inline-flex items-center gap-2 text-primary hover:underline"
          >
            {isInternal ? "Voir le projet" : "Voir le travail"}{" "}
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}
