import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Será que imaginativo lidar com IVA?',
      answer:
        'Bem, não, mas se você mover sua empresa para fora você provavelmente pode ignorá-la.',
    },
    {
      question: 'Posso pagar com cartao?',
      answer:
        'Com certeza, estamos felizes em atende-lo em varias as formas de pagamento.',
    },
    {
      question: 'Como me candidato a um emprego na Imaginative?',
      answer:
        'Só contratamos nossos clientes, então assine por no mínimo 6 meses e depois vamos conversar.',
    },
  ],
  [
    {
      question: 'Podem gerir meus conteudos?',
      answer:
        'Imaginative desenvolve apenas o aplicativo de software, normalmente em análise seus conteudos são sua responsabilidade.',
    },
    {
      question:
        'Imaginative parece ser igual a outra empresa de software, por que ainda deveria comprar?',
      answer:
        'Porque o poder do excelente design visual simplesmente e inresistivel, não importa o quão os outros tentem, a Imaginative realmente funciona melhor.',
    },
    {
      question:
        'Eu encontrei outras empresas chamadas Imaginative, você tem certeza que você pode usar esse nome?',
      answer:
        'Honestamente, e um nome comum. Nós realmente acreditamos que este nome soa legal e o mantermos assim.',
    },
  ],
  [
    {
      question: 'Como você cria os apps',
      answer:
        'Você só nos diz quais do que precisa em seu App, e nós fazemos nossos desenvolvedores criarem apps bonitos para você usando apenas as mehores tecnologias.',
    },
    {
      question: 'Podemos esperar mais recursos de inventário?',
      answer: 'Na vida é realmente melhor nunca esperar nada em tudo.',
    },
    {
      question: 'Perdi minha senha, como entro na minha conta?',
      answer:
        'Envie-nos um e-mail e enviaremos uma cópia da nossa última planilha de senhas para que você possa encontrar suas informações.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-20 overflow-hidden bg-slate-50 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2
            id="faq-title"
            className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Se você não conseguir encontrar o que está procurando, envie um
            e-mail para nossa equipe de suporte e se você tiver sorte alguém vai
            voltar para você.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg leading-7 font-display text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
