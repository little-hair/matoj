import { Button } from "@/components/ui/button"
import { MessageCircle, Send, Lock } from "lucide-react"

export default function FinalCTA() {
  return (
    <section id="comunidade" className="py-20 px-4 bg-gradient-to-br from-[#1A1A2E] to-[#121212]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Negociar com <span className="text-[#4A90E2]">Confiança</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de jogadores em nossa comunidade exclusiva e faça parte do futuro seguro do comércio de
          ativos de jogos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
            href="https://chat.whatsapp.com/BAA5BZoUvoyAHeZIfdWUbA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2" size={20} />
            Grupo no WhatsApp
          </a>
        </div>

        <div className="mt-12 bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-blue-500 max-w-2xl mx-auto">
          <div className="flex items-center justify-center">
            <Lock className="text-2xl text-[#FFD700] mr-4" size={32} />
            <p className="font-bold">Sua segurança é nossa prioridade. Todos os grupos são moderados e verificados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
