import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'pt', label: 'Portugues', flag: 'PT' },
];

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  const switchLanguage = code => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={ref} className='relative'>
      <button
        onClick={() => setOpen(prev => !prev)}
        className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[13px] font-medium text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 cursor-pointer'
        aria-label='Change language'
        aria-expanded={open}
        aria-haspopup='listbox'
      >
        <Globe size={15} className='opacity-70' />
        <span>{current.flag}</span>
      </button>

      {open && (
        <div
          role='listbox'
          aria-label='Select language'
          className='absolute top-full right-0 mt-2 min-w-[140px] rounded-xl bg-[#1a2042]/98 backdrop-blur-2xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200'
        >
          {languages.map(lang => {
            const isActive = lang.code === i18n.language;
            return (
              <button
                key={lang.code}
                role='option'
                aria-selected={isActive}
                onClick={() => switchLanguage(lang.code)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] font-medium
                  transition-colors duration-150 cursor-pointer border-none bg-transparent
                  ${
                    isActive
                      ? 'text-green-400 bg-green-400/[0.08]'
                      : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                  }
                `}
              >
                <span className='text-[11px] font-bold tracking-wider w-6 text-center opacity-60'>
                  {lang.flag}
                </span>
                <span>{lang.label}</span>
                {isActive && (
                  <span className='ml-auto w-1.5 h-1.5 rounded-full bg-green-400' />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
