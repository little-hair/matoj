import { Shield, CheckCircle, Headphones } from "lucide-react"

export default function SecurityGuarantee() {
  const guarantees = [
    {
      icon: Shield,
      title: "Intermediação Humana (Escrow)",
      description:
        "Cada transação é pessoalmente acompanhada por nossa equipe. O dinheiro só é liberado para o vendedor após sua confirmação explícita de recebimento.",
    },
    {
      icon: CheckCircle,
      title: "Verificação de Vendedores",
      description:
        "Implementamos um processo de verificação para nossa rede de fornecedores, garantindo que você negocie apenas com membros confiáveis da comunidade.",
    },
    {
      icon: Headphones,
      title: "Suporte e Mediação",
      description:
        "Qualquer problema? Nossa equipe de suporte atua como mediadora para resolver disputas de forma rápida e justa.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-[#4A90E2] to-[#3A7BC8] rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <Shield size={64} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                <CheckCircle size={24} className="text-[#121212]" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sua Tranquilidade é a<span className="block text-[#4A90E2]">Nossa Missão</span>
            </h2>

            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-[#1A1A2E] rounded-lg border border-[#2A2A2A] hover:border-[#4A90E2] transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center">
                      <guarantee.icon size={24} className="text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#F5F5F5]">{guarantee.title}</h3>
                    <p className="text-[#B0B0B0] leading-relaxed">{guarantee.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
