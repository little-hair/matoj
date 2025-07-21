"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como vocês garantem a segurança da minha transação?",
      answer: (
        <div>
          <p className="text-gray-300 mb-4">Utilizamos um sistema de escrow (intermediação) onde:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>O pagamento fica retido em nossa custódia até a confirmação do recebimento</li>
            <li>Nossa equipe verifica a autenticidade dos itens anunciados</li>
            <li>Todos os vendedores passam por processo de verificação</li>
            <li>Oferecemos suporte dedicado para mediação de conflitos</li>
          </ul>
          <p className="text-gray-300 mt-4">
            Dessa forma, tanto comprador quanto vendedor estão protegidos contra fraudes.
          </p>
        </div>
      ),
    },
    {
      question: "Quais são as taxas do serviço?",
      answer: (
        <div>
          <p className="text-gray-300 mb-4">
            Nossa taxa de serviço é de <span className="font-bold text-[#FFD700]">5%</span> do valor da transação, com
            um mínimo de R$ 10,00.
          </p>
          <p className="text-gray-300">Essa taxa cobre:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
            <li>Intermediação segura da transação</li>
            <li>Verificação de vendedores e itens</li>
            <li>Suporte dedicado 24/7</li>
            <li>Proteção contra fraudes e golpes</li>
          </ul>
          <p className="text-gray-300 mt-4">
            Consideramos essa uma taxa justa pelo nível de segurança e tranquilidade que oferecemos.
          </p>
        </div>
      ),
    },
    {
      question: "E se eu tiver um problema com a compra/venda?",
      answer: (
        <div>
          <p className="text-gray-300 mb-4">
            Nossa equipe de suporte está disponível 24/7 para ajudar com qualquer problema:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Se o item não for como descrito, bloqueamos a transação</li>
            <li>Se houver atraso na entrega, mediamos o prazo</li>
            <li>Em caso de desacordo, avaliamos provas de ambas as partes</li>
            <li>Sempre priorizamos uma solução justa para todos</li>
          </ul>
          <p className="text-gray-300 mt-4">
            O dinheiro só é liberado após confirmação explícita do comprador, garantindo sua satisfação.
          </p>
        </div>
      ),
    },
    {
      question: "Comprar/vender contas não é contra os Termos de Serviço dos jogos?",
      answer: (
        <div>
          <p className="text-gray-300">
            Reconhecemos que as políticas das desenvolvedoras existem. Nosso papel é garantir que a transação financeira
            entre os membros da comunidade seja 100% segura, eliminando o risco de fraudes e golpes, que é o maior
            problema do mercado informal.
          </p>
          <p className="text-gray-300 mt-4">
            Oferecemos o ambiente seguro para a troca, e recomendamos que os usuários estejam cientes das regras de suas
            plataformas de jogos preferidas.
          </p>
        </div>
      ),
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Dúvidas <span className="text-[#4A90E2]">Frequentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none" onClick={() => toggleAccordion(index)}>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="transition-transform duration-300 ml-4" size={24} />
                  ) : (
                    <ChevronDown className="transition-transform duration-300 ml-4" size={24} />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-700">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
