import React, { useState } from 'react';
import { TRANSFORMATION_STAGES } from '../data/uboraData';
import { CheckCircle2, ChevronRight, Cpu } from 'lucide-react';

interface OperationalFlowSectionProps {
  onOpenConsultationModal: () => void;
}

export const OperationalFlowSection: React.FC<OperationalFlowSectionProps> = ({
  onOpenConsultationModal
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStage = TRANSFORMATION_STAGES[activeStep];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Signature Transformation System
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            The 6-Phase Engine of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">Operational Excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Our disciplined, repeatable operational framework engineered to guide enterprise facilities from reactive disorder to self-sustaining world-class maturity.
          </p>
        </div>

        {/* Connected Horizontal Flow Pipeline Tracker */}
        <div className="relative">
          {/* Background Track Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200 -translate-y-1/2 z-0" />
          
          {/* Active Progress Line */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (TRANSFORMATION_STAGES.length - 1)) * 100}%` }}
          />

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {TRANSFORMATION_STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-blue-500 shadow-lg ring-2 ring-blue-500/20 scale-105'
                      : isPassed
                      ? 'bg-blue-50/60 border-blue-200 hover:border-blue-300'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? 'text-blue-600' : isPassed ? 'text-blue-700' : 'text-slate-400'
                      }`}
                    >
                      {stage.stageNumber}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive
                          ? 'bg-blue-600 ring-4 ring-blue-100'
                          : isPassed
                          ? 'bg-blue-500'
                          : 'bg-slate-300'
                      }`}
                    />
                  </div>
                  
                  <div
                    className={`mt-2 font-heading text-sm font-bold tracking-tight uppercase ${
                      isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                    }`}
                  >
                    {stage.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    {stage.timeframe}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Exploration Panel */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 backdrop-blur-xl shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Stage Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-blue-100 border border-blue-200 text-xs font-mono text-blue-700 font-bold">
                  Phase {currentStage.stageNumber} of 06
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Target Cadence: {currentStage.timeframe}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentStage.headline}
              </h3>
            </div>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              {currentStage.description}
            </p>

            {/* Tools Applied at this Stage */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                Core Lean Six Sigma Toolset Deployed:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentStage.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step navigation buttons */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  Previous Phase
                </button>
                <button
                  disabled={activeStep === TRANSFORMATION_STAGES.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(TRANSFORMATION_STAGES.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  Next Phase
                </button>
              </div>

              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>Engage Ubora for this Phase</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage Telemetry & Metric Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-200 bg-white space-y-6 relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-slate-700">Phase Governance</span>
              </span>
              <span className="text-emerald-600 font-bold">Ready for Execution</span>
            </div>

            {/* Visual node graphic for stage */}
            <div className="py-6 flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 rounded-2xl border-2 border-blue-500/40 bg-blue-50 flex items-center justify-center relative shadow-sm">
                <span className="font-heading font-extrabold text-3xl text-blue-700">
                  {currentStage.stageNumber}
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-ping" />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {currentStage.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Verified with C-Suite Stakeholders
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed font-normal">
              &ldquo;Ubora ensures every stage has clear exit criteria before resources are deployed to subsequent phases, protecting ROI at every milestone.&rdquo;
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
