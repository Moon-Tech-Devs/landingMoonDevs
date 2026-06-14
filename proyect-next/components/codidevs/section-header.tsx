import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  body?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl text-left",
        className,
      )}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="headline-display max-w-3xl text-balance">{title}</h2>
      {body ? (
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          {body}
        </p>
      ) : null}
    </div>
  )
}
