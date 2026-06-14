"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export type ProcessStep = {
  step: string
  title: string
  body: string
}

type ProcessPanelProps = {
  steps: ProcessStep[]
}

export function ProcessPanel({ steps }: ProcessPanelProps) {
  const [active, setActive] = useState(0)
  const current = steps[active]

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
      <div className="space-y-2">
        {steps.map((item, index) => {
          const isActive = index === active
          return (
            <button
              key={item.step}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "w-full rounded-xl border px-4 py-4 text-left transition-colors",
                isActive
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-card/40 hover:border-primary/15",
              )}
            >
              <div className="flex items-start gap-4">
                <span className="capability-number mt-0.5">{item.step}</span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed text-muted-foreground",
                      isActive ? "block" : "hidden sm:block",
                    )}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div className="capability-card flex min-h-[280px] flex-col justify-between bg-background/70 p-6">
        <div>
          <span className="section-eyebrow">Sprint roadmap</span>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">{current.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.body}</p>
        </div>

        <div className="mt-8 space-y-3">
          {steps.map((item, index) => (
            <div key={item.step} className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] font-bold",
                  index <= active
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground",
                )}
              >
                {item.step}
              </span>
              <div className="h-px flex-1 bg-border" />
              <span
                className={cn(
                  "text-[11px] uppercase tracking-[0.12em]",
                  index <= active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {index < active ? "Completado" : index === active ? "En curso" : "Pendiente"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
