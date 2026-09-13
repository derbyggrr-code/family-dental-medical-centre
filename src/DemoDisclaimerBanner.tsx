import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicConfig';

export const DemoDisclaimerBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Demo Disclaimer Banner"
      className="bg-amber-50 border-b border-amber-200 text-amber-900 py-2 px-4 text-xs font-medium relative transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <p className="leading-snug">
            <strong className="font-bold text-amber-950">DEMO PREVIEW</strong> — Website created for {CLINIC_CONFIG.clinicName}, Kirari, Delhi.
          </p>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-amber-700 hover:text-amber-950 p-1 rounded hover:bg-amber-200/50 transition cursor-pointer"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
