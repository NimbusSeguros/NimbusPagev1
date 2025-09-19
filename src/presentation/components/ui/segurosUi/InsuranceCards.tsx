"use client"

import { useState } from "react"
import { X } from "lucide-react"

// Tipos de datos expandidos
interface InsuranceCard {
  id: string
  title: string
  description: string
  image: string
  category: "empresas" | "profesionales"
  modalContent: {
    subtitle: string
    fullDescription: string
    targetAudience?: string
    targetDescription?: string
    additionalInfo?: string
    additionalInfoDescription?: string
    coverageTitle: string
    coverageOptions: {
      title: string
      description?: string
    }[]
  }
}

// JSON de datos expandido para las cards
const insuranceData: InsuranceCard[] = [
  // Seguros para empresas (12 cards)
  {
    id: "flota-automotor",
    title: "Flota automotor",
    description: "Todos tus vehículos protegidos en una sola póliza, con coberturas personalizadas.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183823/Group_293_fngsdp.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Una sola póliza para todos tus vehículos",
      fullDescription:
        "Pensado para empresas con dos o más vehículos, permite centralizar y personalizar la cobertura de cada unidad.",
      additionalInfo: "¿Qué vehículos podés incluir?",
      additionalInfoDescription: "Automóviles, utilitarios, camiones, acoplados, maquinaria vial o agrícola.",
      coverageTitle: "Opciones de cobertura",
      coverageOptions: [
        {
          title: "Tercero Básico",
          description: "La cobertura mínima exigida para circular, frente a daños a terceros.",
        },
        {
          title: "Tercero Completo",
          description: "Cubre además robo, incendio y cristales. Protección ampliada con buen costo-beneficio.",
        },
        {
          title: "Todo Riesgo con Franquicia",
          description: "La opción más completa: daños propios y a terceros, con asistencia premium.",
        },
      ],
    },
  },
  {
    id: "vida-colectivo",
    title: "Vida colectivo",
    description: "Tranquilidad económica para tus empleados y respaldo patrimonial para tu empresa.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183841/Group_292_q2h6cy.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Un respaldo económico cuando más se necesita",
      fullDescription:
        "Ofrece protección financiera a los beneficiarios del personal asegurado, en caso de fallecimiento o invalidez total y permanente.",
      targetAudience: "¿A quién está dirigido?",
      targetDescription:
        "Empresas que desean brindar cobertura a sus empleados como beneficio corporativo o por obligación legal.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Muerte por cualquier causa",
        },
        {
          title: "Invalidez total y permanente",
        },
        {
          title: "Muerte accidental (opcional)",
        },
        {
          title: "Cobertura para grupo familiar (opcional)",
        },
      ],
    },
  },
  {
    id: "accidentes-personales-colectivo",
    title: "Accidentes Personales Colectivo",
    description: "Protección adicional para tu equipo ante accidentes dentro y fuera del trabajo.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183817/Capa_1_x9r3v3.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Respaldo para equipos ante accidentes laborales o extralaborales",
      fullDescription:
        "Brinda cobertura económica y médica a grupos de personas ante accidentes que puedan afectar su capacidad de trabajo.",
      targetAudience: "¿A quién está dirigido?",
      targetDescription: "Empresas, cooperativas, instituciones o asociaciones que buscan cobertura grupal.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Muerte accidental",
        },
        {
          title: "Invalidez total y permanente",
        },
        {
          title: "Asistencia médica y farmacéutica",
        },
        {
          title: "Renta diaria por internación",
        },
        {
          title: "Gastos por prótesis e implantes",
        },
      ],
    },
  },
  {
    id: "riesgos-agropecuarios",
    title: "Riesgos Agropecuarios",
    description: "Cultivos, maquinarias y producción protegidos ante eventos climáticos.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183816/Group_296_fvr4l1.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Cobertura integral para la producción rural",
      fullDescription:
        "Acompaña cada etapa del ciclo productivo con protección para cultivos, maquinarias e instalaciones ante eventos climáticos y accidentes.",
      additionalInfo: "¿Qué podés asegurar?",
      additionalInfoDescription: "Cultivos extensivos, maquinaria agrícola, instalaciones, silos y ganado.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Agio Granizo",
        },
        {
          title: "Incendio de cultivos",
        },
        {
          title: "Maquinarias agrícolas",
        },
        {
          title: "Bienes rurales e instalaciones",
        },
        {
          title: "Ganado o aves (según actividad)",
        },
      ],
    },
  },
  {
    id: "comercio",
    title: "Comercio",
    description: "Tu negocio protegido contra robos, incendios y daños, con asistencia inmediata.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183816/Group_297_dvf0db.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Cobertura integral para tu negocio",
      fullDescription:
        "Protege el espacio físico, los bienes y la responsabilidad civil del comercio. Ideal para locales, oficinas o emprendimientos que necesitan respaldo ante riesgos comunes.",
      additionalInfo: "¿Qué podés asegurar?",
      additionalInfoDescription:
        "Contenido general, mobiliario, mercadería, cartelería, cristales y responsabilidad civil.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Incendio del edificio o contenido",
        },
        {
          title: "Robo de bienes o mercadería",
        },
        {
          title: "Daños por agua, cristales o carteles",
        },
        {
          title: "Responsabilidad civil a terceros",
        },
        {
          title: "Asistencia 24 h",
        },
      ],
    },
  },
  {
    id: "todo-riesgo-operativo",
    title: "Todo Riesgo Operativo",
    description: "Cobertura integral para las operaciones productivas y comerciales de tu empresa.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183816/Capa_1_1_cjcnsc.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Protección integral para operaciones industriales o comerciales complejas",
      fullDescription:
        "Una sola póliza para cubrir edificios, bienes de uso, contenido general, maquinaria y responsabilidad civil.",
      targetAudience: "¿A quién está dirigido?",
      targetDescription: "Empresas industriales o grandes comercios con múltiples riesgos asociados a su operación.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Incendio, robo y explosión",
        },
        {
          title: "Daños por agua, rotura de cristales",
        },
        {
          title: "Equipos electrónicos y maquinarias",
        },
        {
          title: "RC linderos y general",
        },
        {
          title: "Lucro cesante (opcional) 24 h",
        },
      ],
    },
  },
  {
    id: "seguro-tecnico",
    title: "Seguro Técnico",
    description: "Equipos, obras y maquinarias cubiertos ante daños y accidentes.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183816/Capa_1_2_af5tga.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Coberturas para obras, equipos y montajes",
      fullDescription:
        "Diseñado para proteger maquinarias, instalaciones o construcciones en ejecución frente a daños imprevistos.",
      additionalInfo: "¿Qué se puede asegurar?",
      additionalInfoDescription: "Obras civiles, montajes industriales, equipos electrónicos o de contratistas.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Todo riesgo construcción",
        },
        {
          title: "Todo riesgo montaje",
        },
        {
          title: "Equipos de contratistas",
        },
        {
          title: "Equipos electrónicos fijos o móviles",
        },
      ],
    },
  },
  {
    id: "transporte",
    title: "Transporte",
    description: "Mercaderías y cargas seguras desde el origen hasta el destino.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183816/Capa_1_3_w7xbmc.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Respaldo para cada envío, desde el origen hasta el destino",
      fullDescription:
        "Protege la mercadería en tránsito frente a robos, daños o accidentes. Aplica tanto para transporte propio como contratado.",
      additionalInfo: "¿Qué podés asegurar?",
      additionalInfoDescription:
        "Insumos, productos terminados, materias primas, maquinaria o artículos manufacturados.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Daños por vuelco, accidente o incendio",
        },
        {
          title: "Robo total o parcial",
        },
        {
          title: "Desaparición de la carga",
        },
        {
          title: "Robo en carga y descarga",
        },
        {
          title: "Responsabilidad civil del transportista",
        },
      ],
    },
  },
  {
    id: "responsabilidad-civil",
    title: "Responsabilidad Civil",
    description: "Respaldo económico y legal ante daños ocasionados a terceros.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183841/Capa_1_6_zehenw.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Respaldo ante reclamos por daños a terceros",
      fullDescription:
        "Cubre indemnizaciones por daños causados a terceros en el desarrollo de tu actividad profesional, comercial y/o industrial.",
      additionalInfo: "¿Qué situaciones cubre?",
      additionalInfoDescription: "Accidentes o perjuicios ocasionados a personas o bienes de terceros.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Daños personales y materiales a terceros",
        },
        {
          title: "RC contratista, producto o profesional",
        },
        {
          title: "RC linderos",
        },
        {
          title: "Defensa legal y gastos judiciales",
        },
      ],
    },
  },
  {
    id: "consorcio",
    title: "Consorcio",
    description: "Coberturas obligatorias y complementarias para edificios y espacios comunes.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183816/Group_299_mqcqsl.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Coberturas obligatorias y adicionales para edificios",
      fullDescription:
        "Pensado para cubrir daños en espacios comunes y responder ante reclamos de terceros, según lo exige la Ley de Propiedad Horizontal.",
      additionalInfo: "¿Qué se asegura?",
      additionalInfoDescription: "Estructura edilicia, instalaciones, bienes comunes y responsabilidad civil.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        {
          title: "Incendio del edificio",
        },
        {
          title: "Daños a cristales, ascensores y equipos",
        },
        {
          title: "Robo y hurtos en espacios comunes",
        },
        {
          title: "Responsabilidad civil por daños a terceros",
        },
        {
          title: "Asistencia para emergencias edilicias",
        },
      ],
    },
  },
  {
    id: "caucion-empresarial",
    title: "Caución Empresarial",
    description: "Garantías para contratos, obras, licitaciones y obligaciones comerciales.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183842/Capa_1_4_gdnlcm.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Garantías comerciales sin comprometer tu capital",
      fullDescription:
        "Permite responder ante obligaciones exigidas en contratos, licitaciones u operaciones aduaneras, evitando la necesidad de avales bancarios.",
      additionalInfo: "¿Cuándo se usa?",
      additionalInfoDescription:
        "En contratos de obra, servicios, alquileres, operaciones aduaneras o licitaciones públicas y privadas.",
      coverageTitle: "Tipos de garantías disponibles",
      coverageOptions: [
        { title: "Contratos de obra o servicios" },
        { title: "Alquiler comercial" },
        { title: "Aduana (importación/exportación)" },
        { title: "Licitaciones y concursos" },
      ],
    },
  },
  {
    id: "incendio",
    title: "Incendio",
    description: "Protección contra daños por fuego, explosiones y rayos en edificios y contenido.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183841/Capa_1_5_k6wugx.svg",
    category: "empresas",
    modalContent: {
      subtitle: "Protección ante uno de los riesgos más críticos",
      fullDescription:
        "Cubre daños materiales por fuego, rayo o explosión en edificios y bienes de uso, con opciones ajustadas según la actividad.",
      additionalInfo: "¿Qué podés asegurar?",
      additionalInfoDescription:
        "Edificios, contenido general, maquinarias, instalaciones, stock, mobiliario y equipamiento.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        { title: "Incendio del edificio y contenido" },
        { title: "Daños por rayo o explosión" },
        { title: "Gastos de remoción de escombros" },
        { title: "Pérdida de alquileres u ocupación" },
      ],
    },
  },
  // Seguros para profesionales (3 cards)
  {
    id: "mala-praxis",
    title: "Mala Praxis",
    description: "Cobertura ante reclamos por errores en la práctica profesional.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750183892/Capa_1_7_sccj4i.svg",
    category: "profesionales",
    modalContent: {
      subtitle: "Cobertura ante reclamos por errores en la práctica profesional",
      fullDescription:
        "Cubre indemnizaciones y defensa ante demandas derivadas de fallas o acciones durante el ejercicio profesional en salud.",
      targetAudience: "¿A quién está dirigido?",
      targetDescription: "Médicos, odontólogos, psicólogos, kinesiólogos y profesionales del ámbito de la salud.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        { title: "Responsabilidad civil profesional" },
        { title: "Indemnizaciones por sentencia o acuerdo" },
        { title: "Defensa legal" },
        { title: "Extensión de reclamos posterior a la baja" },
      ],
    },
  },
  {
    id: "accidentes-personales-prof",
    title: "Accidentes Personales",
    description: "Cobertura individual ante accidentes en el trabajo o fuera de él.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750184035/Capa_1_8_mepoj6.svg",
    category: "profesionales",
    modalContent: {
      subtitle: "Cobertura individual ante accidentes en el trabajo o fuera de él",
      fullDescription:
        "Ofrece respaldo económico ante lesiones que impidan desarrollar la actividad profesional o independiente.",
      targetAudience: "¿A quién está dirigido?",
      targetDescription:
        "Profesionales, trabajadores autónomos, técnicos u oficios que desean protección personal 24 h.",
      coverageTitle: "Coberturas disponibles",
      coverageOptions: [
        { title: "Muerte accidental" },
        { title: "Invalidez total o permanente" },
        { title: "Asistencia médica y farmacéutica" },
        { title: "Renta diaria por internación" },
        { title: "Cobertura 24/7 dentro y fuera del ámbito laboral" },
      ],
    },
  },
  {
    id: "caucion-profesional",
    title: "Caución Profesional",
    description: "Garantías legales o contractuales sin afectar tu liquidez.",
    image: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750184035/Capa_1_9_zpxchr.svg",
    category: "profesionales",
    modalContent: {
      subtitle: "Garantías legales o contractuales sin afectar tu liquidez",
      fullDescription:
        "Permite cumplir con obligaciones legales o contractuales, sin necesidad de inmovilizar fondos ni presentar garantías bancarias.",
      additionalInfo: "¿Cuándo se utiliza?",
      additionalInfoDescription: "En trámites ante organismos públicos, contratos privados o procesos judiciales.",
      coverageTitle: "Tipos de garantías disponibles",
      coverageOptions: [
        { title: "Caución judicial" },
        { title: "Garantía de directores (IGJ)" },
        { title: "Garantía para alquiler comercial" },
        { title: "Garantías ante AFIP, IGJ u otros entes" },
      ],
    },
  },
]

