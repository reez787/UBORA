import React, { useState } from 'react';
import { Video, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONSULTATION_TOPICS, COMPANY_INFO } from '../data/uboraData';
import { ConsultationTopic, Currency } from '../types';

interface ConsultationSectionProps {
  currency: Currency;
  onOpenBookingModal: (preselectedTopic?: ConsultationTopic) => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  currency,
  onOpenBookingModal,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(CONSULTATION_TOPICS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Lean Six Sigma',
    'Strategic Planning',
    'Cost & Waste Reduction',
    'Quality & Systems'
  ];

  const filteredTopics = CONSULTATION_TOPICS.filter((t) => {
    return activeCategory === 'All' || t.category === activeCategory;
  });

  const selectedTopic = CONSULTATION_TOPICS.find((t) => t.id === selectedTopicId) || CONSULTATION_TOPICS[0];

  const priceDisplay = currency === 'USD'
    ? `$${COMPANY_INFO.consultationOffer.priceUSD}`
    : `KSh ${COMPANY_INFO.consultationOffer.priceKES.toLocaleString()}`;

  const originalDisplay = currency === 'USD'
    ? `$${COMPANY_INFO.consultationOffer.originalUSD}`
    : `KSh ${COMPANY_INFO.consultationOffer.originalKES.toLocaleString()}`;

  return (
    <section id="consultations" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              1:1 Executive Problem Solving · 24 Advisory Topics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Tailored 1:1 Consultations with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Simon P. Mungecho</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Ready to transform your business for the better? Get expert consultation from Ubora OpEx Solutions and take a step towards unraveling your business’s full potential. Whether seeking productivity enhancements, cost savings, or quality control.
            </p>
          </div>

          {/* Pricing Highlight Pill */}
          <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/80 flex items-center gap-4 shrink-0 shadow-xs">
            <div>
              <div className="text-[10px] font-mono text-emerald-700 uppercase font-bold">Special Offer</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-900 font-heading">{priceDisplay}</span>
                <span className="text-xs text-slate-400 line-through">{originalDisplay}</span>
              </div>
            </div>
            <button
              onClick={() => onOpenBookingModal(selectedTopic)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Consultation Selector: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Scrollable List of 24 Consultation Topics */}
          <div className="lg:col-span-6 space-y-2 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredTopics.map((topic) => {
              const isSelected = selectedTopicId === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                      : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-blue-600' : 'text-slate-400'
                      }`}
                    >
                      {topic.number}
                    </span>
                    <div>
                      <div
                        className={`text-sm font-bold transition-colors ${
                          isSelected ? 'text-blue-900' : 'text-slate-800'
                        }`}
                      >
                        {topic.title}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                        {topic.category}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isSelected ? 'bg-blue-600' : 'bg-slate-200'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Topic Diagnostic & Booking Panel */}
          <div className="lg:col-span-6 p-8 rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-blue-600 font-bold uppercase">
                  Topic {selectedTopic.number} Diagnostic Dossier
                </span>
                <span className="text-slate-500">{selectedTopic.category}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {selectedTopic.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {selectedTopic.summary}
            </p>

            {/* Key Deliverable */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1 shadow-xs">
              <div className="text-[11px] font-mono uppercase text-blue-600 tracking-wider font-bold">
                Concrete Session Deliverable:
              </div>
              <div className="text-xs text-slate-800 font-semibold">
                {selectedTopic.deliverable}
              </div>
            </div>

            {/* Target Audience */}
            <div className="text-xs text-slate-500 font-normal">
              <strong className="text-slate-700 font-semibold">Recommended for: </strong>
              {selectedTopic.recommendedFor}
            </div>

            {/* Meeting Modes */}
            <div className="pt-2 border-t border-slate-200 space-y-3">
              <div className="text-xs font-mono uppercase text-slate-600 font-semibold">
                Connection Channels Available:
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-1.5 text-slate-700 font-medium shadow-xs">
                  <Video className="w-3.5 h-3.5 text-blue-600" />
                  <span>Zoom</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-1.5 text-slate-700 font-medium shadow-xs">
                  <Video className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Meet</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-1.5 text-slate-700 font-medium shadow-xs">
                  <Phone className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Direct Call</span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBookingModal(selectedTopic)}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <span>Book This Consultation ({priceDisplay})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full confidentiality NDA included with every consultation.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
