"use client"

import React, { useState, useEffect, useRef } from "react"
import { Activity, CheckCircle2, AlertTriangle, Zap, Clock, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

type LogEntry = {
  time: string
  workflow: string
  event: string
  status: "ok" | "warn" | "info"
  ms: number
}

const initialLogs: LogEntry[] = [
  { time: "23:04:21.842", workflow: "lead.enrich", event: "clearbit → crm sync", status: "ok", ms: 412 },
  { time: "23:04:21.654", workflow: "support.triage", event: "agente clasificó ticket #8421", status: "ok", ms: 1280 },
  { time: "23:04:20.991", workflow: "billing.reconcile", event: "stripe.invoice → ledger", status: "ok", ms: 234 },
  { time: "23:04:20.471", workflow: "ops.alert", event: "anomalía detectada (latencia p95)", status: "warn", ms: 88 },
  { time: "23:04:19.812", workflow: "rag.refresh", event: "indexados 124 documentos", status: "info", ms: 3201 },
  { time: "23:04:18.221", workflow: "lead.enrich", event: "clearbit → crm sync", status: "ok", ms: 389 },
  { time: "23:04:17.043", workflow: "support.triage", event: "agente escaló a humano", status: "info", ms: 642 },
]

const initialBars = [12, 18, 14, 22, 28, 24, 30, 36, 32, 40, 38, 44, 50, 46, 52, 58, 54, 62, 56, 60, 68, 64, 72, 78]

export function ProofDashboard() {
  const [logItems, setLogItems] = useState<LogEntry[]>(initialLogs)
  const [runsCount, setRunsCount] = useState(184392)
  const [successRate, setSuccessRate] = useState(99.94)
  const [avgLatency, setAvgLatency] = useState(412)
  const [hoursSaved, setHoursSaved] = useState(2481)
  
  const [throughputData, setThroughputData] = useState<number[]>(initialBars)
  const [isStreaming, setIsStreaming] = useState(true)
  const [simActive, setSimActive] = useState(false)
  const logContainerRef = useRef<HTMLDivElement>(null)

  // Format current time helper
  const getFormattedTime = () => {
    const d = new Date()
    const hh = String(d.getHours()).padStart(2, "0")
    const mm = String(d.getMinutes()).padStart(2, "0")
    const ss = String(d.getSeconds()).padStart(2, "0")
    const ms = String(d.getMilliseconds()).padStart(3, "0")
    return `${hh}:${mm}:${ss}.${ms}`
  }

  // Periodic random logs to keep dashboard looking alive
  useEffect(() => {
    if (simActive) return

    const interval = setInterval(() => {
      const wfs = ["lead.enrich", "support.triage", "billing.reconcile", "rag.refresh"]
      const events = [
        "webhook recibido",
        "agente de IA analizando contexto",
        "consiguiendo respuestas desde base vectorial",
        "actualizando CRM de ventas",
        "sincronización con base de datos completada",
      ]
      const statuses: ("ok" | "warn" | "info")[] = ["ok", "ok", "ok", "info", "warn"]
      
      const randomWF = wfs[Math.floor(Math.random() * wfs.length)]
      const randomEvent = events[Math.floor(Math.random() * events.length)]
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
      const randomMS = Math.floor(Math.random() * 800) + 50

      const newLog: LogEntry = {
        time: getFormattedTime(),
        workflow: randomWF,
        event: randomEvent,
        status: randomStatus,
        ms: randomMS,
      }

      setLogItems(prev => [newLog, ...prev.slice(0, 9)])
      
      // Fluctuating statistics
      setRunsCount(prev => prev + 1)
      setSuccessRate(prev => {
        const diff = (Math.random() - 0.5) * 0.01
        return Math.min(100, Math.max(99.8, prev + diff))
      })
      setAvgLatency(prev => {
        const diff = Math.floor((Math.random() - 0.5) * 15)
        return Math.min(600, Math.max(250, prev + diff))
      })

      // Shift throughput chart
      setThroughputData(prev => {
        const next = [...prev.slice(1)]
        const nextVal = Math.floor(Math.random() * 45) + 20
        next.push(nextVal)
        return next
      })

    }, 3800)

    return () => clearInterval(interval)
  }, [simActive])

  // Simulation flow handler matching the SVG timeline
  useEffect(() => {
    const handleSimTrigger = () => {
      setSimActive(true)
      setIsStreaming(true)
      
      // Clear logs first, but leave placeholder headers
      setLogItems([])

      // Timeline events syncing with workflow-canvas.tsx
      // 0s: Webhook trigger
      setTimeout(() => {
        const entry: LogEntry = {
          time: getFormattedTime(),
          workflow: "lead.enrich",
          event: "→ Webhook recibido en endpoint /prod/leads",
          status: "ok",
          ms: 12,
        }
        setLogItems(prev => [entry, ...prev])
        setRunsCount(c => c + 1)
      }, 0)

      // 1.0s: Auth Guard
      setTimeout(() => {
        const entry: LogEntry = {
          time: getFormattedTime(),
          workflow: "lead.enrich",
          event: "✓ Token HMAC verificado. Petición autenticada.",
          status: "ok",
          ms: 8,
        }
        setLogItems(prev => [entry, ...prev])
      }, 1000)

      // 2.2s: AI reasoning starts
      setTimeout(() => {
        const entry: LogEntry = {
          time: getFormattedTime(),
          workflow: "lead.enrich",
          event: "🤖 Copilot AI: Analizando cuerpo del Lead con GPT-4...",
          status: "info",
          ms: 1120,
        }
        setLogItems(prev => [entry, ...prev])
      }, 2200)

      // 2.8s: RAG DB Search
      setTimeout(() => {
        const entry: LogEntry = {
          time: getFormattedTime(),
          workflow: "lead.enrich",
          event: "🔍 RAG Search: Buscando empresa en base vectorial...",
          status: "ok",
          ms: 312,
        }
        setLogItems(prev => [entry, ...prev])
      }, 2800)

      // 3.4s: Router
      setTimeout(() => {
        const entry: LogEntry = {
          time: getFormattedTime(),
          workflow: "lead.enrich",
          event: "⇄ Router: Puntuación de lead > 85. Direccionando flujo...",
          status: "ok",
          ms: 14,
        }
        setLogItems(prev => [entry, ...prev])
      }, 3400)

      // 4.5s: Postgres & Slack
      setTimeout(() => {
        const entryDb: LogEntry = {
          time: getFormattedTime(),
          workflow: "lead.enrich",
          event: "⚡ Postgres: Lead guardado e indexado con ID #ld_928",
          status: "ok",
          ms: 45,
        }
        const entrySlack: LogEntry = {
          time: getFormattedTime(),
          workflow: "lead.enrich",
          event: "💬 Slack: Notificación de nuevo Lead enviada al canal #sales-alerts",
          status: "ok",
          ms: 142,
        }
        setLogItems(prev => [entrySlack, entryDb, ...prev])
        setHoursSaved(prev => prev + 1)
        
        // Push high spike to throughput chart
        setThroughputData(prev => {
          const next = [...prev.slice(1)]
          next.push(85)
          return next
        })
      }, 4500)

      // 5.5s: End simulation
      setTimeout(() => {
        setSimActive(false)
      }, 5500)
    }

    window.addEventListener("trigger-workflow-sim", handleSimTrigger)
    return () => window.removeEventListener("trigger-workflow-sim", handleSimTrigger)
  }, [])

  const stats = [
    { label: "Runs / 24h", value: runsCount.toLocaleString(), trend: "+12.4%", icon: Activity },
    { label: "Tasa de éxito", value: `${successRate.toFixed(2)}%`, trend: "+0.02%", icon: CheckCircle2 },
    { label: "Latencia media", value: `${avgLatency}ms`, trend: "−18ms", icon: Clock },
    { label: "Horas ahorradas", value: hoursSaved.toLocaleString(), trend: "+9.2%", icon: TrendingUp },
  ]

  return (
    <section id="proof" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-3">
          <span className="label-mono text-primary/80">— Resultados</span>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tighter sm:text-5xl">
            Opera con las luces prendidas.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Cada workflow que entregamos viene cableado a un control plane en tiempo
            real. Inspecciona ejecuciones, replay de fallas y comparte el ROI con un link.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm shadow-[0_12px_40px_oklch(0_0_0/0.05)]">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-sm font-medium tracking-tight">
                <Zap className="size-4 text-primary" />
                Codidevs Console
              </span>
              <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
                /workspaces/northwind/production
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className={cn("size-1.5 rounded-full", isStreaming ? "bg-accent animate-pulse-glow" : "bg-muted")} />
                {simActive ? "ejecutando flujo" : "streaming en vivo"}
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden font-mono sm:inline">últimos 60s</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 border-b border-border sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "flex flex-col gap-1.5 px-5 py-5 transition-colors",
                  i !== stats.length - 1 && "border-b border-border md:border-b-0 md:border-r",
                )}
              >
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-[11px] uppercase tracking-[0.15em]">{s.label}</span>
                  <s.icon className="size-3.5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-medium tracking-tight">{s.value}</span>
                  <span className="text-[11px] font-medium text-accent">{s.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_280px]">
            {/* Live Log Terminal */}
            <div className="border-b border-border lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between border-b border-border px-5 py-2.5">
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Log de ejecución en vivo
                </span>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="hidden sm:inline">filtro:</span>
                  <span className="rounded border border-border px-1.5 py-0.5 font-mono">
                    status=*
                  </span>
                </div>
              </div>
              <div 
                ref={logContainerRef}
                className="divide-y divide-border/40 font-mono text-[12px] min-h-[300px] max-h-[300px] overflow-y-auto overflow-x-hidden scroll-smooth"
              >
                <AnimatePresence initial={false}>
                  {logItems.length === 0 ? (
                    <div className="flex h-[250px] items-center justify-center text-muted-foreground/60 italic">
                      Esperando disparo del trigger...
                    </div>
                  ) : (
                    logItems.map((l, i) => (
                      <motion.div
                        key={l.time + i}
                        initial={{ opacity: 0, x: -10, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: "auto" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 px-4 py-2.5 hover:bg-white/[0.01] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-x-4 sm:px-5 overflow-hidden"
                      >
                        <span className="col-span-2 text-muted-foreground/60 sm:col-span-1">{l.time}</span>
                        <div className="min-w-0 text-left">
                          <span className="font-semibold text-primary">{l.workflow}</span>
                          <span className="text-foreground/90 ml-2.5">{l.event}</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 sm:gap-3">
                          <span className="text-muted-foreground/50 font-light text-[11px]">{l.ms}ms</span>
                          <StatusBadge status={l.status} />
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Pulse Panel */}
            <div className="flex flex-col gap-5 p-5 bg-black/[0.04]">
              <div>
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Throughput (req/s)
                </span>
                <ThroughputChart bars={throughputData} />
              </div>

              <div className="rounded-xl border border-border bg-background/50 p-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="flex size-1.5 rounded-full bg-accent animate-pulse-glow" />
                  <span className="font-medium tracking-tight text-foreground/90">Sistemas 100% operativos</span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground/75 text-left">
                  Sin incidentes en los últimos 14 días. Checks sintéticos cada 30s
                  en 7 regiones.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background/50 p-4 text-left">
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Workflow top
                </span>
                <p className="mt-1 font-mono text-xs font-semibold tracking-tight text-primary">lead.enrich</p>
                <p className="text-[10px] text-muted-foreground/85">
                  42,118 ejecuciones · 99.98% éxito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatusBadge({ status }: { status: LogEntry["status"] }) {
  if (status === "ok")
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-accent/20 bg-accent/5 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.15em] text-accent">
        <CheckCircle2 className="size-2.5" />
        ok
      </span>
    )
  if (status === "warn")
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/20 bg-amber-500/5 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.15em] text-amber-700">
        <AlertTriangle className="size-2.5" />
        warn
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/5 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.15em] text-primary">
      info
    </span>
  )
}

function ThroughputChart({ bars }: { bars: number[] }) {
  const max = Math.max(...bars, 1)
  return (
    <div className="mt-3 flex h-20 items-end gap-1">
      {bars.map((b, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 to-accent/20"
          animate={{ height: `${(b / max) * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
      ))}
    </div>
  )
}
