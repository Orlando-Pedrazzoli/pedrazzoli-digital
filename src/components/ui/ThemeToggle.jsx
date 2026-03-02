import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="
        relative w-10 h-10 rounded-xl cursor-pointer
        flex items-center justify-center
        border border-zinc-200 dark:border-zinc-700
        bg-zinc-50 dark:bg-zinc-800
        hover:bg-zinc-200 dark:hover:bg-zinc-700
        transition-all duration-300
      "
    >
      <Sun size={17} className={`absolute text-amber-500 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
      <Moon size={17} className={`absolute text-blue-400 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
    </button>
  )
}
