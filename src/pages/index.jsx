import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Contact } from '@/components/Contact'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Tecnology } from '@/components/Tecnology'

export default function Home() {
  return (
    <>
      <Head>
        <title>Imaginative</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Tecnology />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Contact />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
