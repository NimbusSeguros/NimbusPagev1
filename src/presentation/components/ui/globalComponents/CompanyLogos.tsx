
import type React from "react"

const CompanyLogos: React.FC = () => {
  const logos = [
    {
      name: "RUS",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/RUS_mqiqvz.png",
    },
    {
      name: "San Cristóbal",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/SANCRISTOBAL_kazpdd.png",
    },
    {
      name: "FEDPA",
      url: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1758284666/Logo_FedPat_-_Original_ar9hqr.png",
    },
    {
      name: "EXPERTA",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988245/EXPERTA_n9hhnn.png",
    },
    {
      name: "MAPFRE",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988250/MAPFRE_bxhq37.png",
    },
    {
      name: "Integrity",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988249/INTEGRITY_gjydc4.png",
    },
    {
      name: "Asociart",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988244/ASOCIART_gsnalp.png",
    },
    {
      name: "HDI",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988248/HDI_iadq0b.png",
    },
    {
      name: "Mercantil",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988250/MERCANTIL_x2mdnw.png",
    },
    {
      name: "Paraná",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988251/PARANA-color-2_wgtwqb.png",
    },
    {
      name: "LIBRA",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988249/LIBRA_dg0lfz.png",
    },
    {
      name: "IAPSER",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988248/Iapser-color-2_exrh39.png",
    },
    {
      name: "ATM",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988244/ATM_frtz71.png",
    },
    {
      name: "San Patricio",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988253/SANPATRICIO-color-2_ta1ozc.png",
    },
    {
      name: "Omint",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988251/OMINT_kh1gb7.png",
    },
    {
      name: "El Norte",
      url: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1738581577/el_norte_color_uldnz6.png",
    },
    {
      name: "Meridional",
      url: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1758284073/logo-Meridional-web_cizmar.png",
    },
    {
      name: "Sancor",
      url: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1758285677/SancorPNG2_uwiokg.png",
    },
  ]

  return (
    <div className="w-full  2xl:max-w-8xl mx-auto px-4 py-10">
    
      <h2
        className="text-center text-[18px] 2xl:text-[18px] lg:text-[18px] md:text-3xl font-normal mb-12"
        style={{
          fontFamily: "Open Sans, sans-serif",
          color: "#0000FF",
        }}
      >
        Trabajá con las compañías <span className="font-semibold">líderes del mercado</span>
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-full h-16 md:h-20">
            <img
              src={logo.url || "/placeholder.svg"}
              alt={logo.name}
              className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyLogos