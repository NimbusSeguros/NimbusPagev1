import type React from "react"
import { Link } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-8 min-h-[300px] flex items-center justify-center overflow-hidden bg-[#F2F2F2]">
      {/* Semicírculo superior derecho */}
      <div className="absolute -top-5 -right-5 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transform rotate-180">
        <img src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1751378776/Ellipse_30_vdq9q2.svg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Semicírculo inferior izquierdo */}
      <div className="absolute -bottom-5 -left-5 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transform -rotate-220">
        <img src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1751378776/Ellipse_31_fq9qnu.svg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h2
          className="text-[#0000FF] text-base sm:text-lg md:text-xl lg:text-[18px] font-thin mb-4 px-4"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Vos traé las ganas, <span className="font-extrabold">nosotros las oportunidades.</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-[#0000FF] text-[12px] sm:text-base md:text-lg lg:text-[12px] mb-8 max-w-12xl mx-auto px-4"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Da el próximo paso y potenciá tu negocio con una red que te acompaña siempre.

        </p>

        {/* CTA Button */}
        <Link to="/sumate#formulario">
        <button
          className="bg-[#72FF47] text-[#0000FF] px-8 sm:px-12 md:px-12 lg:px-12 py-3 sm:py-4 rounded-full text-[12px] font-bold transition-all duration-300 hover:bg-[#0000FF] hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Quiero ser parte
        </button>
        </Link>  
      </div>
    </section>
  )
}

export default CallToActionSection
