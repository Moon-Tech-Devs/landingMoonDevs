"use client"

import { useEffect, useState } from "react"
import { Sparkles, Workflow, Braces } from "lucide-react"
import { cn } from "@/lib/utils"

type Segment = {
  id: string
  label: string
  caption: string
  metric: string
  metricLabel: string
  icon: typeof Sparkles
}

const SEGMENTS: Segment[] = [
  {
    id: "agents",
    label: "AI Agents",
    caption: "Agentes que razonan, ejecutan y aprenden de cada ticket.",
    metric: "24/7",
    metricLabel: "ejecución autónoma",
    icon: Sparkles,
  },
  {
    id: "n8n",
    label: "n8n Flows",
    caption: "Workflows visuales conectados a tu stack en menos de una semana.",
    metric: "120+",
    metricLabel: "integraciones nativas",
    icon: Workflow,
  },
  {
    id: "apis",
    label: "APIs",
    caption: "Endpoints a la medida con auth, rate-limit y SLA propios.",
    metric: "99.94%",
    metricLabel: "uptime medido",
    icon: Braces,
  },
]

const CYCLE_MS = 3200

export function VideoTimeline() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % SEGMENTS.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  const current = SEGMENTS[active]

  return (
    <section
      id="motor"
      className="relative overflow-hidden px-4 py-20 sm:py-28 lg:py-36"
    >
      {/* Section ambient mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/2 top-1/2 size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.22_152/0.07)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">
        {/* Eyebrow */}
        <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="size-1 rounded-full bg-accent animate-pulse-glow" />
          Codidevs Engine
        </div>

        {/* Pill stage */}
        <div
          className="relative w-full max-w-[640px]"
          style={{ perspective: "1400px" }}
        >
          {/* Floor halo */}
          <div
            aria-hidden="true"
            className="animate-halo pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-2 h-24 w-[78%] rounded-[100%] bg-accent/35 blur-3xl"
          />
          {/* Soft shadow under */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 h-12 w-[60%] rounded-[100%] bg-black/80 blur-2xl"
          />

          {/* The hardware pill */}
          <div className="animate-float relative">
            <div
              className="relative flex items-stretch gap-0 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.22 0.005 150) 0%, oklch(0.13 0.005 150) 45%, oklch(0.05 0 0) 100%)",
                boxShadow: [
                  // crisp top inner highlight
                  "0 1px 0 0 oklch(1 0 0 / 0.18) inset",
                  // bottom inner shade
                  "0 -1px 0 0 oklch(0 0 0 / 0.9) inset",
                  // outer chrome ring
                  "0 0 0 1px oklch(0.32 0.005 150)",
                  // ambient drop shadow
                  "0 24px 60px -12px oklch(0 0 0 / 0.85)",
                  // emerald rim glow
                  "0 0 60px -10px oklch(0.82 0.22 152 / 0.45)",
                ].join(", "),
              }}
            >
              {/* Top reflective sheen */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
              {/* Travelling sweep light on bezel */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
              >
                <span className="animate-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
              </span>

              {/* Sliding active indicator */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 bottom-1.5 hidden rounded-full transition-[left] duration-[700ms] ease-[cubic-bezier(0.65,0,0.35,1)] sm:block"
                style={{
                  width: `calc((100% - 0.75rem) / ${SEGMENTS.length})`,
                  left: `calc(${active} * (100% - 0.75rem) / ${SEGMENTS.length} + 0.375rem)`,
                  background:
                    "linear-gradient(180deg, oklch(0.18 0.04 152) 0%, oklch(0.10 0.02 152) 100%)",
                  boxShadow: [
                    "0 0 0 1px oklch(0.82 0.22 152 / 0.35) inset",
                    "0 1px 0 0 oklch(1 0 0 / 0.12) inset",
                    "0 -1px 0 0 oklch(0 0 0 / 0.6) inset",
                    "0 0 24px oklch(0.82 0.22 152 / 0.45)",
                  ].join(", "),
                }}
              />

              {SEGMENTS.map((s, i) => {
                const Icon = s.icon
                const isActive = i === active
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative z-10 flex min-h-11 min-w-[128px] items-center justify-center gap-2 rounded-full px-3 py-2.5 text-xs transition-colors duration-300 sm:flex-1 sm:min-w-0 sm:px-5 sm:py-3.5 sm:text-sm",
                      isActive
                        ? "text-foreground"
                        : "text-foreground/45 hover:text-foreground/75",
                    )}
                    aria-pressed={isActive}
                  >
                    <Icon
                      className={cn(
                        "size-4 transition-colors duration-300",
                        isActive ? "text-accent" : "text-foreground/55",
                      )}
                      strokeWidth={1.6}
                    />
                    <span className="font-medium tracking-tight">
                      {s.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:mt-12">
            {SEGMENTS.map((s, i) => (
              <span
                key={s.id}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === active
                    ? "w-8 bg-accent"
                    : "w-1.5 bg-foreground/15",
                )}
              />
            ))}
          </div>
        </div>

        {/* Caption that swaps with the active state */}
        <div className="mt-8 grid max-w-2xl gap-5 text-center sm:mt-14 sm:gap-6">
          <h2 className="text-balance text-2xl font-medium tracking-tighter sm:text-5xl">
            Tu pipeline tiene{" "}
            <span className="italic text-accent">tres motores</span>.
          </h2>
          <div className="relative mx-auto h-14 w-full max-w-xl sm:h-12">
            {SEGMENTS.map((s, i) => (
              <p
                key={s.id}
                className={cn(
                  "absolute inset-0 text-pretty text-sm text-foreground/65 transition-all duration-500 sm:text-base",
                  i === active
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0",
                )}
                aria-hidden={i !== active}
              >
                {s.caption}
              </p>
            ))}
          </div>

          {/* Metric strip */}
          <div className="mx-auto mt-2 flex w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-border bg-card/60 px-1 py-1 backdrop-blur sm:w-auto sm:flex-nowrap sm:divide-x sm:rounded-full">
            {SEGMENTS.map((s, i) => (
              <div
                key={s.id}
                className={cn(
                  "flex items-baseline gap-2 px-3 py-2 transition-opacity sm:px-5",
                  i === active ? "opacity-100" : "opacity-50",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-sm font-medium tracking-tight",
                    i === active ? "text-accent" : "text-foreground/70",
                  )}
                >
                  {s.metric}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
                  {s.metricLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
