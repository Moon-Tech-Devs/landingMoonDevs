"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

type NavLink = {
  label: string
  href: string
}

type NavCta = {
  label: string
  href: string
  external?: boolean
  variant?: "primary" | "ghost"
}

type SiteNavProps = {
  links: NavLink[]
  ctas: NavCta[]
  homeHref?: string
}

export function SiteNav({ links, ctas, homeHref = "/" }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="relative flex items-center rounded-xl border border-border bg-background/72 px-3 py-2.5 shadow-[0_1px_0_rgba(60,159,90,0.12)_inset,0_16px_45px_rgba(0,0,0,0.42)] backdrop-blur-xl max-md:bg-background/95 max-md:backdrop-blur-none">
          <Link href={homeHref} className="flex flex-shrink-0 items-center gap-2.5 pl-1.5" onClick={close}>
            <Logo className="size-6 text-accent" />
            <span className="text-base font-semibold tracking-tight">CodiDevs</span>
          </Link>

          <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-sm text-muted-foreground md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto hidden flex-shrink-0 items-center gap-1.5 md:flex">
            {ctas.map((cta) => (
              <NavButton key={cta.href} cta={cta} />
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="ml-auto inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {isOpen && (
          <div className="mt-2 rounded-xl border border-border bg-background/95 p-3 shadow-[0_16px_45px_oklch(0_0_0/0.42)] backdrop-blur-xl max-md:backdrop-blur-none md:hidden">
            <div className="flex flex-col gap-1.5 text-sm text-foreground">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-foreground/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 grid gap-2">
                {ctas.map((cta) => (
                  <NavButton key={cta.href} cta={cta} mobile onClick={close} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function NavButton({ cta, mobile, onClick }: { cta: NavCta; mobile?: boolean; onClick?: () => void }) {
  const isPrimary = cta.variant !== "ghost"

  return (
    <a
      href={cta.href}
      target={cta.external ? "_blank" : undefined}
      rel={cta.external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all",
        isPrimary
          ? "bg-accent text-accent-foreground shadow-[0_8px_24px_rgba(60,159,90,0.22)] hover:-translate-y-px"
          : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground",
        mobile && "w-full",
      )}
    >
      {cta.label}
      {isPrimary && (
        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  )
}
