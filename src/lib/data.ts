import type { EmailTemplate, CaseStudy, BlogPost, Testimonial, FaqItem, TeamMember, NavLink } from './types';
import { 
  CalendarCheck, 
  Workflow, 
  Users, 
  Target, 
  Zap, 
  Mail, 
  TrendingUp, 
} from "lucide-react"
import React from 'react';

import { Blog1Content } from '@/components/blog-content/blog-1';
import { Blog2Content } from '@/components/blog-content/blog-2';
import { Blog3Content } from '@/components/blog-content/blog-3';
import { Blog4Content } from '@/components/blog-content/blog-4';
import { Blog5Content } from '@/components/blog-content/blog-5';
import { Blog6Content } from '@/components/blog-content/blog-6';
import placeholders from '@/app/lib/placeholder-images.json';

export const navLinks: NavLink[] = [
    { href: "/#about-us", label: "About Us" },
    { 
      label: "Services",
      children: [
        { href: "/email-marketing", label: "Email Marketing" },
        { href: "/growth-marketing", label: "Growth Marketing" },
      ]
    },
    { href: "/case-study", label: "Case Study" },
    { href: "/blog", label: "Blog" },
  ]

export const stats = [
  {
    value: 30,
    label: "Satisfied Business Owners",
    suffix: " +",
    duration: 2000,
  },
  {
    value: 40,
    label: "Average Client ROI",
    suffix: " x",
    duration: 2000,
  },
  {
    value: 15,
    label: "Million revenue generated",
    suffix: " +",
    duration: 2000,
  },
]

export const services = [
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Full-service campaign creation, sending, analytics, and automation to turn your inbox into a revenue engine.",
    href: "/email-marketing",
    teaser: "Campaign creation, sending, analytics, automation, and smarter targeting."
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Sales development, customer lifecycle, and growth experiments that go beyond the inbox to scale your business.",
    href: "/growth-marketing",
    teaser: "Sales development, customer lifecycle, and growth experiments, beyond the inbox."
  }
]

export const emailServices = [
  {
    title: "Strategic Campaign Management",
    description: "End-to-end management of your email calendar. From conceptualization and copy to design and deployment.",
    icon: CalendarCheck,
  },
  {
    title: "Advanced Lifecycle Automation",
    description: "Automated flows that work while you sleep. Welcome series, abandoned carts, and post-purchase sequences designed for ROI.",
    icon: Workflow,
  },
  {
    title: "Data-Driven Segmentation",
    description: "Send the right message to the right person. We segment your list based on behavior and purchase history for maximum impact.",
    icon: Users,
  }
]

export const growthServices = [
  {
    title: "Sales Development & Lead Gen",
    description: "We build targeted account lists, manage cold outreach on Email and LinkedIn, and provide SDR support to fill your pipeline.",
    icon: Target,
  },
  {
    title: "Customer Lifecycle",
    description: "Optimize every touchpoint with onboarding flows, upsell nurture, churn prevention, and CRM hygiene.",
    icon: Workflow,
  },
  {
    title: "Growth Hacking & Experimentation",
    description: "Data-driven audits, CRO, and rapid experimentation cadences designed to find your most efficient growth levers.",
    icon: Zap,
  }
]

export const teamMembers: TeamMember[] = placeholders.team.map(member => ({
  name: member.name,
  title: 'Co-Founder',
  imageUrl: member.url,
  dataAiHint: member.hint,
}));

export const emailTemplates: EmailTemplate[] = placeholders.hero.templates.map(t => ({
  id: t.id,
  name: `Template ${t.id}`,
  imageUrl: t.url,
  dataAiHint: t.hint
}));

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "FuelMails transformed our email strategy. The analytics are a game-changer, and our engagement has skyrocketed.",
    name: 'Sarah Johnson',
    title: 'CMO, TechSolutions Inc.',
    avatarUrl: "/images/testimonials/sarah.webp",
  },
  {
    id: 2,
    quote: "The template designer is so intuitive and powerful. We're creating beautiful, on-brand emails in minutes.",
    name: 'David Chen',
    title: 'Founder, The Design Hub',
    avatarUrl: "/images/testimonials/cheng.webp",
  },
  {
    id: 3,
    quote: "Working with FuelMails felt like adding a high-octane growth team to our company overnight. Highly recommended.",
    name: 'Mark Thompson',
    title: 'Director of Growth, E-com Scale',
    avatarUrl: '/images/testimonials/mathew.webp',
  },
];

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What kind of results can I expect from email marketing?',
    answer: "Email marketing consistently drives 25 to 40 percent of total revenue for ecommerce brands when done right.",
  },
  {
    id: 'faq-2',
    question: 'Do you only do email marketing?',
    answer: "No. We offer comprehensive Growth Marketing as a companion service to help you scale through sales development and experimentation.",
  },
  {
    id: 'faq-3',
    question: 'What is the difference between your email service and your growth marketing service?',
    answer: "Email marketing is a specific channel for retention. Growth marketing is a broader system that encompasses lead gen and full-funnel optimization.",
  },
  {
    id: 'faq-4',
    question: 'How long does it take to see results?',
    answer: "Most clients see a significant lift in revenue and engagement within the first 30-60 days of implementing our tailored retention systems.",
  },
  {
    id: 'faq-5',
    question: 'Do I need to sign a long-term contract?',
    answer: "We focus on building long-term growth partnerships, but we offer flexible engagement models that align with your business goals and specific scaling needs.",
  },
];

