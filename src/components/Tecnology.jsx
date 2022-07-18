import { Container } from '@/components/Container'
import { FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa'
import { SiElixir, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'

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
          <div className="grid justify-center grid-cols-3 gap-8 mt-8 space-x-6 md:flex">
            <DiRuby className="ml-4 h-14 w-14 fill-white md:ml-0" />
            <SiElixir className="h-14 w-14 fill-white" />
            <FaNodeJs className="h-14 w-14 fill-white" />
            <FaReact className="h-14 w-14 fill-white" />
            <FaVuejs className="h-14 w-14 fill-white" />
            <SiNextdotjs className="h-14 w-14 fill-white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
