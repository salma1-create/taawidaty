import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-300 rounded-lg hover:border-primary-700 hover:bg-slate-50 transition-all"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-slate-600" />
      <span className="font-semibold text-slate-700">
        {language === 'ar' ? 'FR' : 'عربي'}
      </span>
    </button>
  );
}
