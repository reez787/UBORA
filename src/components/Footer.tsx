import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/uboraData';
import { Currency } from '../types';

interface FooterProps {
  onNavigate: (tab: string) => void;
  currency: Currency;
  onToggleCurrency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  currency,
  onToggleCurrency,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Authentic Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-sm text-blue-600">U</span>
                </div>
              </div>
              <span className="font-heading text-lg font-bold text-slate-900 tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-600 font-normal leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline} · {COMPANY_INFO.subheading}. Empowering organizations through Lean Six Sigma, continuous improvement, and operational transformation.
            </p>

            <div className="space-y-2 pt-2 text-slate-600 font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-600 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-600 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Currency Region Selector */}
            <div className="pt-2 flex items-center gap-2 text-slate-600">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Current Region:</span>
              <button
                onClick={onToggleCurrency}
                className="font-mono text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 cursor-pointer"
              >
                {currency === 'USD' ? 'United States (USD $)' : 'Kenya (KES KSh)'}
              </button>
            </div>
          </div>

          {/* Column 2: Navigation & Sub-Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-900 font-bold">
              Explore Ubora
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  What We Do
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('elearning')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  E-Learning USA / Kenya
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ebooks')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  E-Books USA / Kenya
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('consultation')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  1:1 Consultations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Sectors (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-900 font-bold">
              Industry Sectors
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Manufacturing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Financial Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Healthcare Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Foodcare &amp; Processing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Public Sector
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Logistics &amp; Supply Chain
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Sign Up (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-900 font-bold">
              Sign Up for Updates
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Receive practical Lean Six Sigma toolkits, root-cause diagnostic templates, and announcements of new publications.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Thank you. You are signed up for Ubora field updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter executive email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    Join
                  </button>
                </div>
                <div className="text-[10px] text-slate-500">
                  Zero spam. Unsubscribe at any time.
                </div>
              </form>
            )}

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold mb-2">Connect:</div>
              <div className="flex items-center gap-4 text-slate-600">
                <span className="hover:text-blue-600 cursor-pointer transition-colors">LinkedIn</span>
                <span>·</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">X (Twitter)</span>
                <span>·</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">Facebook</span>
                <span>·</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">Instagram</span>
                <span>·</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">TikTok</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Wordmark & Legal */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2025 Ubora OpEx Solutions. All Rights Reserved. Ideas | Solutions | Results.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Terms &amp; Conditions</span>
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer">ISO 9001 Alignment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
