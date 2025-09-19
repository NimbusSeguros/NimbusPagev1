import { Link } from 'react-router-dom';
import {useState, useEffect} from "react"



const HeaderStaticNosotros: React.FC = () => {
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
                : "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749927655/Mask_group-3_q49fls.jpg"
            }
            alt="Header background"
            className="object-cover w-full h-full"
            />
        <div className="absolute inset-0 bg-black/5" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 text-center lg:mt-5">
        
        <div className="mb-8 sm:mb-12">
          <h1 className="font-['Open_Sans'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5E5E5E] mb-6 sm:mb-8 font-thin">
            <span className="text-[#0000FF] font-black">Quiénes somos</span> y hacia dónde vamos
          </h1>
          <p className="font-['Open_Sans'] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-[#5E5E5E]"> Somos Nimbus:
            <strong> un broker que nació para conectar, crecer y transformar la manera de trabajar en seguros. </strong> Hoy somos una red sólida, profesional y en expansión, que acompaña a cada productor y empresa con soluciones reales.
          </p>
        </div>

        
        <a href="#" className="inline-block">
          <Link to="/nosotros#leer-mas">
          <button className="bg-[#72FF47] hover:bg-[#0000FF] text-[#0000FF] hover:text-white font-medium py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-[12px]  cursor-pointer">
            Leer más
          </button>
          </Link>
        </a>
      </div>
    </header>
  )
}

export default HeaderStaticNosotros
