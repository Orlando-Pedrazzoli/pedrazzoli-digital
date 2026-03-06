import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

const COOKIE_KEY = 'pd-cookie-consent';

const defaultPrefs = {
  necessary: true, // Always true, can't disable
  analytics: false,
  marketing: false,
};

const CookieContext = createContext();

export function useCookieConsent() {
  const ctx = useContext(CookieContext);
  if (!ctx)
    throw new Error('useCookieConsent must be used within CookieProvider');
  return ctx;
}

export default function CookieProvider({ children }) {
  const [consent, setConsent] = useState(null); // null = not decided yet
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Load saved consent on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_KEY);
      if (saved) {
        setConsent(JSON.parse(saved));
        setShowBanner(false);
      } else {
        // Small delay for better UX — don't flash banner immediately
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = useCallback(prefs => {
    const data = {
      ...prefs,
      necessary: true, // Always enforce
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    setConsent(data);
    setShowBanner(false);
    setShowPreferences(false);
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
    } catch {
      /* noop */
    }
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent({ ...defaultPrefs });
  }, [saveConsent]);

  const saveCustom = useCallback(
    prefs => {
      saveConsent(prefs);
    },
    [saveConsent],
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(COOKIE_KEY);
    } catch {
      /* noop */
    }
    setConsent(null);
    setShowBanner(true);
  }, []);

  return (
    <CookieContext.Provider
      value={{
        consent,
        showBanner,
        showPreferences,
        acceptAll,
        rejectAll,
        saveCustom,
        openPreferences,
        closePreferences,
        resetConsent,
        defaultPrefs,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}
