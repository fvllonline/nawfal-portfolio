"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type WheelEvent as ReactWheelEvent,
} from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Minus,
  Plus,
  X,
  ZoomIn,
} from "lucide-react"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const MIN_ZOOM = 1
const MAX_ZOOM = 4
const ZOOM_STEP = 0.35

type ProjectGalleryProps = {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (!images.length) return null

  return (
    <>
      <FadeIn className="mt-16 md:mt-24">
        <h2 className="heading-lg mb-8 text-primary">Galerie d&apos;interfaces</h2>
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <StaggerItem key={`${src}-${index}`}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="glass-card group relative aspect-square w-full overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Ouvrir la capture ${index + 1} de ${title}`}
              >
                <Image
                  src={src}
                  alt={`Capture ${index + 1} de ${title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/35" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-background/70 text-primary backdrop-blur-md">
                    <Expand className="size-5" aria-hidden />
                  </span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          title={title}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onIndexChange={setActiveIndex}
        />
      )}
    </>
  )
}

type LightboxProps = {
  images: string[]
  title: string
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

function Lightbox({
  images,
  title,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [zoom, setZoom] = useState(MIN_ZOOM)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const lastPoint = useRef({ x: 0, y: 0 })

  const resetView = useCallback(() => {
    setZoom(MIN_ZOOM)
    setOffset({ x: 0, y: 0 })
  }, [])

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length)
    resetView()
  }, [images.length, index, onIndexChange, resetView])

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length)
    resetView()
  }, [images.length, index, onIndexChange, resetView])

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, Number((z + ZOOM_STEP).toFixed(2))))
  }, [])

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, Number((z - ZOOM_STEP).toFixed(2)))
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 })
      return next
    })
  }, [])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft") goPrev()
      if (event.key === "ArrowRight") goNext()
      if (event.key === "+" || event.key === "=") zoomIn()
      if (event.key === "-" || event.key === "_") zoomOut()
      if (event.key === "0") resetView()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [goNext, goPrev, onClose, resetView, zoomIn, zoomOut])

  const onWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.deltaY < 0) zoomIn()
    else zoomOut()
  }

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (zoom <= MIN_ZOOM) return
    dragging.current = true
    lastPoint.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    const dx = event.clientX - lastPoint.current.x
    const dy = event.clientY - lastPoint.current.y
    lastPoint.current = { x: event.clientX, y: event.clientY }
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
  }

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const src = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visionneuse de la galerie ${title}`}
      className="fixed inset-0 z-[100] flex flex-col bg-background/92 backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          {title} · {index + 1} / {images.length}
        </p>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ToolbarButton label="Zoom arrière" onClick={zoomOut} disabled={zoom <= MIN_ZOOM}>
            <Minus className="size-4" />
          </ToolbarButton>
          <button
            type="button"
            onClick={resetView}
            className="min-w-14 rounded-full border border-border bg-card/80 px-2 py-1.5 font-mono text-xs text-foreground transition hover:border-primary/40"
            aria-label="Réinitialiser le zoom"
          >
            {Math.round(zoom * 100)}%
          </button>
          <ToolbarButton label="Zoom avant" onClick={zoomIn} disabled={zoom >= MAX_ZOOM}>
            <Plus className="size-4" />
          </ToolbarButton>
          <ToolbarButton label="Fermer la galerie" onClick={onClose}>
            <X className="size-4" />
          </ToolbarButton>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        {images.length > 1 && (
          <>
            <NavButton
              className="left-2 sm:left-4"
              label="Image précédente"
              onClick={goPrev}
            >
              <ChevronLeft className="size-5" />
            </NavButton>
            <NavButton
              className="right-2 sm:right-4"
              label="Image suivante"
              onClick={goNext}
            >
              <ChevronRight className="size-5" />
            </NavButton>
          </>
        )}

        <div
          className={cn(
            "relative h-full w-full overflow-hidden px-12 py-6 sm:px-16",
            zoom > MIN_ZOOM ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
          )}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDoubleClick={() => {
            if (zoom > MIN_ZOOM) resetView()
            else setZoom(2)
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center transition-transform duration-150 ease-out"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            }}
          >
            {/* Native img keeps original aspect ratio (not cropped) */}
            <img
              src={src}
              alt={`Capture ${index + 1} de ${title}`}
              className="max-h-full max-w-full select-none object-contain shadow-2xl"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <p className="hidden items-center justify-center gap-2 border-t border-border px-4 py-2 text-center text-xs text-muted-foreground sm:flex">
        <ZoomIn className="size-3.5" aria-hidden />
        Molette ou +/− pour zoomer · glisser une fois zoomé · Échap pour fermer
      </p>
    </div>
  )
}

function ToolbarButton({
  children,
  label,
  onClick,
  disabled,
}: {
  children: ReactNode
  label: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex size-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  )
}

function NavButton({
  children,
  label,
  onClick,
  className,
}: {
  children: ReactNode
  label: string
  onClick: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-md transition hover:border-primary/40 hover:text-primary sm:size-11",
        className
      )}
    >
      {children}
    </button>
  )
}
