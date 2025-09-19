export default function CommitmentSection() {
  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-12xl mx-auto ml-5 mr-5">
        {/* Main Title */}
        <h2 className="text-center font-['Open_Sans',sans-serif] text-lg mb-12">
          <span className="text-[#0000FF] font-thin">Nuestro </span>
          <span className="text-[#0000FF] font-bold">compromiso</span>
          <span className="text-[#0000FF] font-thin"> con tu empresa</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center">
            <h3 className="text-[#0000FF] font-['Open_Sans',sans-serif] font-bold text-[12px] mb-4">
              Optimización de costos
            </h3>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-xs leading-relaxed">
              Analizamos tu operación para encontrar la mejor relación costo-beneficio sin comprometer tu protección
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center">
            <h3 className="text-[#0000FF] font-['Open_Sans',sans-serif] font-bold text-[12px] mb-4">
              Seguimiento comercial
            </h3>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-xs leading-relaxed">
              Nos ocupamos de trámites, actualizaciones, renovaciones y cobranzas para que puedas enfocarte en hacer
              crecer tu negocio
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center">
            <h3 className="text-[#0000FF] font-['Open_Sans',sans-serif] font-bold text-[12px] mb-4">
              Gestión eficiente de siniestros
            </h3>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-xs leading-relaxed">
              Intervenimos ante la aseguradora para que los tiempos y las respuestas estén alineados con tu negocio
            </p>
          </div>
        </div>

        {/* Bottom Row Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center">
            <h3 className="text-[#0000FF] font-['Open_Sans',sans-serif] font-bold text-[12px] mb-4">
              Especialistas por sector
            </h3>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-xs leading-relaxed">
              Ejecutivos asignados según tu actividad y tipo de riesgo, con conocimiento real del mercado y seguimiento
              personalizado
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center">
            <h3 className="text-[#0000FF] font-['Open_Sans',sans-serif] font-bold text-[12px] mb-4">
              Asesoramiento estratégico
            </h3>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-xs leading-relaxed">
              Te ayudamos a elegir coberturas acordes a tus riesgos reales y a la etapa en la que está tu empresa
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}