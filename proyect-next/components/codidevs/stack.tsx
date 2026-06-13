"use client"

import React from "react"
import { TechCarousel } from "./tech-carousel"

export function Stack() {
  return (
    <section id="stack" className="relative border-y border-border py-20 sm:py-28 overflow-hidden bg-card/10">
      <div
        className="pointer-events-none absolute inset-0 bg-dot opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Intro */}
        <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">— El Stack</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Nuestra infraestructura de tecnología.
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            No instalamos herramientas por moda. Integramos las plataformas líderes del mercado para crear sistemas robustos, rápidos y sobre todo, observables.
          </p>
        </div>

        {/* Dual-row Technology Icon Carousel */}
        <div className="relative">
          <TechCarousel />
        </div>
      </div>
    </section>
  )
}
