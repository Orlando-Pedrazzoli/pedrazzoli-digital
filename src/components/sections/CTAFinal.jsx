import { Mail } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/utils/config'
import { getWhatsAppUrl } from '@/utils/whatsapp'

export default function CTAFinal() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950">
      <FadeIn>
        <div className="max-w-[880px] mx-auto rounded-3xl py-16 px-10 bg-zinc-900 dark:bg-zinc-800 text-center relative overflow-hidden">
          <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-green-600/12 pointer-events-none" />
          <div className="absolute -bottom-[40px] -left-[40px] w-[160px] h-[160px] rounded-full bg-amber-600/8 pointer-events-none" />

          <h2 className="font-display text-[clamp(24px,4vw,38px)] font-normal text-white mb-4 relative">
            Seu negócio precisa estar <br />
            <em className="italic text-green-400">na internet.</em>
          </h2>
          <p className="text-base text-white/55 max-w-[460px] mx-auto mb-8 leading-relaxed relative">
            A conversa é sem compromisso. Me conte sobre seu negócio e receba
            um orçamento personalizado em até 24 horas.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center relative">
            <Button href={getWhatsAppUrl()} external variant="primary" size="lg" whatsapp>
              Chamar no WhatsApp
            </Button>
            <a href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/8 border border-white/12 no-underline hover:bg-white/15 transition-all">
              <Mail size={18} /> Enviar Email
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
