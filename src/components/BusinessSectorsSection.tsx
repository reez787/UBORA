import React, { useState } from 'react';
import { BUSINESS_SECTORS, COMPANY_INFO } from '../data/uboraData';
import { Check, Layers, Factory, Building2, Activity, Utensils, Landmark, Truck } from 'lucide-react';
import { SectorItem } from '../types';

interface BusinessSectorsSectionProps {
  onOpenConsultationModal: (topicName?: string) => void;
}

export const BusinessSectorsSection: React.FC<BusinessSectorsSectionProps> = ({
  onOpenConsultationModal,
}) => {
  const [activeSector, setActiveSector] = useState<SectorItem>(BUSINESS_SECTORS[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Manufacturing': return Factory;
      case 'Financial Services': return Building2;
      case 'Healthcare Systems': return Activity;
      case 'Foodcare & Processing': return Utensils;
      case 'Public Sector': return Landmark;
      case 'Logistics & Supply Chain': return Truck;
      default: return Layers;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Cross-Industry Deployment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Our Portfolio &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">Business Sectors</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Ubora OpEx Solutions deploys Lean Six Sigma frameworks across 6 core international industry verticals to eliminate waste and optimize customer throughput.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 font-medium">
            6 Specialized Practice Domains
          </div>
        </div>

        {/* Sector Interactive Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {BUSINESS_SECTORS.map((sector) => {
            const Icon = getIcon(sector.name);
            const isSelected = activeSector.id === sector.id;

            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                <div>
                  <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                    {sector.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Dossier Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Sector Insights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase text-blue-600 font-bold tracking-wider">
                  Vertical Focus: {activeSector.name}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-emerald-700 border border-emerald-300 bg-emerald-50 font-semibold">
                  {activeSector.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeSector.tagline}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {activeSector.description}
            </p>

            {/* Targeted Interventions */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                Core Interventions &amp; Frameworks:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {activeSector.focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenConsultationModal(activeSector.name)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-600/20 cursor-pointer"
              >
                Request Sector Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Visual Industrial Asset */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 aspect-video lg:aspect-square flex items-center justify-center bg-slate-100 shadow-sm">
            <img
              src={COMPANY_INFO.images.industrialFacility}
              alt="Industrial Lean Facility"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
              <div className="text-[11px] font-mono text-sky-400 uppercase font-semibold">
                Plant-Level OpEx Deployment
              </div>
              <div className="text-base font-bold text-white mt-1">
                Zero-Defect Lean Infrastructure
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
