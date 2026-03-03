import { Code, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/utils/config';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-8 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-[#F8F7F4] dark:bg-[#0C0C0F]'>
      <div className='max-w-300 mx-auto flex flex-wrap justify-between items-center gap-4'>
        <div className='flex items-center gap-2'>
          <div className='w-6.5 h-6.5 rounded-[7px] bg-green-600 flex items-center justify-center'>
            <Code size={13} color='#fff' />
          </div>
          <span className='font-display text-base text-zinc-900 dark:text-zinc-100'>
            {siteConfig.name}
          </span>
        </div>

        <div className='flex flex-wrap gap-5 items-center'>
          <span className='text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5'>
            <MapPin size={12} /> {siteConfig.owner.location}
          </span>
          <a
            href={getWhatsAppUrl()}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs text-zinc-400 dark:text-zinc-500 no-underline flex items-center gap-1.5 hover:text-green-600 dark:hover:text-green-400 transition-colors'
          >
            <Phone size={12} /> WhatsApp
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className='text-xs text-zinc-400 dark:text-zinc-500 no-underline flex items-center gap-1.5 hover:text-green-600 dark:hover:text-green-400 transition-colors'
          >
            <Mail size={12} /> Email
          </a>
        </div>

        <p className='text-[11px] text-zinc-400 dark:text-zinc-500'>
          © {currentYear} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
