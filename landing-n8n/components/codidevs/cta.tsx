import { ArrowUpRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-glow relative overflow-hidden rounded-3xl border border-border bg-card/40 p-10 sm:p-16 backdrop-blur-md">
          <div
            className="pointer-events-none absolute inset-0 mesh-radial opacity-90"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-32 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="size-3 text-accent" />
              Auditoría AI gratis · 30 min
            </span>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-medium tracking-tighter sm:text-6xl lg:text-[72px] lg:leading-[0.95]">
              Deja de escalar{" "}
              <span className="italic font-light text-muted-foreground">contratando</span>.
              <br />
              Empieza a escalar <span className="text-accent">código</span>.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Cuéntanos cuál es tu proceso manual más doloroso. Te devolvemos un
              blueprint de automatización de una página en 48 horas — sin compromiso,
              sin decks.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_8px_24px_oklch(0.82_0.22_152/0.35)] transition-transform hover:-translate-y-px"
              >
                Reservar auditoría
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.02] px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.05]"
              >
                hello@codidevs.com
              </a>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
              Operando a nivel global · Remote-first desde 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
