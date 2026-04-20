import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { businessTypes } from '@/data/businessTypes';
import { getBusinessWhatsApp } from '@/utils/whatsapp';

export default function BusinessTypes() {
  const { t } = useTranslation();
  const typeTranslations = t('businessTypes.types', { returnObjects: true });

  return (
    <section
      id='solucoes'
      className='py-24 px-6 bg-[#F8F7F4] dark:bg-[#131834]'
    >
      <div className='max-w-7xl mx-auto'>
        <SectionHeader
          label={t('businessTypes.label')}
          title={t('businessTypes.title')}
          description={t('businessTypes.description')}
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12'>
          {businessTypes.map(({ icon: Icon }, idx) => {
            const bt = typeTranslations[idx] || {};
            return (
              <FadeIn key={idx} delay={idx * 60}>
                <a
                  href={getBusinessWhatsApp(bt.name)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group no-underline block h-full'
                >
                  <div className='relative h-full flex flex-col rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#1a2042] border border-zinc-200 dark:border-white/[0.08] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-600/40 dark:hover:border-green-500/40 hover:shadow-[0_12px_40px_rgba(22,163,74,0.08)] dark:hover:shadow-[0_12px_40px_rgba(22,163,74,0.15)] overflow-hidden'>
                    <div className='absolute -top-16 -left-16 w-40 h-40 rounded-full bg-green-600/0 dark:bg-green-500/0 group-hover:bg-green-600/[0.06] dark:group-hover:bg-green-500/[0.08] blur-3xl transition-all duration-500 pointer-events-none' />

                    <div className='relative mb-5'>
                      <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 transition-all duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-500/20 group-hover:scale-105'>
                        <Icon
                          size={22}
                          strokeWidth={1.8}
                          className='text-green-600 dark:text-green-400'
                        />
                      </div>
                    </div>

                    <h3 className='relative text-[17px] sm:text-[18px] font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight transition-colors duration-300 group-hover:text-green-700 dark:group-hover:text-green-400'>
                      {bt.name}
                    </h3>

                    <p className='relative text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 flex-1'>
                      {bt.desc}
                    </p>

                    <div className='relative mt-6 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between'>
                      <span className='text-[12px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400'>
                        {t('businessTypes.talkOnWhatsApp')}
                      </span>
                      <div className='flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/[0.04] transition-all duration-300 group-hover:bg-green-600 dark:group-hover:bg-green-500 group-hover:scale-110'>
                        <ArrowUpRight
                          size={15}
                          strokeWidth={2.2}
                          className='text-zinc-500 dark:text-zinc-400 transition-colors duration-300 group-hover:text-white'
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={300}>
          <p className='text-center mt-10 text-sm text-zinc-500 dark:text-zinc-400'>
            {t('businessTypes.notFound')}{' '}
            <a
              href={getBusinessWhatsApp('outro segmento')}
              target='_blank'
              rel='noopener noreferrer'
              className='text-green-600 dark:text-green-400 font-semibold hover:underline'
            >
              {t('businessTypes.tellMe')}
            </a>
            {t('businessTypes.weServe')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
