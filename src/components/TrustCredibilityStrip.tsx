import React, { useEffect, useState } from 'react';
import { BookOpen, GraduationCap, Users, Layers, Award } from 'lucide-react';

interface MetricStat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}

const STATS: MetricStat[] = [
  {
    value: 20,
    suffix: '+',
    label: 'eBooks',
    sublabel: 'Operational strategy & Lean tools',
    icon: BookOpen
  },
  {
    value: 25,
    suffix: '+',
    label: 'E-Learning Courses',
    sublabel: 'Curated Lean Six Sigma curriculums',
    icon: GraduationCap
  },
  {
    value: 24,
    suffix: '',
    label: 'Consultation Topics',
    sublabel: 'Targeted executive problem-solving',
    icon: Users
  },
  {
    value: 6,
    suffix: '',
    label: 'Core Business Sectors',
    sublabel: 'Manufacturing, healthcare, logistics & more',
    icon: Layers
  }
];

export const TrustCredibilityStrip: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(
        STATS.map((stat) => Math.min(stat.value, Math.round((stat.value * step) / steps)))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Tag */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
              Ubora Global Excellence Telemetry
            </span>
          </div>
          <div className="text-[11px] font-mono text-slate-500">
            USA &amp; International Engagements
          </div>
        </div>

        {/* 4 Large Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="space-y-2 group">
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-blue-600 transition-colors">
                  <IconComponent className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-mono uppercase tracking-wide">
                    Metric 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                    {counts[idx]}
                  </span>
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-blue-600">
                    {stat.suffix}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-slate-800">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
