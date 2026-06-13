"use client"

import React, { useState, useEffect } from "react"
import {
  Webhook,
  Brain,
  Database,
  GitBranch,
  Send,
  ShieldCheck,
  Sparkles,
  Play,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Node = {
  id: string
  x: number
  y: number
  icon: typeof Webhook
  label: string
  sub: string
  accent?: boolean
}

type Edge = {
  from: string
  to: string
  d: string
}

const nodes: Node[] = [
  { id: "trigger", x: 6, y: 50, icon: Webhook, label: "Webhook", sub: "Trigger" },
  { id: "guard", x: 23, y: 50, icon: ShieldCheck, label: "Auth Guard", sub: "Validar" },
  { id: "ai", x: 43, y: 22, icon: Brain, label: "GPT-4 Agent", sub: "Razonar", accent: true },
  { id: "rag", x: 43, y: 78, icon: Sparkles, label: "RAG Search", sub: "Recuperar" },
  { id: "router", x: 63, y: 50, icon: GitBranch, label: "Router", sub: "Bifurcar" },
  { id: "db", x: 83, y: 22, icon: Database, label: "Postgres", sub: "Persistir" },
  { id: "send", x: 83, y: 78, icon: Send, label: "Slack", sub: "Notificar" },
]

function nodeCenter(id: string) {
  const n = nodes.find((n) => n.id === id)!
  return { x: n.x, y: n.y }
}

// Precompute Bezier path coordinates to avoid offset-path parsing issues
const edges: Edge[] = [
  { from: "trigger", to: "guard", d: "M 6 50 C 14.5 50, 14.5 50, 23 50" },
  { from: "guard", to: "ai", d: "M 23 50 C 33 50, 33 22, 43 22" },
  { from: "guard", to: "rag", d: "M 23 50 C 33 50, 33 78, 43 78" },
  { from: "ai", to: "router", d: "M 43 22 C 53 22, 53 50, 63 50" },
  { from: "rag", to: "router", d: "M 43 78 C 53 78, 53 50, 63 50" },
  { from: "router", to: "db", d: "M 63 50 C 73 50, 73 22, 83 22" },
  { from: "router", to: "send", d: "M 63 50 C 73 50, 73 78, 83 78" },
]

export function WorkflowCanvas() {
  const [simState, setSimState] = useState<"idle" | "running">("idle")
  const [activeNodes, setActiveNodes] = useState<string[]>([])
  const [runningEdges, setRunningEdges] = useState<{ id: string; d: string }[]>([])

  const triggerSimulation = () => {
    if (simState === "running") return
    setSimState("running")

    // Notify ProofDashboard
    window.dispatchEvent(new CustomEvent("trigger-workflow-sim"))

    // Step 1: Webhook active, pulse trigger -> guard
    setActiveNodes(["trigger"])
    setRunningEdges([{ id: "trigger-guard", d: edges[0].d }])

    // Step 2: Guard active, pulse guard -> ai and guard -> rag
    setTimeout(() => {
      setActiveNodes(["guard"])
      setRunningEdges([
        { id: "guard-ai", d: edges[1].d },
        { id: "guard-rag", d: edges[2].d },
      ])
    }, 1000)

    // Step 3: AI and RAG active, pulse ai -> router and rag -> router
    setTimeout(() => {
      setActiveNodes(["ai", "rag"])
      setRunningEdges([
        { id: "ai-router", d: edges[3].d },
        { id: "rag-router", d: edges[4].d },
      ])
    }, 2200)

    // Step 4: Router active, pulse router -> db and router -> send
    setTimeout(() => {
      setActiveNodes(["router"])
      setRunningEdges([
        { id: "router-db", d: edges[5].d },
        { id: "router-send", d: edges[6].d },
      ])
    }, 3400)

    // Step 5: DB and Send active, end pulses
    setTimeout(() => {
      setActiveNodes(["db", "send"])
      setRunningEdges([])
    }, 4500)

    // Step 6: Return to idle
    setTimeout(() => {
      setActiveNodes([])
      setSimState("idle")
    }, 5500)
  }

  return (
    <section id="workflow" className="relative overflow-hidden border-y border-border py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-4">
          <span className="label-mono text-primary/80">— El Canvas</span>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tighter sm:text-5xl">
            Workflows visualizados como infraestructura.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Cada sistema de Codidevs es un grafo de nodos tipados — testables,
            replayables y propiedad de tu equipo desde el día uno.
          </p>
          <button
            onClick={triggerSimulation}
            disabled={simState === "running"}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_oklch(0.65_0.22_285/0.3)] transition-transform hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {simState === "running" ? "Ejecutando simulación..." : "Ejecutar simulación"}
            <span className="flex size-2 items-center justify-center rounded-full bg-accent animate-pulse" />
          </button>
        </div>

        {/* Mobile fallback */}
        <div className="mt-10 grid gap-3 md:hidden">
          {nodes.map((n) => {
            const Icon = n.icon
            const isActive = activeNodes.includes(n.id)
            return (
              <article
                key={`mobile-${n.id}`}
                className={`flex items-center gap-3 rounded-xl border p-3 transition-all duration-300 ${
                  isActive
                    ? "border-accent bg-accent/10 shadow-[0_0_15px_oklch(0.72_0.16_200/0.15)]"
                    : "border-border bg-card/60"
                }`}
              >
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    isActive
                      ? "border-accent bg-accent/20"
                      : n.accent
                      ? "border-primary/30 bg-primary/10"
                      : "border-border bg-white/[0.03]"
                  }`}
                >
                  <Icon
                    className={`size-4 transition-colors ${
                      isActive ? "text-accent" : n.accent ? "text-primary" : "text-foreground"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium tracking-tight">{n.label}</p>
                  <p className="truncate text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {n.sub}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Canvas */}
        <div className="relative mt-12 hidden overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm md:block">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="size-2.5 rounded-full bg-foreground/15" />
                <span className="size-2.5 rounded-full bg-foreground/15" />
                <span className="size-2.5 rounded-full bg-foreground/15" />
              </div>
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                workflows / customer-onboarding.flow
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className={`size-1.5 rounded-full ${simState === "running" ? "bg-accent animate-pulse" : "bg-primary animate-pulse-glow"}`} />
                {simState === "running" ? "simulando" : "en vivo"}
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">v 2.4.0</span>
            </div>
          </div>

          {/* Canvas grid */}
          <div className="relative aspect-[16/9] min-h-[360px] w-full bg-dot">
            {/* Edges (SVG) */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="edge-grad" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="oklch(0.72 0.16 200)" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              {edges.map((e, i) => {
                const a = nodeCenter(e.from)
                const b = nodeCenter(e.to)
                const mx = (a.x + b.x) / 2
                const d = `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`
                return (
                  <g key={i}>
                    <path
                      d={d}
                      stroke="oklch(0 0 0 / 0.06)"
                      strokeWidth="0.4"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d={d}
                      stroke="url(#edge-grad)"
                      strokeWidth="0.5"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                      className="animate-flow"
                      opacity={0.7}
                    />
                  </g>
                )
              })}
            </svg>

            {/* Glowing active pulses travelling along paths */}
            <AnimatePresence>
              {runningEdges.map((re) => (
                <div key={re.id} className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Glowing outer pulse */}
                    <motion.circle
                      r="1.2"
                      fill="oklch(0.72 0.16 200)"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      style={{
                        offsetPath: `path('${re.d}')`,
                        offsetRotate: "auto",
                        filter: "drop-shadow(0 0 5px oklch(0.72 0.16 200 / 0.8))"
                      }}
                    />
                    {/* Inner intense pulse core */}
                    <motion.circle
                      r="0.5"
                      fill="#fff"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      style={{
                        offsetPath: `path('${re.d}')`,
                        offsetRotate: "auto",
                      }}
                    />
                  </svg>
                </div>
              ))}
            </AnimatePresence>

            {/* Nodes */}
            {nodes.map((n) => {
              const isActive = activeNodes.includes(n.id)
              return (
                <CanvasNode
                  key={n.id}
                  node={n}
                  isActive={isActive}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CanvasNode({ node, isActive }: { node: Node; isActive: boolean }) {
  const Icon = node.icon
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: `translate(-50%, -50%) ${isActive ? "scale(1.05)" : "scale(1)"}`
      }}
    >
      <div
        className={`group relative flex w-32 items-center gap-2 rounded-xl border p-2 backdrop-blur-md transition-all duration-300 lg:w-40 lg:gap-2.5 lg:p-2.5 ${
          isActive
            ? "border-accent bg-accent/15 shadow-[0_0_20px_oklch(0.72_0.16_200/0.25)]"
            : "border-border bg-background/80 hover:-translate-y-px"
        }`}
      >
        <div
          className={`flex size-9 items-center justify-center rounded-lg border transition-colors duration-300 ${
            isActive
              ? "border-accent bg-accent/20"
              : node.accent
              ? "border-primary/30 bg-primary/10"
              : "border-border bg-white/[0.03]"
          }`}
        >
          <Icon
            className={`size-4 transition-colors duration-300 ${
              isActive ? "text-accent" : node.accent ? "text-primary" : "text-foreground"
            }`}
            strokeWidth={1.5}
          />
        </div>
        <div className="min-w-0 text-left">
          <p className="truncate text-xs font-medium tracking-tight">{node.label}</p>
          <p className="truncate text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {node.sub}
          </p>
        </div>

        {/* Glow behind node */}
        {(isActive || node.accent) && (
          <div
            className={`pointer-events-none absolute inset-0 -z-10 rounded-xl blur-xl transition-opacity duration-300 ${
              isActive ? "bg-accent/40 opacity-100" : "bg-primary/20 opacity-60"
            }`}
            aria-hidden="true"
          />
        )}

        {/* Connector dots */}
        <span className={`absolute left-0 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-background transition-colors ${isActive ? "border-accent bg-accent" : "border-border"}`} />
        <span className={`absolute right-0 top-1/2 size-1.5 -translate-y-1/2 translate-x-1/2 rounded-full border bg-background transition-colors ${isActive ? "border-accent bg-accent" : "border-border"}`} />
      </div>
    </div>
  )
}
