"use client"

import type React from "react"
import { useState } from "react"

type NimbusSectionProps = {}

const NimbusSection: React.FC<NimbusSectionProps> = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cardData = [
    {
      id: 1,
      title: "Confianza",
      description: "Acuerdos comerciales con compañías líderes del mercado.",
      iconDefault: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749934996/corzon_uyvsvd.svg",
      iconHover: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749937354/corazonB_o9q44t.svg",
      alt: "Corazón",
    },
    {
      id: 2,
      title: "Acompañamiento",
      description: "Un equipo dedicado para apoyarte en la gestión diaria de tu actividad.",
      iconDefault: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749934995/mano_is7unb.svg",
      iconHover: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749937353/manob_pvnfzm.svg",
      alt: "Manos",
    },
    {
      id: 3,
      title: "Crecimiento",
      description: "Acceso a capacitaciones, eventos exclusivos y herramientas digitales para hacer crecer tu negocio.",
      iconDefault: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749934995/pu%C3%B1o_ekx6s2.svg",
      iconHover: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749937353/pu%C3%B1ob_r9i8em.svg",
      alt: "Puño",
    },
  ]

  return (
    <div className="w-full max-w-8xl mx-auto px-10 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[18px] md:text-lg font-open-sans">
          <span style={{ color: "#5E5E5E" }}>Por qué mas de </span>
          <span style={{ color: "#0000FF" }} className="font-bold">
            600 PAS
          </span>
          <span style={{ color: "#0000FF" }}> eligen trabajar con Nimbus</span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="rounded-lg shadow-lg p-5 text-center border border-gray-100 ease-in-out transform hover:scale-105"
            style={{
              backgroundColor: hoveredCard === card.id ? "#0000FF" : "white",
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex justify-center mb-2">
              <img
                src={hoveredCard === card.id ? card.iconHover : card.iconDefault}
                alt={card.alt}
                className="w-16 h-16 transition-all "
              />
            </div>
            <h3
              className="text-[12px] font-bold mb-4 font-open-sans transition-colors "
              style={{
                color: hoveredCard === card.id ? "#72FF47" : "#0000FF",
              }}
            >
              {card.title}
            </h3>
            <p
              className="text-[12px] leading-relaxed font-open-sans transition-colors "
              style={{
                color: hoveredCard === card.id ? "white" : "#5E5E5E",
              }}
            >
              {card.id === 1 && (
                <>
                  Acuerdos comerciales con <span className="font-semibold">compañías líderes</span> del mercado.
                </>
              )}
              {card.id === 2 && (
                <>
                  Un equipo dedicado para apoyarte en <span className="font-semibold">la gestión diaria</span> de tu
                  actividad.
                </>
              )}
              {card.id === 3 && (
                <>
                  Acceso a{" "}
                  <span className="font-semibold">capacitaciones, eventos exclusivos y herramientas digitales</span>{" "}
                  para hacer crecer tu negocio.
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NimbusSection
