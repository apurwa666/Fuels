import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: 'faq-1',
    question: 'Is email marketing outdated in 2025?',
    answer: "No. More marketers rate email as their highest ROI channel than any other method. Statista reports over 4.5 billion global email users in 2025, outpacing any social platform."
  },
  {
    id: 'faq-2',
    question: 'Should I stop using social media?',
    answer: "No. Use social to grow awareness, collect leads, and support your email funnel. But do not rely on it to drive consistent sales."
  },
  {
    id: 'faq-3',
    question: 'How often should I email my audience?',
    answer: "Start with two to three emails per week. Monitor open rates and unsubscribes. Adjust based on audience behavior."
  },
  {
    id: 'faq-4',
    question: 'Does email still work for small businesses?',
    answer: "Yes. Even lists under 1,000 people can bring in thousands in revenue with a strong welcome, offer, and abandoned cart series."
  }
];

export const Blog4Content = () => (
  <>
    <p>A single email can generate more revenue than hundreds of social media posts. One study shows that for every $1 a business spends on email marketing, it earns $36 in return. In contrast, paid social media advertising returns closer to $2 to $4 per dollar spent, according to HubSpot.</p>
    <p>This is not about choosing one or the other. It's about understanding which channel actually drives sales. In 2025, email still wins. Let’s break down the data.</p>
    
    <h3 className="text-2xl font-bold mt-12 mb-2">What performs better in 2025: email or social media?</h3>
    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-3 border-b-2 border-primary/50 font-semibold text-foreground">Metric</th>
            <th className="p-3 border-b-2 border-primary/50 font-semibold text-foreground">Email Marketing</th>
            <th className="p-3 border-b-2 border-primary/50 font-semibold text-foreground">Social Media</th>
          </tr>
        </thead>
        <tbody>
          <tr className='leading-relaxed'>
            <td className="p-3 border-b border-border">Average visibility</td>
            <td className="p-3 border-b border-border">34 percent open rate</td>
            <td className="p-3 border-b border-border">2 to 5 percent organic reach</td>
          </tr>
          <tr className='leading-relaxed'>
            <td className="p-3 border-b border-border">Average click-through rate</td>
            <td className="p-3 border-b border-border">3 percent</td>
            <td className="p-3 border-b border-border">1.1 percent</td>
          </tr>
          <tr className='leading-relaxed'>
            <td className="p-3 border-b border-border">Average conversion rate</td>
            <td className="p-3 border-b border-border">6 percent (Omnisend)</td>
            <td className="p-3 border-b border-border">1.2 percent (across platforms)</td>
          </tr>
          <tr className='leading-relaxed'>
            <td className="p-3 border-b border-border">ROI per dollar spent</td>
            <td className="p-3 border-b border-border">36 dollars (Litmus)</td>
            <td className="p-3 border-b border-border">2 to 4 dollars (HubSpot)</td>
          </tr>
          <tr className='leading-relaxed'>
            <td className="p-3 border-b border-border">Control of the audience</td>
            <td className="p-3 border-b border-border">Full ownership</td>
            <td className="p-3 border-b border-border">Controlled by the platform algorithm</td>
          </tr>
          <tr className='leading-relaxed'>
            <td className="p-3 border-b border-border">Automation capabilities</td>
            <td className="p-3 border-b border-border">Deep personalization</td>
            <td className="p-3 border-b border-border">Minimal and manual</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>The numbers speak clearly. Email consistently offers higher return, better engagement, and actual control over your communication.</p>
    
    <h3 className="text-2xl font-bold mt-12 mb-2">Why is email still more reliable than social media?</h3>
    <p>Email is more reliable because it lands directly in someone’s inbox. Social media relies on algorithms that change often and limit your visibility. When you send an email, 1 in 3 subscribers open it on average. But only 1 in 20 followers may see your Instagram post unless you pay to boost it. If you rely solely on social, your reach depends on something you do not control.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">How does email marketing generate more revenue than social media?</h3>
    <p>Email marketing outperforms social in revenue because it targets people based on behavior and timing. For example:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Abandoned cart emails recover nearly 10 percent of lost sales, according to Klaviyo</li>
      <li>Post-purchase flows increase customer lifetime value by upselling and reinforcing brand loyalty</li>
      <li>Welcome emails have an average open rate of over 60 percent (Campaign Monitor)</li>
    </ul>
    <p>These flows work automatically once set up, delivering relevant messages at the right time. Social media cannot match this level of personalization or timing without heavy ad spending.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">What makes email a better long-term asset than social media?</h3>
    <p>Email lists are assets you own. Your followers are not. If Instagram shuts down tomorrow or changes its algorithm, your business loses its reach. But your email list stays with you. Businesses like Morning Brew and The Hustle scaled to millions in revenue using email lists as their foundation. Even Shopify reported that email marketing brought in nearly four times more conversions than social campaigns during BFCM 2023. You control the relationship through email. Social media is a rented space.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">What can email do that social media cannot?</h3>
    <p>Email allows deep automation and segmentation. Once a user signs up, you can:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Send them a tailored welcome series</li>
      <li>Recommend products based on past purchases</li>
      <li>Re-engage them if they have not opened in 30 days</li>
      <li>Ask for reviews exactly three days after delivery</li>
    </ul>
    <p>Social platforms do not offer this. You can post, but you cannot trigger personalized sequences based on real-time behavior.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">Are subscribers more valuable than followers?</h3>
    <p>Yes. According to Campaign Monitor, the average email subscriber is worth $1 to $5 per month depending on your industry and strategy. That means a list of 5,000 engaged subscribers could generate $5,000 to $25,000 monthly with proper flows and offers. Followers, in contrast, are passive. Unless you run ads, most do not even see your posts.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">Can social media still be useful for your business?</h3>
    <p>Yes, but only as a support channel. Use social to:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Drive traffic to your email sign-up forms</li>
      <li>Share testimonials and results to build trust</li>
      <li>Promote contests and collect leads</li>
      <li>Retarget past visitors and list subscribers</li>
    </ul>
    <p>Social media builds visibility. Email builds relationships. The businesses that win in 2025 are combining both, but email does the selling. If you want reliable sales, email is the channel to bet on.</p>
    <p>Social media gives you noise. Email gives you numbers. Email lets you control the message, deliver it with precision, and track exactly what drives revenue. It does not rely on trends, hashtags, or algorithms. If you want to grow a stable, profitable business in 2025, email is the channel that keeps working long after the scroll ends.</p>

    <h3 className="text-3xl font-bold mt-16 mb-6">Frequently Asked Questions</h3>
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem value={faq.id} key={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </>
);
