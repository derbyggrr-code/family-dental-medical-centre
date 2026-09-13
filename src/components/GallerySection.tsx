import React, { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicConfig';
import { GalleryItem } from '../types/clinic';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CLIENT' | 'SAMPLE'>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'CLIENT') return item.sourceType === 'CLIENT_PROVIDED';
    if (activeFilter === 'SAMPLE') return item.sourceType === 'SAMPLE_DEMO';
    return true;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
            <Camera className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinic Tour & Operatory</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Gallery
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A visual glimpse inside Family Dental and Medical Centre's clinical environment, patient seating, and modern dental equipment in Kirari, Delhi.
          </p>
        </div>

        {/* Filter Buttons & Separation Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Source Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeFilter === 'ALL'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Photos ({GALLERY_ITEMS.length})
            </button>

            <button
              onClick={() => setActiveFilter('CLIENT')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'CLIENT'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Client-Provided Clinic Photos</span>
            </button>

            <button
              onClick={() => setActiveFilter('SAMPLE')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'SAMPLE'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Sample Demonstrations</span>
            </button>
          </div>

          {/* Quick Legend */}
          <div className="text-xs text-slate-500 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Verified Clinic Asset
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Design Concept Sample
            </span>
          </div>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isClientPhoto = item.sourceType === 'CLIENT_PROVIDED';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-200 bg-slate-900 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Source Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1">
                  {isClientPhoto ? (
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>CLIENT-PROVIDED DEMO IMAGE</span>
                    </span>
                  ) : (
                    <span className="bg-slate-900/85 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md shadow border border-amber-400/30">
                      SAMPLE DEMO MOCKUP
                    </span>
                  )}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-teal-300 p-2 transition cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl max-h-[75vh]">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next controls */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-teal-600 text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-teal-600 text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption & Details */}
            <div className="mt-4 text-center text-white max-w-xl">
              <div className="inline-flex items-center gap-2 mb-1">
                {filteredItems[activeLightboxIndex].sourceType === 'CLIENT_PROVIDED' ? (
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    CLIENT-PROVIDED CLINIC IMAGE
                  </span>
                ) : (
                  <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    DEMO CONCEPT SAMPLE
                  </span>
                )}
                <span className="text-xs text-teal-300">
                  {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="font-bold text-lg text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {filteredItems[activeLightboxIndex].caption}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
