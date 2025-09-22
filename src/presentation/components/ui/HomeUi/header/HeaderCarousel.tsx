"use client"

import { Link } from "react-router-dom"
import type React from "react"
import { useState, useEffect } from "react"

interface CarouselItem {
  title: string
  titleHighlight: string
  description: React.ReactNode
  reverseOrder?: boolean
}

const HeaderCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const carouselItems: CarouselItem[] = [
    {
      titleHighlight: "Crecemos ",
      title: "con vos",
      reverseOrder: true,
      description: (
        <>
          {isMobile ? (
            <>
              Conectamos a los mejores productores con oportunidades reales de expansión.
            </>
          ) : (
            <>
              Conectamos a profesionales del seguro con oportunidades reales de expansión.
              <strong> Vos ponés la experiencia. Nosotros, el impulso y las herramientas. </strong>{" "}
            </>
          )}
        </>
      ),
    },
    {
      title: "Tu red ",
      titleHighlight: "empieza acá",
      description: (
        <>
          {isMobile ? (
            <>Te acompañamos desde el primer paso, con visión y respaldo.</>
          ) : (
            <>
              Te acompañamos desde el primer paso, con visión y respaldo.
            </>
          )}
        </>
      ),
    },
    {
      title: "Impulsamos tu ",
      titleHighlight: "crecimiento",
      description: (
        <>
          {isMobile ? (
            <>Accedé a aseguradoras, capacitaciones y una red activa que potencia tu cartera.</>
          ) : (
            <>
              Accedé a <strong>aseguradoras líderes, capacitaciones de primer nivel</strong> y una red activa que te
              abre puertas para <strong>potenciar tu cartera.</strong>
            </>
          )}
        </>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [carouselItems.length])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const renderTitle = (item: CarouselItem) => {
    if (item.reverseOrder) {
      return (
        <>
          <span className="text-[#0000FF] font-black">{item.titleHighlight}</span>
          {item.title}
        </>
      )
    } else {
      return (
        <>
          {item.title}
          <span className="text-[#0000FF] font-black">{item.titleHighlight}</span>
        </>
      )
    }
  }

  return (
    <>
      <style>{`
        .carousel-title {
          animation: slideInUp 0.7s ease-out forwards;
        }
        
        .carousel-description {
          animation: slideInUp 0.7s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <header className="relative w-full -mt-20 h-[calc(100dvh)] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={
              isMobile
                ? "https://res.cloudinary.com/dr8n9s55i/image/upload/v1751375035/Frame_7_kqgkbn.jpg"
                : "https://res.cloudinary.com/dr8n9s55i/image/upload/v1749927655/Mask_group_mnvzna.jpg"
            }
            alt="Header background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 sm:mb-12">
            <h1
              key={`title-${currentIndex}`}
              className="carousel-title font-['Open_Sans'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5E5E5E] mb-4 sm:mb-6 font-thin"
            >
              {renderTitle(carouselItems[currentIndex])}
            </h1>
            <p
              key={`description-${currentIndex}`}
              className="carousel-description font-['Open_Sans'] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#5E5E5E]"
            >
              {carouselItems[currentIndex].description}
            </p>
          </div>

          {/* Botón actualizado - ahora solo usa onClick */}
          <div className="inline-block mb-8 sm:mb-12">
            <Link to="/sumate#formulario">
              <button className="bg-[#72FF47] hover:bg-[#0000FF] text-[#0000FF] hover:text-white font-medium py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-[12px] cursor-pointer">
                Quiero ser parte
              </button>
            </Link>
          </div>

          <div className="absolute bottom-6 sm:bottom-8 flex space-x-3">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-[#0000FF] w-2 sm:w-6" : "bg-[#0000FF] opacity-50"
                } transition-all duration-300`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderCarousel
