"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { experiences } from "@/data"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-ln relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/bg/bg_exp.jpg"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/85" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-ln relative z-10">
        <FadeIn className="mb-12 max-w-2xl text-center sm:mb-16 sm:mx-auto">
          <p className="label-ln">Parcours</p>
          <h2 className="heading-lg mt-3">
            Des projets,
            <br />
            des apprentissages,
            <br />
            <span className="text-primary">du concret.</span>
          </h2>
          <p className="body-md mx-auto mt-4 max-w-xl">
            Stages, collaborations et missions freelance ancrés à Casablanca,
            orientés produits web et mobile.
          </p>
        </FadeIn>

        <div className="relative mx-auto max-w-4xl">
          {/* Center line desktop */}
          <div
            className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <Stagger className="space-y-8 md:space-y-12" stagger={0.1}>
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const isInternal = exp.link?.startsWith("/")

              return (
                <StaggerItem key={exp.id}>
                  <article
                    className={cn(
                      "relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0",
                      isLeft ? "md:text-right" : ""
                    )}
                  >
                    {/* Dot */}
                    <span
                      className="absolute left-[0.7rem] top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(0,217,181,0.5)] md:left-1/2"
                      aria-hidden
                    />

                    <div
                      className={cn(
                        "md:col-span-1",
                        isLeft ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8",
                        !isLeft && "md:row-start-1"
                      )}
                    >
                      <div
                        className={cn(
                          "glass-card rounded-2xl border border-border p-5 text-left transition-colors hover:border-primary/35 sm:p-6",
                          isLeft && "md:ml-auto"
                        )}
                      >
                        <div className="mb-3 flex items-start gap-3">
                          {exp.logo && (
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-white sm:h-16 sm:w-16">
                              <Image
                                src={exp.logo}
                                alt={`Logo ${exp.company}`}
                                fill
                                loading="lazy"
                                className="object-contain p-1.5"
                                sizes="64px"
                              />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              {exp.contractType && (
                                <span className="chip-mint">{exp.contractType}</span>
                              )}
                              {exp.current && (
                                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                                  En cours
                                </span>
                              )}
                            </div>
                            <h3 className="heading-sm text-lg leading-snug">
                              {exp.role}
                            </h3>
                            <p className="label-md-ln mt-1 text-primary">
                              {exp.company}
                            </p>
                            <p className="mt-2 font-mono text-xs text-foreground-muted">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                        <p className="body-md mt-3">{exp.description}</p>
                        {exp.highlights && exp.highlights.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {exp.highlights.slice(0, 3).map((item) => (
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
                          {exp.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="chip-muted">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {exp.link && (
                          <Link
                            href={exp.link}
                            target={isInternal ? undefined : "_blank"}
                            rel={
                              isInternal ? undefined : "noopener noreferrer"
                            }
                            className="label-md-ln mt-4 inline-flex items-center gap-2 text-primary hover:underline"
                          >
                            {isInternal ? "Voir le projet" : "Voir le travail"}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Spacer column on alternating side */}
                    <div
                      className={cn(
                        "hidden md:block",
                        isLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                      )}
                      aria-hidden
                    />
                  </article>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
