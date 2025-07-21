"use client"

import { Search, Lock, ArrowRightLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Encontre seu Ativo",
      description: "Vendedor anuncia o item e nossa equipe valida a oferta para garantir autenticidade.",
    },
    {
      icon: Lock,
      title: "2. Pagamento Protegido",
      description: "Comprador realiza o pagamento, que fica retido e seguro com nossa equipe de intermediação.",
    },
    {
      icon: ArrowRightLeft,
      title: "3. Entrega Verificada",
      description: "Vendedor entrega o ativo ao comprador, que tem prazo para confirmar recebimento.",
    },
    {
      icon: CheckCircle,
      title: "4. Liberação Segura",
      description: "Com confirmação do comprador, liberamos o pagamento ao vendedor. Transação concluída!",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="como-funciona" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Negocie em <span className="text-[#4A90E2]">4 Passos Simples</span> e{" "}
          <span className="text-[#FFD700]">100% Seguros</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <step.icon className="text-2xl text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            onClick={() => scrollToSection("comunidade")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            <CheckCircle className="mr-2" size={20} />
            Quero Negociar com Segurança
          </Button>
        </div>
      </div>
    </section>
  )
}
