import Image from 'next/future/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import avatarBackend from '@/images/avatars/Guto.png'
import avatarFrontend from '@/images/avatars/Luis.png'
import { SiGithub, SiTwitter } from 'react-icons/si'

export function Time() {
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden bg-blue-600"
    >
      <Image
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            Time
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Conheça a incrível equipe por trás da magia
          </p>
          <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 xl:grid-cols-2">
            <div className="relative overflow-hidden border border-white rounded-lg">
              <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-transparent rounded-lg">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    width={0}
                    height={0}
                    className="w-16 h-16 rounded-full"
                    src={avatarBackend}
                    unoptimized
                    alt="Avatar"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#_" className="focus:outline-none">
                    <p className="text-lg font-medium text-gray-100">
                      Gustavo Henrique
                    </p>
                    <p className="text-sm text-white truncate">Backend</p>
                  </a>
                </div>
                <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                  <div className="relative flex items-center justify-end space-x-3">
                  <a href="#_" className="fill-white">
                      <SiTwitter className="w-8 h-8" />
                    </a>
                    <a href="#_" className="fill-white">
                      <SiGithub className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden border border-white rounded-lg">
              <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-transparent rounded-lg">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    width={0}
                    height={0}
                    className="w-16 h-16 rounded-full"
                    src={avatarFrontend}
                    unoptimized
                    alt="Avatar"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#_" className="focus:outline-none">
                    <p className="text-lg font-medium text-gray-100">
                      Luis Lucas
                    </p>
                    <p className="text-sm text-white truncate">Frontend</p>
                  </a>
                </div>
                <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                  <div className="relative flex items-center justify-end space-x-3">
                  <a href="#_" className="fill-white">
                      <SiTwitter className="w-8 h-8" />
                    </a>
                    <a href="#_" className="fill-white">
                      <SiGithub className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
