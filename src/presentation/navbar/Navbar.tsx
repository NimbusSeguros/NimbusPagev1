"use client"

import { useState, useEffect } from "react"

// Función para combinar clases condicionales (reemplaza cn)
const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios PAS", href: "/servicios" },
  { label: "Seguros corporativos", href: "/seguros" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Sumate", href: "/sumate" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Simulamos la ruta actual (en un proyecto real usarías usePathname de Next.js)
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    // Agregar el listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={classNames(
        "sticky top-0 z-50 w-full border-blue-600 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/50",
      )}
    >
      <div className="container mx-auto flex h-20 items-center px-4 xl:px-24 lg:justify-between">
        {/* Mobile Menu Button - Solo visible en móvil, posicionado a la izquierda */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Logo - Centrado en móvil, a la izquierda en desktop */}
        <a
          href="/"
          className="flex items-center lg:flex-none absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none"
        >
          <img
            src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749829791/logo_nimbus_qlbjdg.svg"
            alt="Nimbus Logo"
            className="h-8"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label} className="relative tooltip-container">
                <a
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "font-medium text-[#0000FF] border-b-2 border-[#0000FF] pb-1"
                      : "text-gray-700 transition-colors hover:font-bold duration-200",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden lg:flex items-center space-x-5 ">
          <a href="https://www.linkedin.com/company/nimbus-seguros/posts/?feedView=all" aria-label="LinkedIn" target="blank">
            <img
              src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749829883/linkedin_hpnxjy.svg"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
          <a href="https://www.facebook.com/NimbusBroker/" aria-label="Facebook" target="blank">
            <img
              src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749829882/facebook_mi4ean.svg"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
          <a href="https://www.instagram.com/nimbusseguros/" aria-label="Instagram" target="blank">
            <img
              src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749829883/insta_cc5gkk.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu - Pantalla completa */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#0000FF] flex flex-col">
          {/* Header del menú móvil */}
          <div className="flex items-center justify-between p-4 border-b border-blue-400">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1749829791/logo_nimbus_qlbjdg.svg"
              alt="Nimbus Logo"
              className="h-8 filter brightness-0 invert"
            />
            <div className="w-10"></div> {/* Spacer para centrar el logo */}
          </div>

          {/* Contenido del menú */}
          <div className="flex-1 flex flex-col justify-center px-8">
            <nav className="space-y-8">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className={classNames(
                      "block font-[12px] font-light text-white border-b border-blue-400 pb-4 transition-colors",
                      pathname === item.href ? "font-medium" : "hover:text-blue-200",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>

            {/* Social Media Icons en el menú móvil */}
            <div className="flex items-left justify-left space-x-8 mt-16">
              <a href="#" aria-label="LinkedIn" className="p-2">
                <img
                  src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1751376172/Group_320_xcrzod.svg"
                  alt="LinkedIn"
                  className="h-8 w-8"
                />
              </a>
              <a href="#" aria-label="Facebook" className="p-2">
                <img
                  src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1751376172/Group_322_bnf8sc.svg"
                  alt="Facebook"
                  className="h-8 w-8"
                />
              </a>
              <a href="#" aria-label="Instagram" className="p-2">
                <img
                  src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1751376172/Group_321_iejaub.svg"
                  alt="Instagram"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
