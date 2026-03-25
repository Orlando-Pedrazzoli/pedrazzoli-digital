import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';

function useResponsiveCarousel() {
  const [dims, setDims] = useState({
    cardWidth: 300,
    cardHeight: 280,
    zDepth: 320,
    containerWidth: 600,
    perspective: 1200,
  });

  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      if (vw < 480) {
        const cw = Math.min(220, vw - 80);
        setDims({
          cardWidth: cw,
          cardHeight: 260,
          zDepth: 140,
          containerWidth: cw * 1.4,
          perspective: 600,
        });
      } else if (vw < 768) {
        const cw = Math.min(250, vw - 70);
        setDims({
          cardWidth: cw,
          cardHeight: 250,
          zDepth: 200,
          containerWidth: cw * 1.5,
          perspective: 800,
        });
      } else {
        setDims({
          cardWidth: 300,
          cardHeight: 280,
          zDepth: 320,
          containerWidth: 600,
          perspective: 1200,
        });
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return dims;
}

export default function Testimonials() {
  const { t } = useTranslation();
  const itemTranslations = t('testimonials.items', { returnObjects: true });

  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const touchStartRef = useRef(null);

  const { cardWidth, cardHeight, zDepth, containerWidth, perspective } =
    useResponsiveCarousel();

  const borderRadius = 16;
  const pauseOnHover = true;

  const numItems = testimonials.length;
  const angleSlice = 360 / numItems;

  useEffect(() => {
    if (isHovering && pauseOnHover) return;
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isHovering, pauseOnHover]);

  const handleCardClick = index => {
    const targetRotation = -index * angleSlice;
    setRotation(targetRotation % 360);
  };

  const handleTouchStart = e => {
    touchStartRef.current = e.touches[0].clientX;
    setIsHovering(true);
  };

  const handleTouchEnd = e => {
    if (touchStartRef.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartRef.current;
    if (Math.abs(delta) > 40) {
      const direction = delta > 0 ? -1 : 1;
      setRotation(prev => (prev + direction * angleSlice) % 360);
    }
    touchStartRef.current = null;
    setTimeout(() => setIsHovering(false), 2000);
  };

  return (
    <section id='depoimentos' className='py-24 px-6 bg-[#131834]'>
      <div className='max-w-300 mx-auto'>
        <SectionHeader
          label={t('testimonials.label')}
          title={t('testimonials.title')}
          description={t('testimonials.description')}
        />

        <FadeIn>
          <div
            className='relative w-full flex items-center justify-center overflow-hidden'
            style={{ height: cardHeight + 120 }}
          >
            <div
              ref={containerRef}
              className='relative w-full h-full flex items-center justify-center'
              style={{ perspective: `${perspective}px` }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className='relative'
                style={{
                  width: containerWidth,
                  height: cardHeight,
                  transformStyle: 'preserve-3d',
                }}
                animate={{ rotateY: rotation }}
                transition={{ type: 'tween', duration: 0.8, ease: 'easeOut' }}
              >
                {testimonials.map((testimonial, index) => {
                  const angle = (index * angleSlice * Math.PI) / 180;
                  const x = Math.cos(angle) * zDepth;
                  const z = Math.sin(angle) * zDepth;
                  const it = itemTranslations[index] || {};

                  return (
                    <motion.div
                      key={index}
                      className='absolute cursor-pointer'
                      style={{
                        width: cardWidth,
                        height: cardHeight,
                        left: '50%',
                        top: '50%',
                        marginLeft: -cardWidth / 2,
                        marginTop: -cardHeight / 2,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                      animate={{ x, z, rotateY: -rotation }}
                      transition={{
                        type: 'tween',
                        duration: 0.5,
                        ease: 'easeOut',
                      }}
                      onClick={() => handleCardClick(index)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className='w-full h-full bg-[#1a2042] border border-white/[0.08] shadow-2xl overflow-hidden p-5 sm:p-6 flex flex-col justify-between'
                        style={{ borderRadius: `${borderRadius}px` }}
                      >
                        <div>
                          <div className='flex gap-1 mb-4'>
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className='text-amber-400 fill-amber-400'
                                />
                              ),
                            )}
                          </div>
                          <p className='text-[13px] leading-relaxed text-zinc-300 line-clamp-5'>
                            &ldquo;{it.text || testimonial.text}&rdquo;
                          </p>
                        </div>
                        <div className='mt-4 pt-4 border-t border-white/[0.06]'>
                          <p className='text-[14px] font-bold text-zinc-100'>
                            {testimonial.name}
                          </p>
                          <p className='text-[12px] text-zinc-500'>
                            {it.role || testimonial.role} ·{' '}
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
