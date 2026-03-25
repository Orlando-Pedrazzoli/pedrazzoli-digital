import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { getWhatsAppUrl } from '@/utils/whatsapp';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
  name: '',
  email: '',
  phone: '',
  business: '',
  message: '',
};

export default function CTAFinal() {
  const { t } = useTranslation();
  const businessOptions = t('cta.businessOptions', { returnObjects: true });

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      const emailjs = await import('@emailjs/browser');
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone || 'N/A',
        business_type: form.business || 'N/A',
        message: form.message,
        to_email: 'pedrazzoliorlando@gmail.com',
      });
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputLight =
    'w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all';
  const inputTheme = `${inputLight} bg-zinc-50 dark:bg-white/6 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 focus:border-green-500 dark:focus:border-green-500 focus:bg-white dark:focus:bg-white/8 focus:ring-1 focus:ring-green-500/30`;

  return (
    <section id='contato' className='py-24 px-6 bg-[#F8F7F4] dark:bg-[#131834]'>
      <FadeIn>
        <div className='max-w-220 mx-auto rounded-3xl py-16 px-8 md:px-14 bg-white dark:bg-[#1a2042] border border-zinc-200 dark:border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden'>
          <div className='absolute -top-15 -right-15 w-55 h-55 rounded-full bg-green-600/8 dark:bg-green-600/12 pointer-events-none' />
          <div className='absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-amber-600/5 dark:bg-amber-600/8 pointer-events-none' />

          <div className='relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-start'>
            {/* Left */}
            <div className='flex-1 lg:max-w-75'>
              <h2
                className='font-display text-[clamp(24px,4vw,36px)] font-normal text-zinc-900 dark:text-white mb-4 leading-[1.15] [&>em]:italic [&>em]:text-green-600 dark:[&>em]:text-green-400'
                dangerouslySetInnerHTML={{ __html: t('cta.title') }}
              />
              <p className='text-[15px] text-zinc-500 dark:text-white/50 leading-relaxed mb-6'>
                {t('cta.subtitle')}
              </p>

              <div className='mb-6 p-4 rounded-xl bg-zinc-50 dark:bg-[#212952] border border-zinc-200 dark:border-white/[0.08]'>
                <p className='text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 mb-1'>
                  {t('cta.directContact')}
                </p>
                <p className='text-[12px] text-zinc-500 dark:text-zinc-400 leading-relaxed'>
                  {t('cta.directContactDesc')}
                </p>
              </div>

              <div className='hidden lg:block'>
                <p className='text-[13px] text-zinc-400 dark:text-white/35 mb-3'>
                  {t('cta.preferNow')}
                </p>
                <Button
                  href={getWhatsAppUrl(t('cta.whatsappMsg'))}
                  external
                  variant='primary'
                  size='md'
                  whatsapp
                >
                  {t('cta.whatsappCta')}
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className='flex-1 w-full'>
              {status === 'success' ? (
                <div className='flex flex-col items-center justify-center text-center py-12'>
                  <div className='w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/15 flex items-center justify-center mb-4'>
                    <CheckCircle
                      size={32}
                      className='text-green-600 dark:text-green-400'
                    />
                  </div>
                  <h3 className='text-xl font-bold text-zinc-900 dark:text-white mb-2'>
                    {t('cta.form.successTitle')}
                  </h3>
                  <p className='text-sm text-zinc-500 dark:text-white/50'>
                    {t('cta.form.successDesc')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <input
                      type='text'
                      name='name'
                      placeholder={t('cta.form.name')}
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputTheme}
                    />
                    <input
                      type='email'
                      name='email'
                      placeholder={t('cta.form.email')}
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputTheme}
                    />
                  </div>

                  <div className='flex flex-col sm:flex-row gap-4'>
                    <input
                      type='tel'
                      name='phone'
                      placeholder={t('cta.form.phone')}
                      value={form.phone}
                      onChange={handleChange}
                      className={inputTheme}
                    />
                    <select
                      name='business'
                      value={form.business}
                      onChange={handleChange}
                      className={`${inputTheme} ${!form.business ? 'text-zinc-400 dark:text-white/30' : ''}`}
                    >
                      <option value='' disabled>
                        {t('cta.form.businessType')}
                      </option>
                      {businessOptions.map(opt => (
                        <option
                          key={opt}
                          value={opt}
                          className='bg-white dark:bg-[#1a2042] text-zinc-900 dark:text-white'
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    name='message'
                    placeholder={t('cta.form.message')}
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputTheme} resize-none`}
                  />

                  <div className='pt-2'>
                    <button
                      type='submit'
                      disabled={status === 'sending'}
                      className='w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer border-none'
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={18} className='animate-spin' />{' '}
                          {t('cta.form.sending')}
                        </>
                      ) : (
                        <>
                          <Send size={18} /> {t('cta.form.submit')}
                        </>
                      )}
                    </button>
                  </div>

                  {status === 'error' && (
                    <div className='flex items-center gap-2 text-red-500 dark:text-red-400 text-sm mt-2'>
                      <AlertCircle size={16} />
                      <span>{t('cta.form.errorMsg')}</span>
                    </div>
                  )}
                </form>
              )}

              <div className='block lg:hidden mt-6 text-center'>
                <p className='text-[13px] text-zinc-400 dark:text-white/35 mb-3'>
                  {t('cta.preferNow')}
                </p>
                <Button
                  href={getWhatsAppUrl(t('cta.whatsappMsg'))}
                  external
                  variant='primary'
                  size='md'
                  whatsapp
                  fullWidth
                >
                  {t('cta.whatsappCta')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
