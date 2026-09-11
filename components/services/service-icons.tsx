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
import type { Service } from "@/lib/types"
import type { ComponentType, SVGProps } from "react"

/** Lightweight WordPress mark — avoids pulling react-icons into the services chunk */
function WordpressIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18.5c-1.207 0-2.352-.255-3.39-.715l4.67-13.55c.52.06 1.05.1 1.596.1.62 0 1.22-.05 1.806-.12l1.92 5.72c.06.18.09.37.09.56 0 .7-.38 1.34-.99 1.66l-3.48 1.85c-.21.11-.34.33-.34.57 0 .36.29.65.65.65h6.55A8.48 8.48 0 0 1 12 20.5zM4.55 12c0-1.51.45-2.91 1.22-4.08l3.66 10.03A8.45 8.45 0 0 1 4.55 12zm13.67-5.53A8.45 8.45 0 0 0 12 3.5c-.9 0-1.77.14-2.59.4l4.34 12.6 2.66-1.41c.25-.13.4-.39.4-.67 0-.14-.04-.28-.11-.4l-2.48-7.55z" />
    </svg>
  )
}

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
  wordpress: WordpressIcon,
  server: Server,
  "message-square": MessageSquare,
}
