import React from 'react';
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { HeroOpExScene } from './three/HeroOpExScene';
import { COMPANY_INFO } from '../data/uboraData';
import { Currency } from '../types';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  onOpenConsultationModal: () => void;
  currency: Currency;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenConsultationModal,
  currency
}) => {
  const priceDisplay = currency === 'USD' 
    ? `$${COMPANY_INFO.consultationOffer.priceUSD}`
    : `KSh ${COMPANY_INFO.consultationOffer.priceKES.toLocaleString()}`;
    
  const originalDisplay = currency === 'USD'
    ? `$${COMPANY_INFO.consultationOffer.originalUSD}`
    : `KSh ${COMPANY_INFO.consultationOffer.originalKES.toLocaleString()}`;

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white border-b border-slate-200">
      {/* Background ambient light mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-sky-400/5 to-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Content & Editorial Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-mono font-semibold tracking-wider text-blue-800 uppercase">
                {COMPANY_INFO.tagline}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-slate-600 font-medium">Lean Six Sigma &amp; OpEx</span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono tracking-widest text-blue-600 uppercase font-bold">
                WELCOME TO UBORA OPEX SOLUTIONS
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
                Management Consulting for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">Challenging Times</span>
              </h1>
            </div>

            {/* Authentic Existing Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-balance max-w-2xl">
              We firmly believe that change is not just a challenge but an opportunity for great success. Tapping from our rich experience in <strong className="font-semibold text-slate-900">Lean Six Sigma principles</strong>, Continuous Improvement, and Operational Excellence, we smoothly guide organizations to achieve higher levels of performance.
            </p>

            {/* Value Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Zero-Defect Quality &amp; Variance Reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Working Capital &amp; Waste Elimination</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Frontline Continuous Improvement Culture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Virtual Advisory: Zoom, Meet, or Phone</span>
              </div>
            </div>

            {/* CTA decision cluster */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultationModal}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-sm shadow-xl shadow-blue-600/20 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get 1:1 Consultation</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-mono font-medium">
                  {priceDisplay}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Compass className="w-4 h-4 text-blue-600" />
                <span>Explore Services &amp; Sectors</span>
              </button>
            </div>

            {/* Trust badge with original special offer */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span className="line-through text-slate-400">Regular {originalDisplay}</span>
              <span className="text-emerald-600 font-semibold">Limited-Time Special Offer</span>
              <span>·</span>
              <span>Led by {COMPANY_INFO.founder}</span>
            </div>

          </div>

          {/* Right Column: Sophisticated 3D Operational Excellence Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl relative overflow-hidden">
              <HeroOpExScene />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
