type TestimonialCardProps = {
  title: string
  body: string
  metric: string
}

export function TestimonialCard({ title, body, metric }: TestimonialCardProps) {
  return (
    <article className="capability-card flex h-full flex-col justify-between text-left">
      <div>
        <span className="font-mono text-4xl leading-none text-primary/20">"</span>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{body}</p>
      </div>
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-border/70 pt-5">
        <div>
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Caso CodiDevs
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
          {metric}
        </span>
      </div>
    </article>
  )
}
