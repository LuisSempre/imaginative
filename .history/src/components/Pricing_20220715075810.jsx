import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="py-20 bg-slate-900 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mt-16 -mx-4 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
         
        </div>
      </Container>
    </section>
  )
}
