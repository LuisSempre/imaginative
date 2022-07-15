import { Container } from '@/components/Container'
import { FaReact, FaVuejs, FaNodeJs, FaPhoenixFramework } from 'react-icons/fa'
import { SiElixir, SiTypescript } from 'react-icons/si'

export function Tecnology() {
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden bg-gray-200"
    >
      <Container className="relative">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl tracking-tight text-gray-700 font-display sm:text-4xl">
            Tecnologias
          </h2>
          <div className="flex justify-center mt-8 space-x-6">
          <SiElixir className='w-16 h-16' />
          <FaNodeJs className='w-16 h-16' />
          <FaReact  className='w-16 h-16' />
          <SiTypescript  className='w-16 h-16' />
          </div>
        </div>
      </Container>
    </section>
  )
}
