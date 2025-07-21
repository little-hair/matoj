"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Info, Shield } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-br from-[#1A1A2E] to-[#121212] py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sua Próxima <span className="text-[#FFD700]">Conquista</span>, com{" "}
            <span className="text-[#4A90E2]">Segurança Absoluta</span>.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Compre e venda contas, itens e moedas de seus jogos favoritos com a tranquilidade de um sistema de
            intermediação que protege 100% da sua transação. Chega de riscos.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={() => scrollToSection("comunidade")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2" size={20} />
              Entrar na Comunidade Segura
            </Button>
            <Button
              onClick={() => scrollToSection("como-funciona")}
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg border-gray-600"
            >
              <Info className="mr-2" size={20} />
              Como Funciona
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/media/pc-gamer-banner.jpg"
              alt="Gamer seguro"
              width={550}
              height={400}
              className="rounded-lg shadow-2xl border-2 border-blue-500"
            />
            <div className="absolute -bottom-5 -right-5 bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-full mr-3">
                  <Shield className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold">Proteção GameTrust</p>
                  <p className="text-xs text-gray-400">100% seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
