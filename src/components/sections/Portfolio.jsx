import { CheckCircle, ExternalLink, ArrowRight, Rocket } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { portfolioMain } from '@/data/portfolio'
import { getWhatsAppUrl } from '@/utils/whatsapp'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Portfólio"
          title='Projeto <em>real</em>, resultado real.'
        />

        <FadeIn delay={100}>
          <div className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-[960px] mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            {/* Banner */}
            <div className="h-[280px] bg-gradient-to-br from-zinc-900 via-emerald-900 to-green-600 flex flex-col items-center justify-center relative px-6 text-center">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='white'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }} />
              <span className="relative font-display text-[clamp(28px,4vw,40px)] text-white">{portfolioMain.name}</span>
              <span className="relative text-white/65 text-sm mt-2">{portfolioMain.type} — elitesurfing.com.br</span>
              <Button href={portfolioMain.url} external variant="primary" size="sm" className="mt-5 relative">
                Visitar Loja <ExternalLink size={14} />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center border-b border-zinc-200 dark:border-zinc-800">
              {portfolioMain.stats.map((s, i) => (
                <div key={s.label}
                  className={`flex-[1_1_120px] py-5 px-4 text-center ${i < portfolioMain.stats.length - 1 ? 'border-r border-zinc-200 dark:border-zinc-800' : ''}`}>
                  <s.icon size={18} className="text-green-600 dark:text-green-400 mx-auto mb-1.5" />
                  <div className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">{s.value}</div>
                  <div className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="p-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
              {portfolioMain.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  <span className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Next project */}
        <FadeIn delay={200}>
          <div className="flex justify-center mt-10">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 text-center max-w-[400px] transition-all duration-300 hover:border-green-600 dark:hover:border-green-500 hover:shadow-[0_8px_32px_rgba(22,163,74,0.06)] hover:-translate-y-1">
              <div className="w-13 h-13 rounded-[14px] bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center mx-auto mb-3.5">
                <Rocket size={24} className="text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">Seu projeto pode ser o próximo</h3>
              <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                Cada projeto que entrego vira referência. O próximo case de sucesso pode ser o do seu negócio.
              </p>
              <Button href={getWhatsAppUrl()} external variant="ghost" size="sm">
                Iniciar conversa <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
