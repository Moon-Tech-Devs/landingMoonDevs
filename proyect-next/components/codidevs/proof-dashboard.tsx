import { Activity, CheckCircle2, AlertTriangle, Zap, Clock, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

type LogEntry = {
  time: string
  workflow: string
  event: string
  status: "ok" | "warn" | "info"
  ms: number
}

const logs: LogEntry[] = [
  { time: "12:04:21.842", workflow: "lead.enrich", event: "clearbit → crm sync", status: "ok", ms: 412 },
  { time: "12:04:21.654", workflow: "support.triage", event: "agente clasificó ticket #8421", status: "ok", ms: 1280 },
  { time: "12:04:20.991", workflow: "billing.reconcile", event: "stripe.invoice → ledger", status: "ok", ms: 234 },
  { time: "12:04:20.471", workflow: "ops.alert", event: "anomalía detectada (latencia p95)", status: "warn", ms: 88 },
  { time: "12:04:19.812", workflow: "rag.refresh", event: "indexados 124 documentos", status: "info", ms: 3201 },
  { time: "12:04:18.221", workflow: "lead.enrich", event: "clearbit → crm sync", status: "ok", ms: 389 },
  { time: "12:04:17.043", workflow: "support.triage", event: "agente escaló a humano", status: "info", ms: 642 },
]

const stats = [
  { label: "Runs / 24h", value: "184,392", trend: "+12.4%", icon: Activity },
  { label: "Tasa de éxito", value: "99.94%", trend: "+0.02%", icon: CheckCircle2 },
  { label: "Latencia media", value: "412ms", trend: "−18ms", icon: Clock },
  { label: "Horas ahorradas", value: "2,481", trend: "+9.2%", icon: TrendingUp },
]

export function ProofDashboard() {
  return (
    <section id="proof" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-3">
          <span className="label-mono text-accent/80">— Resultados</span>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tighter sm:text-5xl">
            Opera con las luces prendidas.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Cada workflow que entregamos viene cableado a un control plane en tiempo
            real. Inspecciona ejecuciones, replay de fallas y comparte el ROI con un link.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-sm">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-sm font-medium tracking-tight">
                <Zap className="size-4 text-accent" />
                Codidevs Console
              </span>
              <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
                /workspaces/northwind/production
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-accent animate-pulse-glow" />
                streaming
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden font-mono sm:inline">últimos 60s</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 border-b border-border md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "flex flex-col gap-1.5 px-5 py-5",
                  i !== stats.length - 1 && "border-b md:border-b-0 md:border-r border-border",
                  i === 1 && "border-b md:border-b-0",
                )}
              >
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-[11px] uppercase tracking-[0.15em]">{s.label}</span>
                  <s.icon className="size-3.5" strokeWidth={1.5} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-medium tracking-tight">{s.value}</span>
                  <span className="text-[11px] font-medium text-accent">{s.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_280px]">
            {/* Live log */}
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
              <div className="divide-y divide-border font-mono text-[12px]">
                {logs.map((l, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-5 py-2.5 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="text-muted-foreground/70">{l.time}</span>
                    <div className="min-w-0">
                      <span className="text-foreground/90">{l.workflow}</span>
                      <span className="ml-3 text-muted-foreground">{l.event}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground/80">{l.ms}ms</span>
                      <StatusBadge status={l.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pulse panel */}
            <div className="flex flex-col gap-4 p-5">
              <div>
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Throughput
                </span>
                <ThroughputChart />
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="flex size-1.5 rounded-full bg-accent animate-pulse-glow" />
                  <span className="font-medium tracking-tight">Todos los sistemas operando</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Sin incidentes en los últimos 14 días. Checks sintéticos cada 30s
                  en 7 regiones.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-4">
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Workflow top
                </span>
                <p className="mt-2 font-mono text-sm tracking-tight">support.triage</p>
                <p className="text-xs text-muted-foreground">
                  42,118 runs · 99.98% éxito
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
      <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-accent">
        <CheckCircle2 className="size-3" />
        ok
      </span>
    )
  if (status === "warn")
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-amber-400">
        <AlertTriangle className="size-3" />
        warn
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-border bg-white/[0.03] px-1.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
      info
    </span>
  )
}

function ThroughputChart() {
  const bars = [12, 18, 14, 22, 28, 24, 30, 36, 32, 40, 38, 44, 50, 46, 52, 58, 54, 62, 56, 60, 68, 64, 72, 78]
  const max = Math.max(...bars)
  return (
    <div className="mt-3 flex h-20 items-end gap-1">
      {bars.map((b, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-accent/70 to-accent/15"
          style={{ height: `${(b / max) * 100}%` }}
        />
      ))}
    </div>
  )
}
