import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/src/config/contact';

const generalWhatsAppUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={generalWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a DYM Digital por WhatsApp"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-[transform,background-color,box-shadow] duration-200 hover:scale-[1.03] hover:bg-[#20bd5a] hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:right-[max(1.75rem,env(safe-area-inset-right))] sm:bottom-[max(1.75rem,env(safe-area-inset-bottom))] sm:w-auto sm:px-5"
    >
      <MessageCircle aria-hidden="true" className="size-6 shrink-0" strokeWidth={2.25} />
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
