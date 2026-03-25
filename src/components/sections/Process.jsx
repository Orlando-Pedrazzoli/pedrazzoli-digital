import { MessageCircle, Briefcase, Code, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';

const icons = [MessageCircle, Briefcase, Code, Rocket];

export default function Process() {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true });

  return (
    <section id='processo' className='py-24 px-6 bg-white dark:bg-[#131834]'>
      <div className='max-w-300 mx-auto'>
        <SectionHeader label={t('process.label')} title={t('process.title')} />
        <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-8'>
          {steps.map((step, i) => {
            const Icon = icons[i];
            const num = String(i + 1).padStart(2, '0');
            return (
              <FadeIn key={num} delay={i * 100}>
                <div className='text-center px-2'>
                  <div className='w-16 h-16 rounded-[20px] mx-auto mb-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-600 dark:border-green-500 flex items-center justify-center relative'>
                    <Icon
                      size={24}
                      className='text-green-600 dark:text-green-400'
                    />
                    <span className='absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-600 text-white text-[11px] font-bold flex items-center justify-center'>
                      {num}
                    </span>
                  </div>
                  <h3 className='text-[17px] font-bold text-zinc-900 dark:text-zinc-100 mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-sm leading-relaxed text-zinc-500 dark:text-zinc-400'>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
