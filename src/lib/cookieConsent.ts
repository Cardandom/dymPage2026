export const COOKIE_CONSENT_STORAGE_KEY = 'dym-cookie-preferences';
export const COOKIE_PREFERENCES_EVENT = 'dym:open-cookie-preferences';
export const COOKIE_CONSENT_VERSION = 1;

export type CookiePreferences = {
  version: typeof COOKIE_CONSENT_VERSION;
  necessary: true;
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
  updatedAt: string;
};

export type CookiePreferenceChoices = Pick<
  CookiePreferences,
  'necessary' | 'analytics' | 'advertising' | 'functional'
>;

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferenceChoices = {
  necessary: true,
  analytics: false,
  advertising: false,
  functional: false,
};

type GoogleConsentValue = 'granted' | 'denied';

export type GoogleConsentState = {
  analytics_storage: GoogleConsentValue;
  ad_storage: GoogleConsentValue;
  ad_user_data: GoogleConsentValue;
  ad_personalization: GoogleConsentValue;
  functionality_storage: GoogleConsentValue;
  personalization_storage: GoogleConsentValue;
  security_storage: 'granted';
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function toGoogleConsentValue(isGranted: boolean): GoogleConsentValue {
  return isGranted ? 'granted' : 'denied';
}

export function mapCookiePreferencesToGoogleConsent(
  preferences: CookiePreferenceChoices,
): GoogleConsentState {
  const analyticsConsent = toGoogleConsentValue(preferences.analytics);
  const advertisingConsent = toGoogleConsentValue(preferences.advertising);
  const functionalConsent = toGoogleConsentValue(preferences.functional);

  return {
    analytics_storage: analyticsConsent,
    ad_storage: advertisingConsent,
    ad_user_data: advertisingConsent,
    ad_personalization: advertisingConsent,
    functionality_storage: functionalConsent,
    personalization_storage: functionalConsent,
    security_storage: 'granted',
  };
}

export function updateGoogleConsent(preferences: CookiePreferenceChoices) {
  if (typeof window === 'undefined') {
    return;
  }

  const dataLayer = window.dataLayer ??= [];

  window.gtag ??= function gtag() {
    dataLayer.push(arguments);
  };

  window.gtag('consent', 'update', mapCookiePreferencesToGoogleConsent(preferences));
}

export function isCookiePreferences(value: unknown): value is CookiePreferences {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const preferences = value as Partial<CookiePreferences>;

  return (
    preferences.version === COOKIE_CONSENT_VERSION
    && preferences.necessary === true
    && typeof preferences.analytics === 'boolean'
    && typeof preferences.advertising === 'boolean'
    && typeof preferences.functional === 'boolean'
    && typeof preferences.updatedAt === 'string'
  );
}
