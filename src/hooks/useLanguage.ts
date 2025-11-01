import { useState, useEffect } from 'react';

type Language = 'ar' | 'fr';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const stored = localStorage.getItem('language') as Language;
      if (stored) {
        return stored;
      }
      
      // Auto-detect browser language if no stored preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('fr')) {
        return 'fr';
      }
      
      // Default to French for better international accessibility
      return 'fr';
    }
    return 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'fr' : 'ar');
  };

  return { language, toggleLanguage, isRTL: language === 'ar' };
}
