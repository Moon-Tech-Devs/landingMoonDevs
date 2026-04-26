import { Logo } from "./logo"

const columns = [
  {
    title: "Servicios",
    links: ["Agentes IA", "Workflows n8n", "APIs a la medida", "Sistemas RAG", "Herramientas internas"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Contacto"],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo className="size-5 text-accent" />
              <span className="text-sm font-medium tracking-tight">Codidevs</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Un estudio de automatización para equipos que se niegan a hacer la misma
              tarea dos veces.
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex size-1.5 rounded-full bg-accent animate-pulse-glow" />
              Todos los sistemas operativos.
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            © 2026 Codidevs Labs · Forjado al borde de la automatización
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Seguridad
            </a>
          </div>
        </div>
      </div>

      {/* Massive watermark wordmark */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-12 select-none bg-gradient-to-b from-foreground/[0.06] to-transparent bg-clip-text text-center text-[18vw] font-medium leading-none tracking-tighter text-transparent"
        >
          codidevs
        </div>
      </div>
    </footer>
  )
}
