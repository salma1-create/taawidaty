/**
 * Modern Loading Spinner Component
 *
 * Provides beautiful, accessible loading states with smooth animations
 */

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} rounded-full border-2 border-primary-200 dark:border-primary-800`}></div>
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} rounded-full border-2 border-primary-600 dark:border-primary border-t-transparent animate-spin`}></div>
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} rounded-full border-2 border-transparent border-l-primary-400/30 border-r-primary-400/30 animate-spin`}></div>
      </div>
      {text && (
        <p className="text-sm text-slate-600 dark:text-muted-foreground animate-pulse-slow">
          {text}
        </p>
      )}
    </div>
  );
}

/**
 * Skeleton Loader Component
 * For content loading states
 */
interface SkeletonProps {
  className?: string;
  lines?: number;
}

export function Skeleton({ className = '', lines = 1 }: SkeletonProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"
          style={{
            width: i === lines - 1 ? '60%' : '100%',
            animationDelay: `${i * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  );
}

/**
 * Pulse Card Component
 * For card loading states
 */
interface PulseCardProps {
  className?: string;
  height?: string;
}

export function PulseCard({ className = '', height = 'h-48' }: PulseCardProps) {
  return (
    <div className={`${height} rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse-slow ${className}`}>
      <div className="h-full flex items-center justify-center">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}