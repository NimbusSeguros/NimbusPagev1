import { Link } from 'react-router-dom';

export default function PASBanner() {
  return (
    <div className="w-full bg-[#0000FF] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="font-['Open_Sans',sans-serif] text-xl font-semibold mb-4">
          <span className="text-[#72FF47] font-bold">¿Sos PAS?</span>
          <span className="text-[#72FF47] font-thin"> ¿Querés formar parte de una red que </span>
          <span className="text-[#72FF47] font-bold">impulsa tu desarrollo?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-white font-['Open_Sans',sans-serif] text-sm mb-8 max-w-6xl mx-auto leading-relaxed">
          En Nimbus apostamos al crecimiento profesional con herramientas reales, experiencia en todas las ramas del
          seguro y una red que acompaña tu camino.
        </p>

        {/* CTA Button */}
        <a href="">
        <Link to="/sumate#formulario">
        <button className="bg-[#72FF47] text-[#0000FF] font-['Open_Sans',sans-serif] font-bold px-8 py-3 rounded-full hover:bg-[#0000FF] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer text-[12px]">
          Quiero ser parte
        </button>
        </Link>  
        </a>
      </div>
    </div>
  )
}
