import { Users, Star } from "lucide-react"

export default function SocialProof() {
  return (
    <section className="py-16 border-t border-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-[#B0B0B0]">Parceiros e Influenciadores que Confiam em Nós</h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Placeholder para logos de parceiros */}
            <div className="flex items-center gap-2 bg-[#1A1A2E] px-6 py-3 rounded-lg border border-[#2A2A2A]">
              <Users className="text-[#4A90E2]" size={20} />
              <span className="text-[#F5F5F5] font-medium">GameChannel Pro</span>
            </div>

            <div className="flex items-center gap-2 bg-[#1A1A2E] px-6 py-3 rounded-lg border border-[#2A2A2A]">
              <Star className="text-[#FFD700]" size={20} />
              <span className="text-[#F5F5F5] font-medium">EsportsHub</span>
            </div>

            <div className="flex items-center gap-2 bg-[#1A1A2E] px-6 py-3 rounded-lg border border-[#2A2A2A]">
              <Users className="text-[#4A90E2]" size={20} />
              <span className="text-[#F5F5F5] font-medium">GamerZone</span>
            </div>

            <div className="flex items-center gap-2 bg-[#1A1A2E] px-6 py-3 rounded-lg border border-[#2A2A2A]">
              <Star className="text-[#FFD700]" size={20} />
              <span className="text-[#F5F5F5] font-medium">ProPlayer TV</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#B0B0B0] text-lg">
              <span className="text-[#FFD700] font-bold">500+</span> transações seguras realizadas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
