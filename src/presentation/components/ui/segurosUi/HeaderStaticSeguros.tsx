import type React from "react"
import { useState, useEffect } from "react"


const HeaderStaticSeguros: React.FC = () => {
const [isMobile, setIsMobile] = useState(false)

  // Hook para detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px es el breakpoint md de Tailwind
    }

    // Verificar al cargar
    checkIsMobile()

    // Agregar listener para cambios de tamaño
    window.addEventListener("resize", checkIsMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return (
    <header className="relative w-full h-[calc(100svh)] min-h-[500px] overflow-hidden -mt-20">
      <div className="absolute inset-0 w-full h-full">
          <img
            src={
              isMobile
                ? "https://res.cloudinary.com/dr8n9s55i/image/upload/v1752236833/Frame_header_celular_wwdolp.jpg"
                : "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749927655/Mask_group-2_pf465w.jpg"
            }
            alt="Header background"
            className="object-cover w-full h-full"
          />
        <div className="absolute inset-0 bg-black/5" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 text-center lg:mt-5">
        
        <div className="mb-8 sm:mb-12">
          <h1 className="font-['Open_Sans'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-[#5E5E5E] mb-6 sm:mb-8 font-thin">
            <span className="text-[#0000FF] font-black">Soluciones pensadas</span> para tu empresa
          </h1>
          <p className="font-['Open_Sans'] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-[#5E5E5E]">
            <strong>Trabajamos para proteger tu patrimonio,</strong> con coberturas diseñadas según tus riesgos y el
            respaldo de aseguradoras líderes.
          </p>
        </div>

        
        <a href="#seguros" className="inline-block">
          <button className="bg-[#72FF47] hover:bg-[#0000FF] text-[#0000FF] hover:text-white font-medium py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-[12px] cursor-pointer">
            Elegí tu seguro
          </button>
        </a>
      </div>
    </header>
  )
}

export default HeaderStaticSeguros
