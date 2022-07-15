import { Container } from '@/components/Container'
import { FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa'
import { SiElixir, SiTypescript } from 'react-icons/si'

export function Tecnology() {
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden bg-black"
    >
      <Container className="relative">
        <div className="w-full mx-auto text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            Usando tecnologias moderrnas
          </h2>
          <div className="flex justify-center mt-8 space-x-6">
            <SiElixir className="fill-purple-600 h-14 w-14" />
            <FaNodeJs className="h-14 w-14" />
            <FaReact className="h-14 w-14" />
            <FaVuejs className="h-14 w-14" />
            <SiTypescript className="h-14 w-14" />
          </div>
        </div>
      </Container>
    </section>
  )
}
