import React, { useState } from 'react';
import { BookOpen, Sparkles, Check, Eye, ShoppingCart } from 'lucide-react';
import { EBOOKS_CATALOG, COMPANY_INFO } from '../data/uboraData';
import { EBookItem, Currency } from '../types';

interface EBookSectionProps {
  currency: Currency;
  onSelectEBook: (book: EBookItem) => void;
  onAddToCart: (item: { id: string; type: 'ebook'; title: string; priceUSD: number; priceKES: number }) => void;
}

export const EBookSection: React.FC<EBookSectionProps> = ({
  currency,
  onSelectEBook,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const categories = [
    'All',
    'Lean & Operations',
    'Strategy & Leadership',
    'Performance',
    'Systems & Maintenance',
  ];

  const filteredBooks = EBOOKS_CATALOG.filter((book) => {
    return activeCategory === 'All' || book.category === activeCategory;
  });

  const featuredBook = EBOOKS_CATALOG.find((b) => b.id === 'eb-3') || EBOOKS_CATALOG[0];

  const formatPrice = (book: EBookItem) => {
    return currency === 'USD'
      ? `$${book.priceUSD.toFixed(2)}`
      : `KSh ${book.priceKES.toLocaleString()}`;
  };

  const handleFeaturedMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleFeaturedMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="ebooks" className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Ubora Publications · Digital Knowledge Library
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">20 Executive eBooks</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Field-tested manuals, diagnostic workbooks, and implementation blueprints curated by Simon P. Mungecho to equip leaders with immediate operational frameworks.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 font-medium">
            20 Published Volumes · PDF &amp; ePub Instant Download
          </div>
        </div>

        {/* Featured 3D Book Showcase */}
        {featuredBook && (
          <div
            onMouseMove={handleFeaturedMouseMove}
            onMouseLeave={handleFeaturedMouseLeave}
            className="p-8 sm:p-12 rounded-3xl border border-blue-200 bg-white shadow-xl relative overflow-hidden backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Interactive 3D Book Object */}
              <div className="lg:col-span-5 flex items-center justify-center py-6 perspective-1000">
                <div
                  className="relative w-56 sm:w-64 h-80 sm:h-92 rounded-r-2xl shadow-2xl transition-transform duration-200 ease-out preserve-3d"
                  style={{
                    transform: `rotateY(${mousePos.x * 24}deg) rotateX(${-mousePos.y * 24}deg) scale(1.02)`,
                    boxShadow: '15px 20px 40px rgba(0,0,0,0.18), -3px 0px 15px rgba(37, 99, 235, 0.2)',
                  }}
                >
                  {/* Book Spine */}
                  <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 rounded-l-sm border-r border-slate-600 flex items-center justify-center">
                    <span className="rotate-90 text-[9px] font-mono tracking-widest text-slate-300 whitespace-nowrap font-bold">
                      UBORA OPEX
                    </span>
                  </div>

                  {/* Book Cover Image with Fallback */}
                  <div className="absolute inset-0 left-5 rounded-r-2xl overflow-hidden border border-slate-200 bg-slate-900">
                    <img
                      src={COMPANY_INFO.images.ebookCover}
                      alt={featuredBook.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-4 flex flex-col justify-end">
                      <div className="text-[10px] font-mono uppercase text-sky-400 font-semibold">
                        Definitive Edition
                      </div>
                      <div className="text-sm font-bold text-white leading-tight font-heading">
                        {featuredBook.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Details & Purchase */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Landmark Publication</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {featuredBook.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <span>{featuredBook.pages} Pages</span>
                    <span>·</span>
                    <span>{featuredBook.readTime}</span>
                    <span>·</span>
                    <span className="text-blue-600 font-semibold">{featuredBook.category}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {featuredBook.description}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                    What You Will Gain:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {featuredBook.keyTakeaways.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Cart Action */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-medium">Single Copy Price</div>
                    <div className="text-3xl font-extrabold text-slate-900 font-heading">
                      {formatPrice(featuredBook)}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectEBook(featuredBook)}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-xs font-semibold text-slate-700 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                      <span>Inspect Preview</span>
                    </button>

                    <button
                      onClick={() =>
                        onAddToCart({
                          id: featuredBook.id,
                          type: 'ebook',
                          title: featuredBook.title,
                          priceUSD: featuredBook.priceUSD,
                          priceKES: featuredBook.priceKES,
                        })
                      }
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Digital Bookshelf Grid of all 20 eBooks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={book.id}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-blue-400 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Book Graphic Header */}
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border border-slate-200 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 font-semibold">
                    <span>Vol. {String(index + 1).padStart(2, '0')}</span>
                    <span className="text-blue-600">{book.category.split(' ')[0]}</span>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                      Ubora OpEx
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-2 mt-0.5">
                      {book.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{book.pages} pages</span>
                    <span>{book.readTime}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {book.description}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-medium">eBook</div>
                  <div className="text-base font-bold text-slate-900 font-heading">
                    {formatPrice(book)}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onSelectEBook(book)}
                    className="p-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    title="Quick Look"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      onAddToCart({
                        id: book.id,
                        type: 'ebook',
                        title: book.title,
                        priceUSD: book.priceUSD,
                        priceKES: book.priceKES,
                      })
                    }
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
