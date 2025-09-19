import type React from "react"
import { useState } from "react"

interface CardData {
  id: number
  title: string
  normalImage: string
  hoverImage: string
}

const CardsComponent: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cardsData: CardData[] = [
    {
      id: 1,
      title: "Pasión",
      normalImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270781/Group_304_cc6cr3.svg",
      hoverImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270956/Group_304_1_fvdpgq.svg",
    },
    {
      id: 2,
      title: "Servicio",
      normalImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270781/Capa_1_10_wpshqg.svg",
      hoverImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270956/Capa_1_12_bjbdng.svg",
    },
    {
      id: 3,
      title: "Liderazgo",
      normalImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1751987356/Group_334_gxrkpf.svg",
      hoverImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270956/Vector_3_id2wug.svg",
    },
    {
      id: 4,
      title: "Colaboración",
      normalImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270782/Capa_1_11_dvwma3.svg",
      hoverImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270956/Capa_1_13_uv8x2l.svg",
    },
    {
      id: 5,
      title: "Integridad",
      normalImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1751987356/Group_335_wflkey.svg",
      hoverImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270957/Group_301_b60iq6.svg",
    },
    {
      id: 6,
      title: "Calidad",
      normalImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270782/Group_303_aa2bjt.svg",
      hoverImage: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750270956/Group_303_1_wewf1t.svg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-10xl mx-auto">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`
              relative p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out cursor-pointer
              ${hoveredCard === card.id ? "bg-[#0000FF] transform scale-105" : "bg-white hover:shadow-xl"}
            `}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 w-18 h-18 flex items-center justify-center">
                <img
                  src={hoveredCard === card.id ? card.hoverImage : card.normalImage}
                  alt={card.title}
                  className="w-full h-full object-contain transition-all"
                />
              </div>
              <h3
                className={`
                  text-[18px] font-bold transition-colors duration-300
                  ${hoveredCard === card.id ? "text-[#72FF47]" : "text-[#0000FF]"}
                `}
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsComponent
