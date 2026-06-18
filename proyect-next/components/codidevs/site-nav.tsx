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
        <nav className="flex items-center rounded-full border border-border bg-background/90 px-3 py-2 shadow-[0_8px_30px_oklch(0_0_0/0.04)] backdrop-blur-sm max-md:bg-background/95 max-md:backdrop-blur-none">
          <div className="flex min-w-0 flex-1 items-center justify-start">
            <Link href={homeHref} className="flex flex-shrink-0 items-center gap-2.5 pl-1.5" onClick={close}>
              <Logo className="size-6 text-accent" />
              <span className="text-base font-semibold tracking-tight">CodiDevs</span>
            </Link>
          </div>

          <ul className="hidden shrink-0 items-center gap-0.5 text-sm text-muted-foreground md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-3 py-1.5 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
            <div className="hidden items-center gap-2 md:flex">
              {ctas.map((cta) => (
                <NavButton key={cta.href} cta={cta} />
              ))}
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="mt-2 rounded-2xl border border-border bg-background/95 p-3 shadow-[0_16px_45px_oklch(0_0_0/0.12)] md:hidden">
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
        "group inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all",
        isPrimary
          ? "btn-pill-primary px-4 py-2"
          : "rounded-full px-3.5 py-2 text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground",
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
