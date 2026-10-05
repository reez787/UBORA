import React from 'react';
import { X, BookOpen, Clock, Check, ShoppingCart, ShieldCheck } from 'lucide-react';
import { EBookItem, Currency } from '../types';

interface EBookModalProps {
  ebook: EBookItem | null;
  onClose: () => void;
  currency: Currency;
  onAddToCart: (item: { id: string; type: 'ebook'; title: string; priceUSD: number; priceKES: number }) => void;
}

export const EBookModal: React.FC<EBookModalProps> = ({
  ebook,
  onClose,
  currency,
  onAddToCart,
}) => {
  if (!ebook) return null;

  const priceDisplay = currency === 'USD'
    ? `$${ebook.priceUSD.toFixed(2)}`
    : `KSh ${ebook.priceKES.toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded bg-blue-100 border border-blue-200 text-blue-700 font-bold">
              {ebook.category}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-600 font-medium">Ubora Publication</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {ebook.title}
          </h3>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-1">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>{ebook.pages} Pages</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{ebook.readTime} study time</span>
            </div>
            <span>·</span>
            <span>PDF + ePub Formats</span>
          </div>
        </div>

        {/* Synopsis */}
        <div className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed border-t border-slate-200 pt-4">
          <p>{ebook.description}</p>
        </div>

        {/* Key Takeaways */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
            What this publication covers:
          </div>
          <div className="space-y-2">
            {ebook.keyTakeaways.map((takeaway) => (
              <div key={takeaway} className="flex items-start gap-2.5 text-xs text-slate-700">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Immediate Delivery */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3 text-xs text-slate-700">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Instant secure digital download link dispatched via email immediately upon confirmation.</span>
        </div>

        {/* Footer / Buy Action */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase font-medium">Single Copy Price</div>
            <div className="text-3xl font-extrabold text-slate-900 font-heading">
              {priceDisplay}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
            >
              Continue Browsing
            </button>

            <button
              onClick={() => {
                onAddToCart({
                  id: ebook.id,
                  type: 'ebook',
                  title: ebook.title,
                  priceUSD: ebook.priceUSD,
                  priceKES: ebook.priceKES,
                });
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
