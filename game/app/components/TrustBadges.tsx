import { Gamepad2, Headphones, Trophy, Crown } from "lucide-react"

export default function TrustBadges() {
  const partners = [
    { icon: Gamepad2, name: "GameZone BR" },
    { icon: Headphones, name: "ProGamer TV" },
    { icon: Trophy, name: "Esports Brasil" },
    { icon: Crown, name: "Liga dos Gamers" },
  ]

  return (
    <section className="bg-gray-900 py-8 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 mb-6">Parceiros e Influenciadores que Confiam em Nós:</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              <partner.icon className="text-3xl mr-2 text-[#FFD700]" size={32} />
              <span className="font-bold">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
