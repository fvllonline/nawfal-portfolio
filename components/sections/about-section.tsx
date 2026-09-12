"use client"

import Image from "next/image"
import Link from "next/link"
import { aboutContent, softSkills, languages } from "@/data"
import {
  FadeIn,
  Stagger,
  StaggerItem,
  AnimatedBar,
} from "@/components/ui/motion"

export function AboutSection() {
  return (
    <section id="about" className="section-ln">
      <div className="container-ln grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn direction="left" className="mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:max-w-none">
          <div className="glass-card rounded-2xl p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={aboutContent.portrait}
                alt="Nawfal Addaoui, développeur Full-Stack à Casablanca"
                fill
                loading="lazy"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 40vw"
                quality={75}
              />
            </div>
          </div>
        </FadeIn>

        <div className="space-y-6 lg:col-span-7">
          <FadeIn direction="right">
            <p className="label-ln">{aboutContent.label}</p>
            <h2 className="heading-lg mt-2">
              {aboutContent.heading}{" "}
              <span className="italic text-primary">
                {aboutContent.headingAccent}
              </span>
              .
            </h2>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-4">
              <p className="body-lg">
                Je suis Nawfal Addaoui, développeur Full-Stack basé à Casablanca
                (Maroc). Je réalise des{" "}
                <Link
                  href="/services/website"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  sites vitrines
                </Link>{" "}
                et des{" "}
                <Link
                  href="/services/web_app"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  applications web
                </Link>{" "}
                pour des clients à Casablanca, avec React, Next.js, Laravel et
                React Native — du prototype au déploiement.
              </p>
              <p className="body-lg">{aboutContent.paragraphs[1]}</p>
              <p className="body-lg">
                Disponible en freelance pour{" "}
                <Link
                  href="/services/ecommerce"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  e-commerce
                </Link>
                ,{" "}
                <Link
                  href="/services/mobile_app"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  applications mobiles
                </Link>{" "}
                et{" "}
                <Link
                  href="/services/api_backend"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  APIs
                </Link>
                . Au Maroc ou en remote, je porte le projet de bout en bout —{" "}
                <Link
                  href="/#contact"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  demander un devis
                </Link>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2">
              {aboutContent.skillBars.map((bar, i) => (
                <div key={bar.name} className="space-y-2">
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-foreground">{bar.name}</span>
                    <span className="text-primary">{bar.level}%</span>
                  </div>
                  <AnimatedBar value={bar.level} delay={0.2 + i * 0.1} />
                </div>
              ))}
            </div>
          </FadeIn>

          <Stagger className="flex flex-wrap gap-2 pt-2" stagger={0.06}>
            {softSkills.map((s) => (
              <StaggerItem key={s.name}>
                <span className="chip-mint transition-transform hover:scale-105">
                  {s.name}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.2}>
            <div className="mt-4 max-w-md space-y-5">
              <p className="label-ln">Langues</p>
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="mb-2 flex justify-between font-mono text-sm">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-primary">{lang.label}</span>
                  </div>
                  <AnimatedBar value={lang.level} delay={0.15 + i * 0.08} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
