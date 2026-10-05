import React, { useState } from 'react';
import { ArrowUpRight, Check, Compass, Cpu, Target, Layers, BarChart3, Repeat } from 'lucide-react';
import { BUSINESS_SECTORS } from '../data/uboraData';

interface ServicesSectionProps {
  onNavigate: (tab: string) => void;
  onOpenConsultationModal: (preselectedTopic?: string) => void;
}

const SERVICES = [
  {
    number: '01',
    name: 'Lean Six Sigma & DMAIC Process Optimization',
    tagline: 'Systemic Variance Reduction & Zero-Defect Architecture',
    description: 'We diagnose and eradicate hidden process friction through structured DMAIC (Define, Measure, Analyze, Improve, Control) methodologies, root-cause countermeasure deployments, and statistical capability engineering.',
    deliverables: ['End-to-End Value Stream Mapping', 'PFMEA Failure Mode Prevention', 'Cp/Cpk Statistical Process Control', 'Shop-Floor Poka-Yoke Error Proofing'],
    sectors: ['Manufacturing', 'Healthcare', 'Foodcare'],
    icon: Target,
    stats: '-38% Defect Rates'
  },
  {
    number: '02',
    name: 'Operational Excellence & Hoshin Kanri Strategy',
    tagline: 'Bridging C-Suite Ambition with Frontline Gemba Execution',
    description: 'Cascading enterprise transformation goals directly to plant floors and back-office teams via Hoshin Kanri X-Matrices, catchball alignment sessions, and balanced metric scorecards.',
    deliverables: ['Enterprise OpEx Maturity Benchmarking', 'Policy Cascading X-Matrix Framework', 'Tier 1–3 Daily Management Huddles', 'Executive Leadership Gemba Coaching'],
    sectors: ['Financial', 'Public Sector', 'Logistics'],
    icon: Compass,
    stats: '+28% Strategic Execution Rate'
  },
  {
    number: '03',
    name: 'Cost Reduction & Waste (Muda) Eradication',
    tagline: 'Non-Destructive Overhead Optimization & Working Capital Liberation',
    description: 'Sustainable, value-focused cost elimination targeting the 8 Deadly Wastes—freeing up tied capital in excess WIP inventory, line stoppages, and administrative rework without harming customer satisfaction.',
    deliverables: ['ABC/XYZ Inventory Buffer Sizing', 'SMED Rapid Changeover Protocols', 'Scrap & Rework Yield Maximization', 'Utility & Indirect Expense Auditing'],
    sectors: ['Manufacturing', 'Foodcare', 'Logistics'],
    icon: BarChart3,
    stats: '$1.2M+ Typical Waste Liberated'
  },
  {
    number: '04',
    name: 'Total Productive Maintenance & OEE Acceleration',
    tagline: 'Eliminating the Six Big Losses in Industrial Equipment',
    description: 'Transforming maintenance from reactive firefighting into proactive Autonomous Maintenance (Jishu Hozen) and predictive asset health monitoring that drives Overall Equipment Effectiveness past 85%.',
    deliverables: ['Autonomous Operator Cleaning & Lube SOPs', 'MTBF & MTTR Reliability Roadmaps', 'Single-Minute Exchange of Die (SMED)', 'Condition-Based Sensor Monitoring Setup'],
    sectors: ['Manufacturing', 'Foodcare'],
    icon: Cpu,
    stats: '+22% Asset OEE Lift'
  },
  {
    number: '05',
    name: 'Continuous Improvement (Kaizen) Culture Building',
    tagline: 'Institutionalizing Frontline Problem Solving Academies',
    description: 'Embedding a sustainable improvement mindset where frontline operators proactively uncover and resolve 100+ micro-bottlenecks annually using A3 reports and visual accountability boards.',
    deliverables: ['Rapid 5-Day Kaizen Event Sprints', 'Internal OpEx Academy Curriculums', 'Frontline Suggestion Reward Systems', 'Cross-Functional Kaizen Circle Setup'],
    sectors: ['All Industry Sectors'],
    icon: Repeat,
    stats: '120+ Annual Kaizen Submissions'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onOpenConsultationModal
}) => {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              What We Do · Advisory &amp; Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Precision Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Operational Transformation</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We are a solutions-based company that brings global experience to help leading businesses solve complex problems, achieve great results while adding value to their customers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenConsultationModal()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap cursor-pointer"
            >
              Book Advisory Call ($79.99)
            </button>
          </div>
        </div>

        {/* Large Horizontal Interactive Service Panels */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => {
            const isExpanded = activeService === index;
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                onClick={() => setActiveService(index)}
                className={`group relative rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Horizontal Header Strip */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Number + Title */}
                  <div className="flex items-start sm:items-center gap-6">
                    <span
                      className={`font-mono font-extrabold tracking-tighter transition-all duration-300 ${
                        isExpanded
                          ? 'text-4xl sm:text-5xl text-blue-600 scale-105'
                          : 'text-2xl sm:text-3xl text-slate-300 group-hover:text-slate-500'
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        {isExpanded && (
                          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-mono text-emerald-700 border border-emerald-300 bg-emerald-50 font-semibold">
                            {service.stats}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand Affordance & Micro-Visualization */}
                  <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                    <div className="hidden sm:flex items-center gap-2">
                      {service.sectors.slice(0, 2).map((sec) => (
                        <span key={sec} className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {sec}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isExpanded
                          ? 'bg-blue-600 text-white border-blue-600 rotate-45 shadow-sm'
                          : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-800'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer Details */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 animate-fadeIn">
                    
                    {/* Left: Description & Deliverables */}
                    <div className="lg:col-span-8 space-y-5">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                          Core Transformation Deliverables:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenConsultationModal(service.name);
                          }}
                          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-colors cursor-pointer shadow-sm"
                        >
                          Book 1:1 Session for this Service
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('elearning');
                          }}
                          className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                        >
                          View Related E-Learning Modules
                        </button>
                      </div>
                    </div>

                    {/* Right: Technical Metric Card */}
                    <div className="lg:col-span-4 p-5 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                        <span className="font-semibold">Target Impact</span>
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-2xl font-extrabold text-slate-900 font-heading">
                        {service.stats}
                      </div>
                      <div className="text-xs text-slate-500 leading-relaxed">
                        Measured across clients utilizing Ubora Lean Six Sigma deployment frameworks.
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
