export default function BannerSeguros() {
  return (
    <div className="mt-10 w-full bg-gradient-to-r from-[#0000FF] to-[#57C5B6] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-white font-['Open_Sans',sans-serif] text-lg font-semibold mb-4"
          style={{ fontSize: "18px" }}
        >
          ¿Necesitas asesoramiento personalizado?
        </h2>

        <p className="text-white font-['Open_Sans',sans-serif] mb-8 max-w-2xl mx-auto" style={{ fontSize: "12px" }}>
          Contactá con nuestros especialistas y encontrá la protección ideal para tu empresa.
        </p>

      <a
          href={`https://wa.me/5491158031184?text=Hola, me interesa obtener información sobre los seguros corporativos !`}
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="cursor-pointer bg-[#72FF47] text-[#0000FF] font-['Open_Sans',sans-serif] font-bold px-8 py-3 rounded-full hover:bg-[#0000FF] hover:text-white transition-colors duration-300 ease-in-out text-[12px]">
          Hablar con un asesor
        </button>
        </a>
      </div>
    </div>
  )
}
