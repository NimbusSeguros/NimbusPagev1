import type React from "react"


const SumateSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-8 min-h-[350px] flex items-center justify-center overflow-hidden bg-[#F2F2F2]">
      {/* Semi-sphere decorations */}
      <div
        className="absolute top-0 right-0 w-32 h-32 bg-contain bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dr8n9s55i/image/upload/v1751987631/Ellipse_31_1_mno57l.svg')`,
          transform: "translate(25%, -25%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 bg-contain bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dr8n9s55i/image/upload/v1751987631/Ellipse_31_1_mno57l.svg')`,
          transform: "translate(-25%, 25%) rotate(180deg)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-[#0000FF] text-[18px] font-thin mb-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
          <span className="font-extrabold">Sumate</span> a nuestro equipo
        </h2>

        {/* Subtitle */}
        <p
          className="text-[#5E5E5E] text-[16px] lg:text-[14px] mb-8 max-w-12xl mx-auto"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Si te sentís identificado con nuestra forma de hacer las cosas y querés ser parte de un equipo que apuesta a
          lo distinto, contanos por qué deberíamos conocerte. 📩 Enviá tu CV a{" "}
          <span className="font-extrabold text-[#0000FF]">administracion@nimbusseguros.com</span>
        </p>

        <p
          className="text-[#5E5E5E] text-[16px] lg:text-[14px] mb-8 max-w-12xl mx-auto"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          <span className="font-extrabold text-[#5E5E5E]">¿Querés enterarte de todo?</span> <br />
          <span className="text-[#5E5E5E]">
            Seguinos en LinkedIn y descubrí más sobre nosotros y nuestras búsquedas activas.
          </span>
        </p>

        {/* CTA Button */}
        <a href="https://www.linkedin.com/company/nimbus-seguros/jobs/" target="blank">
        <button
          className="bg-[#72FF47] text-[#0000FF] px-20 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#0000FF] hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer lg:px-15 text-[12px]"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Ver búsquedas
        </button>
        </a>
      </div>
    </section>
  )
}

export default SumateSection
