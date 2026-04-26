import {
  Webhook,
  Brain,
  Database,
  GitBranch,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

type Node = {
  id: string
  x: number
  y: number
  icon: typeof Webhook
  label: string
  sub: string
  accent?: boolean
}

type Edge = { from: string; to: string }

const nodes: Node[] = [
  { id: "trigger", x: 4, y: 50, icon: Webhook, label: "Webhook", sub: "Trigger" },
  { id: "guard", x: 22, y: 50, icon: ShieldCheck, label: "Auth Guard", sub: "Validar" },
  { id: "ai", x: 42, y: 22, icon: Brain, label: "GPT-4 Agent", sub: "Razonar", accent: true },
  { id: "rag", x: 42, y: 78, icon: Sparkles, label: "RAG Search", sub: "Recuperar" },
  { id: "router", x: 62, y: 50, icon: GitBranch, label: "Router", sub: "Bifurcar" },
  { id: "db", x: 82, y: 22, icon: Database, label: "Postgres", sub: "Persistir" },
  { id: "send", x: 82, y: 78, icon: Send, label: "Slack", sub: "Notificar" },
]

const edges: Edge[] = [
  { from: "trigger", to: "guard" },
  { from: "guard", to: "ai" },
  { from: "guard", to: "rag" },
  { from: "ai", to: "router" },
  { from: "rag", to: "router" },
  { from: "router", to: "db" },
  { from: "router", to: "send" },
]

function nodeCenter(id: string) {
  const n = nodes.find((n) => n.id === id)!
  return { x: n.x, y: n.y }
}

export function WorkflowCanvas() {
  return (
    <section id="workflow" className="relative overflow-hidden border-y border-border py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-3">
          <span className="label-mono text-accent/80">— El Canvas</span>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tighter sm:text-5xl">
            Workflows visualizados como infraestructura.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Cada sistema de Codidevs es un grafo de nodos tipados — testables,
            replayables y propiedad de tu equipo desde el día uno.
          </p>
        </div>

        {/* Canvas */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
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
                <span className="size-1.5 rounded-full bg-accent animate-pulse-glow" />
                en vivo
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">v 2.4.0</span>
            </div>
          </div>

          {/* Canvas grid */}
          <div className="relative aspect-[16/9] w-full bg-dot">
            {/* Edges (SVG) */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="edge" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="oklch(0.82 0.22 152)" stopOpacity="0.95" />
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
                      stroke="oklch(1 0 0 / 0.08)"
                      strokeWidth="0.4"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d={d}
                      stroke="url(#edge)"
                      strokeWidth="0.5"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                      className="animate-flow"
                    />
                  </g>
                )
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((n) => (
              <CanvasNode key={n.id} node={n} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CanvasNode({ node }: { node: Node }) {
  const Icon = node.icon
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <div
        className={
          "group relative flex w-36 items-center gap-2.5 rounded-xl border border-border bg-background/80 p-2.5 backdrop-blur-md transition-transform hover:-translate-y-px sm:w-40"
        }
      >
        <div
          className={
            "flex size-9 items-center justify-center rounded-lg border border-border " +
            (node.accent ? "bg-accent/15" : "bg-white/[0.03]")
          }
        >
          <Icon
            className={node.accent ? "size-4 text-accent" : "size-4 text-foreground"}
            strokeWidth={1.5}
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-medium tracking-tight">{node.label}</p>
          <p className="truncate text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {node.sub}
          </p>
        </div>

        {/* Glow */}
        {node.accent && (
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-accent/30 blur-xl"
            aria-hidden="true"
          />
        )}

        {/* Connector dots */}
        <span className="absolute left-0 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background" />
        <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 translate-x-1/2 rounded-full border border-border bg-background" />
      </div>
    </div>
  )
}
