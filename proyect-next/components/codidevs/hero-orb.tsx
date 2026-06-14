"use client"

import { useReducedEffects } from "@/lib/use-reduced-effects"

export function HeroOrb() {
  const reduced = useReducedEffects()
  if (reduced) return null

  return <div className="hero-orb" aria-hidden="true" />
}
