'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/src/config/contact';

const generalWhatsAppUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

export default function WhatsAppFloatingButton() {
  const [viewportState, setViewportState] = React.useState({
    isDesktop: false,
    showOnDesktop: false,
  });

  React.useEffect(() => {
    let animationFrame: number | null = null;

    const updateVisibility = () => {
      animationFrame = null;
      const nextState = {
        isDesktop: window.matchMedia('(min-width: 768px)').matches,
        showOnDesktop: window.scrollY > 300,
      };

      setViewportState((currentState) =>
        currentState.isDesktop === nextState.isDesktop
        && currentState.showOnDesktop === nextState.showOnDesktop
          ? currentState
          : nextState
      );
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateVisibility);
      }
    };

    updateVisibility();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const hiddenOnDesktop = viewportState.isDesktop && !viewportState.showOnDesktop;

  return (
    <a
      href={generalWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a DYM Digital por WhatsApp"
      aria-hidden={hiddenOnDesktop || undefined}
      tabIndex={hiddenOnDesktop ? -1 : undefined}
      className={`fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-[opacity,transform,background-color,box-shadow] duration-200 hover:scale-[1.03] hover:bg-[#20bd5a] hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:right-[max(1.75rem,env(safe-area-inset-right))] sm:bottom-[max(1.75rem,env(safe-area-inset-bottom))] sm:w-auto sm:px-5 ${
        viewportState.showOnDesktop
          ? 'md:pointer-events-auto md:translate-y-0 md:scale-100 md:opacity-100'
          : 'md:pointer-events-none md:translate-y-2 md:scale-95 md:opacity-0'
      }`}
    >
      <MessageCircle aria-hidden="true" className="size-6 shrink-0" strokeWidth={2.25} />
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
