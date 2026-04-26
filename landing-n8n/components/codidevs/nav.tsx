import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Logo } from "./logo"

const links = [
  { label: "Servicios", href: "#stack" },
  { label: "Soluciones", href: "#grid" },
  { label: "Flujo en vivo", href: "#workflow" },
]

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="relative flex items-center rounded-2xl border border-border bg-background/70 px-3 py-2.5 backdrop-blur-xl shadow-[0_1px_0_oklch(0.82_0.22_152/0.12)_inset,0_10px_30px_oklch(0_0_0/0.4)]">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2 pl-2">
            <Logo className="size-5 text-accent" />
            <span className="text-sm font-medium tracking-tight">Codidevs</span>
          </Link>

          <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-1.5 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex flex-shrink-0 items-center gap-1.5">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
           
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-px"
            >
              Contáctanos
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
