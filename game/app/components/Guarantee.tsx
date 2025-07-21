import { UserCheck, BadgeCheck, Headphones, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function Guarantee() {
  const guarantees = [
    {
      icon: UserCheck,
      title: "Intermediação Humana (Escrow)",
      description:
        "Cada transação é pessoalmente acompanhada por nossa equipe. O dinheiro só é liberado para o vendedor após sua confirmação explícita de recebimento.",
    },
    {
      icon: BadgeCheck,
      title: "Verificação de Vendedores",
      description:
        "Implementamos um processo rigoroso de verificação para nossa rede de fornecedores, garantindo que você negocie apenas com membros confiáveis da comunidade.",
    },
    {
      icon: Headphones,
      title: "Suporte e Mediação",
      description:
        "Qualquer problema? Nossa equipe de suporte atua como mediadora para resolver disputas de forma rápida e justa, 24/7.",
    },
  ]

  return (
    <section id="garantia" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center">
            <div className="relative">
              <Image
                src="/media/woman-gamer.jpg"
                alt="Escudo de segurança"
                width={400}
                height={500}
                className="rounded-lg shadow-xl border-2 border-blue-500"
              />
              <div className="absolute -top-5 -left-5 bg-gray-800 p-3 rounded-full border-2 border-yellow-500 shadow-lg">
                <BadgeCheck className="text-3xl text-[#FFD700]" size={32} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Sua <span className="text-[#4A90E2]">Tranquilidade</span> é a Nossa{" "}
              <span className="text-[#FFD700]">Missão</span>
            </h2>

            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1">
                    <guarantee.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                    <p className="text-gray-300">{guarantee.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center">
                <AlertTriangle className="text-2xl text-[#FFD700] mr-4" size={32} />
                <p className="font-bold">
                  Atenção: Nunca negocie diretamente sem intermediário. 90% dos golpes ocorrem em negociações sem
                  proteção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
