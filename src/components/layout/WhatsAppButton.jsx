import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/utils/whatsapp'

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="
        fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full
        bg-[#25D366] border-none cursor-pointer
        flex items-center justify-center
        animate-pulse-wa shadow-lg shadow-[#25D366]/40
        hover:scale-110 transition-transform duration-200
      "
    >
      <MessageCircle size={28} color="#fff" fill="#fff" />
    </a>
  )
}
