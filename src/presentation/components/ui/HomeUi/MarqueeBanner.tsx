export type React = typeof import("react")

type CompanyLogo = {
  name: string
  url: string
}

type MarqueeBannerProps = {
  speedSec?: number        
  heightRem?: number       
  centerLogoUrl?: string
  logos?: CompanyLogo[]    
  itemGapRem?: number      
}

const DEFAULT_CENTER_LOGO =
  "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749931832/Vector_xiyqib.svg"

// JSON de logos incluido en el mismo componente
const INTERNAL_LOGOS: CompanyLogo[] = [
  { name: "RUS", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/RUS_mqiqvz.png" },
  { name: "San Cristóbal", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/SANCRISTOBAL_kazpdd.png" },
  { name: "FEDPA", url: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1755864050/Logo_FedPat_Alternativo_-_Blanco_m9wpoi.png" },
  { name: "EXPERTA", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988245/EXPERTA_n9hhnn.png" },
  { name: "MAPFRE", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988250/MAPFRE_bxhq37.png" },
  { name: "Integrity", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988249/INTEGRITY_gjydc4.png" },
  { name: "Asociart", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988244/ASOCIART_gsnalp.png" },
  { name: "HDI", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988248/HDI_iadq0b.png" },
  { name: "Mercantil", url: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1755863727/mercantil_xhcmdc.png" },
  { name: "Paraná", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988251/PARANA-color-2_wgtwqb.png" },
  { name: "IAPSER", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988248/Iapser-color-2_exrh39.png" },
  { name: "ATM", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988244/ATM_frtz71.png" },
  { name: "San Patricio", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988253/SANPATRICIO-color-2_ta1ozc.png" },
  { name: "Omint", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988251/OMINT_kh1gb7.png" },
  { name: "El Norte", url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1738581577/el_norte_color_uldnz6.png" },
  { name: "Meridional", url: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1758284073/logo-Meridional-web_cizmar.png" },
  { name: "Sancor", url: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1758285677/SancorPNG2_uwiokg.png" },
]

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  logos = INTERNAL_LOGOS,
  speedSec = 35,
  heightRem = 4.3,
  centerLogoUrl = DEFAULT_CENTER_LOGO,
  itemGapRem = 6, // 6rem de separación por defecto
}) => {
  // Duplicamos la lista en un único track para continuidad perfecta.
  const doubled = [...logos, ...logos]

  return (
    <>
      <style>{`
          @keyframes marqueeX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-110%); }
          }
          .marquee-track {
            animation: marqueeX var(--marquee-duration, 15s) linear infinite;
            will-change: transform;
          }
        `}</style>

      <div
        className="relative w-full overflow-hidden bg-[#0000FF]"
        style={{ height: `${heightRem}rem`, ["--marquee-duration" as any]: `${speedSec}s` }}
        aria-label="Carrusel de logos"
      >
        {/* Pista desplazable */}
        <div className="absolute inset-0 flex items-center">
          <div
            className="marquee-track flex flex-nowrap items-center"
            style={{ gap: `${itemGapRem}rem` }} 
          >
            {doubled.map((logo, idx) => {
              const isDup = idx >= logos.length
              return (
                <img
                  key={`${logo.name}-${idx}`}
                  src={logo.url || "/placeholder.svg?height=66&width=256&query=logo%20placeholder"}
                  alt={isDup ? "" : logo.name}
                  aria-hidden={isDup ? true : undefined}
                  className="h-8 w-auto md:h-10 lg:h-12 object-contain shrink-0 filter brightness-0 invert"
                  loading="lazy"
                />
              )
            })}
          </div>
        </div>

        {/* Logo centrado superpuesto */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <img
            src={centerLogoUrl || "/placeholder.svg?height=32&width=32&query=center%20logo"}
            alt="Logo centrado"
            className="h-8 w-8 filter brightness-0 invert"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}

export default MarqueeBanner
