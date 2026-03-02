import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { businessTypes } from '@/data/businessTypes'
import { getBusinessWhatsApp } from '@/utils/whatsapp'

export default function BusinessTypes() {
  return (
    <section id="solucoes" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Soluções para seu Negócio"
          title='Qual é o <em>seu</em> tipo de negócio?'
          description="Cada negócio tem necessidades diferentes. Desenvolvemos soluções específicas para o seu segmento, com as funcionalidades que realmente fazem diferença no seu dia a dia."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
          {businessTypes.map((b, i) => (
            <FadeIn key={b.name} delay={i * 50}>
              <a href={getBusinessWhatsApp(b.name)} target="_blank" rel="noopener noreferrer" className="no-underline block h-full">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 h-full transition-all duration-300 hover:border-green-600 dark:hover:border-green-500 hover:shadow-[0_8px_32px_rgba(22,163,74,0.06)] dark:hover:shadow-[0_8px_32px_rgba(22,163,74,0.1)] hover:-translate-y-1 cursor-pointer">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3.5" style={{ background: b.bg }}>
                    <b.icon size={20} color={b.color} />
                  </div>
                  <h3 className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">{b.name}</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">{b.desc}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="text-center mt-9 text-sm text-zinc-400 dark:text-zinc-500">
            Não encontrou seu segmento?{' '}
            <a href={getBusinessWhatsApp('outro segmento')} target="_blank" rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 font-semibold no-underline hover:underline">
              Me conta qual é
            </a>{' '} — provavelmente já atendemos.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
