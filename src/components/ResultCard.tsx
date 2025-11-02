import { translations } from '@/lib/translations';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ResultCardProps {
  originalPrice: number;
  reimbursementAmount: number;
  patientPays: number;
  percentageCovered: number;
  insuranceType: 'cnops' | 'cnss';
  medicationName: string;
  language: 'ar' | 'fr';
}

export default function ResultCard({
  originalPrice,
  reimbursementAmount,
  patientPays,
  percentageCovered,
  insuranceType,
  medicationName,
  language
}: ResultCardProps) {
  const t = translations[language].results;
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-MA' : 'fr-MA', {
      style: 'currency',
      currency: 'MAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div dir={dir} className="w-full max-w-3xl mx-auto space-y-6 animate-scale-in">
      {/* Modern Result Card */}
      <div className="glass-card border-gradient p-8">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-black text-gradient-modern mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* Modern Medication Info */}
        <div className="glass p-6 rounded-2xl mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className={`text-sm text-slate-600 dark:text-muted-foreground mb-2 font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.medication}
              </p>
              <p className={`text-xl font-bold text-slate-900 dark:text-foreground mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {medicationName}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse"></div>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary">
                  {insuranceType.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-card p-3 shadow-floating">
              <img
                src={`/logos/${insuranceType}-logo.png`}
                alt={`${insuranceType.toUpperCase()} Logo`}
                className="h-full w-auto object-contain"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>
          </div>
        </div>

              {/* Modern Main Amount Display */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-primary-600 to-blue-600 text-white rounded-3xl p-10 text-center shadow-glow">
            <p className={`text-lg font-medium mb-4 opacity-90 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.youPay}
            </p>
            <p className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              {formatCurrency(patientPays)}
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Modern Breakdown */}
        <div className="glass p-6 rounded-2xl space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-border">
            <span className={`text-slate-600 dark:text-muted-foreground font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.originalPrice}
            </span>
            <span className="text-xl font-bold text-slate-900 dark:text-foreground">
              {formatCurrency(originalPrice)}
            </span>
          </div>

          <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-success-100 dark:bg-success-950 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <span className={`text-slate-600 dark:text-muted-foreground font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t.reimbursement}
                </span>
                <div className={`text-sm text-success-600 dark:text-success-400 font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {percentageCovered}% {t.covered}
                </div>
              </div>
            </div>
            <span className="text-xl font-bold text-success-600 dark:text-success-400">
              -{formatCurrency(reimbursementAmount)}
            </span>
          </div>

          <div className="flex justify-between items-center pt-4">
            <span className={`text-lg font-black text-slate-900 dark:text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.youPay}
            </span>
            <span className="text-3xl font-black text-primary-600 dark:text-primary">
              {formatCurrency(patientPays)}
            </span>
          </div>
        </div>
      </div>

      {/* Savings Indicator */}
      {reimbursementAmount > 0 && (
        <div className="bg-gradient-to-r from-success-50 to-success-100 dark:from-success-950 dark:to-success-900 border-2 border-success-600 dark:border-success-500 rounded-xl p-5 text-center shadow-soft animate-scale-in">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-success-700 dark:text-success-400" />
            <p className={`text-success-700 dark:text-success-300 font-bold text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.savings.replace('{amount}', formatCurrency(reimbursementAmount))}
            </p>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-warning-50 dark:bg-warning-950 border-l-4 border-warning-500 dark:border-warning-600 rounded-lg p-4">
        <p className={`text-sm font-semibold text-warning-900 dark:text-warning-200 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
          ⚠️ {translations[language].disclaimer.title}
        </p>
        <p className={`text-sm text-warning-800 dark:text-warning-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {translations[language].disclaimer.text}
        </p>
      </div>
    </div>
  );
}
