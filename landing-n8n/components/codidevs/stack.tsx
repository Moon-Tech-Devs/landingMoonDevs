import { Workflow, Brain, Plug } from "lucide-react"
import { TechCarousel } from "./tech-carousel"

const tools = [
  {
    icon: Workflow,
    name: "n8n",
    description: "Automatización de flujos auto-hospedada y de código abierto.",
    tag: "Orquestación",
  },
  {
    icon: Brain,
    name: "OpenAI",
    description: "Modelos de frontera para razonamiento, copilots y agentes.",
    tag: "Inteligencia",
  },
  {
    icon: Plug,
    name: "APIs a la medida",
    description: "SDKs tipados y webhooks que conectan tus sistemas internos.",
    tag: "Integración",
  },
]

export function Stack() {
  return (
    <section id="stack" className="relative border-y border-border py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-dot opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">— El Stack</span>
          <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-tighter sm:text-5xl">
            Un toolchain refinado, ensamblado con intención.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            No perseguimos modas. Nos comprometemos con un stack acotado para que
            cada sistema que entregamos sea observable, mantenible y aburrido —
            en el mejor sentido.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {tools.map((t) => (
            <article
              key={t.name}
              className="border-glow group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_oklch(1_0_0/0.05)_inset,0_8px_24px_oklch(0_0_0/0.4)] transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-accent/10">
                  <t.icon className="size-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {t.tag}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{t.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {t.description}
              </p>

              {/* Corner glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Auto-scrolling tech carousel with edge fade */}
        <div className="mt-12 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Tecnologías que usamos
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 sm:inline">
              + 30 integraciones más
            </span>
          </div>
          <TechCarousel />
        </div>
      </div>
    </section>
  )
}
