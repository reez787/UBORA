import { CourseItem, EBookItem, ConsultationTopic, SectorItem, TestimonialItem, NewsItem } from '../types';
import heroDatacenterImg from '../assets/images/hero_opex_datacenter_1791233519570.jpg';
import ebookCoverImg from '../assets/images/ebook_opex_cover_1791233533198.jpg';
import industrialFacilityImg from '../assets/images/industrial_lean_facility_1791233554555.jpg';
import consultingSuiteImg from '../assets/images/executive_consulting_suite_1791233568650.jpg';

export const COMPANY_INFO = {
  name: 'Ubora OpEx Solutions',
  tagline: 'Ideas. Solutions. Results',
  subheading: 'Management Consulting for Challenging Times',
  mission: 'We firmly believe that change is not just a challenge but an opportunity for great success. Tapping from our rich experience in Lean Six Sigma principles, Continuous Improvement, and Operational Excellence, we smoothly guide organizations to achieve higher levels of performance.',
  extendedAbout: 'We are a solutions-based company that brings global experience to help leading businesses solve complex problems, achieve great results while adding value to their customers. That’s why we specialize in business improvement strategies and performance enhancement, ensuring organizations excel operationally. Our products and services revolve around empowering businesses to thrive in dynamic environments.',
  founder: 'Simon P. Mungecho',
  founderTitle: 'Operational Excellence & Lean Six Sigma Lead Consultant',
  email: 'solutions@uboraopex.com',
  phone: '+1 (316) 619-3216',
  address: 'Chesapeake Dr, St Joseph, Missouri, 64506, USA',
  consultationOffer: {
    priceUSD: 79.99,
    originalUSD: 110.00,
    priceKES: 10400,
    originalKES: 14300,
    platforms: ['Zoom', 'Google Meet', 'Phone Call'],
    duration: '60 minutes',
  },
  images: {
    heroDatacenter: heroDatacenterImg,
    ebookCover: ebookCoverImg,
    industrialFacility: industrialFacilityImg,
    consultingSuite: consultingSuiteImg,
  }
};

export const CORE_VALUES = [
  {
    title: 'Integrity',
    description: 'We are committed to doing the right thing in a responsible and ethical manner. We form a trust that builds the foundation for long-lasting relationships.'
  },
  {
    title: 'Professionalism',
    description: 'We endeavor to maintain high professional standards in service delivery, ensuring excellence and providing the focused attention each organization deserves.'
  },
  {
    title: 'Innovativeness',
    description: 'We are in relentless pursuit of creative ideas and technological advancements, fostering innovation by venturing into new areas and bringing fresh ideas.'
  },
  {
    title: 'Customer Centricity',
    description: 'We aim at provision of customer-oriented solutions in a bid to meet unique operational needs, guaranteeing exceptional service and custom solutions for lasting success.'
  },
  {
    title: 'Excellence (Ubora)',
    description: 'We are committed to provision of market-leading solutions that seek to give our clients an edge in their respective markets, driving continuous development.'
  }
];

export const KEY_PILLARS = [
  {
    name: 'Excellence',
    subtitle: 'Systemic Operational Rigor',
    description: 'Transforming organizational potential into structured, repeatable operational mastery through validated Lean Six Sigma frameworks.'
  },
  {
    name: 'Quality',
    subtitle: 'Zero-Defect Process Engineering',
    description: 'Root cause countermeasures and standardized work methods that eliminate variance and elevate customer satisfaction.'
  },
  {
    name: 'Superiority',
    subtitle: 'Market-Leading Performance',
    description: 'Equipping leadership and frontline workforces with actionable intelligence to outperform competitive benchmarks.'
  }
];

export const BUSINESS_SECTORS: SectorItem[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'High-Volume Production & Plant Flow Optimization',
    description: 'Eliminating the Six Big Losses in industrial plants through Total Productive Maintenance (TPM), takt time balancing, and scrap reduction.',
    metrics: '-34% Cycle Time · +22% OEE',
    focusAreas: ['SMED & Rapid Changeovers', 'Defect Prevention Systems', 'Value Stream Mapping (VSM)', 'Plant Floor Kaizen'],
    icon: 'Factory'
  },
  {
    id: 'financial',
    name: 'Financial Services',
    tagline: 'Transactional Speed & Compliance Precision',
    description: 'Streamlining credit appraisal, underwriting flows, customer onboarding, and back-office document processing.',
    metrics: '-48% Processing Lag · 99.8% Accuracy',
    focusAreas: ['Loan Workflow Optimization', 'Error-Proofing (Poka-Yoke)', 'Cross-Department SLAs', 'Back-Office Standard Work'],
    icon: 'Building2'
  },
  {
    id: 'healthcare',
    name: 'Healthcare Systems',
    tagline: 'Patient Flow, Clinical Quality & Resource Utilization',
    description: 'Re-engineering emergency room pathways, operating theater turnaround times, patient intake, and medical inventory distribution.',
    metrics: '-41% Patient Wait · +18% Bed Turnaround',
    focusAreas: ['Triage Streamlining', 'Point-of-Care 5S', 'Medication Stockout Eradication', 'Clinical Handoff SOPs'],
    icon: 'Activity'
  },
  {
    id: 'foodcare',
    name: 'Foodcare & Processing',
    tagline: 'Hygiene Compliance, Batch Flow & Perishability Control',
    description: 'Safeguarding food safety while maximizing yield, line throughput, packaging speed, and temperature-controlled storage integrity.',
    metrics: '-62% Batch Waste · 100% Audit Readiness',
    focusAreas: ['HACCP Lean Integration', 'Cold Chain Traceability', 'Line Speed Synchronization', 'Packaging Waste Reduction'],
    icon: 'Utensils'
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    tagline: 'Citizen-Centric Efficiency & Civic Service Delivery',
    description: 'Eliminating bureaucratic bottlenecks in government agencies, licensing bureaus, and municipal public service departments.',
    metrics: '-55% Application Backlog · +38% NPS',
    focusAreas: ['Digital Permit Workflows', 'Inter-Agency Handshakes', 'Service Blueprinting', 'Public Front-Desk Kaizen'],
    icon: 'Landmark'
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    tagline: 'Fleet Scheduling, Warehouse Velocity & OTIF Excellence',
    description: 'Accelerating cross-docking, picking accuracy, freight consolidation, and inventory turnover across distribution centers.',
    metrics: '+98.4% On-Time-In-Full · -29% Handling Cost',
    focusAreas: ['Slotting Optimization', 'Cross-Docking Velocity', 'Fleet Turnaround Efficiency', 'Safety Stock Calibration'],
    icon: 'Truck'
  }
];

