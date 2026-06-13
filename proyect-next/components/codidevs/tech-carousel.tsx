"use client"

import React from "react"
import {
  N8nIcon,
  OpenaiIcon,
  AnthropicIcon,
  SupabaseIcon,
  ZapierIcon,
  PineconeIcon,
  VercelIcon,
  MakeIcon,
  NodejsIcon,
  LangchainIcon,
  RedisIcon,
  GithubactionsIcon,
  TwilioIcon,
  Auth0Icon,
  PostgresIcon,
  GeminiIcon,
} from "./tech-icons"

type TechItem = {
  icon: React.ComponentType<any>
  label: string
  color: string
}

const row1: TechItem[] = [
  { icon: N8nIcon, label: "n8n", color: "#FF6D5A" },
  { icon: OpenaiIcon, label: "OpenAI", color: "#10a37f" },
  { icon: AnthropicIcon, label: "Anthropic", color: "#D97706" },
  { icon: SupabaseIcon, label: "Supabase", color: "#3ECF8E" },
  { icon: ZapierIcon, label: "Zapier", color: "#FF6600" },
  { icon: PineconeIcon, label: "Pinecone", color: "#004F39" },
  { icon: VercelIcon, label: "Vercel", color: "#000000" },
  { icon: MakeIcon, label: "Make", color: "#6d28d9" },
]

const row2: TechItem[] = [
  { icon: NodejsIcon, label: "Node.js", color: "#43853D" },
  { icon: LangchainIcon, label: "LangChain", color: "#000000" },
  { icon: RedisIcon, label: "Redis", color: "#D82C20" },
  { icon: GithubactionsIcon, label: "GitHub Actions", color: "#24292e" },
  { icon: TwilioIcon, label: "Twilio", color: "#F22F46" },
  { icon: Auth0Icon, label: "Auth0", color: "#EB5424" },
  { icon: PostgresIcon, label: "Postgres", color: "#336791" },
  { icon: GeminiIcon, label: "Gemini", color: "#1a73e8" },
]

const allTech = [...row1, ...row2]

export function TechCarousel() {
  const loopRow1 = [...row1, ...row1]
  const loopRow2 = [...row2, ...row2]

  return (
    <div className="relative w-full py-4">
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {allTech.map((tech) => (
          <TechCard key={`static-${tech.label}`} tech={tech} staticLayout />
        ))}
      </div>

      <div className="hidden flex-col gap-6 overflow-hidden md:flex">
        <div className="mask-fade-x relative w-full overflow-hidden">
          <div className="animate-marquee flex w-max gap-4 py-2">
            {loopRow1.map((t, i) => (
              <TechCard key={`row1-${t.label}-${i}`} tech={t} />
            ))}
          </div>
        </div>

        <div className="mask-fade-x relative w-full overflow-hidden">
          <div className="animate-marquee flex w-max gap-4 py-2 [animation-direction:reverse]">
            {loopRow2.map((t, i) => (
              <TechCard key={`row2-${t.label}-${i}`} tech={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TechCard({
  tech,
  staticLayout = false,
}: {
  tech: TechItem
  staticLayout?: boolean
}) {
  const Icon = tech.icon
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        staticLayout
          ? "flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 text-left select-none"
          : "group relative flex min-w-[170px] shrink-0 cursor-pointer select-none items-center gap-3.5 overflow-hidden rounded-2xl border border-border bg-card/75 px-5 py-3 text-left shadow-[0_4px_20px_oklch(0_0_0/0.02)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_12px_24px_oklch(0_0_0/0.04)] max-md:bg-card/95 max-md:backdrop-blur-none"
      }
      style={{
        borderColor: hovered && !staticLayout ? `${tech.color}35` : "var(--color-border)",
      }}
    >
      {!staticLayout && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: hovered ? 0.04 : 0,
            background: `radial-gradient(150px circle at center, ${tech.color} 0%, transparent 100%)`,
          }}
        />
      )}

      <span
        className={
          staticLayout
            ? "flex size-8 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background text-muted-foreground"
            : "flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/80 text-muted-foreground transition-all duration-300 group-hover:text-foreground"
        }
        style={
          staticLayout
            ? undefined
            : {
                backgroundColor: hovered ? `${tech.color}10` : "oklch(0 0 0 / 0.02)",
                borderColor: hovered ? `${tech.color}25` : "var(--color-border)",
                boxShadow: hovered ? `0 0 16px -2px ${tech.color}20` : "none",
              }
        }
      >
        <Icon size={18} className={staticLayout ? undefined : "transition-transform duration-300 group-hover:scale-110"} />
      </span>

      <div className="min-w-0">
        <span
          className={
            staticLayout
              ? "block text-sm font-semibold tracking-tight text-foreground/90"
              : "block text-sm font-semibold tracking-tight text-foreground/90 group-hover:text-foreground"
          }
        >
          {tech.label}
        </span>
      </div>
    </div>
  )
}
