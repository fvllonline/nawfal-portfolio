"use client"

import {
  Zap,
  BarChart3,
  Headphones,
  Cloud,
  ShoppingBag,
  CreditCard,
  LayoutDashboard,
  Smartphone,
  Calendar,
  Shield,
  Palette,
  Users,
  FileText,
  Building2,
  Coffee,
  Watch,
  Sparkles,
  Monitor,
  Server,
  type LucideIcon,
} from "lucide-react"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import type { ProjectFeature } from "@/lib/types"

const featureIcons: Record<string, LucideIcon> = {
  zap: Zap,
  chart: BarChart3,
  headphones: Headphones,
  cloud: Cloud,
  "shopping-bag": ShoppingBag,
  "credit-card": CreditCard,
  "layout-dashboard": LayoutDashboard,
  smartphone: Smartphone,
  calendar: Calendar,
  shield: Shield,
  palette: Palette,
  users: Users,
  "file-text": FileText,
  building: Building2,
  coffee: Coffee,
  watch: Watch,
  sparkles: Sparkles,
  monitor: Monitor,
  server: Server,
}

export function ProjectFeatures({ features }: { features: ProjectFeature[] }) {
  return (
    <FadeIn>
      <article>
        <h2 className="heading-lg mb-6 text-primary">Fonctionnalités clés</h2>
        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon] ?? Sparkles
            return (
              <StaggerItem key={feature.title}>
                <div className="glass-card glass-card-hover flex h-full items-start gap-4 rounded-2xl p-6">
                  <span className="flex shrink-0 rounded-full bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="heading-sm text-lg">{feature.title}</h3>
                    <p className="body-md mt-1">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </article>
    </FadeIn>
  )
}
