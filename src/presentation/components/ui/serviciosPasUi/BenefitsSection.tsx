"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

const BenefitsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const images = [
    {
      src: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750177546/acutomovilismo_y1ej8w.png",
      alt: "Automovilismo",
    },
    {
      src: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750177546/futbol_wbzr9r.png",
      alt: "Fútbol",
    },
    {
      src: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750177546/concierto_lmgf9e.png",
      alt: "Concierto",
    },
    {
      src: "https://res.cloudinary.com/dr8n9s55i/image/upload/v1750177546/polo_cmyigq.png",
      alt: "Polo",
    },
  ]

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const slideWidth = container.scrollWidth / images.length
      container.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      })
      setCurrentSlide(index)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const slideWidth = container.scrollWidth / images.length
      const currentIndex = Math.round(container.scrollLeft / slideWidth)
      setCurrentSlide(currentIndex)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative w-full py-16 px-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0000FF] to-[#57C5B6] 2xl:h-108 lg:h-108 h-160"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-white text-xl 2xl:text-[18px] lg:text-[18px] font-bold font-open-sans mb-8">
          Beneficios <span className="font-normal">que van más allá de la producción</span>
        </h2>

        {/* Description */}
        <div className="text-white text-base 2xl:text-[16px] lg:text-[16px] text-[12px] mb-16 max-w-5xl mx-auto space-y-6 leading-relaxed">
          <p>
            <span className="font-semibold font-open-sans">Creemos en construir comunidad.
    </span> Además de acompañarte en lo profesional, compartimos experiencias que nos unen: automovilismo, fútbol, recitales y actividades exclusivas para quienes forman parte de la red.
          </p>
          <p>
            También potenciamos tu presencia comercial con apoyo en locales, identidad visual, asesoramiento operativo y el compromiso de un equipo que siempre está para vos.
          </p>
        </div>

        {/* Images - Desktop Grid (lg and up) */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Images - Mobile/Tablet Carousel (below lg) */}
        <div className="lg:hidden">
          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  )
}

export default BenefitsSection
