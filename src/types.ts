export type PageId = 
  | 'home'
  | 'services'
  | 'about'
  | 'solutions'
  | 'portfolio'
  | 'pricing'
  | 'process'
  | 'contact'
  | 'privacy'
  | 'refund'
  | 'cancellation'
  | 'duration'
  | 'late'
  | 'terms'
  | 'faq';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  categoryNumber: string;
  shortDesc: string;
  fullDesc?: string;
  price?: string;
  priceNote?: string;
  deliverables?: string[];
  popular?: boolean;
}

export interface WebsitePackage {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceNum: number;
  emiAdvance: string;
  emiMonthly: string;
  emiDuration: string;
  oneTimeNote: string;
  targetAudience: string;
  features: string[];
  extraIncluded?: string[];
  supportPeriod: string;
  popular?: boolean;
  bgGradient: string;
  accentColor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  tag: string;
  category: string;
  description: string;
  techStack: string[];
  highlights: string[];
  link?: string;
}

export interface PolicySection {
  id: PageId;
  title: string;
  badge: string;
  effectiveDate?: string;
  subtitle: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
  cards: {
    title: string;
    desc: string;
    points?: string[];
  }[];
}
