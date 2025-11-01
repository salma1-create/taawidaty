import { useEffect } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
}

export default function AdBanner({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = '' 
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-banner-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with your AdSense client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

// Placeholder Ad Component for development/testing
export function PlaceholderAd({ 
  height = '250px', 
  className = '',
  label = 'Advertisement'
}: { 
  height?: string; 
  className?: string;
  label?: string;
}) {
  return (
    <div 
      className={`flex items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg ${className}`}
      style={{ minHeight: height }}
    >
      <div className="text-center p-4">
        <p className="text-slate-400 font-semibold text-sm mb-2">{label}</p>
        <p className="text-xs text-slate-400">
          Replace with actual ad code
        </p>
      </div>
    </div>
  );
}
