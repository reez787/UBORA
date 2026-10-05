import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/uboraData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '1:1 Executive Consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Global Engagement Desk · Talk to Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Ubora is Your Trusted Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">Operational Excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Come aboard as we strive for excellence and long-term success, promoting collaboration and innovation and propelling your business towards a future filled with boundless possibilities.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Contact Telemetry & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl space-y-6 shadow-sm">
              
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-blue-600 tracking-wider font-bold">
                  Direct Inquiries
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Headquarters &amp; Direct Advisory
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Physical Location</div>
                    <div className="text-slate-600 font-mono mt-0.5">{COMPANY_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Executive Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 font-mono hover:underline mt-0.5 block font-semibold">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Telephone Contact</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-700 font-mono hover:underline mt-0.5 block font-semibold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Advisory Hours &amp; Response</div>
                    <div className="text-slate-600 font-mono mt-0.5">Mon–Fri: 08:00–18:00 EST · Sub-24hr Turnaround</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/80 text-xs text-blue-900 leading-relaxed font-normal">
                Available for international engagements across USA, Europe, and East Africa (Kenya hub).
              </div>

            </div>
          </div>

          {/* Right Column: Modern Validated Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Dispatched Successfully</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal leading-relaxed">
                  Thank you, <strong className="text-slate-900 font-semibold">{formData.name}</strong>. Your inquiry regarding{' '}
                  <span className="text-blue-600 font-semibold">{formData.topic}</span> has been routed directly to Simon P. Mungecho&apos;s team. We will respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', topic: '1:1 Executive Consultation', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer shadow-xs"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Send an Inquiry to Ubora Solutions
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Complete the brief questionnaire below to help us tailor our initial response to your operational needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Richard Garrett"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Inquiry Subject</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
                    >
                      <option value="1:1 Executive Consultation">1:1 Executive Consultation ($79.99)</option>
                      <option value="Enterprise OpEx Transformation">Enterprise OpEx Transformation Advisory</option>
                      <option value="Lean Six Sigma Deployment">Lean Six Sigma &amp; DMAIC Deployment</option>
                      <option value="E-Learning Corporate Licensing">E-Learning Corporate Licensing</option>
                      <option value="eBook Knowledge Inquiries">eBook Knowledge Inquiries</option>
                      <option value="General Question">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 font-semibold">Message / Specific Operational Challenge *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your current operational goals or constraints..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
