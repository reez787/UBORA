import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/uboraData';

interface FinalCTASectionProps {
  onOpenConsultationModal: () => void;
  onNavigate: (tab: string) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenConsultationModal,
  onNavigate,
}) => {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-100/60 via-sky-50/40 to-transparent blur-[140px] pointer-events-none" />

      {/* Geometric background circuit lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:40px_40px] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-blue-800 uppercase">
            Transform Your Enterprise Today
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
          Let us help you choose a solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">E-Book, E-Learning Course</span> or 1:1 Consultation that fits your business.
        </h2>

        <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed text-balance">
          Come aboard as we strive for excellence and long-term success, promoting collaboration and innovation and propelling your business towards a future filled with boundless possibilities.
        </p>

        {/* CTA decision cluster */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenConsultationModal}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer"
          >
            <span>Book 1:1 Consultation ({COMPANY_INFO.consultationOffer.priceUSD ? '$79.99' : ''})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Talk to Us · Direct Inquiry</span>
          </button>
        </div>

        {/* Quick direct contact telemetry */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>{COMPANY_INFO.phone}</span>
          </div>
          <span>·</span>
          <span>{COMPANY_INFO.email}</span>
          <span>·</span>
          <span>{COMPANY_INFO.address}</span>
        </div>

      </div>
    </section>
  );
};
