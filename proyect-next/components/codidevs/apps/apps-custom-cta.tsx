"use client"

import { MessageSquare, ArrowUpRight, Code2, Rocket, Smartphone, ShieldCheck } from "lucide-react"
import { WA_APPS_COTIZAR } from "@/lib/whatsapp-links"

export function AppsCustomCta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card/40 py-20 md:py-28">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-[400px] w-full max-w-4xl -translate-x-1/2 opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(29, 155, 82, 0.5) 0%, rgba(37, 99, 235, 0.3) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
          <Code2 className="size-3.5" />
          <span>Mobile Engineering Services</span>
        </div>

        <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          ¿Tenés una idea o querés digitalizar tu empresa con una{" "}
          <span className="bg-gradient-to-r from-[#1D9B52] to-[#2563EB] bg-clip-text text-transparent">
            App Móvil a medida
          </span>
          ?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Aplicamos los mismos estándares de calidad, arquitectura offline y diseño interactivo que usamos en nuestros propios productos para crear la aplicación de tu negocio.
        </p>

        {/* Benefits Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Smartphone className="size-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-foreground">Multiplataforma Nativo</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Desarrollo en Flutter y React Native con rendimiento fluido a 60/120fps en iOS y Android.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
              <Rocket className="size-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-foreground">Publicación en Tiendas</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Nos encargamos del proceso completo de revisión, políticas y despliegue en Google Play y App Store.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-foreground">Seguridad y APIs</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Integración segura con bases de datos, pasarelas de pago, autenticación y modo offline.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WA_APPS_COTIZAR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] sm:w-auto"
          >
            <MessageSquare className="size-4" />
            <span>Cotizar mi App por WhatsApp</span>
            <ArrowUpRight className="size-4 opacity-80" />
          </a>

          <a
            href="/#formulario"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98] sm:w-auto"
          >
            <span>Ver otros servicios de software</span>
          </a>
        </div>
      </div>
    </section>
  )
}
