import React, { useState } from 'react';
import { Search, Clock, BookOpen, Eye } from 'lucide-react';
import { COURSES_CATALOG } from '../data/uboraData';
import { CourseItem, Currency } from '../types';

interface ELearningSectionProps {
  currency: Currency;
  onSelectCourse: (course: CourseItem) => void;
  onAddToCart: (item: { id: string; type: 'course'; title: string; priceUSD: number; priceKES: number }) => void;
}

export const ELearningSection: React.FC<ELearningSectionProps> = ({
  currency,
  onSelectCourse,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Process Improvement',
    'Problem Solving',
    'Lean Tools',
    'Strategy & Leadership'
  ];

  const filteredCourses = COURSES_CATALOG.filter((course) => {
    const matchesCat = activeCategory === 'All' || course.category === activeCategory;
    const matchesQuery =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const featuredCourse = COURSES_CATALOG.find((c) => c.featured && c.id === 'vpi') || COURSES_CATALOG[0];

  const formatPrice = (course: CourseItem) => {
    return currency === 'USD'
      ? `$${course.priceUSD.toFixed(2)}`
      : `KSh ${course.priceKES.toLocaleString()}`;
  };

  return (
    <section id="elearning" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Ubora Academy · Executive E-Learning
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">E-Learning Courses</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Self-paced, high-impact masterclasses based on real-world Lean Six Sigma engagements. Designed for plant leaders, quality directors, and ambitious problem-solvers.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 font-medium">
            25+ Courses · Instant Lifetime Access
          </div>
        </div>

        {/* Featured Course Spotlight Banner */}
        {featuredCourse && (
          <div className="relative rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 p-8 sm:p-10 overflow-hidden shadow-lg">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-blue-600 text-white font-bold">
                    Featured Masterclass
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    Category: {featuredCourse.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {featuredCourse.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                  {featuredCourse.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 pt-2 font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{featuredCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>{featuredCourse.lessonsCount} Core Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Certificate Included</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
                <div className="text-right">
                  <div className="text-xs font-mono uppercase text-slate-500">Tuition Fee</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                    {formatPrice(featuredCourse)}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col w-full sm:w-auto gap-2.5">
                  <button
                    onClick={() => onSelectCourse(featuredCourse)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>See Course Preview</span>
                  </button>

                  <button
                    onClick={() =>
                      onAddToCart({
                        id: featuredCourse.id,
                        type: 'course',
                        title: featuredCourse.title,
                        priceUSD: featuredCourse.priceUSD,
                        priceKES: featuredCourse.priceKES,
                      })
                    }
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-xs tracking-wider transition-colors text-center cursor-pointer shadow-xs"
                  >
                    Enroll Now · Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Segmented Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-white text-blue-700 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search Lean courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl border border-slate-200 bg-white hover:border-blue-400 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Header Meta: Category & Level */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-blue-600 font-semibold">{course.category}</span>
                  <span className="text-slate-500 font-medium">{course.level}</span>
                </div>

                {/* Course Title */}
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {course.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                {/* Micro Meta (Duration & Modules) */}
                <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {course.duration}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    {course.lessonsCount} Modules
                  </span>
                </div>
              </div>

              {/* Bottom Actions: Price, Preview & Enroll */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-medium">Tuition</div>
                  <div className="text-lg font-bold text-slate-900 font-heading">
                    {formatPrice(course)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                    title="Preview Syllabus"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      onAddToCart({
                        id: course.id,
                        type: 'course',
                        title: course.title,
                        priceUSD: course.priceUSD,
                        priceKES: course.priceKES,
                      })
                    }
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-colors cursor-pointer shadow-xs"
                  >
                    Enroll
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
