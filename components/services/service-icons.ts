import {
  Globe,
  Layout,
  MessageSquare,
  Palette,
  RefreshCw,
  Search,
  Server,
  ShoppingBag,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { FaWordpress } from "react-icons/fa"
import type { Service } from "@/lib/types"
import type { ComponentType } from "react"

export const serviceIcons: Record<
  Service["icon"],
  ComponentType<{ className?: string }> | LucideIcon
> = {
  globe: Globe,
  "shopping-bag": ShoppingBag,
  layout: Layout,
  smartphone: Smartphone,
  search: Search,
  refresh: RefreshCw,
  wrench: Wrench,
  palette: Palette,
  wordpress: FaWordpress,
  server: Server,
  "message-square": MessageSquare,
}
