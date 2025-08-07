"use client"

import { useState } from "react"
import { Shield, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/media/logo.jpg" alt="" className="mr-4 h-16" height={30}/>
          {/* <Shield className="text-3xl mr-2 text-[#4A90E2]" size={32} /> */}
          <span className="text-2xl font-bold">
            MATOJ <span className="text-[#FFD700]">Games</span>
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("como-funciona")} className="hover:text-blue-400 transition">
            Como Funciona
          </button>
          <button onClick={() => scrollToSection("garantia")} className="hover:text-blue-400 transition">
            Nossa Garantia
          </button>
          <button onClick={() => scrollToSection("depoimentos")} className="hover:text-blue-400 transition">
            Depoimentos
          </button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-blue-400 transition">
            FAQ
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2 border-t border-gray-800">
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="block py-2 hover:text-blue-400 transition w-full text-left"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection("garantia")}
            className="block py-2 hover:text-blue-400 transition w-full text-left"
          >
            Nossa Garantia
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="block py-2 hover:text-blue-400 transition w-full text-left"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="block py-2 hover:text-blue-400 transition w-full text-left"
          >
            FAQ
          </button>
        </div>
      )}
    </nav>
  )
}
