import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ExternalLink,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { portfolioProjects } from '@/data/portfolio';

const AUTOPLAY_DELAY = 5000; // 5s per slide

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStart = useRef(0);
  const trackRef = useRef(null);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(null);
  const animFrameRef = useRef(null);

  const total = portfolioProjects.length;

  const goTo = useCallback(
    idx => {
      setCurrent(((idx % total) + total) % total);
      setProgress(0);
      progressRef.current = 0;
      lastTimeRef.current = null;
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay with progress animation
  useEffect(() => {
    if (!isPlaying) {
      lastTimeRef.current = null;
      return;
    }

    const tick = timestamp => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const elapsed = timestamp - lastTimeRef.current;
      const pct = Math.min(elapsed / AUTOPLAY_DELAY, 1);

      progressRef.current = pct;
      setProgress(pct);

      if (pct >= 1) {
        setCurrent(prev => (prev + 1) % total);
        progressRef.current = 0;
        setProgress(0);
        lastTimeRef.current = timestamp;
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, current, total]);

  // Touch / mouse drag
  const handleDragStart = e => {
    setIsDragging(true);
    setIsPlaying(false);
    dragStart.current = e.type.includes('touch')
      ? e.touches[0].clientX
      : e.clientX;
    setDragOffset(0);
  };

  const handleDragMove = e => {
    if (!isDragging) return;
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStart.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 80;
    if (dragOffset < -threshold) next();
    else if (dragOffset > threshold) prev();

    setDragOffset(0);
    setIsPlaying(true);
  };

  // Keyboard nav
  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  return (
    <section
      id='portfolio'
      className='py-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]'
    >
      <div className='max-w-300 mx-auto'>
        <SectionHeader
          label='Portfólio'
          title='Projetos <em>reais</em>, resultados reais.'
          description='Cada projeto é construído do zero com código próprio. Sem templates, sem limitações — e com resultados mensuráveis.'
        />

        <FadeIn>
          <div className='max-w-280 mx-auto'>
            {/* Carousel viewport */}
            <div
              className='overflow-hidden cursor-grab active:cursor-grabbing'
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div
                ref={trackRef}
                className='flex'
                style={{
                  transform: `translateX(calc(-${current * 75}% + ${dragOffset}px))`,
                  transition: isDragging
                    ? 'none'
                    : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {portfolioProjects.map((project, i) => (
                  <div
                    key={project.name}
                    className='shrink-0 px-3'
                    style={{ width: '75%' }}
                  >
                    <div
                      className={`
                        bg-white dark:bg-zinc-900 rounded-[20px] border overflow-hidden flex flex-col
                        transition-all duration-500 select-none
                        ${
                          i === current
                            ? 'border-green-600/30 dark:border-green-500/30 shadow-[0_20px_50px_rgba(22,163,74,0.08)] dark:shadow-[0_20px_50px_rgba(22,163,74,0.15)] scale-100 opacity-100'
                            : 'border-zinc-200 dark:border-zinc-800 scale-[0.96] opacity-60'
                        }
                      `}
                    >
                      {/* Card header */}
                      <div className='p-7 pb-0'>
                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex items-center gap-3'>
                            <div
                              className='w-11 h-11 rounded-xl flex items-center justify-center shrink-0'
                              style={{ background: project.colorLight }}
                            >
                              <project.icon
                                size={22}
                                style={{ color: project.color }}
                              />
                            </div>
                            <div>
                              <h3 className='text-[17px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight'>
                                {project.name}
                              </h3>
                              <span
                                className='text-[12px] font-semibold uppercase tracking-[0.5px]'
                                style={{ color: project.color }}
                              >
                                {project.type}
                              </span>
                            </div>
                          </div>
                          <a
                            href={project.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500 transition-all no-underline shrink-0 hover:scale-110'
                            aria-label={`Visitar ${project.name}`}
                            onClick={e => e.stopPropagation()}
                            onMouseDown={e => e.stopPropagation()}
                          >
                            <ExternalLink size={15} />
                          </a>
                        </div>

                        <p className='text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-4'>
                          {project.desc}
                        </p>

                        {/* Result badge */}
                        {project.result && (
                          <div className='flex items-start gap-2 mb-5 px-3.5 py-3 rounded-xl bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-700/40'>
                            <TrendingUp
                              size={15}
                              className='text-green-600 dark:text-green-400 mt-0.5 shrink-0'
                            />
                            <span className='text-[13px] text-green-800 dark:text-green-300 leading-snug font-semibold'>
                              {project.result}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Highlights */}
                      <div className='mx-7 flex gap-3 mb-5'>
                        {project.highlights.map(h => (
                          <div
                            key={h.label}
                            className='flex-1 text-center py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-transparent'
                          >
                            <div className='text-[20px] font-extrabold text-zinc-900 dark:text-zinc-100'>
                              {h.value}
                            </div>
                            <div className='text-[10px] text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium'>
                              {h.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className='px-7 pb-7 mt-auto'>
                        <div className='flex flex-wrap gap-1.5'>
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className='px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-medium text-zinc-500 dark:text-zinc-400'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className='flex items-center justify-center gap-5 mt-8'>
              {/* Prev */}
              <button
                onClick={() => {
                  prev();
                  setIsPlaying(true);
                }}
                className='w-10 h-10 rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-transparent flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500 transition-all cursor-pointer'
                aria-label='Projeto anterior'
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className='flex items-center gap-2.5'>
                {portfolioProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      goTo(i);
                      setIsPlaying(true);
                    }}
                    className={`rounded-full transition-all duration-300 cursor-pointer border-none ${
                      i === current
                        ? 'w-3 h-3 bg-green-600 dark:bg-green-400'
                        : 'w-2.5 h-2.5 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                    }`}
                    aria-label={`Ir para projeto ${i + 1}`}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className='w-28 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden'>
                <div
                  className='h-full bg-green-600 dark:bg-green-400 rounded-full transition-none'
                  style={{
                    width: `${progress * 100}%`,
                  }}
                />
              </div>

              {/* Play/Pause */}
              <button
                onClick={() => {
                  setIsPlaying(prev => !prev);
                  if (!isPlaying) {
                    lastTimeRef.current = null;
                  }
                }}
                className='w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500 transition-all cursor-pointer'
                aria-label={
                  isPlaying ? 'Pausar carrossel' : 'Iniciar carrossel'
                }
              >
                {isPlaying ? (
                  <Pause size={14} fill='currentColor' />
                ) : (
                  <Play size={14} fill='currentColor' />
                )}
              </button>

              {/* Next */}
              <button
                onClick={() => {
                  next();
                  setIsPlaying(true);
                }}
                className='w-10 h-10 rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-transparent flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500 transition-all cursor-pointer'
                aria-label='Próximo projeto'
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
