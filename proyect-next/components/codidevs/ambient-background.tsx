"use client"

import React, { useEffect, useRef } from "react"

export function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

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
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Moving dynamic mesh gradient (slow color shifts) */}
      <div className="mesh-radial absolute inset-0 opacity-70" />

      {/* Base static grid pattern (very faint for slate texture) */}
      <div className="bg-grid absolute inset-0 opacity-[0.03]" />

      {/* Base static dot pattern */}
      <div className="bg-dot absolute inset-0 opacity-[0.04]" />

      {/* Interactive mouse-following spotlight grid highlight */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none md:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.55 0.22 285 / 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.55 0.22 285 / 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          WebkitMaskImage: "radial-gradient(350px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)",
          maskImage: "radial-gradient(350px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)"
        }}
      />

      {/* Interactive mouse-following spotlight dot overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none md:opacity-100"
        style={{
          backgroundImage: `radial-gradient(oklch(0.58 0.16 200 / 0.3) 1.5px, transparent 1.5px)`,
          backgroundSize: "22px 22px",
          WebkitMaskImage: "radial-gradient(220px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)",
          maskImage: "radial-gradient(220px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%)"
        }}
      />

      {/* Ambient mouse spotlight aura glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none md:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), oklch(0.55 0.22 285 / 0.05) 0%, oklch(0.58 0.16 200 / 0.02) 50%, transparent 100%)`
        }}
      />

      {/* Subtle scan-lines for industrial texture */}
      <div className="scan-lines absolute inset-0 opacity-[0.06]" />

      {/* Floating dynamic auroras */}
      <div className="absolute -top-40 left-[14%] h-80 w-80 rounded-full bg-primary/20 blur-[120px] animate-aurora-1" />
      <div className="absolute top-[24%] right-[-8%] h-[34rem] w-[34rem] rounded-full bg-accent/8 blur-[150px] animate-aurora-2" />
      <div className="absolute bottom-[10%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/6 blur-[140px] animate-aurora-3" />
    </div>
  )
}
