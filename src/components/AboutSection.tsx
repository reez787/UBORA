import React from 'react';
import { AboutCubeScene } from './three/AboutCubeScene';
import { COMPANY_INFO, CORE_VALUES, KEY_PILLARS } from '../data/uboraData';

interface AboutSectionProps {
  onNavigate: (tab: string) => void;
  onOpenConsultationModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenConsultationModal
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Heading & 3D Matrix Visual */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Our Approach &amp; Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
                We firmly believe that change is not just a challenge but an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">opportunity for great success</span>.
              </h2>
            </div>

            {/* 3D Operational Cube System */}
            <div>
              <AboutCubeScene />
            </div>

            {/* Founder Note */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-1">
              <div className="text-xs font-mono uppercase text-blue-600 tracking-wider font-semibold">Practice Leadership</div>
              <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.founder}</div>
              <div className="text-xs text-slate-500">{COMPANY_INFO.founderTitle}</div>
            </div>
          </div>

          {/* Right Column: Existing About Text & Pillars */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Primary Verbatim Content from Original Ubora Website */}
            <div className="space-y-5 text-slate-600 font-normal leading-relaxed text-base sm:text-lg">
              <p>
                Tapping from our rich experience in <strong className="text-slate-900 font-semibold">Lean Six Sigma principles, Continuous Improvement, and Operational Excellence</strong>, we smoothly guide organizations to achieve higher levels of performance.
              </p>
              <p>
                Our customer’s satisfaction is the prime goal and we achieve it by developing ideas and solutions that go beyond expectations. Collaborating with clients is a priority, guaranteeing that the results fit well with their business goals and align with strategic direction.
              </p>
              <p className="text-slate-500 text-base">
                {COMPANY_INFO.extendedAbout}
              </p>
            </div>

            {/* Key Pillars Grid (Excellence, Quality, Superiority) */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                Ubora Institutional Pillars
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {KEY_PILLARS.map((pillar, idx) => (
                  <div
                    key={pillar.name}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 hover:border-slate-300 transition-colors shadow-sm"
                  >
                    <div className="text-[11px] font-mono text-blue-600 font-bold">Pillar 0{idx + 1}</div>
                    <div className="text-sm font-bold text-slate-900">{pillar.name}</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-600/20 cursor-pointer"
              >
                Schedule Executive Consultation
              </button>
              <button
                onClick={() => onNavigate('elearning')}
                className="px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-medium text-xs transition-colors cursor-pointer"
              >
                Explore Learning Academy
              </button>
            </div>

          </div>

        </div>

        {/* Ubora Core Values Accordion/Row */}
        <div className="pt-12 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Guiding Principles
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Our Core Values
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md font-normal">
              Rooted in the Swahili definition of Ubora — meaning excellence and distinction in craftsmanship and governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 hover:border-blue-400 hover:bg-white transition-all shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
