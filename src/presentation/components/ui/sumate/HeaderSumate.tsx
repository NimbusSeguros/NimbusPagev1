import { Link } from 'react-router-dom';
import type React from "react"
import {useState, useEffect} from "react"

const HeaderSumate: React.FC = () => {
const [isMobile, setIsMobile] = useState(false)

useEffect (()=> {

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }

   checkIsMobile()

   window.addEventListener("resize", checkIsMobile)

   return () => window.removeEventListener("resize", checkIsMobile)  
}, [])

  return (
    <header className="relative w-full h-[calc(100svh)] min-h-[500px] overflow-hidden -mt-20">
      <div className="absolute inset-0 w-full h-full">
        <img
            src={
              isMobile
                ? "https://res.cloudinary.com/dr8n9s55i/image/upload/v1752238081/Frame_5_hl5vn8.jpg"
                : "https://res.cloudinary.com/dr8n9s55i/image/upload/v1751991139/Mask_group-4_1_ovv8qk.jpg"
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
            <span className="text-[#0000FF] font-black">Construimos juntos</span> <br />
            lo que querés lograr
          </h1>
          <p className="font-['Open_Sans'] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-[#5E5E5E]">En Nimbus encontrás el respaldo que necesitás para enfocarte en vender más y mejor: herramientas, soporte y una red activa en todo el país.
          </p>
        </div>

        {/* Button */}
        <a href="" className="inline-block">
          <Link to="/sumate#formulario">
          <button className="bg-[#72FF47] hover:bg-[#0000FF] text-[#0000FF] hover:text-white font-medium py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-[12px]  cursor-pointer">
            Empezá ahora
          </button>
          </Link>
        </a>
      </div>
    </header>
  )
}

export default HeaderSumate
