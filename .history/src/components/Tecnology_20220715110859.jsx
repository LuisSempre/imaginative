import { Container } from '@/components/Container'
import { FaReact, FaVuejs, FaNodejs, FaPhoenixFramework } from 'react-icons/fa'
import { SiElixir, SiTypescript } from 'react-icons/si'
const navigation = [
  "FaReact"
]
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
            {navigation.map((item) => (
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
