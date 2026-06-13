"use client"

import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useReducedEffects } from "@/lib/use-reduced-effects"

type SpotlightCardProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  [key: string]: any
}

export function SpotlightCard({
  children,
  className,
  as: Component = "div",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const reduced = useReducedEffects()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const showSpotlight = !reduced && isHovered

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !reduced && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card/72 p-6 shadow-[0_8px_30px_oklch(0_0_0/0.02)] backdrop-blur-sm transition-all duration-300 max-md:bg-card/95 max-md:backdrop-blur-none",
        className,
      )}
      {...props}
    >
      {showSpotlight && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(29, 155, 82, 0.08) 0%, rgba(60, 159, 90, 0.03) 50%, transparent 100%)`,
          }}
        />
      )}

      {showSpotlight && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(130px circle at ${coords.x}px ${coords.y}px, rgba(29, 155, 82, 0.35) 0%, rgba(60, 159, 90, 0.3) 60%, transparent 100%)`,
            maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {!showSpotlight && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl border border-black/[0.02]"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">{children}</div>
    </Component>
  )
}