export default function InsuranceCards() {
  const [activeCategory, setActiveCategory] = useState<"empresas" | "profesionales">("empresas")
  const [selectedCard, setSelectedCard] = useState<InsuranceCard | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredCards = insuranceData.filter((card) => card.category === activeCategory)

  const openModal = (card: InsuranceCard) => {
    setSelectedCard(card)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="min-h-screen bg-[#0000FF] py-12 px-4">
      <div className="max-w-12x1 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[18px] font-think text-white mb-4 ">
            <strong>Coberturas específicas</strong> para cada aspecto de tu negocio
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-lg p-1">
            <button
              onClick={() => setActiveCategory("empresas")}
              className={`px-8 py-3  font-semibold transition-all duration-300 cursor-pointer text-[#A2FF86] ${
                activeCategory === "empresas" ? " text-[#A2FF86] underline" : ""
              }`}
            >
              Seguros para empresas
            </button>
            <div className="w-px bg-white mx-2"></div>
            <button
              onClick={() => setActiveCategory("profesionales")}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 cursor-pointer text-[#A2FF86]${
                activeCategory === "profesionales" ? " underline" : ""
              }`}
            >
              Seguros para profesionales
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid gap-6 ${
            activeCategory === "empresas"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-12xl mx-auto"
          }`}
        >
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => openModal(card)}
              className="bg-white rounded-xl p-6 xl:p-5 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-full font-open-sans text-[#0000FF] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[16px] font-bold text-[#0000FF] mb-3 group-hover:text-[#0000FF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#5E5E5E] text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-12xl w-full max-h-[90vh] overflow-y-auto relative ml-5 mr-5">
              <div className="p-8">
                {/* Modal Header con logo circular */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    {/* Logo en círculo azul */}
                    <div className="w-32 h-32 bg-[#0000FF] rounded-br-full flex items-center justify-center mb-4 absolute top-0 left-0">
                      <img
                        src={selectedCard.image || ""}
                        alt={selectedCard.title}
                        className="w-10 h-10 object-contain filter brightness-5 invert -mt-5 -ml-5"
                      />
                    </div>
                    {/* Título debajo del logo */}
                    <h2 className="text-[18px] font-bold text-[#0000FF] mb-0 mt-25">{selectedCard.title}</h2>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Descripción principal */}
                <div className="mb-5">
                  <h3 className="text-[12px] font-bold text-[#0000FF] mb-0">{selectedCard.modalContent.subtitle}</h3>
                  <p className="text-[#5E5E5E] text-[12px] leading-relaxed mb-2">{selectedCard.modalContent.fullDescription}</p>

                  {/* Información del público objetivo */}
                  {selectedCard.modalContent.targetAudience && (
                    <div className="mb-2">
                      <h4 className="text-[12px] font-semibold text-[#5E5E5E] mb-0">
                        {selectedCard.modalContent.targetAudience}
                      </h4>
                      <p className="text-[#5E5E5E] text-[12px] text-sm">{selectedCard.modalContent.targetDescription}</p>
                    </div>
                  )}

                  {/* Información adicional */}
                  {selectedCard.modalContent.additionalInfo && (
                    <div className="mb-4">
                      <h4 className="text-[12px] font-semibold text-[#5E5E5E] mb-2">
                        {selectedCard.modalContent.additionalInfo}
                      </h4>
                      <p className="text-[#5E5E5E] text-[12px]">{selectedCard.modalContent.additionalInfoDescription}</p>
                    </div>
                  )}
                </div>

                {/* Opciones de cobertura */}
                <div className="mb-8">
                  <h3 className="text-[12px] font-bold text-[#0000FF] mb-4">{selectedCard.modalContent.coverageTitle}</h3>
                  <div
                    className={`grid gap-4 ${
                      selectedCard.modalContent.coverageOptions.length <= 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : selectedCard.modalContent.coverageOptions.length === 4
                          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
 {selectedCard.modalContent.coverageOptions.map((coverage, index) => (
  <div
    key={index}
    className={`rounded-lg p-0 ${
      coverage.description ? 'bg-white shadow-lg' : ''
    }`}
  >
    <div className="bg-[#0000FF] text-[#A2FF86] text-center py-3 rounded-lg mb-4 font-semibold text-[12px]">
      {coverage.title}
    </div>
    {coverage.description && (
      <p className="text-[#5E5E5E] text-[12px] text-center leading-relaxed p-3">
        {coverage.description}
      </p>
    )}
  </div>
))}
                  </div>
                </div>

                {/* Botón de acción */}
                <div className="flex justify-start">
                   <a
          href={`https://wa.me/5491158031184?text=Hola, me interesa obtener información sobre: ${encodeURIComponent(selectedCard.title)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#72FF47] text-[#0000FF] py-3 px-8 rounded-full font-bold hover:bg-[#0000FF] hover:text-white transition-colors cursor-pointer text-[12px]">
            Hablar con un asesor
          </button>
        </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
