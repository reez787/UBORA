/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { TrustCredibilityStrip } from './components/TrustCredibilityStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { OperationalFlowSection } from './components/OperationalFlowSection';
import { ELearningSection } from './components/ELearningSection';
import { EBookSection } from './components/EBookSection';
import { ConsultationSection } from './components/ConsultationSection';
import { BusinessSectorsSection } from './components/BusinessSectorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';
import { CourseModal } from './components/CourseModal';
import { EBookModal } from './components/EBookModal';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { CartDrawer } from './components/CartDrawer';
import { Currency, CartItem, CourseItem, EBookItem, ConsultationTopic } from './types';
import { CONSULTATION_TOPICS } from './data/uboraData';
import { ChevronRight } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [selectedBookingTopic, setSelectedBookingTopic] = useState<ConsultationTopic | null>(null);
  const [activeCourseModal, setActiveCourseModal] = useState<CourseItem | null>(null);
  const [activeEBookModal, setActiveEBookModal] = useState<EBookItem | null>(null);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'KES' : 'USD'));
  };

  const handleAddToCart = (item: {
    id: string;
    type: 'course' | 'ebook' | 'consultation';
    title: string;
    priceUSD: number;
    priceKES: number;
  }) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenConsultationModal = (topicOrName?: ConsultationTopic | string) => {
    if (typeof topicOrName === 'string') {
      const found = CONSULTATION_TOPICS.find((t) =>
        t.title.toLowerCase().includes(topicOrName.toLowerCase())
      );
      setSelectedBookingTopic(found || null);
    } else if (topicOrName) {
      setSelectedBookingTopic(topicOrName);
    } else {
      setSelectedBookingTopic(null);
    }
    setIsConsultationModalOpen(true);
  };

  // Render Sub-Page Header for dedicated views
  const renderSubpageHero = (title: string, subtitle: string, category: string) => (
    <div className="pt-28 pb-12 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <button
            onClick={() => handleNavigate('home')}
            className="hover:text-slate-800 transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-600 font-bold capitalize">{currentTab}</span>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            {category}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Premium Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={() => handleOpenConsultationModal()}
              currency={currency}
            />
            <TrustCredibilityStrip />
            <AboutSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={() => handleOpenConsultationModal()}
            />
            <ServicesSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />
            <OperationalFlowSection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
            />
            <ELearningSection
              currency={currency}
              onSelectCourse={(course) => setActiveCourseModal(course)}
              onAddToCart={handleAddToCart}
            />
            <EBookSection
              currency={currency}
              onSelectEBook={(book) => setActiveEBookModal(book)}
              onAddToCart={handleAddToCart}
            />
            <ConsultationSection
              currency={currency}
              onOpenBookingModal={handleOpenConsultationModal}
            />
            <BusinessSectorsSection
              onOpenConsultationModal={handleOpenConsultationModal}
            />
            <TestimonialsSection />
            <NewsSection />
            <FinalCTASection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentTab === 'about' && (
          <>
            {renderSubpageHero(
              'About Ubora OpEx Solutions',
              'We smoothly guide organizations to higher levels of performance through Lean Six Sigma principles, continuous improvement, and operational transformation.',
              'Corporate Identity & Practice Leadership'
            )}
            <AboutSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={() => handleOpenConsultationModal()}
            />
            <TestimonialsSection />
            <FinalCTASection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentTab === 'services' && (
          <>
            {renderSubpageHero(
              'What We Do · Advisory & Engineering',
              'Specializing in business improvement strategies, variance elimination, and performance enhancement to help dynamic enterprises excel operationally.',
              'Core Capabilities & Sectors'
            )}
            <ServicesSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />
            <BusinessSectorsSection
              onOpenConsultationModal={handleOpenConsultationModal}
            />
            <OperationalFlowSection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
            />
            <FinalCTASection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentTab === 'elearning' && (
          <>
            {renderSubpageHero(
              'Ubora E-Learning Academy',
              'Explore our 25+ on-demand Lean Six Sigma and operational masterclasses. Immediate lifetime access with course certificates.',
              'Global Online Education · USA & Kenya'
            )}
            <ELearningSection
              currency={currency}
              onSelectCourse={(course) => setActiveCourseModal(course)}
              onAddToCart={handleAddToCart}
            />
            <FinalCTASection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentTab === 'ebooks' && (
          <>
            {renderSubpageHero(
              'Ubora Digital Bookstore',
              'Browse all 20 executive eBooks curated by Simon P. Mungecho covering inventory, cost reduction, TPM, KPIs, and Lean leadership.',
              '20 Published Operational Manuals'
            )}
            <EBookSection
              currency={currency}
              onSelectEBook={(book) => setActiveEBookModal(book)}
              onAddToCart={handleAddToCart}
            />
            <FinalCTASection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentTab === 'consultation' && (
          <>
            {renderSubpageHero(
              '1:1 Executive Consultations',
              'Connect directly with Simon P. Mungecho on Zoom, Google Meet, or phone call. Avail of our limited-time special offer at $79.99 (was $110).',
              '24 Diagnostic Advisory Topics'
            )}
            <ConsultationSection
              currency={currency}
              onOpenBookingModal={handleOpenConsultationModal}
            />
            <TestimonialsSection />
            <FinalCTASection
              onOpenConsultationModal={() => handleOpenConsultationModal()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentTab === 'contact' && (
          <>
            {renderSubpageHero(
              'Connect with Ubora Solutions',
              'Reach out for consultation inquiries, corporate learning licenses, or enterprise Lean Six Sigma transformation programs.',
              'Headquarters & Global Desks'
            )}
            <ContactSection />
          </>
        )}
      </main>

      {/* Global Modals & Slide-Overs */}
      <CourseModal
        course={activeCourseModal}
        onClose={() => setActiveCourseModal(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
      />

      <EBookModal
        ebook={activeEBookModal}
        onClose={() => setActiveEBookModal(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
      />

      <ConsultationBookingModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        currency={currency}
        initialTopic={selectedBookingTopic}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currency={currency}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Corporate Minimal Footer */}
      <Footer
        onNavigate={handleNavigate}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
      />

    </div>
  );
}
