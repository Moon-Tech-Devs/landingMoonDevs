"use client"

import { Smartphone, Sparkles, ShieldCheck, Gamepad2, ArrowDown } from "lucide-react"

export function AppsHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-full max-w-5xl -translate-x-1/2 opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(29, 155, 82, 0.45) 0%, rgba(59, 130, 246, 0.25) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-md">
          <Sparkles className="size-3.5 animate-pulse" />
          <span>Mobile Lab & Productos Propios CodiDevs</span>
        </div>

        {/* Main Heading */}
        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Apps móviles construidas con{" "}
          <span className="bg-gradient-to-r from-[#1D9B52] via-[#3C9F5A] to-[#2563EB] bg-clip-text text-transparent">
            ingeniería de alto impacto
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          No solo desarrollamos para clientes: creamos y publicamos nuestros propios productos en{" "}
          <span className="font-semibold text-foreground">Google Play Store</span>. Arquitecturas offline-first,
          privacidad total y mecánicas de gamificación probadas en producción.
        </p>

        {/* Quick highlight pillars */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-3.5 text-left shadow-sm backdrop-blur-sm">
            <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Gamepad2 className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Gamificación Real</p>
              <p className="text-[11px] text-muted-foreground">Mecánicas RPG & Hábitos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-3.5 text-left shadow-sm backdrop-blur-sm">
            <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">100% Offline-First</p>
              <p className="text-[11px] text-muted-foreground">Privacidad y cero anuncios</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-3.5 text-left shadow-sm backdrop-blur-sm">
            <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Smartphone className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Google Play Store</p>
              <p className="text-[11px] text-muted-foreground">Apps activas y verificadas</p>
            </div>
          </div>
        </div>

        {/* Navigation scroll prompt */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
          <span>Explora nuestras aplicaciones a continuación</span>
          <ArrowDown className="size-3.5 animate-bounce text-primary" />
        </div>
      </div>
    </section>
  )
}
