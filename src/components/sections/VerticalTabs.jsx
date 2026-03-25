import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200',
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200',
  'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200',
];

const AUTO_PLAY_DURATION = 5000;

export default function VerticalTabs() {
  const { t } = useTranslation();
  const services = t('verticalTabs.services', { returnObjects: true });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  const handleTabClick = index => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: direction => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: direction => ({
      zIndex: 0,
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section
      id='solucoes'
      className='w-full py-24 px-6 bg-[#F8F7F4] dark:bg-[#131834]'
    >
      <div className='max-w-300 mx-auto'>
        <SectionHeader
          label={t('verticalTabs.label')}
          title={t('verticalTabs.title')}
          description={t('verticalTabs.description')}
        />

        <FadeIn>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
            {/* Left Column: Tabs */}
            <div className='lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4'>
              <div className='flex flex-col space-y-0'>
                {services.map((service, index) => {
                  const isActive = activeIndex === index;
                  const id = String(index + 1).padStart(2, '0');
                  return (
                    <button
                      key={id}
                      onClick={() => handleTabClick(index)}
                      className={cn(
                        'group relative flex items-start gap-4 py-5 md:py-6 text-left transition-all duration-500 border-t border-zinc-200 dark:border-zinc-800 first:border-0 bg-transparent cursor-pointer',
                        isActive
                          ? 'text-zinc-900 dark:text-zinc-100'
                          : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300',
                      )}
                    >
                      <div className='absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800'>
                        {isActive && (
                          <motion.div
                            key={`progress-${index}-${isPaused}`}
                            className='absolute top-0 left-0 w-full bg-green-600 dark:bg-green-400 origin-top'
                            initial={{ height: '0%' }}
                            animate={
                              isPaused ? { height: '0%' } : { height: '100%' }
                            }
                            transition={{
                              duration: AUTO_PLAY_DURATION / 1000,
                              ease: 'linear',
                            }}
                          />
                        )}
                      </div>

                      <span className='text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50'>
                        /{id}
                      </span>

                      <div className='flex flex-col gap-2 flex-1'>
                        <span
                          className={cn(
                            'text-xl md:text-2xl lg:text-3xl font-normal tracking-tight transition-colors duration-500',
                            isActive ? 'text-zinc-900 dark:text-zinc-100' : '',
                          )}
                        >
                          {service.title}
                        </span>

                        <AnimatePresence mode='wait'>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.23, 1, 0.32, 1],
                              }}
                              className='overflow-hidden'
                            >
                              <p className='text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2'>
                                {service.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className='lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2'>
              <div
                className='relative group/gallery'
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className='relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'>
                  <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode='popLayout'
                  >
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={variants}
                      initial='enter'
                      animate='center'
                      exit='exit'
                      transition={{
                        y: {
                          type: 'spring',
                          stiffness: 260,
                          damping: 32,
                        },
                        opacity: { duration: 0.4 },
                      }}
                      className='absolute inset-0 w-full h-full cursor-pointer'
                      onClick={handleNext}
                    >
                      <img
                        src={SERVICE_IMAGES[activeIndex]}
                        alt={services[activeIndex]?.title}
                        className='w-full h-full object-cover transition-transform duration-700 hover:scale-105 block'
                      />
                      <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60' />
                    </motion.div>
                  </AnimatePresence>

                  <div className='absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20'>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-all active:scale-90 cursor-pointer'
                      aria-label={t('verticalTabs.prev')}
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-all active:scale-90 cursor-pointer'
                      aria-label={t('verticalTabs.next')}
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
