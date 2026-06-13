"use client"

import { FormEvent } from "react"
import { MessageCircle } from "lucide-react"
import { waUrl } from "@/lib/whatsapp-links"
import { cn } from "@/lib/utils"
import { Reveal } from "./motion-reveal"

export function HomeContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const nombre = (formData.get("nombre") || "").toString().trim()
    const celular = (formData.get("celular") || "").toString().trim()
    const correo = (formData.get("correo") || "").toString().trim()
    const empresa = (formData.get("empresa") || "").toString().trim()
    const dolorProceso = (formData.get("dolor-proceso") || "").toString().trim()

    const messageLines = [
      "Hola CodiDevs, quiero solicitar un Diagnóstico de Procesos Gratuito para mi empresa.",
      "",
      `Nombre: ${nombre}`,
      `WhatsApp/Celular: ${celular}`,
      `Correo: ${correo}`,
    ]

    if (empresa) messageLines.push(`Empresa: ${empresa}`)
    messageLines.push(`Proceso caótico/manual a mejorar: ${dolorProceso}`)

    window.open(waUrl(messageLines.join("\n")), "_blank", "noopener,noreferrer")
  }

  return (
    <Reveal axis="x">
      <form
        id="formulario-whatsapp"
        className="rounded-2xl border border-border bg-card/40 p-5 shadow-lg backdrop-blur-sm max-md:bg-card/95 max-md:backdrop-blur-none md:p-6"
        onSubmit={handleSubmit}
      >
      <div className="grid gap-4 text-left md:grid-cols-2">
        <Field label="Nombre" id="nombre">
          <input className="form-control" id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
        </Field>
        <Field label="WhatsApp / Celular" id="celular">
          <input className="form-control" id="celular" name="celular" type="tel" placeholder="099XXXXXXXX" required />
        </Field>
        <Field label="Correo Corporativo" id="correo">
          <input className="form-control" id="correo" name="correo" type="email" placeholder="tucorreo@empresa.com" required />
        </Field>
        <Field label="Empresa" id="empresa">
          <input className="form-control" id="empresa" name="empresa" type="text" placeholder="Nombre de tu empresa" />
        </Field>
        <Field label="¿Qué proceso operativo o manual quieres automatizar/mejorar?" id="dolor-proceso" wide>
          <textarea
            className="form-control min-h-32 resize-y"
            id="dolor-proceso"
            name="dolor-proceso"
            placeholder="Ej: Copiar facturas de Excel a nuestro sistema, notificar a clientes por WhatsApp cuando aprueban un pedido, etc."
            required
          />
        </Field>
      </div>
      <div className="mt-5 text-left">
        <button
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(29,155,82,0.2)] transition-transform hover:-translate-y-px sm:w-auto"
          type="submit"
        >
          Enviar por WhatsApp
          <MessageCircle className="size-4" />
        </button>
      </div>
      </form>
    </Reveal>
  )
}

function Field({
  label,
  id,
  wide,
  children,
}: {
  label: string
  id: string
  wide?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", wide && "md:col-span-2")}>
      <label htmlFor={id} className="text-sm font-medium text-foreground/90">
        {label}
      </label>
      {children}
    </div>
  )
}
