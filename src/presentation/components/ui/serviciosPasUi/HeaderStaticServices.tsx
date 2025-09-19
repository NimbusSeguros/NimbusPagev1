import type React from "react"
import { useEffect, useState } from "react"

const HeaderStaticServices: React.FC = () => {
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
    <header className="relative w-full h-[calc(100svh)]  min-h-[500px] overflow-hidden -mt-20">
      <div className="absolute inset-0 w-full h-full">
         <img
            src={
              isMobile
                ? "https://res.cloudinary.com/dr8n9s55i/image/upload/v1752234024/header_celular_gr3aim.jpg"
                : "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749927655/Mask_group-1_ddpbwh.jpg"
            }
            alt="Header background"
            className="object-cover w-full h-full"
          />
        <div className="absolute inset-0 bg-black/5" />
      </div>



      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 text-center lg:mt-10">
        {/* Header content */}
        <div className="mb-8 sm:mb-12">
          <h1 className="font-['Open_Sans'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-[#5E5E5E] mb-6 sm:mb-8 font-thin">
            ¿Por qué elegir <span className="text-[#0000FF] font-black">Nimbus?</span>
          </h1>
          <p className="font-['Open_Sans'] text-sm sm:text-base md:text-lg max-w-8xl mx-auto leading-relaxed text-[#5E5E5E]">
            <strong>Sabemos lo que buscás: una alianza confiable, condiciones claras y acompañamiento real. </strong>{" "}
            Nuestro equipo combina experiencia en el mercado con cercanía para estar con vos en cada etapa de tu recorrido como PAS. Ya sea que estés dando tus primeros pasos o consolidando tu cartera, en Nimbus encontrás el impulso y las herramientas para hacer crecer tu negocio.
          </p>
        </div>

        {/* Button */}
        <a href="#beneficios" className="inline-block">
          <button className="bg-[#72FF47] hover:bg-[#0000FF] text-[#0000FF] hover:text-white font-medium py-3 px-12 sm:py-4 sm:px-16 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-[12px]  cursor-pointer">
            Leer más
          </button>
        </a>
      </div>
    </header>
  )
}

export default HeaderStaticServices
