import { Logo } from "./logo"

const services = ["Software a medida", "Aplicaciones web", "Automatizaciones", "Integraciones API"]
const company = ["Manta, Ecuador", "Trabajo remoto", "Sprints semanales", "Soporte evolutivo"]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-9 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="size-5 text-accent" />
              <span className="text-sm font-semibold tracking-tight">CodiDevs</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Equipo de desarrollo de software en Manta, Ecuador. Construimos productos internos,
              plataformas web, automatizaciones e integraciones para empresas en crecimiento.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent animate-pulse-glow max-md:animate-none" />
              Sistemas medibles, mantenibles y listos para escalar.
            </div>
          </div>

          <FooterColumn title="Servicios" items={services} />
          <FooterColumn title="Operacion" items={company} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            &copy; {year} CodiDevs. Desarrollo de software a medida en Ecuador.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">Inicio</a>
            <a href="/apps" className="transition-colors hover:text-foreground">Apps Móviles</a>
            <a href="/n8n" className="transition-colors hover:text-foreground">Automatizaciones n8n</a>
            <a href="/#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-4 select-none bg-gradient-to-b from-foreground/[0.055] to-transparent bg-clip-text text-center text-[min(18vw,9rem)] font-semibold leading-none tracking-tight text-transparent sm:-mb-8"
        >
          codidevs
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-foreground/82">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
