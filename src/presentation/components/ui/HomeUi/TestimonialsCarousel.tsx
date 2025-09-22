"use client"

import { useState, useEffect, useRef } from "react"
import { Heart } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  matricula: string
  text: string
}

const testimonialsData: Testimonial[][] = [
  [
    {
      id: 1,
      name: "Magali Block",
      matricula: "Matr. 95758",
      text: "Destaco y recomiendo a Nimbus por su profesionalismo, compromiso y calidad humana. Fueron clave en mis inicios, brindándome apoyo y guía en cada paso.",
    },
    {
      id: 2,
      name: "Juan Córdoba",
      matricula: "Matr. 96135",
      text: "Quiero agradecer a todo el equipo de Nimbus por su apoyo en mi crecimiento. Su compromiso y acompañamiento han sido clave en mi desarrollo. ¡Sigamos trabajando juntos!",
    },
    {
      id: 3,
      name: "Sabina Fandiño",
      matricula: "Matr. 66924",
      text: "Nimbus es sinónimo de empatía, protección y compromiso. Siempre están acompañando en todo momento en las buenas y en las malas.",
    },
  ],
  [
    {
      id: 4,
      name: "Elvio Scholles",
      matricula: "Matr. 85259",
      text: "La experiencia con Nimbus ha sido excepcional. Su equipo siempre está disponible para resolver cualquier duda y brindar el mejor servicio.",
    },
    {
      id: 5,
      name: "Carina Perdomo",
      matricula: "Matr. 104336",
      text: "Recomiendo ampliamente a Nimbus. Su profesionalismo y dedicación son incomparables. Han sido fundamentales en mi desarrollo profesional.",
    },
    {
      id: 6,
      name: "Marcos Ruiz",
      matricula: "Matr. 87736",
      text: "Nimbus no solo ofrece servicios de calidad, sino que también se preocupa genuinamente por el bienestar y crecimiento de sus clientes.",
    },
  ],
]

export default function TestimonialsCarousel() {
  const [currentStep, setCurrentStep] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Minimum distance required to trigger a swipe
  const minSwipeDistance = 50

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextStep()
    } else if (isRightSwipe) {
      prevStep()
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Add touch event listeners
    carousel.addEventListener("touchstart", onTouchStart, { passive: true })
    carousel.addEventListener("touchmove", onTouchMove, { passive: true })
    carousel.addEventListener("touchend", onTouchEnd, { passive: true })

    // Cleanup function
    return () => {
      carousel.removeEventListener("touchstart", onTouchStart)
      carousel.removeEventListener("touchmove", onTouchMove)
      carousel.removeEventListener("touchend", onTouchEnd)
    }
  }, [touchStart, touchEnd])

  return (
    <div className="w-full bg-[#0000FF] py-16 px-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
      <div className="max-w-8x1 mx-auto">
        {/* Title */}
        <h2 className="text-center text-[#72FF47] 2xl:text-[18px] lg:text-[18px]  text-[18px] md:text-3xl lg:text-4xl font-bold mb-12">
          Ellos nos eligen y crecen con Nimbus
        </h2>

        {/* Carousel Container */}
        <div className="relative" ref={carouselRef}>
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {testimonialsData.map((stepTestimonials, stepIndex) => (
                <div key={stepIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-4 items-stretch">
                    {stepTestimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[150px] flex flex-col justify-between"
                      >
                        {/* Heart Icon */}
                        <div className="flex justify-center mb-2">
                          <div className="bg-[#72FF47] rounded-full p-3">
                            <Heart className="w-6 h-6 text-[#0000FF] fill-current" />
                          </div>
                        </div>

                        {/* Name and Matricula */}
                        <div className="text-center mb-2">
                          <h3 className="text-[#0000FF] font-bold text-[12px] mb-1">{testimonial.name} {testimonial.matricula}</h3>
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-[#5E5E5E] text-center leading-relaxed text-[12px]">
                          "{testimonial.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentStep === index ? "bg-[#D9D9D9]" : "bg-white/50 hover:bg-white/70 cursor-pointer"
              }`}
              aria-label={`Go to testimonials step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
