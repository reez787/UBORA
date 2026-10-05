export type Currency = 'USD' | 'KES';

export interface SectorItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metrics: string;
  focusAreas: string[];
  icon: string;
}

export interface CourseItem {
  id: string;
  title: string;
  slug: string;
  priceUSD: number;
  priceKES: number;
  category: 'Process Improvement' | 'Problem Solving' | 'Lean Tools' | 'Strategy & Leadership';
  duration: string;
  lessonsCount: number;
  level: 'Foundational' | 'Intermediate' | 'Mastery';
  description: string;
  syllabus: { title: string; duration: string; details: string }[];
  instructor: string;
  featured?: boolean;
}

export interface EBookItem {
  id: string;
  title: string;
  slug: string;
  priceUSD: number;
  priceKES: number;
  category: 'Lean & Operations' | 'Strategy & Leadership' | 'Systems & Maintenance' | 'Performance';
  pages: number;
  readTime: string;
  description: string;
  keyTakeaways: string[];
  featured?: boolean;
}

export interface ConsultationTopic {
  id: string;
  number: string;
  title: string;
  category: 'Lean Six Sigma' | 'Strategic Planning' | 'Cost & Waste Reduction' | 'Quality & Systems';
  deliverable: string;
  summary: string;
  recommendedFor: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  focus: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  category: string;
}

export interface CartItem {
  id: string;
  type: 'course' | 'ebook' | 'consultation';
  title: string;
  priceUSD: number;
  priceKES: number;
  quantity: number;
}
