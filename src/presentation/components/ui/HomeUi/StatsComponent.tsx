"use client"

import { useEffect, useState, useRef } from "react"

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
}

function Counter({ end, duration = 2000, prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef}>
      {prefix}
      {count.toLocaleString()}
    </div>
  )
}

interface StatsComponentProps {
  mainNumber?: number
  polizasEmitidas?: number
  companiasOperando?: number
  anosExperiencia?: number
}

export default function StatsComponent({
  mainNumber = 600,
  polizasEmitidas = 250000,
  companiasOperando = 18,
  anosExperiencia = 15,
}: StatsComponentProps) {
  return (
    <div className="w-full bg-gradient-to-r from-[#0000FF] via--[#0000FF]  to-[#57C5B6]  py-12 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo and Main Stat */}
          <div className="flex items-center gap-6 lg:gap-8 2xl:gap-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749932716/Vector_1_h9hovl.svg"
                alt="Logo N"
                className="w-25 h-25 lg:w-35 lg:h-35 2xl:w-35 2xl:h-35" 
              />
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749933393/Vector_60_gbz69t.svg"
                alt="Arrow"
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
            </div>

            {/* Main Number */}
            <div className="text-center lg:text-left">
              <div className="text-white text-5xl lg:text-7xl font-bold font-opensans ">
                <Counter end={mainNumber} prefix="+" duration={2500} />
              </div>
              <div className="text-white text-lg lg:text-xl font-medium mt-2 font-opensans">Productores satisfechos</div>
            </div>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Pólizas Emitidas */}
            <div className="text-center">
              <div className="text-[#72FF47]  text-sm lg:text-base font-medium mb-1 font-sans">Más de</div>
              <div className="text-[#72FF47] text-3xl lg:text-4xl font-bold tracking-wider font-sans">
                <Counter end={polizasEmitidas} duration={3000} />
              </div>
              <div className="text-[#72FF47] text-sm lg:text-base font-medium mt-1 font-sans">Pólizas emitidas</div>
            </div>

            {/* Compañías Operando */}
            <div className="text-center">
              <div className="text-[#72FF47] text-sm lg:text-base font-medium mb-1 font-sans">Más de</div>
              <div className="text-[#72FF47] text-3xl lg:text-4xl font-bold tracking-wider font-sans">
                <Counter end={companiasOperando} duration={3000} />
              </div>
              <div className="text-[#72FF47] text-sm lg:text-base font-medium mt-1 font-sans">Compañías operando</div>
            </div>

            {/* Años de Trayectoria */}
            <div className="text-center">
              <div className="text-[#72FF47] text-sm lg:text-base font-medium mb-1 font-sans">Más de</div>
              <div className="text-[#72FF47] text-3xl lg:text-4xl font-bold tracking-wider font-sans">
                <Counter end={anosExperiencia} duration={3000} />
              </div>
              <div className="text-[#72FF47] text-sm lg:text-base font-medium mt-1 font-sans">Años de trayectoria</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
