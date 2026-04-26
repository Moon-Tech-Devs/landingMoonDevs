import {
  Brain,
  Bot,
  Database,
  Webhook,
  Cloud,
  Cpu,
  Workflow,
  Plug,
  Terminal,
  Sparkles,
  Zap,
  GitBranch,
  Send,
  ShieldCheck,
} from "lucide-react"

const techs = [
  { icon: Workflow, label: "n8n" },
  { icon: Brain, label: "OpenAI" },
  { icon: Bot, label: "Anthropic" },
  { icon: Database, label: "Supabase" },
  { icon: Webhook, label: "Zapier" },
  { icon: Cpu, label: "Pinecone" },
  { icon: Cloud, label: "Vercel" },
  { icon: Plug, label: "Make" },
  { icon: Terminal, label: "Node.js" },
  { icon: Sparkles, label: "LangChain" },
  { icon: Zap, label: "Redis" },
  { icon: GitBranch, label: "GitHub Actions" },
  { icon: Send, label: "Twilio" },
  { icon: ShieldCheck, label: "Auth0" },
  { icon: Database, label: "Postgres" },
  { icon: Brain, label: "Gemini" },
]

export function TechCarousel() {
  // Duplicate the array so the marquee loops seamlessly
  const loop = [...techs, ...techs]

  return (
    <div className="relative w-full">
      <div className="mask-fade-x relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-3 py-2">
          {loop.map((t, i) => {
            const Icon = t.icon
            return (
              <div
                key={`${t.label}-${i}`}
                className="group flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-accent/5"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="size-3.5" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium tracking-tight text-foreground/85 group-hover:text-foreground">
                  {t.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
