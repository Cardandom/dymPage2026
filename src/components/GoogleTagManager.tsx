import Script from 'next/script';
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_VERSION,
} from '@/src/lib/cookieConsent';

const GOOGLE_TAG_MANAGER_ID = 'GTM-W3J9HMK2';

const googleTagManagerBootstrap = `
(function (window, document, dataLayerName, containerId, storageKey, consentVersion) {
  window[dataLayerName] = window[dataLayerName] || [];
  window.gtag = window.gtag || function () {
    window[dataLayerName].push(arguments);
  };

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted'
  });

  try {
    var storedValue = window.localStorage.getItem(storageKey);
    var preferences = storedValue ? JSON.parse(storedValue) : null;
    var hasValidPreferences = preferences
      && preferences.version === consentVersion
      && preferences.necessary === true
      && typeof preferences.analytics === 'boolean'
      && typeof preferences.advertising === 'boolean'
      && typeof preferences.functional === 'boolean'
      && typeof preferences.updatedAt === 'string';

    if (hasValidPreferences) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.advertising ? 'granted' : 'denied',
        ad_user_data: preferences.advertising ? 'granted' : 'denied',
        ad_personalization: preferences.advertising ? 'granted' : 'denied',
        functionality_storage: preferences.functional ? 'granted' : 'denied',
        personalization_storage: preferences.functional ? 'granted' : 'denied',
        security_storage: 'granted'
      });
    }
  } catch (_) {
    // Invalid or unavailable storage leaves the restrictive defaults in place.
  }

  if (document.getElementById('dym-google-tag-manager')) {
    return;
  }

  window[dataLayerName].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  var firstScript = document.getElementsByTagName('script')[0];
  var gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.id = 'dym-google-tag-manager';
  gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(containerId);
  firstScript.parentNode.insertBefore(gtmScript, firstScript);
})(window, document, 'dataLayer', '${GOOGLE_TAG_MANAGER_ID}', '${COOKIE_CONSENT_STORAGE_KEY}', ${COOKIE_CONSENT_VERSION});
`;

export default function GoogleTagManager() {
  return (
    <Script
      id="dym-google-consent-and-gtm"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: googleTagManagerBootstrap }}
    />
  );
}
