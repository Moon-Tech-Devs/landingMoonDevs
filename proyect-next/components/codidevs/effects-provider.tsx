"use client"

import { useReducedEffects } from "@/lib/use-reduced-effects"

export function EffectsProvider({ children }: { children: React.ReactNode }) {
  useReducedEffects()
  return children
}
