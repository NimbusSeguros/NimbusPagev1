export default function HistorySection() {
  return (
    <div className="w-full bg-white pt-1 px-6">
      {/* Blue line at the top */}
      <div className="w-full h-5 bg-[#0000FF] absolute left-0 right-0 -mt-1"></div>

      <div className="max-w-12xl mx-auto text-center pt-16 pb-16">
        {/* Main Title */}
        <h2 className="font-['Open_Sans',sans-serif] text-lg mb-8">
          <span className="text-[#0000FF]">Nuestra </span>
          <span className="text-[#0000FF] font-bold">historia</span>
        </h2>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-[#5E5E5E] font-['Open_Sans',sans-serif] text-sm leading-relaxed">
          <p>
            Nimbus nació con una idea clara: mejorar el servicio siendo diferentes. <br />Unimos experiencia, tecnología y una mirada colaborativa para generar una red donde productores, brokers y empresas puedan crecer con confianza.
          </p>

          <p>
            Desde nuestros inicios hasta hoy, evolucionamos en equipo: formamos una comunidad sólida, diversa y comprometida con la excelencia.Conocemos el mercado, todas sus ramas y trabajamos día a día para simplificar la gestión y multiplicar las oportunidades.
          </p>

          <p>
           Hoy, más que una fusión, somos una identidad propia: una organización flexible, cercana y con visión a largo plazo
          </p>
        </div>
      </div>
    </div>
  )
}