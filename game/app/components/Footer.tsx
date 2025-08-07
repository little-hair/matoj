"use client"

import { Shield, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                MATOJ <span className="text-[#FFD700]">Games</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              O marketplace seguro feito por gamers, para gamers. Protegendo sua comunidade desde 2023.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("como-funciona")}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("garantia")}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Nossa Garantia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("depoimentos")}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2025 Matoj Games. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Não afiliado a Riot Games, Valve, Activision Blizzard ou outras desenvolvedoras.
          </p>
        </div>
      </div>
    </footer>
  )
}
