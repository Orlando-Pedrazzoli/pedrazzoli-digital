import { ArrowUpRight, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Portfolio() {
  const { t } = useTranslation();
  const itemTranslations = t('portfolio.items', { returnObjects: true });
  const categories = t('portfolio.categories', { returnObjects: true });

  const portfolioItems = [
    {
      id: 1,
      title: itemTranslations[0]?.title || 'Elite Surfing',
      description: itemTranslations[0]?.description || '',
      imageSrc: '/elite-surfing.jpg',
      href: 'https://www.elitesurfing.com.br',
      category: categories.ecommerce,
      stack: 'React + Node',
    },
    {
      id: 2,
      title: itemTranslations[1]?.title || 'Centro Dentario Colombo',
      description: itemTranslations[1]?.description || '',
      imageSrc: '/centro-dentario.jpg',
      href: 'https://www.centrodentariocolombo.com',
      category: categories.institutional,
      stack: 'Next.js',
    },
    {
      id: 3,
      title: itemTranslations[2]?.title || 'Street Paint',
      description: itemTranslations[2]?.description || '',
      imageSrc: '/street-paint.jpg',
      href: 'https://www.streetpaint.pt',
      category: categories.service,
      stack: 'Next.js',
    },
    {
      id: 4,
      title: itemTranslations[3]?.title || 'Go Portugal Tours',
      description: itemTranslations[3]?.description || '',
      imageSrc: '/go-portugal-tours.jpg',
      href: 'https://www.goportugaltours.com',
      category: categories.booking,
      stack: 'Next.js',
    },
  ];

  return (
    <section
      id='portfolio'
      className='py-24 px-6 bg-[#F8F7F4] dark:bg-[#131834]'
    >
      <div className='max-w-7xl mx-auto'>
        <SectionHeader
          label={t('portfolio.label')}
          title={t('portfolio.title')}
          description={t('portfolio.description')}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          {portfolioItems.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 80}>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative block h-full no-underline rounded-2xl overflow-hidden bg-white dark:bg-[#1a2042] border border-zinc-200 dark:border-white/[0.08] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-green-600/40 dark:hover:border-green-500/40 hover:shadow-[0_20px_60px_rgba(22,163,74,0.10)] dark:hover:shadow-[0_20px_60px_rgba(22,163,74,0.18)]'
                aria-label={item.title}
              >
                <div className='relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-[#0f1328]'>
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading='lazy'
                    className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400' />

                  <div className='absolute top-4 left-4 right-4 flex items-start justify-between gap-2'>
                    <span className='inline-flex items-center px-2.5 py-1 rounded-md text-[10.5px] font-semibold uppercase tracking-wider bg-white/95 text-zinc-700 backdrop-blur-sm dark:bg-[#131834]/90 dark:text-zinc-200'>
                      {item.category}
                    </span>
                    <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10.5px] font-semibold bg-green-600/90 text-white backdrop-blur-sm'>
                      <span className='w-1.5 h-1.5 rounded-full bg-white/90' />
                      {item.stack}
                    </span>
                  </div>

                  <div className='absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-xl bg-white/95 dark:bg-[#131834]/95 backdrop-blur-sm transition-all duration-300 group-hover:bg-green-600 group-hover:scale-110'>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2.2}
                      className='text-zinc-700 dark:text-zinc-200 transition-colors duration-300 group-hover:text-white'
                    />
                  </div>
                </div>

                <div className='p-6 sm:p-7'>
                  <h3 className='text-[19px] sm:text-[21px] font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight transition-colors duration-300 group-hover:text-green-700 dark:group-hover:text-green-400'>
                    {item.title}
                  </h3>
                  <p className='text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400'>
                    {item.description}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <Link
            to='/portfolio'
            className='group relative mt-6 block no-underline rounded-2xl overflow-hidden bg-gradient-to-br from-green-600 to-green-700 dark:from-green-600 dark:to-green-800 border border-green-600 dark:border-green-500 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(22,163,74,0.25)]'
          >
            <div className='relative p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
              <div className='absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none' />
              <div className='absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 blur-3xl pointer-events-none' />

              <div className='relative flex items-start gap-5 flex-1'>
                <div className='flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm shrink-0'>
                  <Layers size={26} strokeWidth={1.8} className='text-white' />
                </div>
                <div>
                  <h3 className='text-[20px] sm:text-[24px] font-bold text-white mb-1.5 leading-tight'>
                    {t('portfolio.seeAllTitle')}
                  </h3>
                  <p className='text-[14px] sm:text-[15px] text-white/85 leading-relaxed max-w-xl'>
                    {t('portfolio.seeAllDesc')}
                  </p>
                </div>
              </div>

              <div className='relative shrink-0'>
                <span className='inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold text-green-700 bg-white transition-all duration-300 group-hover:bg-zinc-50 group-hover:gap-3'>
                  {t('portfolio.viewAll')}
                  <ArrowRight
                    size={16}
                    strokeWidth={2.4}
                    className='transition-transform duration-300 group-hover:translate-x-0.5'
                  />
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
