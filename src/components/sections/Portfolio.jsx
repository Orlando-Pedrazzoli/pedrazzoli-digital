import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { CardStack } from '@/components/ui/CardStack';

export default function Portfolio() {
  const { t } = useTranslation();
  const itemTranslations = t('portfolio.items', { returnObjects: true });

  const portfolioItems = [
    {
      id: 1,
      title: itemTranslations[0]?.title || 'Elite Surfing',
      description: itemTranslations[0]?.description || '',
      imageSrc: '/elite-surfing.jpg',
      href: 'https://www.elitesurfing.com.br',
    },
    {
      id: 2,
      title: itemTranslations[1]?.title || 'Centro Dentario Colombo',
      description: itemTranslations[1]?.description || '',
      imageSrc: '/centro-dentario.jpg',
      href: 'https://www.centrodentariocolombo.com',
    },
    {
      id: 3,
      title: itemTranslations[2]?.title || 'Street Paint',
      description: itemTranslations[2]?.description || '',
      imageSrc: '/street-paint.jpg',
      href: 'https://www.streetpaint.pt',
    },
    {
      id: 4,
      title: itemTranslations[3]?.title || 'Go Portugal Tours',
      description: itemTranslations[3]?.description || '',
      imageSrc: '/go-portugal-tours.jpg',
      href: 'https://www.goportugaltours.com',
    },
  ];

  return (
    <section
      id='portfolio'
      className='py-24 px-6 bg-[#F8F7F4] dark:bg-[#131834]'
    >
      <div className='max-w-300 mx-auto'>
        <SectionHeader
          label={t('portfolio.label')}
          title={t('portfolio.title')}
          description={t('portfolio.description')}
        />
        <FadeIn>
          <div className='mx-auto w-full max-w-5xl'>
            <CardStack
              items={portfolioItems}
              initialIndex={0}
              autoAdvance
              intervalMs={4000}
              pauseOnHover
              showDots
              cardWidth={560}
              cardHeight={340}
            />
          </div>
          <div className='flex justify-center mt-12'>
            <Link
              to='/portfolio'
              className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium no-underline border border-zinc-300 dark:border-white/[0.12] text-zinc-700 dark:text-zinc-300 hover:border-green-500 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-400 transition-all duration-200'
            >
              {t('portfolio.viewAll')} <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
