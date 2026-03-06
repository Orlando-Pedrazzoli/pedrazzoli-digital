import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { businessTypes } from '@/data/businessTypes';
import { getBusinessWhatsApp } from '@/utils/whatsapp';

export default function BusinessTypes() {
  return (
    <section id='solucoes' className='py-24 px-6 bg-white dark:bg-zinc-950'>
      <div className='max-w-7xl mx-auto'>
        <SectionHeader
          label='Soluções para seu Negócio'
          title='Independentemente do segmento, seu site precisa <em>vender.</em>'
          description='Cada negócio tem necessidades diferentes. Desenvolvo soluções específicas para o seu segmento, com as funcionalidades que realmente fazem diferença no dia a dia.'
        />

        <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 md:gap-8 mt-12'>
          {businessTypes.map((b, i) => (
            <FadeIn key={b.name} delay={i * 60}>
              <a
                href={getBusinessWhatsApp(b.name)}
                target='_blank'
                rel='noopener noreferrer'
                className='no-underline block h-full'
              >
                <div className='group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 h-full transition-all duration-400 hover:border-green-600/50 dark:hover:border-green-500/50 hover:shadow-[0_12px_40px_rgba(22,163,74,0.10)] dark:hover:shadow-[0_12px_40px_rgba(22,163,74,0.18)] hover:-translate-y-2 cursor-pointer'>
                  <div
                    className='w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg'
                    style={{ background: b.bg }}
                  >
                    <b.icon size={24} color={b.color} />
                  </div>
                  <h3 className='text-base font-sans font-bold text-zinc-900 dark:text-zinc-100 mb-2 transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400'>
                    {b.name}
                  </h3>
                  <p className='text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
                    {b.desc}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <p className='text-center mt-12 text-sm text-zinc-500 dark:text-zinc-400'>
            Não encontrou seu segmento?{' '}
            <a
              href={getBusinessWhatsApp('outro segmento')}
              target='_blank'
              rel='noopener noreferrer'
              className='text-green-600 dark:text-green-400 font-semibold hover:underline'
            >
              Me conta qual é
            </a>{' '}
            — provavelmente já atendemos.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
