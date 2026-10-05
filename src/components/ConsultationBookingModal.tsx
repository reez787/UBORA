import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONSULTATION_TOPICS, COMPANY_INFO } from '../data/uboraData';
import { ConsultationTopic, Currency } from '../types';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  initialTopic?: ConsultationTopic | null;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialTopic,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopic ? initialTopic.id : CONSULTATION_TOPICS[0].id
  );
  const [platform, setPlatform] = useState<'Zoom' | 'Google Meet' | 'Phone Call'>('Zoom');
  const [selectedDate, setSelectedDate] = useState<string>('2025-10-15');
  const [selectedTime, setSelectedTime] = useState<string>('14:00 EST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const currentTopic =
    CONSULTATION_TOPICS.find((t) => t.id === selectedTopicId) || CONSULTATION_TOPICS[0];

  const priceDisplay = currency === 'USD'
    ? `$${COMPANY_INFO.consultationOffer.priceUSD}`
    : `KSh ${COMPANY_INFO.consultationOffer.priceKES.toLocaleString()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#38bdf8', '#10b981', '#64748b'],
      });
    } catch {
      // confetti fallback
    }
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
                Consultation Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                You are scheduled with Simon P. Mungecho
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal leading-relaxed">
                An invitation with the secure {platform} link and pre-meeting diagnostic worksheet has been dispatched to{' '}
                <strong className="text-slate-900 font-semibold">{formData.email || 'your email'}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 max-w-md mx-auto text-xs text-left space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Topic:</span>
                <span className="text-slate-900 font-semibold truncate max-w-[240px]">{currentTopic.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date &amp; Time:</span>
                <span className="text-slate-900 font-semibold">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Channel:</span>
                <span className="text-slate-900 font-semibold">{platform}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Consultant:</span>
                <span className="text-slate-900 font-semibold">{COMPANY_INFO.founder}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 font-mono">
                <span className="text-slate-500">Special Rate:</span>
                <span className="text-emerald-600 font-bold">{priceDisplay}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Done &amp; Return to Overview
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Executive 1:1 Booking</span>
                <span className="text-slate-400">·</span>
                <span className="text-emerald-600">Special {priceDisplay} (Save $30)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Schedule Your Operational Consultation
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Connect directly with Simon P. Mungecho to dissect operational bottlenecks, calibrate Lean strategy, or review plant performance.
              </p>
            </div>

            {/* Topic Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold">
                Select from 24 Consultation Topics:
              </label>
              <select
                value={selectedTopicId}
                onChange={(e) => setSelectedTopicId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 shadow-xs"
              >
                {CONSULTATION_TOPICS.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.number}. {topic.title} ({topic.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Platform Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold">
                Preferred Connection Platform:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {(['Zoom', 'Google Meet', 'Phone Call'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setPlatform(mode)}
                    className={`p-2.5 rounded-xl border text-center transition-colors cursor-pointer ${
                      platform === mode
                        ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Preferred Date:</label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 shadow-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Time Slot (60 min):</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 shadow-xs"
                >
                  <option value="10:00 EST">10:00 AM EST (Morning Session)</option>
                  <option value="12:00 EST">12:00 PM EST (Midday Session)</option>
                  <option value="14:00 EST">02:00 PM EST (Afternoon Session)</option>
                  <option value="16:00 EST">04:00 PM EST (Late Session)</option>
                  <option value="19:00 EAT">07:00 PM EAT (East Africa Standard)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Your Full Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Work Email Address:</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Company &amp; Industry (Optional):</label>
              <input
                type="text"
                placeholder="e.g. Apex Industrial Dynamics · Automotive Tier 1"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Primary Objective or Bottleneck:</label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you'd like to explore with Simon..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs resize-none"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase font-medium">Consultation Fee</div>
                <div className="text-2xl font-extrabold text-slate-900 font-heading">{priceDisplay}</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Confirm Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
