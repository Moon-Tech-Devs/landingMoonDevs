"use client"

import { useReducedEffects } from "@/lib/use-reduced-effects"

export type MetricItem = {
  value: string
  label: string
  source: string
}

type MetricMarqueeProps = {
  items: MetricItem[]
}

export function MetricMarquee({ items }: MetricMarqueeProps) {
  const reduced = useReducedEffects()
  const loop = [...items, ...items]

  if (reduced) {
    return (
      <div className="border-y border-border bg-card/30 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4">
          {items.map((item) => (
            <MetricStat key={`${item.value}-${item.source}`} item={item} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden border-y border-border bg-card/30 py-4">
      <div className="mask-fade-x overflow-hidden">
        <div className="animate-metric-marquee flex w-max items-center gap-12 px-4">
          {loop.map((item, index) => (
            <MetricStat key={`${item.value}-${item.source}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MetricStat({ item }: { item: MetricItem }) {
  return (
    <div className="flex shrink-0 items-baseline gap-3 whitespace-nowrap">
      <span className="text-lg font-semibold tracking-tight md:text-xl">{item.value}</span>
      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {item.label} · {item.source}
      </span>
    </div>
  )
}
