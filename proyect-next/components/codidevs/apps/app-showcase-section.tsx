"use client"

import Link from "next/link"
import type { AppItem, AppFeature } from "@/lib/apps-data"
import {
  Gamepad2,
  ShieldCheck,
  Heart,
  Trophy,
  Activity,
  Zap,
  Lock,
  Sparkles,
  Target,
  Flame,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  WifiOff,
  Smartphone,
} from "lucide-react"

function renderFeatureIcon(iconName: AppFeature["iconName"], className?: string) {
  switch (iconName) {
    case "gamepad":
      return <Gamepad2 className={className} />
    case "shield":
      return <ShieldCheck className={className} />
    case "heart":
      return <Heart className={className} />
    case "trophy":
      return <Trophy className={className} />
    case "activity":
      return <Activity className={className} />
    case "zap":
      return <Zap className={className} />
    case "lock":
      return <Lock className={className} />
    case "sparkles":
      return <Sparkles className={className} />
    case "target":
      return <Target className={className} />
    case "flame":
      return <Flame className={className} />
    default:
      return <Sparkles className={className} />
  }
}

export function AppShowcaseSection({
  app,
  index,
}: {
  app: AppItem
  index: number
}) {
  const isReversed = index % 2 !== 0

  return (
    <section
      id={app.slug}
      className="relative scroll-mt-24 border-t border-border/80 py-20 md:py-28 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div
        className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full blur-[140px] opacity-15"
        style={{
          backgroundColor: app.themeColor.primary,
          top: "10%",
          [isReversed ? "left" : "right"]: "5%",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid items-center gap-12 lg:grid-cols-12 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Main Info Column (7 cols) */}
          <div className={`space-y-6 lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: app.themeColor.badgeBg,
                  color: app.themeColor.badgeText,
                  border: `1px solid ${app.themeColor.border}`,
                }}
              >
                <Sparkles className="size-3" />
                {app.badgeText}
              </span>

              {app.privacyNotes.isOffline && (
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card/90 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  <WifiOff className="size-3 text-primary" />
                  100% Offline
                </span>
              )}
            </div>

            {/* App Title & Tagline */}
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {app.title}
              </h2>
              <p
                className="mt-1 text-lg font-medium sm:text-xl"
                style={{ color: app.themeColor.primary }}
              >
                {app.tagline}
              </p>
            </div>

            {/* Descriptions */}
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {app.longDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm">
              {app.metrics.map((m) => (
                <div key={m.label} className="text-center sm:text-left">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </p>
                  <p
                    className="mt-0.5 text-base font-bold sm:text-lg"
                    style={{ color: app.themeColor.primary }}
                  >
                    {m.value}
                  </p>
                  {m.detail && (
                    <p className="hidden text-[10px] text-muted-foreground sm:block">
                      {m.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              {app.features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-border bg-card/50 p-3.5 transition-all duration-200 hover:border-border/80 hover:bg-card/90"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: app.themeColor.badgeBg,
                        color: app.themeColor.primary,
                      }}
                    >
                      {renderFeatureIcon(feature.iconName, "size-4")}
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key highlights bullet points */}
            <div className="space-y-2 pt-1">
              {app.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2.5 text-xs text-foreground/90">
                  <CheckCircle2
                    className="size-4 flex-shrink-0"
                    style={{ color: app.themeColor.primary }}
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Medical / Privacy Notice Box */}
            {app.medicalDisclaimer && (
              <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-900 dark:text-amber-200/90">
                <AlertTriangle className="size-4 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong className="font-semibold text-amber-700 dark:text-amber-300">Nota informativa:</strong>{" "}
                  {app.medicalDisclaimer}
                </p>
              </div>
            )}

            {/* CTAs / Download Section */}
            <div className="space-y-3 pt-4">
              <div className="flex flex-wrap items-center gap-3">
                {app.platform.playStoreUrl ? (
                  <a
                    href={app.platform.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                    style={{
                      backgroundColor: app.themeColor.primary,
                      boxShadow: `0 10px 25px -5px ${app.themeColor.glow}`,
                    }}
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.003 2.003 0 0 1-.61-1.42V3.233c0-.54.225-1.044.609-1.419zM15.207 13.414l2.457 2.457-11.49 6.574 9.033-9.031zm0-2.828L6.174 1.555l11.49 6.574-2.457 2.457zm1.414 1.414l3.535 2.02c.875.5.875 1.318 0 1.818l-3.535 2.02-2.121-2.121 2.121-5.737z" />
                    </svg>
                    <span>Ver en Google Play Store</span>
                    <ExternalLink className="size-3.5 opacity-80" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs text-muted-foreground">
                    <Smartphone className="size-4 text-primary" />
                    <span>Próximamente disponible en tiendas</span>
                  </div>
                )}
              </div>

              {/* Underlined Privacy Policy Link */}
              <div>
                <Link
                  href={`/apps/${app.slug}/privacidad`}
                  className="inline-block text-xs font-medium text-muted-foreground underline underline-offset-4 decoration-muted-foreground/60 transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  Política de privacidad
                </Link>
              </div>

              <p className="text-xs text-muted-foreground">
                {app.privacyNotes.summary}
              </p>
            </div>
          </div>

          {/* Interactive Mockup Device Column (5 cols) */}
          <div
            className={`flex justify-center lg:col-span-5 ${
              isReversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Device outer frame */}
              <div className="relative rounded-[40px] border-[6px] border-[#1d1f2b] bg-[#0c0d12] p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/10">
                {/* Dynamic island / speaker cutout */}
                <div className="absolute left-1/2 top-4 z-20 h-4 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-center">
                  <div className="size-2 rounded-full bg-[#1a1b24] mr-3" />
                  <div className="size-1.5 rounded-full bg-[#1a1b24]" />
                </div>

                {/* Inner Screen Canvas */}
                <div className="relative min-h-[580px] overflow-hidden rounded-[30px] bg-gradient-to-b from-[#14161f] via-[#10121a] to-[#0c0d12] p-4 text-white">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-3 px-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <WifiOff className="size-3 text-emerald-400" />
                      <div className="h-2 w-4 rounded-sm border border-zinc-500 bg-emerald-400" />
                    </div>
                  </div>

                  {/* App Header Inside Phone */}
                  <div className="mt-6 flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                        {app.id === "nutriapp" ? "NutriAdventure" : "Boss Slayer"}
                      </p>
                      <h4 className="text-base font-bold text-white">{app.title}</h4>
                    </div>
                    <div
                      className="size-8 rounded-xl flex items-center justify-center font-bold text-xs"
                      style={{
                        backgroundColor: app.themeColor.primary,
                        color: "#fff",
                      }}
                    >
                      {app.title.charAt(0)}
                    </div>
                  </div>

                  {/* Dynamic Simulation Content */}
                  {app.id === "nutriapp" ? (
                    <div className="mt-4 space-y-3.5">
                      {/* Family avatar card */}
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="size-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                              👦
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white">Perfil: Mateo (7 años)</p>
                              <p className="text-[10px] text-emerald-400">Indicador IMC: Saludable</p>
                            </div>
                          </div>
                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                            Nvl 4
                          </span>
                        </div>
                      </div>

                      {/* Map quest node */}
                      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-3.5">
                        <p className="text-[11px] font-medium text-emerald-300">Desafío Diario:</p>
                        <p className="mt-0.5 text-xs font-bold text-white">
                          🥦 Plato Arcoíris & 30 min de Juego
                        </p>
                        <div className="mt-2.5 flex items-center justify-between text-[10px] text-zinc-300">
                          <span>Progreso de hoy</span>
                          <span className="font-bold text-emerald-400">80%</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-4/5 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full" />
                        </div>
                      </div>

                      {/* Mini game card preview */}
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-zinc-300 font-medium">Minijuego: Detective de Azúcares</span>
                          <span className="text-amber-400 font-bold">⭐ x3</span>
                        </div>
                        <p className="mt-1 text-[10px] text-zinc-400 leading-snug">
                          ¡Identifica los ingredientes naturales y gana medallas familiares!
                        </p>
                      </div>

                      {/* Offline Badge Inside App */}
                      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 py-2 px-3 text-center">
                        <p className="text-[10px] font-medium text-emerald-300">
                          🔒 100% Seguro • Datos en tu Teléfono
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {/* Weekly Boss Card */}
                      <div className="rounded-2xl border border-blue-500/30 bg-blue-950/40 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold">
                              Boss Semanal (Lunes a Domingo)
                            </p>
                            <p className="text-xs font-bold text-white">🐉 Dragón de la Desidia</p>
                          </div>
                          <span className="rounded-full bg-red-500/20 border border-red-500/30 px-2 py-0.5 text-[10px] font-extrabold text-red-400">
                            HP: 320 / 800
                          </span>
                        </div>

                        {/* Boss HP bar */}
                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-[40%] bg-gradient-to-r from-red-500 to-amber-500 rounded-full" />
                        </div>
                        <div className="mt-1.5 flex items-center justify-between text-[9px] text-zinc-400">
                          <span>Daño diario aplicado: 42/55</span>
                          <span className="text-emerald-400 font-medium">Recompensa: +200 XP</span>
                        </div>
                      </div>

                      {/* Habits attack queue with real damage values */}
                      <div className="space-y-1.5">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 px-1">
                          Hábitos Activos & Ataques
                        </p>
                        
                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs">⚡</span>
                            <div>
                              <p className="text-[11px] font-medium text-white">Programar 45 min</p>
                              <p className="text-[9px] text-blue-400">+10 XP • -20 Daño a Boss</p>
                            </div>
                          </div>
                          <span className="rounded bg-emerald-600/30 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                            Completado
                          </span>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs">⚔️</span>
                            <div>
                              <p className="text-[11px] font-medium text-white">Lectura Técnica 20 min</p>
                              <p className="text-[9px] text-amber-400">+10 XP • -22 Daño a Boss</p>
                            </div>
                          </div>
                          <span className="rounded bg-blue-600/30 px-2 py-0.5 text-[9px] font-bold text-blue-300">
                            Listo
                          </span>
                        </div>
                      </div>

                      {/* User XP & Level bar */}
                      <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-2.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-blue-300 font-bold">Nivel 4 Guerrero</span>
                          <span className="text-white font-medium">250 / 300 XP</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-[83%] bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
