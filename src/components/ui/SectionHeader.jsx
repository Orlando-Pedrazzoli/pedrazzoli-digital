import FadeIn from './FadeIn'

export default function SectionHeader({ label, title, description, center = true }) {
  return (
    <FadeIn>
      <div className={`mb-14 ${center ? 'text-center' : ''}`}>
        {label && (
          <p className="text-xs font-bold tracking-[2.5px] uppercase text-green-600 dark:text-green-400 mb-3">
            {label}
          </p>
        )}
        <h2
          className="font-display text-[clamp(30px,4.5vw,48px)] font-normal text-zinc-900 dark:text-zinc-100 leading-[1.15] mb-4 [&>em]:italic [&>em]:text-green-600 dark:[&>em]:text-green-400 [&>em]:not-italic"
          style={{ fontStyle: 'normal' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p className={`text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[560px] ${center ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  )
}
