"use client"

import { useEffect, useState } from "react"

function computeReducedEffects() {
  if (typeof window === "undefined") return false

  return (
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(hover: none)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

export function useReducedEffects() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const queries = [
      window.matchMedia("(max-width: 768px)"),
      window.matchMedia("(hover: none)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ]

    const sync = () => {
      const lite = computeReducedEffects()
      setReduced(lite)
      document.documentElement.dataset.effects = lite ? "lite" : "full"
    }

    sync()

    for (const query of queries) {
      query.addEventListener("change", sync)
    }

    return () => {
      for (const query of queries) {
        query.removeEventListener("change", sync)
      }
    }
  }, [])

  return reduced
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 768px)").matches
  )
}
