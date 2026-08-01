"use client"

import {
  Code,
  Server,
  Smartphone,
  Palette,
  Monitor,
  Database,
  MessageSquare,
} from "lucide-react"
import { FaWordpress } from "react-icons/fa"
import { services } from "@/data"
import { FadeIn, Stagger, StaggerItem, HoverLift } from "@/components/ui/motion"
import type { Service } from "@/lib/types"
import type { ComponentType } from "react"

const serviceIcons: Record<
  Service["icon"],
  ComponentType<{ className?: string }>
> = {
  code: Code,
  server: Server,
  smartphone: Smartphone,
  palette: Palette,
  wordpress: FaWordpress,
  monitor: Monitor,
  database: Database,
  "message-square": MessageSquare,
}

export function ServicesSection() {
  return (
    <section id="services" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-16 text-center">
          <p className="label-ln">Capabilities</p>
          <h2 className="heading-lg mt-2">Specialized Expertise</h2>
          <p className="body-md mx-auto mt-4 max-w-2xl">
            Comprehensive web development services to bring your ideas to life
            with modern technologies and best practices.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <StaggerItem key={service.id}>
                <HoverLift className="h-full">
                  <div className="glass-card flex h-full flex-col rounded-2xl border border-border p-6 transition-colors hover:border-primary/40">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="heading-sm text-lg">{service.title}</h3>
                    <p className="body-md mt-2 flex-1">{service.description}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
