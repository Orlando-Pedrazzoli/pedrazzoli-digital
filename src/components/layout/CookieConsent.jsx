import { useState } from 'react';
import { Shield, Cookie, ChevronDown, X, Settings } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieProvider';

/* ─── Cookie Categories ─── */
const CATEGORIES = [
  {
    key: 'necessary',
    label: 'Cookies Essenciais',
    desc: 'Necessários para o funcionamento básico do site. Incluem preferências de tema, sessão e segurança. Não podem ser desativados.',
    always: true,
  },
  {
    key: 'analytics',
    label: 'Cookies de Análise',
    desc: 'Ajudam a entender como os visitantes interagem com o site, permitindo melhorar a experiência. Incluem Google Analytics para dados agregados de tráfego.',
    always: false,
  },
  {
    key: 'marketing',
    label: 'Cookies de Marketing',
    desc: 'Utilizados para rastrear visitantes em diferentes sites e exibir anúncios relevantes. Incluem pixels de redes sociais e plataformas de publicidade.',
    always: false,
  },
];

/* ─── Banner ─── */
export default function CookieConsent() {
  const {
    showBanner,
    showPreferences,
    acceptAll,
    rejectAll,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Banner */}
      {showBanner && !showPreferences && (
        <CookieBanner
          onAccept={acceptAll}
          onReject={rejectAll}
          onCustomize={openPreferences}
        />
      )}

      {/* Preferences Modal */}
      {showPreferences && <PreferencesModal onClose={closePreferences} />}
    </>
  );
}

/* ─── Banner Component ─── */
function CookieBanner({ onAccept, onReject, onCustomize }) {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-9999 p-4 md:p-6 animate-[slideUp_0.4s_ease-out]'>
      <div className='max-w-200 mx-auto bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-[0_-8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_40px_rgba(0,0,0,0.4)] p-6 md:p-8'>
        <div className='flex flex-col md:flex-row gap-6 items-start'>
          {/* Icon + Text */}
          <div className='flex gap-4 flex-1'>
            <div className='w-11 h-11 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0'>
              <Cookie
                size={22}
                className='text-green-600 dark:text-green-400'
              />
            </div>
            <div>
              <h3 className='text-[16px] font-bold text-zinc-900 dark:text-zinc-100 mb-1.5'>
                Respeitamos sua privacidade
              </h3>
              <p className='text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-120'>
                Utilizamos cookies para melhorar sua experiência, analisar o
                tráfego e personalizar conteúdo. Você pode aceitar, recusar ou
                personalizar suas preferências a qualquer momento.
              </p>
              <div className='flex gap-3 mt-2 text-[12px]'>
                <a
                  href='/privacidade'
                  className='text-green-600 dark:text-green-400 hover:underline no-underline font-medium'
                >
                  Política de Privacidade
                </a>
                <span className='text-zinc-300 dark:text-zinc-700'>·</span>
                <a
                  href='/termos'
                  className='text-green-600 dark:text-green-400 hover:underline no-underline font-medium'
                >
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>

          {/* Buttons — Equal prominence per LGPD/GDPR */}
          <div className='flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0'>
            <button
              onClick={onCustomize}
              className='px-5 py-2.5 rounded-xl text-[13px] font-semibold border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer flex items-center justify-center gap-1.5'
            >
              <Settings size={14} /> Personalizar
            </button>
            <button
              onClick={onReject}
              className='px-5 py-2.5 rounded-xl text-[13px] font-semibold border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer'
            >
              Recusar Todos
            </button>
            <button
              onClick={onAccept}
              className='px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-green-600 hover:bg-green-500 transition-colors cursor-pointer border-none'
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Preferences Modal ─── */
function PreferencesModal({ onClose }) {
  const { saveCustom, consent, defaultPrefs } = useCookieConsent();
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: consent?.analytics ?? defaultPrefs.analytics,
    marketing: consent?.marketing ?? defaultPrefs.marketing,
  });

  const toggle = key => {
    if (key === 'necessary') return;
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className='fixed inset-0 z-10000 flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-[0_24px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)] w-full max-w-130 max-h-[90vh] overflow-y-auto animate-[fadeScale_0.3s_ease-out]'>
        {/* Header */}
        <div className='sticky top-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-7 py-5 flex items-center justify-between z-10'>
          <div className='flex items-center gap-3'>
            <Shield size={20} className='text-green-600 dark:text-green-400' />
            <h2 className='text-[18px] font-bold text-zinc-900 dark:text-zinc-100'>
              Gerenciar Cookies
            </h2>
          </div>
          <button
            onClick={onClose}
            className='w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer bg-transparent border-none'
            aria-label='Fechar'
          >
            <X size={18} />
          </button>
        </div>

        {/* Description */}
        <div className='px-7 py-5'>
          <p className='text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed'>
            Controlamos os cookies utilizados neste site para garantir sua
            privacidade. Você pode ativar ou desativar cada categoria abaixo.
            Cookies essenciais não podem ser desativados pois são necessários
            para o funcionamento do site.
          </p>
        </div>

        {/* Categories */}
        <div className='px-7 space-y-3 pb-4'>
          {CATEGORIES.map(cat => (
            <CategoryToggle
              key={cat.key}
              label={cat.label}
              desc={cat.desc}
              enabled={prefs[cat.key]}
              locked={cat.always}
              onToggle={() => toggle(cat.key)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className='sticky bottom-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-7 py-5 flex flex-col sm:flex-row gap-3 justify-end'>
          <button
            onClick={() =>
              saveCustom({
                necessary: true,
                analytics: false,
                marketing: false,
              })
            }
            className='px-5 py-2.5 rounded-xl text-[13px] font-semibold border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer'
          >
            Recusar Opcionais
          </button>
          <button
            onClick={() => saveCustom(prefs)}
            className='px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-green-600 hover:bg-green-500 transition-colors cursor-pointer border-none'
          >
            Salvar Preferências
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Toggle Card ─── */
function CategoryToggle({ label, desc, enabled, locked, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden'>
      <div
        className='flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors'
        onClick={() => setOpen(!open)}
      >
        <div className='flex items-center gap-3'>
          <ChevronDown
            size={15}
            className={`text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
          <span className='text-[14px] font-semibold text-zinc-900 dark:text-zinc-100'>
            {label}
          </span>
          {locked && (
            <span className='text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'>
              Sempre ativo
            </span>
          )}
        </div>

        {/* Toggle switch */}
        <button
          onClick={e => {
            e.stopPropagation();
            onToggle();
          }}
          disabled={locked}
          className={`
            relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 border-none cursor-pointer
            ${locked ? 'opacity-60 cursor-not-allowed' : ''}
            ${enabled ? 'bg-green-600' : 'bg-zinc-300 dark:bg-zinc-600'}
          `}
          aria-label={`${enabled ? 'Desativar' : 'Ativar'} ${label}`}
        >
          <span
            className={`
              absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200
              ${enabled ? 'translate-x-5.5' : 'translate-x-0.5'}
            `}
          />
        </button>
      </div>

      {/* Expanded description */}
      {open && (
        <div className='px-5 pb-4 pt-0'>
          <p className='text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed pl-7'>
            {desc}
          </p>
        </div>
      )}
    </div>
  );
}
