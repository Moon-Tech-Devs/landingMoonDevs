"use client"

import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card/72 p-6 shadow-[0_8px_30px_oklch(0_0_0/0.02)] backdrop-blur-sm transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Background glow following mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, oklch(0.55 0.22 285 / 0.08) 0%, oklch(0.58 0.16 200 / 0.03) 50%, transparent 100%)`,
          }}
        />
      )}
      
      {/* Border glow following mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(130px circle at ${coords.x}px ${coords.y}px, oklch(0.55 0.22 285 / 0.35) 0%, oklch(0.58 0.16 200 / 0.3) 60%, transparent 100%)`,
            maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Default border fallback when not hovered */}
      {!isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl border border-black/[0.02]"
          aria-hidden="true"
        />
      )}
      
      <div className="relative z-10">{children}</div>
    </Component>
  )
}
