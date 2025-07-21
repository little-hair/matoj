"use client"

import { Star, StarHalf, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      initials: "JP",
      name: "João P.",
      role: "Comprador de Valorant",
      text: "Finalmente um lugar onde pude comprar uma conta de Valorant sem medo de levar golpe. O processo foi super transparente e o vendedor foi verificado. Recomendo demais!",
      rating: 5,
    },
    {
      initials: "MS",
      name: "Maria S.",
      role: "Vendedora de LoL",
      text: "Vender minha conta antiga de LoL foi muito mais fácil e seguro do que eu imaginava. A comissão é justa pelo nível de segurança que eles oferecem. Já indiquei para vários amigos!",
      rating: 5,
    },
    {
      initials: "CR",
      name: "Carlos R.",
      role: "Comprador de CS:GO",
      text: "Já tinha perdido dinheiro com golpe antes de conhecer o GameTrust. Aqui me senti seguro em todas as etapas. O intermediário foi super profissional e resolveu uma dúvida que tive rapidamente.",
      rating: 4.5,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="text-[#FFD700] fill-current" size={16} />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="text-[#FFD700] fill-current" size={16} />)
    }

    return stars
  }

  return (
    <section id="depoimentos" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          O Que a Nossa <span className="text-[#4A90E2]">Comunidade</span> Diz
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Jogadores reais, experiências reais. Veja o que nossos membros têm a dizer sobre negociar com segurança.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <div className="flex">{renderStars(testimonial.rating)}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            onClick={() => scrollToSection("comunidade")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            <User className="mr-2" size={20} />
            Junte-se à Comunidade
          </Button>
        </div>
      </div>
    </section>
  )
}
