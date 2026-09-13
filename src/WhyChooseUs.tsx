import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Clock, 
  Grid, 
  Smile, 
  Award, 
  AlertCircle,
  Sparkles 
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS, CLINIC_CONFIG } from '../data/clinicConfig';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  ShieldCheck,
  Clock,
  Grid,
  Smile,
  Award,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Why Patients Choose Us</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            High Quality Dental Care in Kirari, Delhi
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A patient-friendly dental practice designed to provide gentle consultations, rigorous hygiene, and trustworthy oral healthcare.
          </p>

          {/* Prompt-mandated label */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 text-xs px-4 py-2 rounded-xl shadow-xs">
            <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-left">
              Sample Demo Content — Customize After Client Approval
            </span>
          </div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-teal-300 transition-all duration-200 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-800 transition">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-teal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>Standard of Practice</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
