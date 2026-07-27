export interface EmailTemplate {
  id: number;
  name: string;
  imageUrl: string;
  dataAiHint?: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: number;
  clientName: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  slug: string;
  clientInfo: string;
  challenge: string;
  solution: string;
  results: string;
  stats: CaseStudyStat[];
  testimonial: {
    quote: string;
    author: string;
  };
  emailImageUrl: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  imageUrl: string;
  excerpt: string;
  content: React.FC;
  author: string;
  date: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  dataAiHint?: string;
}

export interface NavLink {
    href?: string;
    label: string;
    children?: { href: string; label: string }[];
}
