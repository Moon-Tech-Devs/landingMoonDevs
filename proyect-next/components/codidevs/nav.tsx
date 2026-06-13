import { WA_N8N_AUDITORIA, WA_N8N_COTIZAR } from "@/lib/whatsapp-links"
import { SiteNav } from "./site-nav"

const links = [
  { label: "Servicios", href: "#stack" },
  { label: "Soluciones", href: "#grid" },
  { label: "Flujo en vivo", href: "#workflow" },
]

export function Nav() {
  return (
    <SiteNav
      links={links}
      ctas={[
        { label: "Reservar auditoria", href: WA_N8N_AUDITORIA, external: true, variant: "ghost" },
        { label: "Cotizar", href: WA_N8N_COTIZAR, external: true },
      ]}
    />
  )
}
