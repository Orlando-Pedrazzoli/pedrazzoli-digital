import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import HolographicCard from '@/components/ui/HolographicCard';
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

        <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 md:gap-6 mt-12'>
          {businessTypes.map((b, i) => (
            <FadeIn key={b.name} delay={i * 50}>
              <a
                href={getBusinessWhatsApp(b.name)}
                target='_blank'
                rel='noopener noreferrer'
                className='no-underline block h-full'
              >
                <HolographicCard title={b.name} description={b.desc} />
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
