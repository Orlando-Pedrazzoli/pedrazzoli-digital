import {
  Code,
  Waves,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { getWhatsAppUrl } from '@/utils/whatsapp';

const highlightIcons = [Waves, Code, Briefcase, GraduationCap];

export default function AboutMe() {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true });

  return (
    <section id='sobre' className='py-24 px-6 bg-[#F8F7F4] dark:bg-[#131834]'>
      <div className='max-w-300 mx-auto'>
        <FadeIn>
          <div className='max-w-260 mx-auto flex flex-col lg:flex-row gap-14 items-center'>
            {/* Photo side */}
            <div className='shrink-0'>
              <div className='relative'>
                <div className='w-64 h-72 lg:w-72 lg:h-80 rounded-3xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-[0_30px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.3)]'>
                  <img
                    src='/orlando-img.jpg'
                    alt='Orlando Pedrazzoli — Full Stack Developer'
                    className='w-full h-full object-cover object-top'
                    loading='lazy'
                  />
                </div>

                <div className='absolute -bottom-4 -right-4 bg-white dark:bg-zinc-800 rounded-2xl px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] border border-zinc-100 dark:border-zinc-700'>
                  <div className='flex items-center gap-2'>
                    <div className='w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse' />
                    <span className='text-[13px] font-semibold text-zinc-900 dark:text-zinc-100'>
                      {t('about.available')}
                    </span>
                  </div>
                </div>

                <div className='absolute -top-3 -left-3 w-20 h-20 rounded-2xl border-2 border-green-600/20 dark:border-green-400/15 -z-1' />
              </div>
            </div>

            {/* Content side */}
            <div className='flex-1'>
              <p className='text-xs font-bold tracking-[2.5px] uppercase text-green-600 dark:text-green-400 mb-3'>
                {t('about.label')}
              </p>
              <h2 className='font-display text-[clamp(28px,4vw,40px)] font-normal text-zinc-900 dark:text-zinc-100 leading-[1.15] mb-5'>
                {t('about.name')}
              </h2>
              <p className='text-[16px] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-8 max-w-130'>
                {t('about.bio')}
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                {highlights.map((h, i) => {
                  const Icon = highlightIcons[i];
                  return (
                    <FadeIn key={i} delay={i * 80}>
                      <div className='flex gap-3.5'>
                        <div className='w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0'>
                          <Icon
                            size={18}
                            className='text-green-600 dark:text-green-400'
                          />
                        </div>
                        <div>
                          <h3 className='text-[14px] font-bold text-zinc-900 dark:text-zinc-100 mb-0.5'>
                            {h.title}
                          </h3>
                          <p className='text-[12px] leading-relaxed text-zinc-500 dark:text-zinc-400'>
                            {h.desc}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>

              <Button
                href={getWhatsAppUrl(t('about.whatsappMsg'))}
                external
                variant='primary'
                size='md'
                whatsapp
              >
                {t('about.talkCta')} <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
