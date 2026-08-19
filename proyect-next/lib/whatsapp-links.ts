export const CODIDEVS_WHATSAPP = "593962562482"

export function waUrl(text: string) {
  return `https://wa.me/${CODIDEVS_WHATSAPP}?text=${encodeURIComponent(text)}`
}

export const WA_HOME_COTIZAR = waUrl(
  "Hola CodiDevs, necesito cotizar un software a medida para mi empresa."
)

export const WA_HOME_REUNION = waUrl(
  "Hola CodiDevs, quiero agendar una reunion para revisar un proyecto de software."
)

export const WA_N8N_COTIZAR = waUrl(
  "Hola CodiDevs, quiero cotizar automatizacion con n8n o agentes AI."
)

export const WA_N8N_AUDITORIA = waUrl(
  "Hola CodiDevs, quiero reservar la auditoria AI gratuita (30 min)."
)

export const WA_N8N_PROYECTO = waUrl(
  "Hola CodiDevs, quiero iniciar un proyecto de automatizacion / n8n."
)

export const WA_APPS_COTIZAR = waUrl(
  "Hola CodiDevs, vi sus apps móviles (NutriApp / G-Learn) y me gustaría cotizar el desarrollo de una app para mi negocio."
)

export const WA_APPS_IDEA = waUrl(
  "Hola CodiDevs, tengo una idea para una aplicación móvil y quiero que la desarrollemos."
)
