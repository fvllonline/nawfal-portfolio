"use client"

import Image from "next/image"
import { skillPills, softSkills } from "@/data"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"

const terminalLines = [
  "$ nawfal --stack",
  "> React · Next.js · Laravel",
  "> React Native · Express",
  "> Building products @ Casablanca",
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-ln relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/bg/bg_competences.png"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/80" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-ln relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <FadeIn>
            <p className="label-ln">Stack</p>
            <h2 className="heading-lg mt-3">
              Outils &{" "}
              <span className="text-primary">technologies</span>
            </h2>
            <p className="body-md mt-4 max-w-xl">
              Frontend, backend et mobile : les technologies réellement utilisées
              sur mes projets et missions, du prototype au déploiement.
            </p>
          </FadeIn>

          <Stagger className="mt-8 flex flex-wrap gap-2.5" stagger={0.04}>
            {skillPills.map((skill) => (
              <StaggerItem key={skill}>
                <span className="inline-flex rounded-full border border-border bg-card/60 px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:text-sm">
                  {skill}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.15} className="mt-8">
            <p className="label-ln mb-3">Soft skills</p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s.name} className="chip-mint">
                  {s.name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="lg:col-span-5">
          <div className="glass-card overflow-hidden rounded-2xl border border-border">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/40" />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
                terminal
              </span>
            </div>
            <pre className="space-y-2 p-5 font-mono text-xs leading-relaxed text-foreground-muted sm:text-sm">
              {terminalLines.map((line) => (
                <code
                  key={line}
                  className={
                    line.startsWith("$")
                      ? "block text-primary"
                      : "block text-foreground-muted"
                  }
                >
                  {line}
                </code>
              ))}
            </pre>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
