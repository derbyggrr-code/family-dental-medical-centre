import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldAlert, 
  ShieldCheck, 
  Anchor, 
  Sun, 
  Smile, 
  Layers, 
  Crown, 
  Palette, 
  Activity, 
  HeartHandshake, 
  AlertTriangle,
  ArrowRight,
  Calendar,
  Search,
  AlertCircle
} from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicConfig';
import { ClinicService } from '../types/clinic';
import { TreatmentDetailModal } from './TreatmentDetailModal';

// Icon map for dynamic lucide icon rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  Anchor,
  Sun,
  Smile,
  Layers,
  Crown,
  Palette,
  Activity,
  HeartHandshake,
  AlertTriangle,
};

interface ServicesSectionProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAppointmentModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDetailService, setActiveDetailService] = useState<ClinicService | null>(null);

  const categories = ['All', 'General', 'Restorative', 'Cosmetic', 'Orthodontic', 'Specialized'];

  const filteredServices = CLINIC_SERVICES.filter((srv) => {
    const matchesCategory = selectedCategory === 'All' || srv.category === selectedCategory;
    const matchesSearch = srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          srv.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="treatments" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Comprehensive Dental Treatments</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Dental Services
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Explore standard dental care solutions available to patients. From routine ultrasonic scaling to modern restorative crowns and orthodontic alignments.
          </p>

          {/* Mandatory Specific Label */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 text-xs px-4 py-2 rounded-xl shadow-xs">
            <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-left">
              Sample Services — Confirm with Clinic for exact procedure suitability and availability.
            </span>
          </div>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-teal-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-900"
            />
          </div>

        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-300 transition-all duration-200 flex flex-col justify-between group text-left relative"
              >
                {service.isPopular && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">
                    Common Choice
                  </span>
                )}

                <div>
                  {/* Icon & Category */}
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    {service.category} Dentistry
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Action Buttons: Learn More & Book */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveDetailService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900 transition cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenAppointmentModal(service.name)}
                    className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-teal-600 text-slate-700 hover:text-white text-xs font-semibold px-3 py-2 rounded-xl transition cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-600 text-sm">No treatments match your search "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs text-teal-700 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Treatment Detail Modal */}
      <TreatmentDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onBook={(srvName) => onOpenAppointmentModal(srvName)}
      />
    </section>
  );
};
