const CODIDEVS_WHATSAPP = "593962562482"

function waUrl(text: string) {
  return `https://wa.me/${CODIDEVS_WHATSAPP}?text=${encodeURIComponent(text)}`
}

/** Cotización / contacto general (landing n8n) */
export const WA_N8N_COTIZAR = waUrl(
  "Hola CodiDevs, quiero cotizar automatización con n8n o agentes AI."
)

/** Reservar auditoría AI (30 min) */
export const WA_N8N_AUDITORIA = waUrl(
  "Hola CodiDevs, quiero reservar la auditoría AI gratuita (30 min)."
)

/** Hero: iniciar proyecto */
export const WA_N8N_PROYECTO = waUrl(
  "Hola CodiDevs, quiero iniciar un proyecto de automatización / n8n."
)
