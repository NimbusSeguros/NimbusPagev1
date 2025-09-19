import { useState, useEffect } from "react"

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Felipe Perdomo",
    position: "CEO",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750274009/Mask_group_6_xg2lco.png",
  },
  {
    id: 2,
    name: "Tomás Perdomo",
    position: "Coordinador de Desarrollo Comercial",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1758282952/tomas3_asq4az.png",
  },
  {
    id: 3,
    name: "Hernán Perdomo",
    position: "Gerente Comercial",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750274375/Mask_group_8_xhqavz.png",
  },
  {
    id: 4,
    name: "Agustina Delsart",
    position: "Coordinadora de Siniestros",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750274375/Mask_group_9_buyhmg.png",
  },
  {
    id: 5,
    name: "Melina Sabattini",
    position: "Coordinadora de Marketing",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1758282945/meli2_mm3olp.png",
  },
  {
    id: 6,
    name: "Iara Gangale",
    position: "Coordinadora de Administración",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750274375/Mask_group_11_jsekmt.png",
  },
  {
    id: 7,
    name: "Nahuel Francia",
    position: "Coordinador de Desarrollo",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750274375/Mask_group_12_pg3hsw.png",
  },
  {
    id: 8,
    name: "Valentín Schutt",
    position: "Coordinador de Sistemas",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750274375/Mask_group_13_mzpwk4.png",
  },
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(6)
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(4)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3)
      } else {
        setItemsPerView(2)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, teamMembers.length - itemsPerView)

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7x2 mx-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[18px] font-['Open_Sans',sans-serif] font-bold text-[#0000FF] mb-4">Nuestro equipo</h2>
          <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] max-w-6xl mx-auto mb-2">
            Liderados por Felipe Perdomo y su equipo de coordinación, en Nimbus trabajamos más de 30 personas
            comprometidas con brindar servicio, soluciones y acompañamiento real a cada productor y cliente que confía
            en nosotros.
          </p>
          <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif]">
            Conocé al equipo que impulsa esta red todos pepepepe
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className="flex-shrink-0 px-3 h-full" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="rounded-lg p-6 text-center h-full flex flex-col justify-between min-h-[280px]">
                    <div className="flex flex-col items-center">
                      <div className="w-60 h-60 lg:w-37 lg:h-37 mx-auto mb-4 rounded-2xl overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h3 className="font-semibold text-[#0000FF] mb-1">{member.name}</h3>
                        <p className="text-sm text-[#5E5E5E]">{member.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-lg text-center h-full flex flex-row justify-center min-h-[200px] mb-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 mx-auto p-0 mb-2 rounded-xl overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="font-semibold text-blue-600 mb-1 text-sm">{member.name}</h3>
                  <p className="text-xs text-gray-600">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