export const TRANSFORMATION_STAGES = [
  {
    id: 'assess',
    stageNumber: '01',
    name: 'Assess',
    headline: 'Diagnostic Baseline & Value Stream Audit',
    description: 'Uncovering latent bottlenecks, non-value-added activities, and hidden operational friction through deep gemba walks and data telemetry.',
    tools: ['Gemba Walk Audits', 'Current State VSM', 'Waste (Muda) Taxonomy', 'Capability Baselines'],
    timeframe: 'Weeks 1–2'
  },
  {
    id: 'analyze',
    stageNumber: '02',
    name: 'Analyze',
    headline: 'Root Cause & Variance Decomposition',
    description: 'Rigorous empirical isolation of root causes using DMAIC tools, Ishikawa diagrams, Pareto stratification, and statistical process control.',
    tools: ['Ishikawa & 5 Whys', 'Pareto 80/20 Analysis', 'Process Failure Mode Effects (PFMEA)', 'OEE Loss Breakdown'],
    timeframe: 'Weeks 3–4'
  },
  {
    id: 'optimize',
    stageNumber: '03',
    name: 'Optimize',
    headline: 'Future State Architecture & Workflow Redesign',
    description: 'Engineering the optimal lean workflow, balancing takt times, designing error-proofing mechanisms, and standardizing cycle steps.',
    tools: ['Future State VSM', 'Takt Time Balancing', 'Poka-Yoke Mechanisms', 'Cellular Flow Layouts'],
    timeframe: 'Weeks 5–6'
  },
  {
    id: 'implement',
    stageNumber: '04',
    name: 'Implement',
    headline: 'Agile Kaizen Execution & Field Pilots',
    description: 'Deploying targeted improvement sprints with cross-functional frontline teams, iterating solutions in real-time under structured governance.',
    tools: ['Rapid Kaizen Sprints', 'Visual Management Boards', 'Pilot Line Runs', 'Change Champion Coaching'],
    timeframe: 'Weeks 7–9'
  },
  {
    id: 'sustain',
    stageNumber: '05',
    name: 'Sustain',
    headline: 'Standardization & Tiered Accountability',
    description: 'Locking in operational gains through Standard Operating Procedures (SOPs), layered process audits, and daily management routines.',
    tools: ['Visual SOP Frameworks', 'Layered Process Audits (LPA)', 'Daily Standup Tier Meetings', 'Skill Matrix Matrices'],
    timeframe: 'Weeks 10–11'
  },
  {
    id: 'improve',
    stageNumber: '06',
    name: 'Improve',
    headline: 'Continuous Kaizen Culture & Scaling',
    description: 'Embedding an autonomous continuous improvement mindset where every employee actively identifies, reports, and resolves friction.',
    tools: ['Kaizen Suggestion System', 'Hoshin Kanri Cascading', 'Executive KPI Dashboards', 'Annual Maturity Benchmarking'],
    timeframe: 'Ongoing'
  }
];

