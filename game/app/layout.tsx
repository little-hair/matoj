import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "GameTrust - Marketplace Seguro para Ativos de Jogos",
  description:
    "Compre e venda contas, itens e moedas de jogos com 100% de segurança. Sistema de intermediação que protege sua transação. Chega de riscos!",
  keywords: "marketplace gamer, comprar conta, vender conta, intermediação segura, ativos de jogos",
    generator: 'agenciacrehub.com.br'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${roboto.variable} font-roboto antialiased`}>{children}</body>
    </html>
  )
}
