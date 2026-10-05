import React from 'react';
import { X, Clock, BookOpen, Check, ShoppingCart, User } from 'lucide-react';
import { CourseItem, Currency } from '../types';

interface CourseModalProps {
  course: CourseItem | null;
  onClose: () => void;
  currency: Currency;
  onAddToCart: (item: { id: string; type: 'course'; title: string; priceUSD: number; priceKES: number }) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  currency,
  onAddToCart,
}) => {
  if (!course) return null;

  const priceDisplay = currency === 'USD'
    ? `$${course.priceUSD.toFixed(2)}`
    : `KSh ${course.priceKES.toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        
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
              {course.category}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-600 font-semibold">{course.level} Level</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {course.title}
          </h3>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-mono pt-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{course.duration} on-demand</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>{course.lessonsCount} Core Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <span>Instructor: {course.instructor}</span>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-t border-slate-200 pt-4">
          {course.description}
        </p>

        {/* Detailed Curriculum Syllabus */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
            Curriculum Breakdown &amp; Learning Modules:
          </div>
          <div className="space-y-2">
            {course.syllabus.map((lesson, idx) => (
              <div
                key={lesson.title}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-blue-600 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {lesson.title}
                    </div>
                    <div className="text-xs text-slate-600 font-normal mt-0.5">
                      {lesson.details}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-500 shrink-0">
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Receive */}
        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 space-y-2">
          <div className="text-xs font-mono uppercase text-blue-700 tracking-wider font-bold">
            Included with Tuition:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Full lifetime streaming access on desktop &amp; mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Downloadable Excel &amp; PDF DMAIC templates</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Verifiable Certificate of Operational Completion</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Direct Q&amp;A submission channel to instructors</span>
            </div>
          </div>
        </div>

        {/* Modal Footer / Checkout */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase font-medium">One-Time Tuition</div>
            <div className="text-3xl font-extrabold text-slate-900 font-heading">
              {priceDisplay}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
            >
              Back to Catalog
            </button>

            <button
              onClick={() => {
                onAddToCart({
                  id: course.id,
                  type: 'course',
                  title: course.title,
                  priceUSD: course.priceUSD,
                  priceKES: course.priceKES,
                });
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Enroll Now · Add to Cart</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
