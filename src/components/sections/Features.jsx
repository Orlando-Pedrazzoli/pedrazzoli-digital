import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { features } from '@/data/features'

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Funcionalidades"
          title='Tudo incluso. <em>Sem surpresas.</em>'
          description="Cada projeto é entregue completo e pronto para funcionar. Estas são as funcionalidades que vêm em toda solução que desenvolvo."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 50}>
              <div className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-full transition-all duration-300 hover:border-green-600 dark:hover:border-green-500 hover:shadow-[0_8px_28px_rgba(22,163,74,0.06)] dark:hover:shadow-[0_8px_28px_rgba(22,163,74,0.1)] hover:-translate-y-1">
                <f.icon size={22} className="text-green-600 dark:text-green-400 mb-3.5" />
                <h3 className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">{f.title}</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
