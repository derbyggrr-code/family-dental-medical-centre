import React from 'react';
import { Star, MessageSquareQuote, AlertCircle } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/clinicConfig';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-teal-600" />
            <span>Testimonial Layout Showcase</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patient Feedback Design
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            This section demonstrates how patient reviews, Google ratings, and feedback badges will appear once clinic-approved testimonials are collected.
          </p>

          {/* Prompt Mandated Banner */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 text-xs px-4 py-2 rounded-xl shadow-xs">
            <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-left">
              SAMPLE DEMO TESTIMONIALS — Fictional UI demonstration only. No fake medical claims or patient reviews.
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between text-left relative"
            >
              {/* Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-1 rounded-md">
                  {test.badge}
                </span>

                {/* Star Rating */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Feedback Quote */}
              <div className="space-y-2 mb-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{test.feedback}"
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 text-teal-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {test.patientName.charAt(test.patientName.length - 1)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {test.patientName}
                  </h4>
                  <p className="text-[11px] text-teal-700 font-medium">
                    {test.treatmentName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
