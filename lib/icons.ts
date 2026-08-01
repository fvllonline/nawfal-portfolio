import type { LucideIcon } from "lucide-react"
import {
  Code,
  Server,
  Smartphone,
  Palette,
  Monitor,
  Database,
  MessageSquare,
  Zap,
  Users,
  Lightbulb,
  Globe,
  Shield,
  Github,
  Linkedin,
  Mail,
  Phone,
  Terminal,
} from "lucide-react"

/** Maps string icon keys from data files to Lucide components */
export const iconMap = {
  code: Code,
  server: Server,
  smartphone: Smartphone,
  palette: Palette,
  wordpress: Monitor, // Lucide has no WordPress; Monitor used as stand-in (override in UI if needed)
  monitor: Monitor,
  database: Database,
  "message-square": MessageSquare,
  zap: Zap,
  users: Users,
  lightbulb: Lightbulb,
  globe: Globe,
  shield: Shield,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  terminal: Terminal,
} as const satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconMap

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name]
}