export const COURSES_CATALOG: CourseItem[] = [
  {
    id: 'voc',
    title: 'Voice of Customer (VOC)',
    slug: 'voice-of-customer',
    priceUSD: 54.99,
    priceKES: 7150,
    category: 'Process Improvement',
    duration: '4.5 Hours',
    lessonsCount: 14,
    level: 'Foundational',
    description: 'Master the systematic methodology to capture, categorize, and translate customer expectations into measurable operational engineering specifications and Critical to Quality (CTQ) parameters.',
    instructor: 'Simon P. Mungecho',
    featured: true,
    syllabus: [
      { title: 'Foundations of Customer Value Perception', duration: '35m', details: 'Differentiating stated vs latent customer needs and value-add thresholds.' },
      { title: 'Designing High-Signal VOC Capture Channels', duration: '50m', details: 'Surveys, interviews, warranty data, and contextual field observation.' },
      { title: 'The Kano Model & Customer Satisfaction Dynamics', duration: '45m', details: 'Must-be, one-dimensional, and attractive quality attributes.' },
      { title: 'Translating Customer Verbatim into CTQ Metrics', duration: '60m', details: 'Building the CTQ Tree and operational tolerance definitions.' },
      { title: 'Integrating VOC into Process Design & Governance', duration: '80m', details: 'Feedback loops, closed-loop resolution, and Net Promoter telemetry.' }
    ]
  },
  {
    id: 'vpi',
    title: 'Value & Process Improvement',
    slug: 'value-and-process-improvement',
    priceUSD: 54.99,
    priceKES: 7150,
    category: 'Process Improvement',
    duration: '5.2 Hours',
    lessonsCount: 16,
    level: 'Intermediate',
    description: 'Discover practical approaches to eliminate muda (waste), balance workflow velocity, and drastically shorten delivery lead times while enhancing bottom-line profitability.',
    instructor: 'Simon P. Mungecho',
    featured: true,
    syllabus: [
      { title: 'The 8 Wastes in Modern Enterprise Environments', duration: '45m', details: 'Overproduction, waiting, transportation, non-value processing, inventory, motion, defects, and underutilized talent.' },
      { title: 'Value Stream Mapping from End to End', duration: '75m', details: 'Calculating Lead Time (LT), Process Time (PT), and Value-Added Ratio (VAR).' },
      { title: 'Continuous Flow & Cellular Manufacturing', duration: '60m', details: 'Transitioning from batch-and-queue to pull-based single-piece flow.' },
      { title: 'Takt Time Alignment and Load Balancing', duration: '50m', details: 'Yamazumi charts and operator task distribution.' },
      { title: 'Process Kaizen Event Execution Playbook', duration: '80m', details: '5-day workshop facilitation and immediate breakthrough realization.' }
    ]
  },
  {
    id: 'pst',
    title: 'Problem Solving Tools & Techniques',
    slug: 'problem-solving-tools-and-techniques',
    priceUSD: 29.99,
    priceKES: 3900,
    category: 'Problem Solving',
    duration: '3.8 Hours',
    lessonsCount: 12,
    level: 'Foundational',
    description: 'The definitive toolkit for frontline supervisors and leaders to systematically diagnose everyday operational defects and implement robust, lasting countermeasures.',
    instructor: 'Simon P. Mungecho',
    featured: true,
    syllabus: [
      { title: 'The 7 Quality Control Tools in Action', duration: '40m', details: 'Check sheets, histograms, scatter plots, control charts, and flowcharts.' },
      { title: 'Effective 5-Why Problem Scoping', duration: '45m', details: 'Escaping superficial symptoms and pinpointing systemic policy breakdowns.' },
      { title: 'Ishikawa (Fishbone) Multi-Factor Diagnostics', duration: '50m', details: 'Analyzing 6M categories: Man, Machine, Material, Method, Measurement, Milieu.' },
      { title: 'A3 Problem Solving Structure & Reporting', duration: '60m', details: 'Toyota-style one-page executive alignment and countermeasure tracking.' },
      { title: 'Mistake-Proofing (Poka-Yoke) Implementation', duration: '35m', details: 'Preventing human error mechanically and digitally.' }
    ]
  },
  {
    id: 'rca',
    title: 'Root Cause Analysis & Countermeasures',
    slug: 'root-cause-analysis-and-countermeasures',
    priceUSD: 54.99,
    priceKES: 7150,
    category: 'Problem Solving',
    duration: '4.8 Hours',
    lessonsCount: 15,
    level: 'Intermediate',
    description: 'Go beyond band-aid fixes. Learn formal 8D problem-solving methodology, failure mode isolation, and statistical verification to permanently prevent recurrent failures.',
    instructor: 'Simon P. Mungecho',
    featured: true,
    syllabus: [
      { title: '8D Problem Solving Framework Overview', duration: '40m', details: 'Discipline 1 through Discipline 8 implementation standards.' },
      { title: 'Containment Action vs Permanent Countermeasure', duration: '45m', details: 'Immediate damage mitigation while investigating foundational root causes.' },
      { title: 'Root Cause Hypothesis Testing & Verification', duration: '65m', details: 'Is/Is-Not matrix analysis and data-driven causality validation.' },
      { title: 'Designing Resilient Error-Proof Countermeasures', duration: '60m', details: 'Engineering controls over administrative training admonitions.' },
      { title: 'Systemic Prevention & Audit Institutionalization', duration: '80m', details: 'Updating FMEA, control plans, and standard work instructions.' }
    ]
  },
  {
    id: 'sbl',
    title: 'Six Big Losses in Operations',
    slug: 'six-big-losses',
    priceUSD: 54.99,
    priceKES: 7150,
    category: 'Lean Tools',
    duration: '4.2 Hours',
    lessonsCount: 13,
    level: 'Intermediate',
    description: 'Demystify Overall Equipment Effectiveness (OEE) by tracking and systematically attacking equipment breakdowns, setup delays, minor stoppages, reduced speed, and startup defects.',
    instructor: 'Simon P. Mungecho',
    featured: true,
    syllabus: [
      { title: 'Deconstructing Total Productive Maintenance (TPM)', duration: '40m', details: 'The 8 pillars of TPM and asset lifecycle maximization.' },
      { title: 'Calculating OEE with Precision: Availability, Performance, Quality', duration: '55m', details: 'Standard formulas, common calculation pitfalls, and automated telemetry.' },
      { title: 'Availability Losses: Equipment Failures & Setup Reductions', duration: '50m', details: 'Applying SMED principles to turn multi-hour setups into single-digit minutes.' },
      { title: 'Performance Losses: Idling, Minor Stoppages & Reduced Speed', duration: '45m', details: 'Detecting micro-stoppages and restoring basic machine conditions.' },
      { title: 'Quality Losses: Startup Yield Deficiencies & Process Rejects', duration: '60m', details: 'Zero-defect stabilization and parameter tuning.' }
    ]
  },
  {
    id: 'std',
    title: 'Standardization & Work Instructions',
    slug: 'standardization',
    priceUSD: 54.99,
    priceKES: 7150,
    category: 'Lean Tools',
    duration: '4.0 Hours',
    lessonsCount: 12,
    level: 'Foundational',
    description: 'Without standards, there can be no improvement. Learn how to architect, visually document, and sustain Standard Operating Procedures (SOPs) that empower frontline workers.',
    instructor: 'Simon P. Mungecho',
    featured: true,
    syllabus: [
      { title: 'The Philosophy of Taiichi Ohno on Standards', duration: '35m', details: 'Why standard work is the baseline for all continuous improvement.' },
      { title: 'Elements of Standard Work: Takt Time, Sequence, WIP', duration: '55m', details: 'Balancing takt time, work sequence, and standard in-process stock.' },
      { title: 'Designing Visual Standard Operating Procedures (SOPs)', duration: '50m', details: 'Minimizing text, leveraging high-clarity visual cues, and mobile checklists.' },
      { title: 'Training Within Industry (TWI) Job Instruction', duration: '60m', details: 'The 4-step method to train operators for zero-error execution.' },
      { title: 'Layered Process Auditing & Standard Revision', duration: '40m', details: 'Auditing standards daily and keeping living documents up-to-date.' }
    ]
  },
  {
    id: 'swot',
    title: 'SWOT Analysis for Operational Strategy',
    slug: 'swot-analysis',
    priceUSD: 54.99,
    priceKES: 7150,
    category: 'Strategy & Leadership',
    duration: '3.6 Hours',
    lessonsCount: 11,
    level: 'Intermediate',
    description: 'Bridge high-level enterprise strategic foresight with operational reality. Transform traditional SWOT matrices into actionable TOWS cross-functional execution initiatives.',
    instructor: 'Simon P. Mungecho',
    featured: true,
    syllabus: [
      { title: 'Beyond Generic SWOT: Data-Grounded Diagnostic', duration: '40m', details: 'Replacing gut-feel opinions with verified operational capability indicators.' },
      { title: 'Strengths & Weaknesses Internal Audit', duration: '45m', details: 'Assessing core competence, supply chain vulnerabilities, and technology gaps.' },
      { title: 'Opportunities & Threats External Scouting', duration: '45m', details: 'Macro market trends, regulatory pivots, and competitive shifts.' },
      { title: 'The TOWS Strategic Alignment Matrix', duration: '50m', details: 'Pairing internal strengths with external opportunities to forge offensive plays.' },
      { title: 'Translating SWOT into Strategic Hoshin Kanri OKRs', duration: '35m', details: 'Cascading strategic imperatives down to shop-floor action teams.' }
    ]
  },
  {
    id: 'twc',
    title: 'Teamwork Culture & High-Performance Dynamics',
    slug: 'teamwork-culture',
    priceUSD: 49.99,
    priceKES: 6500,
    category: 'Strategy & Leadership',
    duration: '4.1 Hours',
    lessonsCount: 13,
    level: 'Intermediate',
    description: 'Cultivate psychological safety, shared accountability, and cross-functional synergy that fuels autonomous problem solving across all organizational tiers.',
    instructor: 'Simon P. Mungecho',
    syllabus: [
      { title: 'Psychological Safety as the Engine of Quality Reporting', duration: '45m', details: 'Creating an environment where near-misses and errors are proactively surfaced.' },
      { title: 'Cross-Functional Kaizen Circle Orchestration', duration: '50m', details: 'Engaging engineering, production, maintenance, and quality together.' },
      { title: 'Effective Tier 1 & Tier 2 Daily Huddle Routines', duration: '45m', details: '15-minute standups with metric visual boards and rapid blocker clearing.' },
      { title: 'Conflict Resolution in Process Change Initiatives', duration: '55m', details: 'Overcoming operational inertia and frontline skepticism.' },
      { title: 'Recognition & Rewarding Continuous Improvement Contributions', duration: '50m', details: 'Incentivizing sustainable Kaizen habits without perverse incentives.' }
    ]
  },
  {
    id: 'pm-opex',
    title: 'Project Management for Operational Excellence',
    slug: 'project-management',
    priceUSD: 59.99,
    priceKES: 7800,
    category: 'Strategy & Leadership',
    duration: '5.5 Hours',
    lessonsCount: 18,
    level: 'Mastery',
    description: 'Combine classic PMBOK rigor with Lean and Agile flexibility to deliver large-scale manufacturing and service transformation programs on time and on budget.',
    instructor: 'Simon P. Mungecho',
    syllabus: [
      { title: 'Chartering an Operational Excellence Transformation Program', duration: '50m', details: 'Defining scope, financial ROI business cases, and steering committees.' },
      { title: 'Work Breakdown Structure (WBS) for Plant Overhauls', duration: '60m', details: 'Milestone gating and risk management matrices.' },
      { title: 'Agile Sprints inside Traditional Manufacturing Plants', duration: '55m', details: 'Two-week sprint cadences for rapid machine refactoring.' },
      { title: 'Stakeholder Alignment & Change Management (ADKAR)', duration: '65m', details: 'Guiding unions, supervisors, and C-suite through operational transformation.' },
      { title: 'Financial Value Realization & Post-Launch Auditing', duration: '60m', details: 'Validating hard dollar cost savings with internal finance controllers.' }
    ]
  }
];

