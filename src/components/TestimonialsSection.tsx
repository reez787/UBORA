import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/uboraData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Verified Client Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Voices on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Simon&apos;s Advisory</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xl mx-auto">
            Direct feedback from operations leaders who implemented Ubora Lean Six Sigma principles and consulted with Simon P. Mungecho.
          </p>
        </div>

        {/* Editorial Testimonial Card */}
        <div className="p-8 sm:p-14 rounded-3xl border border-slate-200 bg-slate-50/70 backdrop-blur-xl relative overflow-hidden shadow-xl">
          
          <Quote className="w-12 h-12 text-blue-600/10 absolute top-8 left-8 -z-0" />

          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-mono text-slate-500 ml-2 font-medium">Verified Engagement</span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-slate-800 font-light leading-relaxed tracking-tight">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-base font-bold text-slate-900 font-heading">
                  {currentTestimonial.author}
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  {currentTestimonial.role} · <span className="text-slate-700 font-medium">{currentTestimonial.organization}</span>
                </div>
                <div className="text-[11px] font-mono text-blue-600 font-semibold mt-0.5">
                  Focus: {currentTestimonial.focus}
                </div>
              </div>

              {/* Slider Navigation Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 mr-2 font-bold">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>

                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors cursor-pointer shadow-xs"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors cursor-pointer shadow-xs"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
