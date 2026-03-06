import { useTheme } from '@/hooks/useTheme';
import FadeIn from '@/components/ui/FadeIn';
import { techStack } from '@/data/techStack';

export default function TechStack() {
  const { isDark } = useTheme();

  // Duplicate array for seamless infinite scroll
  const items = [...techStack, ...techStack];

  return (
    <section className='py-14 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F] overflow-hidden'>
      <FadeIn>
        <p className='text-center text-xs font-bold tracking-[2.5px] uppercase text-zinc-400 dark:text-zinc-500 mb-8'>
          Tecnologias que utilizo
        </p>

        <div className='relative max-w-300 mx-auto'>
          {/* Gradient masks */}
          <div className='absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-[#F8F7F4] dark:from-[#0C0C0F] to-transparent pointer-events-none' />
          <div className='absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-[#F8F7F4] dark:from-[#0C0C0F] to-transparent pointer-events-none' />

          {/* Scrolling track */}
          <div className='flex animate-scroll-x hover:[animation-play-state:paused]'>
            {items.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className='shrink-0 mx-8 flex items-center gap-2.5 group cursor-default'
              >
                <span
                  className='text-[22px] md:text-[26px] font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-110'
                  style={{
                    color: isDark ? tech.darkColor : tech.color,
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
