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
    question: 'When will I start seeing results?',
    answer: "Most businesses notice improved performance within the first month, especially after core flows and segmentation are in place."
  },
  {
    id: 'faq-2',
    question: 'Do I need an existing email list?',
    answer: "Not necessarily. Agencies can help you grow a new list or improve the results from an existing one."
  },
  {
    id: 'faq-3',
    question: 'Will the emails match my brand voice?',
    answer: "Yes. Agencies tailor copy and design to reflect your tone and style so everything feels seamless and on brand."
  },
  {
    id: 'faq-4',
    question: 'Do agencies handle tech and setup?',
    answer: "Yes. That includes integration with your store, setting up automation, and ensuring strong deliverability."
  },
  {
    id: 'faq-5',
    question: 'What if I already use email, but it is not working well?',
    answer: "The agency will audit and improve your setup. Many flows underperform simply because they are outdated or not optimized."
  }
];

export const Blog6Content = () => (
  <>
    <p>Hiring an email marketing agency is one of the smartest moves for a growing business. However, many business owners are unsure of what actually happens once the work begins. What does the agency do? When can you expect results?</p>
    <p>Here is what you can expect when partnering with an experienced email marketing agency.</p>
    
    <h3 className="text-2xl font-bold mt-12 mb-2">A Clear Understanding of Your Business Goals</h3>
    <p>Great agencies begin by learning about your business. They take time to understand your goals, audience, and challenges. This foundation shapes the entire strategy.</p>
    <p>Expect questions about your past performance, customer behavior, and brand identity. These insights help the agency align email marketing with your larger goals.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">A Complete Review of Your Current Setup</h3>
    <p>Before any changes are made, the agency will audit your email platform. This includes existing flows, subscriber data, deliverability, and integrations.</p>
    <p>The goal is to identify gaps, fix issues, and uncover opportunities for fast improvements. Even small changes here can lead to a boost in performance early on.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">A Strategy That Matches Your Business Stage</h3>
    <p>Whether you are just starting or already scaling, your email plan should reflect your stage. A good agency builds a tailored roadmap based on where your business stands.</p>
    <p>New brands may need welcome flows and basic campaigns. Growing brands might focus on segmentation, loyalty, and retention.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">Flows That Generate Revenue Automatically</h3>
    <p>A core part of email marketing is automation. The agency will set up essential flows like:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Welcome series</li>
      <li>Abandoned cart recovery</li>
      <li>Post-purchase follow-ups</li>
      <li>Win-back campaigns</li>
      <li>Cross-sell offers</li>
    </ul>
    <p>These emails bring in sales without you having to send anything manually. They keep working in the background around the clock.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">Campaigns That Keep Customers Engaged</h3>
    <p>Beyond automation, agencies run ongoing campaigns. These include promotions, announcements, and educational content that connects with your audience.</p>
    <p>Expect a steady rhythm of well-planned campaigns that drive clicks and revenue while building stronger relationships with your subscribers.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">Emails That Reflect Your Brand</h3>
    <p>Your emails should look and sound like your brand. Agencies ensure the design matches your visual style and the copy fits your voice.</p>
    <p>Whether your tone is bold, minimalist, elegant, or friendly, the emails will feel consistent with everything else your customers experience.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">Regular Updates and Transparent Metrics</h3>
    <p>You should always know what is happening with your email program. Agencies provide clear reporting with metrics that matter, such as opens, clicks, and revenue from flows and campaigns.</p>
    <p>You also get ongoing updates on strategy, performance, and next steps so you can make informed decisions without doing the heavy lifting yourself.</p>
    
    <h3 className="text-2xl font-bold mt-12 mb-2">A Collaborative and Supportive Partnership</h3>
    <p>Email works best when your agency becomes a true partner. Expect regular communication, strategy sessions, and room for feedback. This back and forth ensures the emails stay aligned with your evolving goals.</p>

    <h3 className="text-2xl font-bold mt-12 mb-2">Measurable Growth and Real Results</h3>
    <p>Email marketing drives results you can see. With the right setup and strategy, most businesses notice an increase in revenue within the first few weeks.</p>
    <p>And unlike paid ads or social media, email lets you reach your customers directly, on your own terms, without algorithms standing in the way.</p>

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
