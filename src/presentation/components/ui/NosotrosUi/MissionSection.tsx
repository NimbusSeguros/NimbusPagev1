export default function MissionSection() {
  return (
    <div className="w-full bg-[#F2F2F2] py-16 px-6">
      <div className="max-w-12xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-[#0000FF] font-['Open_Sans',sans-serif] text-lg font-bold mb-6">Misión</h2>

        {/* Description */}
        <p className="text-center text-[#5E5E5E] font-['Open_Sans',sans-serif] text-sm mb-4 max-w-4xl mx-auto leading-relaxed">
          Administramos riesgos de Empresas y Personas; desarrollamos carteras de BROKERS y PAS buscando un equilibrio
          justo entre la protección integral del patrimonio y la rentabilidad.{" "}
          <span className="font-semibold">Tenemos tres objetivos fundacionales:</span>
        </p>

        {/* Three Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 px-4">
          {/* Objective 1 */}
          <div className="text-center relative px-6">
            <div className="text-[#0000FF] font-bold text-6xl font-opensans mb-6">1</div>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-sm leading-relaxed px-2">
              Generar <span className="text-[#0000FF] font-semibold">conciencia y cultura</span> aseguradora en{" "}
              <span className="text-[#0000FF] font-semibold">la sociedad</span>
            </p>
            {/* Vertical divider - hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-px bg-[#0000FF]"></div>
          </div>

          {/* Objective 2 */}
          <div className="text-center relative px-6">
            <div className="text-[#0000FF] font-bold text-6xl font-opensans mb-6">2</div>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-sm leading-relaxed px-2">
              Desarrollar <span className="text-[#0000FF] font-semibold">el crecimiento</span> de los BROKERS y PAS que
              integran nuestra Comunidad
            </p>
            {/* Vertical divider - hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-px bg-[#0000FF]"></div>
          </div>

          {/* Objective 3 */}
          <div className="text-center px-6">
            <div className="text-[#0000FF] font-bold text-6xl font-opensans mb-6">3</div>
            <p className="text-[#5E5E5E] font-['Open_Sans',sans-serif] text-sm leading-relaxed px-2">
              Crear <span className="text-[#0000FF] font-semibold">valor</span> y marcar la diferencia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}