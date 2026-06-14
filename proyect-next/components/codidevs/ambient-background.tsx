"use client"

import React, { useEffect, useRef } from "react"
import { useReducedEffects } from "@/lib/use-reduced-effects"

export function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedEffects()

  useEffect(() => {
    if (reduced) return

    const container = containerRef.current
    if (!container) return

    const hoverQuery = window.matchMedia("(hover: hover)")
    if (!hoverQuery.matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [reduced])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 opacity-[0.045]" />
      <div className="mesh-radial absolute inset-0 opacity-40" />

      {!reduced && (
        <>
          <div className="bg-dot absolute inset-0 opacity-[0.03]" />

          <div
            className="ambient-mouse-grid absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none md:opacity-100"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(29, 155, 82, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(29, 155, 82, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "56px 56px",
              WebkitMaskImage:
                "radial-gradient(350px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)",
              maskImage:
                "radial-gradient(350px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)",
            }}
          />

          <div className="ambient-aurora absolute -top-40 left-[14%] h-72 w-72 rounded-full bg-primary/15 blur-[100px] animate-aurora-1" />
          <div className="ambient-aurora absolute bottom-[5%] right-[-5%] h-80 w-80 rounded-full bg-accent/6 blur-[120px] animate-aurora-2" />
        </>
      )}
    </div>
  )
}
