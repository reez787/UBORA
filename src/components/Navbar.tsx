import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Globe, ArrowUpRight } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  currency: Currency;
  onToggleCurrency: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  currency,
  onToggleCurrency,
  cartCount,
  onOpenCart,
  onOpenConsultationModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'elearning', label: 'E-Learning' },
    { id: 'ebooks', label: 'E-Books' },
    { id: 'consultation', label: 'Consultations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavLinkClick('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center p-0.5 shadow-md shadow-blue-600/15">
              <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-sm text-blue-600">U</span>
              </div>
            </div>
            <div>
              <span className="font-heading text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Ubora OpEx
              </span>
            </div>
          </button>

          {/* Zone 2: 4–6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className={`transition-colors relative py-1 focus:outline-none cursor-pointer ${
                  currentTab === link.id
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {currentTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Currency selector toggle (USA / Kenya store parity) */}
            <button
              onClick={onToggleCurrency}
              title={`Switch storefront currency. Currently: ${currency}`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-mono text-slate-700 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{currency === 'USD' ? 'USA ($)' : 'KENYA (KSh)'}</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-blue-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultationModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs font-semibold tracking-wide shadow-md shadow-blue-600/20 transition-all duration-150 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>Start Your Transformation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  currentTab === link.id
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Storefront Region:</span>
              <button
                onClick={onToggleCurrency}
                className="font-mono text-blue-600 font-semibold underline underline-offset-4"
              >
                {currency === 'USD' ? 'USA ($ USD)' : 'Kenya (KSh KES)'}
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold text-center shadow-lg shadow-blue-600/25"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
