import { MessageCircle } from 'lucide-react'

const variantClasses = {
  primary: 'bg-green-600 text-white hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-600/25',
  dark: 'bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 hover:-translate-y-0.5',
  outline: 'bg-transparent text-zinc-900 dark:text-zinc-100 border-[1.5px] border-zinc-200 dark:border-zinc-700 hover:border-green-600 hover:text-green-600 dark:hover:border-green-400 dark:hover:text-green-400',
  ghost: 'bg-transparent text-green-600 dark:text-green-400 !px-0 hover:gap-3',
}

const sizeClasses = {
  sm: 'px-5 py-2.5 text-[13px]',
  md: 'px-7 py-3.5 text-[15px]',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children, variant = 'primary', size = 'md', href,
  whatsapp = false, external = false, fullWidth = false, className = '', ...props
}) {
  const classes = `
    inline-flex items-center gap-2 rounded-xl font-semibold cursor-pointer
    transition-all duration-250 ease-out no-underline leading-snug
    ${variantClasses[variant]} ${sizeClasses[size]}
    ${fullWidth ? 'w-full justify-center' : ''}
    ${className}
  `.trim()

  const content = (
    <>
      {whatsapp && <MessageCircle size={size === 'sm' ? 14 : 16} />}
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {content}
      </a>
    )
  }

  return <button className={classes} {...props}>{content}</button>
}