export const blogPosts: BlogPost[] = [
   {
    id: 1,
    slug: 'what-growth-marketing-actually-means',
    title: 'What Growth Marketing Actually Means (And Why Most Businesses Get It Wrong)',
    metaTitle: 'What Growth Marketing Actually Means | FuelMails',
    metaDescription: 'Understand the true definition of growth marketing and avoid common pitfalls.',
    imageUrl: placeholders.blog[0].url,
    excerpt: 'Growth marketing is the practice of using data and experimentation to improve every stage a customer moves through.',
    author: 'FuelMails',
    date: 'January 5, 2026',
    content: Blog1Content,
  },
  {
    id: 2,
    slug: 'the-growth-loop-acquisition-without-retention',
    title: 'The Growth Loop: Why Acquisition Without Retention Is a Leaky Bucket',
    metaTitle: 'The Growth Loop: Retention vs. Acquisition | FuelMails',
    metaDescription: 'Learn why retention is the non-negotiable key to sustainable growth.',
    imageUrl: placeholders.blog[1].url,
    excerpt: 'Customer acquisition cost has been rising across nearly every paid channel for years.',
    author: 'FuelMails',
    date: 'February 12, 2026',
    content: Blog2Content,
  },
  {
    id: 3,
    slug: 'how-to-run-growth-experiments-that-actually-move-revenue',
    title: 'How to Run Growth Experiments That Actually Move Revenue (Not Just Vanity Metrics)',
    metaTitle: 'How to Run Growth Experiments | FuelMails',
    metaDescription: 'A guide to running experiments that impact your bottom line, not just vanity metrics.',
    imageUrl: placeholders.blog[2].url,
    excerpt: 'Most teams describe what they do as testing, but very little of it qualifies as an actual experiment.',
    author: 'FuelMails',
    date: 'February 19, 2026',
    content: Blog3Content,
  },
  {
    id: 4,
    slug: 'why-email-marketing-still-outperforms-social-media-in-2025',
    title: 'Why Email Marketing Still Outperforms Social Media in 2025',
    metaTitle: 'Email Marketing vs. Social Media: 2025 Data-Backed Stats | FuelMails',
    metaDescription: 'Discover why email marketing delivers a higher ROI than social media in 2025.',
    imageUrl: placeholders.blog[3].url,
    excerpt: 'A single email can generate more revenue than hundreds of social media posts.',
    author: 'FuelMails',
    date: 'July 5, 2025',
    content: Blog4Content,
  },
  {
    id: 5,
    slug: 'why-email-marketing-is-essential-for-your-brand',
    title: 'Why Email Marketing is Essential for Your Brand',
    metaTitle: 'Why Email Marketing is Essential for Your Brand | FuelMails',
    metaDescription: 'Learn why email marketing is a must-have for any growing brand.',
    imageUrl: placeholders.blog[4].url,
    excerpt: 'Email marketing is one of the most reliable drivers of growth for modern businesses.',
    author: 'FuelMails',
    date: 'July 12, 2025',
    content: Blog5Content,
  },
  {
    id: 6,
    slug: 'what-to-expect-when-hiring-an-email-marketing-agency',
    title: 'What to Expect When Hiring an Email Marketing Agency',
    metaTitle: 'Hiring an Email Marketing Agency: What to Expect | FuelMails',
    metaDescription: 'Understand the process and results when partnering with an email agency.',
    imageUrl: placeholders.blog[5].url,
    excerpt: 'Hiring an email marketing agency is one of the smartest moves for a growing business.',
    author: 'FuelMails',
    date: 'July 20, 2025',
    content: Blog6Content,
  },
];