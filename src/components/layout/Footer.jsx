import { Mail, Phone, Instagram, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/utils/config';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { useCookieConsent } from '@/contexts/CookieProvider';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { openPreferences } = useCookieConsent();

  const navLinks = [
    { label: t('nav.portfolio'), href: '/portfolio' },
    { label: t('nav.services'), href: '/servicos' },
    { label: t('nav.about'), href: '/sobre' },
    { label: t('nav.plans'), href: '/planos' },
    { label: t('nav.faq'), href: '/faq' },
  ];

  return (
    <footer className='pt-16 pb-8 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-[#F8F7F4] dark:bg-[#131834]'>
      <div className='max-w-300 mx-auto'>
        {/* Top grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14'>
          {/* Brand */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <Link to='/' className='flex items-center gap-2 mb-4 no-underline'>
              <div className='w-7 h-7 flex items-center justify-center'>
                <img
                  src='/logo-pedrazzoli.png'
                  alt={`${siteConfig.name} Logo`}
                  className='w-full h-full object-contain rounded-md'
                />
              </div>
              <span className='font-display text-lg text-zinc-900 dark:text-zinc-100'>
                {siteConfig.name}
              </span>
            </Link>
            <p className='text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-65'>
              {t('footer.brand')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className='text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4'>
              {t('footer.navigation')}
            </h4>
            <ul className='space-y-2.5 list-none p-0 m-0'>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className='text-[13px] text-zinc-500 dark:text-zinc-400 no-underline hover:text-green-600 dark:hover:text-green-400 transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className='text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4'>
              {t('footer.legal')}
            </h4>
            <ul className='space-y-2.5 list-none p-0 m-0'>
              <li>
                <Link
                  to='/privacidade'
                  className='text-[13px] text-zinc-500 dark:text-zinc-400 no-underline hover:text-green-600 dark:hover:text-green-400 transition-colors'
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  to='/termos'
                  className='text-[13px] text-zinc-500 dark:text-zinc-400 no-underline hover:text-green-600 dark:hover:text-green-400 transition-colors'
                >
                  {t('footer.termsOfUse')}
                </Link>
              </li>
              <li>
                <button
                  onClick={openPreferences}
                  className='text-[13px] text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors bg-transparent border-none cursor-pointer p-0 flex items-center gap-1.5'
                >
                  <Cookie size={12} /> {t('footer.manageCookies')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4'>
              {t('footer.contact')}
            </h4>
            <ul className='space-y-3 list-none p-0 m-0'>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[13px] text-zinc-500 dark:text-zinc-400 no-underline hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-2'
                >
                  <Phone size={13} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className='text-[13px] text-zinc-500 dark:text-zinc-400 no-underline hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-2'
                >
                  <Mail size={13} /> {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.social?.instagram && (
                <li>
                  <a
                    href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[13px] text-zinc-500 dark:text-zinc-400 no-underline hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-2'
                  >
                    <Instagram size={13} /> {siteConfig.social.instagram}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-zinc-200 dark:border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3'>
          <p className='text-[11px] text-zinc-400 dark:text-zinc-500'>
            &copy; {currentYear} {siteConfig.name}. {t('footer.rights')}
          </p>
          <p className='text-[11px] text-zinc-400 dark:text-zinc-500'>
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
