import { useEffect, useState, memo } from 'react';
import { Code } from 'lucide-react';

/* ─── SVG Icon Components ─── */
const icons = {
  react: {
    component: () => (
      <svg viewBox='0 0 24 24' fill='none' className='w-full h-full'>
        <g stroke='#61DAFB' strokeWidth='1' fill='none'>
          <circle cx='12' cy='12' r='2.05' fill='#61DAFB' />
          <ellipse cx='12' cy='12' rx='11' ry='4.2' />
          <ellipse
            cx='12'
            cy='12'
            rx='11'
            ry='4.2'
            transform='rotate(60 12 12)'
          />
          <ellipse
            cx='12'
            cy='12'
            rx='11'
            ry='4.2'
            transform='rotate(120 12 12)'
          />
        </g>
      </svg>
    ),
    color: '#61DAFB',
  },
  nextjs: {
    component: () => (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path
          d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.534-.051.469 0 .534.016.64.105.03.025 1.34 2.001 2.91 4.394l4.74 7.198 1.921 2.911.098-.066a12.348 12.348 0 0 0 2.465-2.164 11.864 11.864 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z'
          fill='white'
        />
      </svg>
    ),
    color: '#ffffff',
  },
  node: {
    component: () => (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path
          d='M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339a.36.36 0 0 0 .275 0l8.795-5.076a.254.254 0 0 0 .135-.241V6.921a.26.26 0 0 0-.137-.246L12.29 1.6a.27.27 0 0 0-.273 0L3.225 6.675a.26.26 0 0 0-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.502 18.675A1.852 1.852 0 0 1 1.5 16.43V6.284c0-.622.332-1.206.952-1.545L11.248.737a1.922 1.922 0 0 1 1.857 0l8.796 5.002c.619.34.952.923.952 1.545v10.146c0 .622-.333 1.203-.952 1.545l-8.796 5.078a1.5 1.5 0 0 1-.926.247z'
          fill='#339933'
        />
      </svg>
    ),
    color: '#339933',
  },
  mongodb: {
    component: () => (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path
          d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'
          fill='#47A248'
        />
      </svg>
    ),
    color: '#47A248',
  },
  typescript: {
    component: () => (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <rect width='24' height='24' rx='2' fill='#3178C6' />
        <path
          d='M13.5 12.5v1.5h-2v6h-2v-6h-2v-1.5h6zm1 0h5v1.25h-1.75V20h-1.5v-6.25H14.5V12.5z'
          fill='white'
        />
      </svg>
    ),
    color: '#3178C6',
  },
  tailwind: {
    component: () => (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path
          d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z'
          fill='#06B6D4'
        />
      </svg>
    ),
    color: '#06B6D4',
  },
};

const SkillIcon = memo(({ type }) => {
  const icon = icons[type];
  return icon ? <icon.component /> : null;
});

/* ─── Skills Configuration ─── */
const skills = [
  // Inner orbit
  {
    id: 'react',
    orbit: 115,
    size: 48,
    speed: 0.8,
    icon: 'react',
    phase: 0,
    label: 'React',
  },
  {
    id: 'node',
    orbit: 115,
    size: 46,
    speed: 0.8,
    icon: 'node',
    phase: (2 * Math.PI) / 3,
    label: 'Node.js',
  },
  {
    id: 'typescript',
    orbit: 115,
    size: 44,
    speed: 0.8,
    icon: 'typescript',
    phase: (4 * Math.PI) / 3,
    label: 'TypeScript',
  },
  // Outer orbit
  {
    id: 'nextjs',
    orbit: 200,
    size: 50,
    speed: -0.5,
    icon: 'nextjs',
    phase: 0.5,
    label: 'Next.js',
  },
  {
    id: 'mongodb',
    orbit: 200,
    size: 46,
    speed: -0.5,
    icon: 'mongodb',
    phase: (2 * Math.PI) / 3 + 0.5,
    label: 'MongoDB',
  },
  {
    id: 'tailwind',
    orbit: 200,
    size: 46,
    speed: -0.5,
    icon: 'tailwind',
    phase: (4 * Math.PI) / 3 + 0.5,
    label: 'Tailwind',
  },
];

/* ─── Orbit Ring ─── */
const OrbitRing = memo(({ radius, color, delay = 0 }) => (
  <div
    className='absolute top-1/2 left-1/2 rounded-full pointer-events-none'
    style={{
      width: radius * 2,
      height: radius * 2,
      transform: 'translate(-50%, -50%)',
    }}
  >
    <div
      className='absolute inset-0 rounded-full'
      style={{
        background: `radial-gradient(circle, transparent 60%, ${color}15 85%, ${color}25 100%)`,
        animation: `pulse 4s ease-in-out ${delay}s infinite`,
      }}
    />
    <div
      className='absolute inset-0 rounded-full'
      style={{
        border: `1px solid ${color}20`,
        boxShadow: `inset 0 0 20px ${color}08`,
      }}
    />
  </div>
));

/* ─── Orbiting Icon ─── */
const OrbitingIcon = memo(({ config, angle }) => {
  const [hovered, setHovered] = useState(false);
  const x = Math.cos(angle) * config.orbit;
  const y = Math.sin(angle) * config.orbit;
  const iconColor = icons[config.icon]?.color;

  return (
    <div
      className='absolute top-1/2 left-1/2 transition-all duration-300 ease-out'
      style={{
        width: config.size,
        height: config.size,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: hovered ? 20 : 10,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className='relative w-full h-full p-2 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-zinc-800/90 backdrop-blur-sm'
        style={{
          transform: hovered ? 'scale(1.25)' : 'scale(1)',
          boxShadow: hovered
            ? `0 0 24px ${iconColor}50, 0 0 48px ${iconColor}20`
            : '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <SkillIcon type={config.icon} />
        {hovered && (
          <div className='absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-900/95 backdrop-blur-sm rounded text-[11px] text-white whitespace-nowrap pointer-events-none font-medium border border-zinc-700/50'>
            {config.label}
          </div>
        )}
      </div>
    </div>
  );
});

/* ─── Main Component ─── */
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    let frameId;
    let last = performance.now();

    const tick = now => {
      const dt = (now - last) / 1000;
      last = now;
      setTime(t => t + dt);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [paused]);

  return (
    <div
      className='relative w-[min(100%,500px)] aspect-square flex items-center justify-center'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Center icon */}
      <div className='w-22 h-22 bg-linear-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl'>
        <div className='absolute inset-0 rounded-full bg-green-500/25 blur-xl animate-pulse' />
        <div
          className='absolute inset-0 rounded-full bg-emerald-500/15 blur-2xl animate-pulse'
          style={{ animationDelay: '1s' }}
        />
        <div className='relative z-10'>
          <Code size={38} className='text-green-400' />
        </div>
      </div>

      {/* Orbit rings */}
      <OrbitRing radius={115} color='#22c55e' delay={0} />
      <OrbitRing radius={200} color='#16a34a' delay={1.5} />

      {/* Orbiting icons */}
      {skills.map(config => (
        <OrbitingIcon
          key={config.id}
          config={config}
          angle={time * config.speed + config.phase}
        />
      ))}
    </div>
  );
}
