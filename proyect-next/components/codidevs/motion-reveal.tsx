"use client"

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  immediate?: boolean
  axis?: "y" | "x"
  id?: string
}

export function Reveal({
  children,
  className,
  as: Tag = "div",
  immediate = false,
  axis = "y",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    if (immediate) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "-100px", threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(
        "reveal",
        axis === "x" && "reveal-x",
        visible && "reveal-visible",
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function RevealGroup({
  children,
  className,
  immediate = false,
}: {
  children: ReactNode
  className?: string
  immediate?: boolean
}) {
  return (
    <div
      className={cn("reveal-group", className)}
      data-immediate={immediate ? "" : undefined}
    >
      {children}
    </div>
  )
}
