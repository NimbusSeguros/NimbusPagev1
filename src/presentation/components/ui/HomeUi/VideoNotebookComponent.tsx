"use client"

import { ChevronRight } from "lucide-react"

export default function VideoNotebookComponent() {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false)


  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Semicírculo verde en la esquina superior derecha */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 -translate-y-10 translate-x-10 sm:-translate-y-20 sm:translate-x-20 md:-translate-y-15 md:translate-x-15 z-10 -rotate-30">
        <img
          src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1752168884/Ellipse_39_rwwcrl.svg"
          alt="Green semicircle"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Contenedor principal del video */}
      <div className="relative flex flex-col items-center justify-center pt-5 px-4 pb-5 2xl:pt-20 2xl:pb-20 lg:pt-10 z-30">
        <div className="relative w-full max-w-6xl mb-8 z-40">
          <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden shadow-lg relative z-50">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/P_WciStDDRk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <a href="https://www.youtube.com/@nimbusseguros3264/videos" target="blanc">
        {/* Botón Ver más - Solo en desktop */}
        <button
          className="hidden md:block text-[12px] bg-[#72FF47] hover:bg-[#0000FF] text-[#0000FF] hover:text-[white] font-semibold px-12 py-3 rounded-full transition-colors duration-200 shadow-lg cursor-pointer"
        >
          Ver más
        </button>
        </a>
      </div>

      {/* Línea azul separadora - Solo en desktop */}
      <div className="hidden md:block w-full h-2 bg-blue-600" style={{ backgroundColor: "#0000FF" }}></div>

      {/* Steps Section */}
      <div className="bg-[#F2F2F2] p-6 md:p-12 lg:p-20">
        {/* Layout móvil - columnas verticales */}
        <div className="md:hidden flex flex-col space-y-8">
          {/* Step 1 - Asesoramiento */}
          <div className="text-center space-y-4 max-w-sm mx-auto">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749939210/auricular_mzhmwk.svg"
                alt="Asesoramiento"
                width={60}
                height={60}
                className="w-15 h-15"
              />
            </div>
            <h3 className="font-bold text-[12px] text-[#5E5E5E] font-open-sans">Asesoramiento</h3>
            <p className="text-[12px] text-[#5E5E5E] leading-relaxed font-open-sans px-4">
              Ponemos a tu disposición nuestra experiencia en desarrollo de carteras y administración de riesgos para
              ayudarte a gestionar tus clientes de manera integral y fomentar un crecimiento sostenible.
            </p>
          </div>

          {/* Step 2 - Capacitación Continua */}
          <div className="text-center space-y-4 max-w-sm mx-auto">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749939209/pantalla_hpcaw2.svg"
                alt="Capacitación"
                width={60}
                height={60}
                className="w-15 h-15"
              />
            </div>
            <h3 className="font-bold text-[12px] text-[#5E5E5E] font-open-sans">Capacitación Continua</h3>
            <p className="text-[12px] text-[#5E5E5E] leading-relaxed font-open-sans px-4">
              Nuestro equipo de formación te acerca las últimas novedades del mercado. Desarrollamos cursos y
              capacitaciones actualizadas en todas las ramas del seguro para que estés siempre un paso adelante.
            </p>
          </div>

          {/* Step 3 - Tecnología y Marketing */}
          <div className="text-center space-y-4 max-w-sm mx-auto">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749939209/redes_os3ari.svg"
                alt="Tecnología y Marketing"
                width={60}
                height={60}
                className="w-15 h-15"
              />
            </div>
            <h3 className="font-bold text-[12px] text-[#5E5E5E] font-open-sans">Tecnología y Marketing Estratégico</h3>
            <p className="text-[12px] text-[#5E5E5E] leading-relaxed font-open-sans px-4">
              Potenciamos tu negocio con IA y herramientas innovadoras, automatizando procesos y optimizando tu tiempo.
              Diseñamos estrategias de marketing para fortalecer la relación con clientes y expandir tu mercado.
            </p>
          </div>
        </div>

        {/* Layout desktop - filas horizontales */}
        <div className="hidden md:flex flex-row items-center justify-center gap-6 lg:gap-8">
          {/* Step 1 - Asesoramiento */}
          <div className="text-center space-y-4 flex-1 max-w-sm">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749939210/auricular_mzhmwk.svg"
                alt="Asesoramiento"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="font-bold text-[12px] text-[#5E5E5E] font-open-sans">Asesoramiento</h3>
            <p className="text-[12px] text-[#5E5E5E] leading-relaxed font-open-sans">
              Ponemos a tu disposición nuestra experiencia en desarrollo de carteras y administración de riesgos para
              ayudarte a gestionar tus clientes de manera integral y fomentar un crecimiento sostenible.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="flex justify-center">
            <ChevronRight className="w-8 h-8 text-[#0000FF]" />
          </div>

          {/* Step 2 - Capacitación Continua */}
          <div className="text-center space-y-4 flex-1 max-w-sm">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749939209/pantalla_hpcaw2.svg"
                alt="Capacitación"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="font-bold text-[12px] text-[#5E5E5E] font-open-sans">Capacitación Continua</h3>
            <p className="text-[12px] text-[#5E5E5E] leading-relaxed font-open-sans">
              Nuestro equipo de formación te acerca las últimas novedades del mercado. Desarrollamos cursos y
              capacitaciones actualizadas en todas las ramas del seguro para que estés siempre un paso adelante.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="flex justify-center">
            <ChevronRight className="w-8 h-8 text-[#0000FF]" />
          </div>

          {/* Step 3 - Tecnología y Marketing */}
          <div className="text-center space-y-4 flex-1 max-w-sm">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749939209/redes_os3ari.svg"
                alt="Tecnología y Marketing"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="font-bold text-[12px] text-[#5E5E5E] font-open-sans">Tecnología y Marketing Estratégico</h3>
            <p className="text-[12px] text-[#5E5E5E] leading-relaxed font-open-sans">
              Potenciamos tu negocio con IA y herramientas innovadoras, automatizando procesos y optimizando tu tiempo.
              Diseñamos estrategias de marketing para fortalecer la relación con clientes y expandir tu mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