export const EBOOKS_CATALOG: EBookItem[] = [
  {
    id: 'eb-1',
    title: 'Inventory Management eBook',
    slug: 'inventory-management-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Lean & Operations',
    pages: 148,
    readTime: '3.5 Hours',
    description: 'A comprehensive, data-driven masterclass on optimizing working capital, establishing precise Economic Order Quantities (EOQ), implementing safety stock algorithms, and eliminating dead stock.',
    keyTakeaways: [
      'ABC/XYZ multi-criteria inventory stratification',
      'Buffer sizing formulas factoring in demand variance and supplier lead-time reliability',
      'Implementing Kanban visual pull systems on the plant floor',
      'Cycle counting procedures to achieve 99.5%+ inventory accuracy without annual shutdowns'
    ],
    featured: true
  },
  {
    id: 'eb-2',
    title: 'Learning Organization eBook',
    slug: 'learning-organization-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Strategy & Leadership',
    pages: 162,
    readTime: '4.0 Hours',
    description: 'Explore the architecture of organizations that continuously adapt, institutionalize frontline knowledge, and transform mistakes into durable operational capabilities.',
    keyTakeaways: [
      'The 5 disciplines of institutional organizational learning',
      'Knowledge transfer mechanisms between shifts and departments',
      'Building internal academies and skill qualification matrices',
      'Cultivating curiosity and psychological safety across management tiers'
    ]
  },
  {
    id: 'eb-3',
    title: 'Operational Excellence eBook',
    slug: 'operational-excellence-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Lean & Operations',
    pages: 185,
    readTime: '4.5 Hours',
    description: 'The cornerstone guide by Ubora OpEx Solutions detailing the blueprint for uniting people, processes, and technology into an unstoppable engine of client satisfaction.',
    keyTakeaways: [
      'The complete Ubora OpEx maturity assessment model',
      'Synchronizing strategy, execution, and frontline continuous improvement',
      'Bridging senior leadership vision with shop-floor gemba execution',
      'Case studies across manufacturing, finance, healthcare, and logistics'
    ],
    featured: true
  },
  {
    id: 'eb-4',
    title: 'Key Performance Indicators eBook',
    slug: 'key-performance-indicators-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Performance',
    pages: 140,
    readTime: '3.2 Hours',
    description: 'Cut through vanity metrics. Architect balanced scorecards featuring true leading indicators that give leadership real-time visibility into operational health.',
    keyTakeaways: [
      'Leading vs lagging indicator calibration methodology',
      'Designing visual Tier 1, 2, and 3 KPI boards that drive daily action',
      'Avoiding perverse incentives and conflicting operational targets',
      'Automating metric collection without burdening frontline supervisors'
    ]
  },
  {
    id: 'eb-5',
    title: 'Business Strategic Thinking eBook',
    slug: 'business-strategic-thinking-ebook',
    priceUSD: 8.99,
    priceKES: 1170,
    category: 'Strategy & Leadership',
    pages: 134,
    readTime: '3.0 Hours',
    description: 'Elevate tactical fire-fighting into proactive strategic foresight. A pragmatic guide for leaders to navigate uncertainty and carve out defensible operational advantages.',
    keyTakeaways: [
      'Strategic scenario modeling and sensitivity stress-testing',
      'Deconstructing competitor value chains to locate competitive leverage',
      'Prioritization frameworks (Impact vs Effort, Eisenhower 2.0)',
      'Allocating capital and human talent to high-ROI growth vectors'
    ]
  },
  {
    id: 'eb-6',
    title: 'Lean Strategy eBook',
    slug: 'lean-strategy-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Lean & Operations',
    pages: 156,
    readTime: '3.8 Hours',
    description: 'Strategic deployment meets Lean execution. Master the art of Hoshin Kanri policy deployment to align every level of your organization with core long-term imperatives.',
    keyTakeaways: [
      'Building the Hoshin Kanri X-Matrix for enterprise alignment',
      'Catchball communication processes between executive and operational tiers',
      'Establishing breakthrough objectives versus business-as-usual maintenance',
      'Monthly review cadences and course-correction protocols'
    ]
  },
  {
    id: 'eb-7',
    title: 'Lean for Leaders Training eBook',
    slug: 'lean-for-leaders-training-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Strategy & Leadership',
    pages: 150,
    readTime: '3.6 Hours',
    description: 'A transformative playbook for executives and managers making the shift from command-and-control supervision to servant leadership and humble inquiry on the gemba.',
    keyTakeaways: [
      'Conducting effective Gemba walks that coach rather than critique',
      'The Kata coaching framework for developing frontline problem solvers',
      'Setting expectations, celebrating small wins, and sustaining morale',
      'Managing resistance to Lean change with empathy and firmness'
    ]
  },
  {
    id: 'eb-8',
    title: 'Leadership Skills-Training eBook',
    slug: 'leadership-skills-training-solutions-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Strategy & Leadership',
    pages: 142,
    readTime: '3.4 Hours',
    description: 'Develop high-impact interpersonal, communication, and coaching skills designed specifically for plant managers, shift supervisors, and operational directors.',
    keyTakeaways: [
      'Active listening techniques that uncover hidden frontline pain points',
      'Constructive feedback loops that motivate behavioral transformation',
      'Delegation frameworks that build subordinate autonomy and capability',
      'Crisis communication and steadying team focus under delivery pressure'
    ]
  },
  {
    id: 'eb-9',
    title: 'Cost Reduction eBook',
    slug: 'cost-reduction-solutions-ebook',
    priceUSD: 8.99,
    priceKES: 1170,
    category: 'Performance',
    pages: 128,
    readTime: '3.0 Hours',
    description: 'Sustainable, non-destructive cost elimination strategies that strip out operational waste, shrink overheads, and improve margins without harming product quality or employee morale.',
    keyTakeaways: [
      'Activity-Based Costing (ABC) for pinpoint overhead allocation',
      'Direct vs indirect material waste reduction initiatives',
      'Energy efficiency and utility consumption auditing',
      'Supplier renegotiation protocols based on shared value-engineering'
    ]
  },
  {
    id: 'eb-10',
    title: 'Business Training eBook',
    slug: 'business-training-solutions-ebook',
    priceUSD: 8.99,
    priceKES: 1170,
    category: 'Strategy & Leadership',
    pages: 132,
    readTime: '3.1 Hours',
    description: 'A structured blueprint for creating an internal training academy that systematically upskills frontline staff, reduces ramp-up time, and guarantees standard work adherence.',
    keyTakeaways: [
      'Training Needs Analysis (TNA) for plant and transactional operations',
      'Training Within Industry (TWI) Job Methods and Job Relations',
      'Designing experiential on-the-job micro-modules',
      'Measuring training ROI and knowledge retention on the job'
    ]
  },
  {
    id: 'eb-11',
    title: 'Business Strategic Planning eBook',
    slug: 'business-strategic-planning-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Strategy & Leadership',
    pages: 168,
    readTime: '4.2 Hours',
    description: 'Craft realistic, resilient, and executable 3-to-5 year strategic roadmaps that survive turbulent economic headwinds and supply chain disruptions.',
    keyTakeaways: [
      'Internal capability and market opportunity synthesis',
      'Developing strategic milestones and resource allocation schedules',
      'Risk mitigation and contingency trigger mechanisms',
      'Cascading high-level corporate visions into operational team scorecards'
    ]
  },
  {
    id: 'eb-12',
    title: 'Business Improvement eBook',
    slug: 'business-improvement-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Lean & Operations',
    pages: 146,
    readTime: '3.5 Hours',
    description: 'Practical continuous improvement tools for identifying process friction, eliminating departmental silos, and accelerating cross-functional service delivery.',
    keyTakeaways: [
      'Process mapping: Swimlane charts and cross-functional flow diagrams',
      'Identifying handoff delays and queue build-up in office environments',
      'Deploying Kaizen blitz events to resolve multi-month bottlenecks in days',
      'Creating visual accountability boards for administrative workflows'
    ]
  },
  {
    id: 'eb-13',
    title: 'Lean Warehousing Strategy eBook',
    slug: 'lean-warehousing-strategy-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Lean & Operations',
    pages: 154,
    readTime: '3.7 Hours',
    description: 'Transform distribution centers into lean, high-velocity nodes through smart slotting, cross-docking, picking path optimization, and 5S organization.',
    keyTakeaways: [
      'Slotting strategies based on pick frequency and physical dimensions',
      'Wave and batch picking optimization to slash operator travel time',
      'Applying 5S to staging bays, pallet racking, and packing stations',
      'Dock-to-stock turnaround time reduction methods'
    ]
  },
  {
    id: 'eb-14',
    title: 'Process Efficiency & Resources Utilization eBook',
    slug: 'process-efficiency-resources-utilization-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Lean & Operations',
    pages: 158,
    readTime: '3.8 Hours',
    description: 'Maximize the productivity of your existing capital assets and human workforce. Learn how to identify bottlenecks, eliminate idle time, and balance cycle times.',
    keyTakeaways: [
      'Theory of Constraints (TOC) application in manufacturing and services',
      'Line balancing and calculating optimal operator headcounts',
      'Capacity planning methodologies for fluctuating customer demand',
      'Equipment utilization tracking and idle-time root-cause analysis'
    ]
  },
  {
    id: 'eb-15',
    title: 'Productivity Improvement eBook',
    slug: 'productivity-improvement-ebook',
    priceUSD: 5.99,
    priceKES: 780,
    category: 'Performance',
    pages: 110,
    readTime: '2.5 Hours',
    description: 'Quick-win productivity tactics and foundational Lean techniques that boost throughput, minimize fatigue, and streamline daily operational routines.',
    keyTakeaways: [
      'Motion economy principles for ergonomic workstations',
      'Time-and-motion study methodologies made simple',
      'Eliminating micro-interruptions and tool-searching delays',
      'Setting realistic, achievable daily production standards'
    ]
  },
  {
    id: 'eb-16',
    title: 'Quality Management eBook',
    slug: 'quality-management-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Systems & Maintenance',
    pages: 165,
    readTime: '4.1 Hours',
    description: 'Build a zero-defect culture. Understand Quality at the Source, statistical process control, and how to prevent defects before they reach downstream customers.',
    keyTakeaways: [
      'Quality at the Source (Jidoka) and autonomic line-stop protocols',
      'Statistical Process Control (SPC) charts: X-bar, R, and p-charts',
      'Designing effective inspection gates that do not bottleneck flow',
      'Cost of Poor Quality (COPQ) calculation and financial justification'
    ]
  },
  {
    id: 'eb-17',
    title: 'Systems and Process eBook',
    slug: 'systems-and-process-ebook',
    priceUSD: 5.99,
    priceKES: 780,
    category: 'Systems & Maintenance',
    pages: 118,
    readTime: '2.6 Hours',
    description: 'An architectural perspective on viewing your enterprise as an interconnected system. Eliminate departmental friction and align information flow with physical flow.',
    keyTakeaways: [
      'Systems dynamics and feedback loop analysis in business',
      'Eliminating silos between sales, procurement, and operations',
      'Information flow architecture: synchronizing ERP signals with physical pull',
      'Process boundary definitions and input/output handshakes'
    ]
  },
  {
    id: 'eb-18',
    title: 'Total Productive Maintenance eBook',
    slug: 'total-productive-maintenance-ebook',
    priceUSD: 5.99,
    priceKES: 780,
    category: 'Systems & Maintenance',
    pages: 124,
    readTime: '2.8 Hours',
    description: 'Empower machine operators to maintain their own equipment. Discover Autonomous Maintenance, planned maintenance scheduling, and zero-breakdown strategies.',
    keyTakeaways: [
      'The 7 steps of Autonomous Maintenance (Jishu Hozen)',
      'Developing visual cleaning, inspection, and lubrication (CIL) standards',
      'Mean Time Between Failures (MTBF) and Mean Time to Repair (MTTR)',
      'Condition-based predictive maintenance technologies'
    ]
  },
  {
    id: 'eb-19',
    title: 'Performance Improvement eBook',
    slug: 'performance-improvement-ebook',
    priceUSD: 8.99,
    priceKES: 1170,
    category: 'Performance',
    pages: 136,
    readTime: '3.1 Hours',
    description: 'Transform struggling business units into top-tier performers through objective diagnostics, targeted interventions, and disciplined execution governance.',
    keyTakeaways: [
      'Rapid diagnostic frameworks for underperforming business units',
      '100-day turnaround sprint planning and governance',
      'Establishing transparent operational accountability scorecards',
      'Re-energizing frontline teams and instilling pride in craftsmanship'
    ]
  },
  {
    id: 'eb-20',
    title: 'Supply Chain Management eBook',
    slug: 'supply-chain-management-ebook',
    priceUSD: 9.99,
    priceKES: 1300,
    category: 'Lean & Operations',
    pages: 172,
    readTime: '4.3 Hours',
    description: 'End-to-end supply chain mastery. Learn how to tame the bullwhip effect, negotiate strategic supplier partnerships, and build agile, resilient logistics networks.',
    keyTakeaways: [
      'Taming the bullwhip effect through transparent demand sharing',
      'Supplier relationship management and collaborative value engineering',
      'Total cost of ownership (TCO) vs simple unit purchase price analysis',
      'Designing agile supply networks capable of rapid disruption absorption'
    ]
  }
];

