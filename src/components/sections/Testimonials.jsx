import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive(prev => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 6s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[active];

  return (
    <section id='depoimentos' className='py-24 px-6 bg-white dark:bg-zinc-950'>
      <div className='max-w-300 mx-auto'>
        <SectionHeader
          label='Depoimentos'
          title='Quem já trabalhou comigo, <em>recomenda.</em>'
          description='Resultados reais de clientes reais. Cada projeto entregue é uma parceria de confiança.'
        />

        <FadeIn>
          <div
            className='max-w-200 mx-auto'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main testimonial card */}
            <div className='relative bg-[#F8F7F4] dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-10 md:p-14 overflow-hidden'>
              {/* Decorative quote */}
              <div className='absolute top-6 right-8 opacity-[0.06] dark:opacity-[0.04]'>
                <Quote size={120} className='text-green-600' />
              </div>

              <div className='relative'>
                {/* Stars */}
                <div className='flex gap-1 mb-6'>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className='text-amber-400 fill-amber-400'
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className='text-[18px] md:text-[22px] leading-relaxed text-zinc-700 dark:text-zinc-300 font-normal mb-10 min-h-30'>
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className='flex items-center justify-between flex-wrap gap-6'>
                  <div className='flex items-center gap-4'>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className='w-14 h-14 rounded-full object-cover ring-2 ring-green-600/20 dark:ring-green-400/20'
                      loading='lazy'
                    />
                    <div>
                      <p className='text-[15px] font-bold text-zinc-900 dark:text-zinc-100'>
                        {t.name}
                      </p>
                      <p className='text-[13px] text-zinc-500 dark:text-zinc-400'>
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>

                  {/* Project badge */}
                  <span className='px-3.5 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[12px] font-semibold'>
                    Projeto: {t.project}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className='flex items-center justify-center gap-4 mt-8'>
              <button
                onClick={prev}
                className='w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500 transition-all cursor-pointer'
                aria-label='Depoimento anterior'
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className='flex gap-2'>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${
                      i === active
                        ? 'w-8 bg-green-600 dark:bg-green-400'
                        : 'w-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className='w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500 transition-all cursor-pointer'
                aria-label='Próximo depoimento'
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
