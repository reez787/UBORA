import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem, Currency } from '../types';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const totalUSD = items.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const totalKES = items.reduce((sum, item) => sum + item.priceKES * item.quantity, 0);

  const formattedTotal = currency === 'USD'
    ? `$${totalUSD.toFixed(2)}`
    : `KSh ${totalKES.toLocaleString()}`;

  const handleCheckout = () => {
    setCheckedOut(true);
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
      });
    } catch {
      // confetti
    }
  };

  const handleReset = () => {
    setCheckedOut(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Your Knowledge Cart
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  ({items.length} {items.length === 1 ? 'item' : 'items'})
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            {checkedOut ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Order Confirmed!</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto font-normal">
                  Thank you for investing in operational excellence. Your digital materials and course credentials have been generated and dispatched to your email.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
                <p className="text-sm font-medium text-slate-700">Your cart is currently empty.</p>
                <p className="text-xs text-slate-500">
                  Explore our 20 eBooks or 25 E-Learning masterclasses to add materials.
                </p>
              </div>
            ) : (
              <div className="py-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {items.map((item) => {
                  const priceStr = currency === 'USD'
                    ? `$${item.priceUSD.toFixed(2)}`
                    : `KSh ${item.priceKES.toLocaleString()}`;

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase text-blue-600 font-bold">
                          {item.type === 'course' ? 'E-Learning Course' : 'Digital eBook'}
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </div>
                        <div className="text-xs font-mono text-slate-500">
                          {priceStr}
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer / Total & Checkout */}
          {!checkedOut && items.length > 0 && (
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold">Total Investment:</span>
                <span className="text-2xl font-extrabold text-slate-900 font-heading">
                  {formattedTotal}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <span>Proceed to Complete Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>SSL Encrypted Checkout · Instant Digital Access</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
