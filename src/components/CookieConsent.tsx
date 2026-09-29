'use client';

import Link from 'next/link';
import React from 'react';
import { X } from 'lucide-react';
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_VERSION,
  COOKIE_PREFERENCES_EVENT,
  DEFAULT_COOKIE_PREFERENCES,
  isCookiePreferences,
  updateGoogleConsent,
  type CookiePreferenceChoices,
  type CookiePreferences,
} from '@/src/lib/cookieConsent';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const preferenceOptions: Array<{
  key: keyof CookiePreferenceChoices;
  title: string;
  description: string;
  locked?: boolean;
}> = [
  {
    key: 'necessary',
    title: 'Cookies necesarias',
    description: 'Son indispensables para el funcionamiento básico y la seguridad del sitio.',
    locked: true,
  },
  {
    key: 'analytics',
    title: 'Analítica',
    description: 'Nos permitirán entender cómo se utiliza el sitio y mejorar su experiencia.',
  },
  {
    key: 'advertising',
    title: 'Publicidad',
    description: 'Nos permitirán medir campañas y realizar remarketing cuando corresponda.',
  },
  {
    key: 'functional',
    title: 'Funcionales',
    description: 'Permiten recordar opciones y ofrecer funciones adicionales.',
  },
];

function buildStoredPreferences(choices: CookiePreferenceChoices): CookiePreferences {
  return {
    ...choices,
    necessary: true,
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
}

function readStoredPreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const storedValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    const parsedValue = storedValue ? JSON.parse(storedValue) : null;
    return isCookiePreferences(parsedValue) ? parsedValue : null;
  } catch {
    return null;
  }
}

function subscribeToClient() {
  return () => undefined;
}

export default function CookieConsent() {
  const isClient = React.useSyncExternalStore(
    subscribeToClient,
    () => true,
    () => false,
  );
  const [preferences, setPreferences] = React.useState<CookiePreferences | null>(readStoredPreferences);
  const [draft, setDraft] = React.useState<CookiePreferenceChoices>(DEFAULT_COOKIE_PREFERENCES);
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  const openPanel = React.useCallback(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setDraft(preferences ?? DEFAULT_COOKIE_PREFERENCES);
    setIsPanelOpen(true);
  }, [preferences]);

  const closePanel = React.useCallback(() => {
    setIsPanelOpen(false);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
  }, []);

  React.useEffect(() => {
    const handleOpenPreferences = () => openPanel();
    window.addEventListener(COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
  }, [openPanel]);

  React.useEffect(() => {
    if (!isPanelOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePanel();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closePanel, isPanelOpen]);

  const savePreferences = (choices: CookiePreferenceChoices) => {
    const nextPreferences = buildStoredPreferences(choices);
    setPreferences(nextPreferences);
    setDraft(nextPreferences);

    try {
      window.localStorage.setItem(
        COOKIE_CONSENT_STORAGE_KEY,
        JSON.stringify(nextPreferences),
      );
    } catch {
      // Keep the choice for this session even if browser storage is unavailable.
    }

    updateGoogleConsent(nextPreferences);

    setIsPanelOpen(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      {!preferences && !isPanelOpen && (
        <aside
          aria-label="Aviso de cookies"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-5xl rounded-3xl border border-white/15 bg-[#100b1d]/95 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold sm:text-xl">Tu privacidad importa</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Utilizamos cookies necesarias para el funcionamiento del sitio y, con tu autorización,
                cookies de analítica y publicidad para comprender el uso de nuestra web y medir nuestras
                campañas. Puedes aceptar todas, rechazar las no esenciales o configurar tus preferencias.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold">
                <Link className="rounded-sm text-brand-neon underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon" href="/politica-de-privacidad/">
                  Política de Privacidad
                </Link>
                <Link className="rounded-sm text-brand-neon underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon" href="/politica-de-cookies/">
                  Política de Cookies
                </Link>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 lg:flex lg:flex-none">
              <button
                type="button"
                onClick={() => savePreferences(DEFAULT_COOKIE_PREFERENCES)}
                className="rounded-full border border-white/20 px-4 py-3 text-sm font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b1d]"
              >
                Rechazar no esenciales
              </button>
              <button
                type="button"
                onClick={openPanel}
                className="rounded-full border border-brand-neon/60 px-4 py-3 text-sm font-bold text-brand-neon transition-colors hover:bg-brand-neon/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b1d]"
              >
                Configurar
              </button>
              <button
                type="button"
                onClick={() => savePreferences({
                  necessary: true,
                  analytics: true,
                  advertising: true,
                  functional: true,
                })}
                className="rounded-full bg-brand-neon px-4 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b1d]"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </aside>
      )}

      {isPanelOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              closePanel();
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            aria-describedby="cookie-preferences-description"
            className="max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/15 bg-[#100b1d] p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:max-h-[calc(100dvh-3rem)] sm:p-7"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-neon">Privacidad</p>
                <h2 id="cookie-preferences-title" className="mt-2 text-2xl font-bold">
                  Preferencias de cookies
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePanel}
                aria-label="Cerrar preferencias de cookies"
                className="flex size-10 flex-none items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>

            <p id="cookie-preferences-description" className="mt-4 text-sm leading-6 text-slate-300">
              Elige qué categorías no esenciales autorizas. Esta configuración solo almacena tus
              preferencias y podrás cambiarla después desde el pie de página.
            </p>

            <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] px-4">
              {preferenceOptions.map((option) => (
                <label key={option.key} className={`flex gap-4 py-4 ${option.locked ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-white">{option.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">{option.description}</span>
                    {option.locked && (
                      <span className="mt-1 block text-xs font-semibold text-brand-neon">Siempre activadas</span>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    checked={draft[option.key]}
                    disabled={option.locked}
                    onChange={(event) => setDraft((current) => ({
                      ...current,
                      [option.key]: event.target.checked,
                    }))}
                    className="mt-1 size-5 flex-none accent-brand-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b1d]"
                  />
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/politica-de-cookies/"
                className="self-center rounded-sm text-xs font-semibold text-slate-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-neon"
              >
                Consultar Política de Cookies
              </Link>
              <button
                type="button"
                onClick={() => savePreferences(draft)}
                className="rounded-full bg-brand-neon px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b1d]"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
