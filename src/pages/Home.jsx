import SEO from '@/components/seo/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import EtherealHero from '@/components/sections/EtherealHero';
import TechStack from '@/components/sections/TechStack';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import AboutMe from '@/components/sections/AboutMe';
import VerticalTabs from '@/components/sections/VerticalTabs';
import Process from '@/components/sections/Process';
import BusinessTypes from '@/components/sections/BusinessTypes';
import Features from '@/components/sections/Features';
import Plans from '@/components/sections/Plans';
import FAQ from '@/components/sections/FAQ';
import CTAFinal from '@/components/sections/CTAFinal';
import CTABanner from '@/components/ui/CTABanner';

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        {/* ─────────────────────────────────────────────
            ETHEREAL HERO — esfera 3D com scroll storytelling
            O canvas usa position:sticky, então ele "gruda"
            no viewport enquanto o user faz scroll pelas sections.
            Quando o container .ethereal-hero acaba, o canvas
            sobe junto e o conteúdo abaixo aparece.
        ───────────────────────────────────────────── */}
        <EtherealHero />

        {/* ─────────────────────────────────────────────
            CONTEÚDO PRINCIPAL
            Este wrapper precisa de:
            - relative + z-20 → fica acima do canvas sticky do Ethereal
            - bg com cor sólida → tapa visualmente o canvas por trás
            Sem isso, o canvas transparente do Three.js ficaria
            visível por baixo dos componentes seguintes.
        ───────────────────────────────────────────── */}
        <div className='relative z-20 bg-[#F8F7F4] dark:bg-[#0C0C0F]'>
          {/* 1.5 Tech Stack — credibilidade técnica imediata */}
          <TechStack />

          {/* 2. Prova social imediata */}
          <Portfolio />

          {/* 2.5 CTA intermediário — após ver os projetos */}
          <CTABanner
            text='Quer ver seu negócio com resultados assim?'
            buttonText='Falar sobre meu projeto'
            message='Olá! Vi o portfólio e quero conversar sobre meu projeto.'
            variant='green'
          />

          {/* 3. Depoimentos */}
          <Testimonials />

          {/* 4. Sobre mim */}
          <AboutMe />

          {/* 4.5 Serviços — Vertical Tabs */}
          <VerticalTabs />

          {/* 5. Como funciona */}
          <Process />

          {/* 5.5 CTA intermediário */}
          <CTABanner
            text='Pronto para o primeiro passo?'
            buttonText='Agendar Conversa'
            message='Olá! Quero agendar uma conversa sobre meu projeto.'
            variant='light'
          />

          {/* 6. Soluções por segmento */}
          <BusinessTypes />

          {/* 7. Funcionalidades */}
          <Features />

          {/* 8. Planos */}
          <Plans />

          {/* 9. FAQ */}
          <FAQ />

          {/* 10. CTA final */}
          <CTAFinal />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
