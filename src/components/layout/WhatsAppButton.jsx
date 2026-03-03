import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Fale conosco pelo WhatsApp'
      className='
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        rounded-full
        bg-[#25D366]
        flex items-center justify-center
        shadow-lg shadow-[#25D366]/40
        hover:scale-110 focus:scale-110
        transition-transform duration-200
        animate-pulse-wa
      '
    >
      <MessageCircle
        size={28}
        color='#ffffff'
        fill='#ffffff'
        strokeWidth={1.8}
      />
    </a>
  );
}
