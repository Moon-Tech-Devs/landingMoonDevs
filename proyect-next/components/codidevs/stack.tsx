"use client"

import React from "react"
import { TechCarousel } from "./tech-carousel"
import { SectionHeader } from "./section-header"

export function Stack() {
  return (
    <section id="stack" className="section-performance relative overflow-hidden border-y border-border bg-card/10 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-dot opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Integraciones"
          title="Nuestra infraestructura de tecnología."
          body="No instalamos herramientas por moda. Integramos las plataformas líderes del mercado para crear sistemas robustos, rápidos y observables."
          centered
          className="mx-auto mb-14"
        />

        <div className="relative">
          <TechCarousel />
        </div>
      </div>
    </section>
  )
}