export const CONSULTATION_TOPICS: ConsultationTopic[] = [
  {
    id: 'topic-1',
    number: '01',
    title: 'Lean Six Sigma Strategy & Transformation Roadmap',
    category: 'Lean Six Sigma',
    deliverable: 'Executive Transformation Roadmap & Maturity Assessment',
    summary: 'Evaluate existing operational capability, identify highest-leverage pilot projects, and architect a customized multi-year Lean Six Sigma deployment plan.',
    recommendedFor: 'CEOs, COOs, Plant Directors, Transformation Leaders'
  },
  {
    id: 'topic-2',
    number: '02',
    title: 'Value Stream Mapping & End-to-End Flow Design',
    category: 'Lean Six Sigma',
    deliverable: 'Current vs Future State VSM + 90-Day Implementation Plan',
    summary: 'Detailed end-to-end mapping of physical and informational flows to uncover structural lead-time bottlenecks and design continuous flow cells.',
    recommendedFor: 'Operations Directors, Industrial Engineers, Plant Managers'
  },
  {
    id: 'topic-3',
    number: '03',
    title: 'Cost Reduction & Waste (Muda) Eradication',
    category: 'Cost & Waste Reduction',
    deliverable: 'Waste Quantification Matrix & Hard-Dollar Savings Target List',
    summary: 'Systematically diagnose direct material scrap, overhead redundancies, and operational friction to unlock substantial hard cost savings.',
    recommendedFor: 'CFOs, Finance Directors, Continuous Improvement Heads'
  },
  {
    id: 'topic-4',
    number: '04',
    title: 'Inventory Optimization & Working Capital Liberation',
    category: 'Cost & Waste Reduction',
    deliverable: 'ABC/XYZ Inventory Model, Safety Stock Formulas & Kanban Design',
    summary: 'Calibrate safety stocks, eliminate excess dead capital, balance order frequency, and prevent stockouts while freeing up cash reserves.',
    recommendedFor: 'Supply Chain Leaders, Warehouse Managers, Procurement VPs'
  },
  {
    id: 'topic-5',
    number: '05',
    title: 'KPI Architecture & Visual Performance Dashboards',
    category: 'Strategic Planning',
    deliverable: 'Tiered KPI Cascade Framework (Tier 1–3) & Metric Scorecards',
    summary: 'Establish true leading indicators that align shop-floor actions with executive balance sheets, replacing clutter with actionable signals.',
    recommendedFor: 'Executives, Operations Managers, Quality Leads'
  },
  {
    id: 'topic-6',
    number: '06',
    title: 'Hoshin Kanri Strategic Alignment & Policy Deployment',
    category: 'Strategic Planning',
    deliverable: 'Enterprise X-Matrix & Annual Catchball Cadence Schedule',
    summary: 'Bridge the chasm between C-suite 3-year objectives and daily frontline execution through disciplined policy cascading.',
    recommendedFor: 'Chief Strategy Officers, General Managers, Managing Directors'
  },
  {
    id: 'topic-7',
    number: '07',
    title: 'Root Cause Analysis (RCA) & Formal 8D Problem Solving',
    category: 'Quality & Systems',
    deliverable: '8D Problem Solving Protocol & Poka-Yoke Error-Proofing Specs',
    summary: 'Eradicate persistent chronic quality issues with disciplined DMAIC, Ishikawa, and statistical root-cause validation.',
    recommendedFor: 'Quality Managers, Chief Engineers, Plant Supervisors'
  },
  {
    id: 'topic-8',
    number: '08',
    title: 'Total Productive Maintenance (TPM) & OEE Acceleration',
    category: 'Quality & Systems',
    deliverable: 'Autonomous Maintenance Schedule & SMED Changeover Protocol',
    summary: 'Halt unplanned equipment downtime and boost Overall Equipment Effectiveness (OEE) by establishing autonomous maintenance routines.',
    recommendedFor: 'Maintenance Directors, Reliability Engineers, Plant Managers'
  },
  {
    id: 'topic-9',
    number: '09',
    title: 'Quality Management Systems (QMS) & Zero-Defect Architecture',
    category: 'Quality & Systems',
    deliverable: 'Zero-Defect Quality Gates & Statistical Process Control (SPC) Plan',
    summary: 'Design quality into processes at the source rather than relying on expensive post-process inspection, targeting zero escapes.',
    recommendedFor: 'Quality Directors, Compliance Officers, Operations Leads'
  },
  {
    id: 'topic-10',
    number: '10',
    title: 'Lean Warehousing & Cross-Docking Logistics',
    category: 'Cost & Waste Reduction',
    deliverable: 'Warehouse Slotting Blueprint & Dock-to-Stock SOP Toolkit',
    summary: 'Streamline distribution centers, pick-and-pack routing, safety protocols, and dock turnaround times to accelerate fulfillment velocity.',
    recommendedFor: 'Logistics VPs, Distribution Center Heads, Supply Chain Managers'
  },
  {
    id: 'topic-11',
    number: '11',
    title: 'Workplace Standardization & Visual SOP Infrastructure',
    category: 'Quality & Systems',
    deliverable: 'Standard Work Combination Sheets & Visual SOP Templates',
    summary: 'Create living standard operating procedures that eliminate operator-to-operator variance and streamline onboarding.',
    recommendedFor: 'Production Supervisors, Training Managers, Process Owners'
  },
  {
    id: 'topic-12',
    number: '12',
    title: 'Process Capacity & Labor Utilization Optimization',
    category: 'Lean Six Sigma',
    deliverable: 'Takt-Time Balancing Model & Line Capacity Balancing Chart',
    summary: 'Eliminate line starvation and blockages by balancing cycle times against customer takt time and smoothing operator loading.',
    recommendedFor: 'Industrial Engineers, Production Planners, Operations Heads'
  },
  {
    id: 'topic-13',
    number: '13',
    title: 'The Six Big Losses: Rapid Equipment Diagnostics',
    category: 'Quality & Systems',
    deliverable: 'Six Losses Stratification Report & Rapid Remediation Plan',
    summary: 'Isolate minor stoppages, speed loss, setup delays, and startup scrap that silently drain plant profitability.',
    recommendedFor: 'Maintenance Managers, Manufacturing Engineers, Production Directors'
  },
  {
    id: 'topic-14',
    number: '14',
    title: 'Voice of the Customer (VOC) & CTQ Translation',
    category: 'Strategic Planning',
    deliverable: 'Critical-to-Quality (CTQ) Tree & Closed-Loop Customer Feedback Model',
    summary: 'Directly translate qualitative client feedback into rigorous technical operational targets and internal performance metrics.',
    recommendedFor: 'Product Managers, Customer Success Directors, Service Leads'
  },
  {
    id: 'topic-15',
    number: '15',
    title: 'Rapid Kaizen Event Facilitation & Sprints',
    category: 'Lean Six Sigma',
    deliverable: '5-Day Kaizen Event Charter & Immediate Breakthrough Runbook',
    summary: 'Plan, lead, and execute intensive 5-day rapid improvement blitzes that tackle entrenched operational bottlenecks with cross-functional teams.',
    recommendedFor: 'Continuous Improvement Leads, Plant Managers, Project Directors'
  },
  {
    id: 'topic-16',
    number: '16',
    title: 'Lean for Leaders: Executive Gemba Coaching',
    category: 'Strategic Planning',
    deliverable: 'Executive Gemba Walk Routine & Coaching Habit Framework',
    summary: 'Shift management philosophy from administrative micromanagement to humble inquiry, servant leadership, and coaching problem solvers.',
    recommendedFor: 'Managing Directors, General Managers, Department Heads'
  },
  {
    id: 'topic-17',
    number: '17',
    title: 'High-Performance Culture & Cross-Functional Teamwork',
    category: 'Strategic Planning',
    deliverable: 'Psychological Safety Diagnostic & Tiered Huddle Governance',
    summary: 'Break down cross-departmental silos, align competing priorities, and build daily standup rhythms that clear operational impediments.',
    recommendedFor: 'HR Directors, Transformation Leaders, Department Heads'
  },
  {
    id: 'topic-18',
    number: '18',
    title: 'Building an Agile Learning Organization',
    category: 'Strategic Planning',
    deliverable: 'Knowledge Institutionalization System & Skills Matrix',
    summary: 'Systematically capture institutional expertise and build internal peer-coaching academies to retain competitive knowledge.',
    recommendedFor: 'Chief Learning Officers, HR Leaders, Operations Directors'
  },
  {
    id: 'topic-19',
    number: '19',
    title: 'SWOT & TOWS Operational Diagnostics',
    category: 'Strategic Planning',
    deliverable: 'TOWS Operational Strategy Matrix & Threat Mitigation Action Plan',
    summary: 'Rigorous strategic positioning connecting external supply chain volatility and customer demands with internal operational strengths.',
    recommendedFor: 'Business Unit Heads, Strategy Executives, Managing Directors'
  },
  {
    id: 'topic-20',
    number: '20',
    title: 'Continuous Improvement (Kaizen) Ideation Systems',
    category: 'Lean Six Sigma',
    deliverable: 'Kaizen Suggestion & Quick-Win Execution Workflow',
    summary: 'Empower frontline operators to submit, evaluate, test, and implement 100+ low-cost incremental improvements every year.',
    recommendedFor: 'Continuous Improvement Champions, Operations Directors'
  },
  {
    id: 'topic-21',
    number: '21',
    title: 'Enterprise Operational Excellence Maturity Assessment',
    category: 'Strategic Planning',
    deliverable: 'Comprehensive 5-Pillar OpEx Maturity Scorecard & Gap Analysis',
    summary: 'Benchmark your company across Strategy, Processes, People, Systems, and Results against world-class industry standards.',
    recommendedFor: 'Board of Directors, Executive Committees, Private Equity Operators'
  },
  {
    id: 'topic-22',
    number: '22',
    title: 'Productivity Improvement & Ergonomic Line Redesign',
    category: 'Cost & Waste Reduction',
    deliverable: 'Workstation Motion Economy Design & Output Enhancement Target',
    summary: 'Re-engineer physical workstations and digital software layouts to cut operator strain, eliminate unnecessary motions, and boost output.',
    recommendedFor: 'Industrial Engineers, Plant Safety Officers, Production Supervisors'
  },
  {
    id: 'topic-23',
    number: '23',
    title: 'Systems Thinking & Cross-Functional Alignment',
    category: 'Strategic Planning',
    deliverable: 'Enterprise Systems Dynamics Flow Map & Friction Matrix',
    summary: 'Uncover the non-linear second-order effects of local optimizations that inadvertently create bottlenecks for other departments.',
    recommendedFor: 'C-Level Executives, Operations VPs, Business Architects'
  },
  {
    id: 'topic-24',
    number: '24',
    title: 'Dynamic Environment Adaptation & Crisis Turnaround',
    category: 'Strategic Planning',
    deliverable: '100-Day Operational Turnaround & Agile Rapid Response Protocol',
    summary: 'Navigate severe market contractions, regulatory shocks, or sudden supply disruptions with rapid contingency operational stabilization.',
    recommendedFor: 'CEOs, Interim Turnaround Executives, Restructuring Leaders'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "The ebooks are a treasure trove of knowledge. Simon’s guidance on waste management helped us reduce costs significantly. Highly recommend!",
    author: "Richard Garrett",
    role: "Director of Operations",
    organization: "Global Industrial Manufacturing",
    focus: "Waste Management & Cost Reduction"
  },
  {
    quote: "Simon’s consultation services are top-notch. Our team is now more focused on continuous improvement and quality control. The results speak for themselves.",
    author: "Elena Rostova",
    role: "VP of Quality & Compliance",
    organization: "Precision Healthcare Solutions",
    focus: "Continuous Improvement & Quality Control"
  },
  {
    quote: "Simon’s consultation transformed our approach to efficiency. The e-courses are comprehensive and easy to follow. We’ve seen a remarkable improvement in our operations.",
    author: "Marcus Vance",
    role: "Chief Operating Officer",
    organization: "Logistics & Cold-Chain Network",
    focus: "Efficiency Transformation & E-Learning"
  },
  {
    quote: "The high-performance strategies we learned from the courses have made a tangible difference. Simon’s expertise in lean manufacturing is unparalleled.",
    author: "David K. Mwangi",
    role: "Plant Operations Manager",
    organization: "East Africa FMCG Enterprises",
    focus: "Lean Manufacturing & High Performance"
  },
  {
    quote: "The continuous improvement techniques taught by Simon are game-changers. Our productivity and quality have improved immensely. The ebooks are an excellent resource!",
    author: "Sarah Jenkins",
    role: "Head of Operational Excellence",
    organization: "Apex Financial Group",
    focus: "Productivity & Quality Advancement"
  },
  {
    quote: "The courses are detailed and practical. Simon’s expertise in waste management has helped us streamline our processes. Our performance has never been better.",
    author: "Tariq Al-Mansoor",
    role: "Managing Director",
    organization: "Commercial Processing & Supply Chain",
    focus: "Process Streamlining & Waste Eradication"
  }
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: 'post-1',
    title: 'Cost reduction strategies for sustainable business growth',
    date: 'October 10, 2024',
    readTime: '6 min read',
    category: 'Cost Optimization',
    summary: 'Why indiscriminate slash-and-burn cost cutting destroys enterprise capability, and how Lean Six Sigma waste eradication delivers durable bottom-line expansion.',
    content: `Indiscriminate cost cutting often damages organizational muscle rather than trimming fat. When companies conduct across-the-board percentage reductions in headcount or travel budgets, they frequently introduce severe downstream friction that ends up driving costs higher through rework, quality escapes, and delayed customer fulfillment.

True sustainable cost reduction begins with value stream taxonomy. By distinguishing value-added activities from necessary non-value-added tasks and outright waste (muda), management can systematically remove friction points. 

Key strategies include:
1. Target Process Variation First: Excess costs are almost always byproducts of uncontrolled process variation. Reduce variation, and scrap and overtime costs evaporate naturally.
2. Direct Material Yield Optimization: Utilizing DMAIC problem solving to isolate batch temperature, speed, or tool wear anomalies that cause yield degradation.
3. Inventory Holding Expense Recalibration: Re-evaluating carrying costs—which typically run between 20% to 30% of inventory value annually—by switching to pull-based replenishment.`
  },
  {
    id: 'post-2',
    title: 'Your guide to inventory management – plus 3 best inventory management tools',
    date: 'October 10, 2024',
    readTime: '7 min read',
    category: 'Supply Chain',
    summary: 'Mastering the equilibrium between high order fulfillment rates and working capital efficiency through statistical safety buffers and visual Kanban.',
    content: `Inventory is frequently referred to as the graveyard of operational cash. Having too much inventory hides deep operational problems—unreliable machinery, extended changeovers, poor quality, and supplier instability.

To build an agile inventory management posture:
1. Multi-Dimensional ABC/XYZ Stratification: Don't just sort by revenue. Classify parts by both consumption value (ABC) and demand predictability (XYZ). High-volume, volatile items require different buffering rules than steady, low-cost fasteners.
2. Dynamic Safety Stock Equations: Replace static "30-day supply" rules of thumb with dynamic statistical standard deviation calculations that factor in supplier lead-time variance and service-level targets.
3. Top 3 Tool Implementations: 
- Visual Kanban Two-Bin Replenishment for shop-floor hardware
- Real-time Cycle Counting protocols integrated into WMS
- Automated lead-time variance tracking alerts.`
  },
  {
    id: 'post-3',
    title: 'Getting lean manufacturing systems right',
    date: 'October 10, 2024',
    readTime: '8 min read',
    category: 'Lean Six Sigma',
    summary: 'Moving beyond isolated 5S cleanups to an integrated socio-technical operating system that unites shop-floor operators with executive strategy.',
    content: `Many organizations mistakenly equate Lean manufacturing with cleaning the floor (5S) or sticking post-it notes on a whiteboard. When these tools are treated as disjointed events, the excitement fades within six months, and the plant regresses to its previous state.

Lean is not a toolkit; it is an integrated socio-technical operating system. 

To get Lean manufacturing right:
1. Leadership at the Gemba: Executives cannot manage Lean from an air-conditioned conference room. They must practice humble inquiry on the shop floor where the actual work happens.
2. Standard Work as the Foundation: Without standardization, there is no baseline from which to measure improvement. Standard work must be documented visually by the operators themselves.
3. Daily Tiered Accountability: 15-minute daily standup meetings that cascade issues up from Tier 1 (frontline) to Tier 3 (plant manager) ensure problems are resolved before they become delivery crises.`
  }
];
