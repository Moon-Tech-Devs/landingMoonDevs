"use client"

import {
  Bot,
  GitBranch,
  Layers,
  Gauge,
  ScrollText,
  ShieldCheck,
  Boxes,
  Sparkles,
  Network,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SpotlightCard } from "./spotlight-card"
import { motion } from "framer-motion"

type Cell = {
  icon: typeof Bot
  title: string
  body: string
  tag?: string
  className?: string
  visual?: "agent" | "graph" | "logs" | null
}

const cells: Cell[] = [
  {
    icon: Bot,
    title: "Agentes de IA a la medida",
    body: "Agentes que leen tu documentación, consultan tus herramientas y actúan con barandales.",
    tag: "Destacado",
    className: "md:col-span-2",
    visual: "agent",
  },
  {
    icon: GitBranch,
    title: "Optimización de flujos",
    body: "Auditamos, refactorizamos y endurecemos automatizaciones frágiles hasta volverlas observables.",
    visual: "graph",
  },
  {
    icon: Layers,
    title: "Integración con sistemas legacy",
    body: "Envolvemos SOAP, mainframes y exports CSV en APIs modernas y tipadas.",
  },
  {
    icon: Gauge,
    title: "Performance y SLA",
    body: "Presupuestos de latencia P99, reintentos e idempotencia en cada nodo.",
  },
  {
    icon: ScrollText,
    title: "Observabilidad en tiempo real",
    body: "Logs estructurados, trazas y replay para cada ejecución de cada workflow.",
    className: "md:col-span-2",
    visual: "logs",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad por defecto",
    body: "Patrones listos para SOC2, rotación de secretos, tokens con scope y trazas de auditoría.",
  },
  {
    icon: Boxes,
    title: "Herramientas internas",
    body: "Paneles admin y dashboards de operaciones que envuelven tus procesos más dolorosos.",
  },
  {
    icon: Sparkles,
    title: "RAG y conocimiento",
    body: "Bases vectorizadas que se mantienen frescas con sincronizaciones programadas.",
  },
  {
    icon: Network,
    title: "Orquestación multi-agente",
    body: "Planeadores, ejecutores y críticos comunicándose por buses de mensajes tipados.",
  },
]

export function BentoGrid() {
  return (
    <section id="grid" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-3 text-left">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">— La Grilla</span>
          <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-tighter sm:text-5xl">
            Soluciones, no decks de PowerPoint.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Nueve servicios concretos, cada uno un módulo probado en proyectos
            reales. Los combinamos para que encajen con tu roadmap.
          </p>
        </div>

        <motion.div 
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {cells.map((c) => (
            <motion.div
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className={c.className}
            >
              <BentoCell cell={c} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BentoCell({ cell }: { cell: Cell }) {
  const Icon = cell.icon
  return (
    <SpotlightCard
      as="article"
      className="h-full flex flex-col justify-between text-left p-6"
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-primary/10">
            <Icon className="size-[18px] text-primary" strokeWidth={1.5} />
          </div>
          {cell.tag && (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-primary font-semibold">
              {cell.tag}
            </span>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium tracking-tight">{cell.title}</h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {cell.body}
          </p>
        </div>
      </div>

      {cell.visual && (
        <div className="mt-6">
          {cell.visual === "agent" && <AgentVisual />}
          {cell.visual === "graph" && <GraphVisual />}
          {cell.visual === "logs" && <LogsVisual />}
        </div>
      )}
    </SpotlightCard>
  )
}

function AgentVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background/50 p-4">
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
        <span className="flex size-1.5 rounded-full bg-accent animate-pulse-glow" />
        agent.run() · session_8c2a
      </div>
      <div className="mt-3 space-y-1.5 font-mono text-[11px] leading-relaxed">
        <p className="text-muted-foreground text-left">
          <span className="text-accent">→</span> Plan: clasificar tickets de soporte
        </p>
        <p className="text-muted-foreground text-left">
          <span className="text-accent">→</span> Tool: <span className="text-foreground">search_kb</span>
        </p>
        <p className="text-muted-foreground text-left">
          <span className="text-accent">→</span> Tool: <span className="text-foreground">linear.create_issue</span>
        </p>
        <p className="text-foreground/90 text-left">
          <span className="text-accent">✓</span> Resueltos 14 / 17 tickets en 2.4s
        </p>
      </div>
    </div>
  )
}

function GraphVisual() {
  return (
    <div className="relative h-24 overflow-hidden rounded-xl border border-border bg-background/50">
      <svg viewBox="0 0 200 80" className="h-full w-full">
        <defs>
          <linearGradient id="bg-line" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.72 0.16 200)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M10 60 Q 50 10 100 40 T 190 25"
          stroke="url(#bg-line)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 60 Q 50 10 100 40 T 190 25"
          stroke="oklch(0 0 0 / 0.08)"
          strokeWidth="1"
          fill="none"
          className="animate-flow"
        />
        {[
          [10, 60],
          [60, 28],
          [110, 42],
          [160, 30],
          [190, 25],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3" fill="oklch(0.72 0.16 200)" />
            <circle cx={cx} cy={cy} r="6" fill="oklch(0.72 0.16 200)" opacity="0.25" />
          </g>
        ))}
      </svg>
    </div>
  )
}

function LogsVisual() {
  const rows = [
    { t: "12:04:21", e: "webhook.received", s: "ok" },
    { t: "12:04:21", e: "agent.plan", s: "ok" },
    { t: "12:04:22", e: "openai.completion", s: "ok" },
    { t: "12:04:23", e: "salesforce.upsert", s: "warn" },
    { t: "12:04:23", e: "slack.notify", s: "ok" },
  ]
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background/50 p-3 font-mono text-[11px]">
      <div className="grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-1.5 text-left">
        {rows.map((r, i) => (
          <div key={i} className="contents">
            <span className="text-muted-foreground/80">{r.t}</span>
            <span className="text-foreground/85">{r.e}</span>
            <span
              className={cn(
                "rounded px-1.5 py-0.25 text-[10px] uppercase font-bold text-center",
                r.s === "ok"
                  ? "bg-accent/15 text-accent"
                  : "bg-amber-500/15 text-amber-700",
              )}
            >
              {r.s}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
