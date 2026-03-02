import SEO from '@/components/seo/SEO'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

import Hero from '@/components/sections/Hero'
import BusinessTypes from '@/components/sections/BusinessTypes'
import Features from '@/components/sections/Features'
import Process from '@/components/sections/Process'
import Portfolio from '@/components/sections/Portfolio'
import Plans from '@/components/sections/Plans'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />

      <main>
        <Hero />
        <BusinessTypes />
        <Features />
        <Process />
        <Portfolio />
        <Plans />
        <FAQ />
        <CTAFinal />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
