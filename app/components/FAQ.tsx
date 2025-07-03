'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I create my first video?",
      answer: "Most users create their first professional video within 30 minutes of signing up. Our intuitive interface and pre-built templates make it incredibly fast to get started. Simply input your message and brand assets, and our AI handles the rest."
    },
    {
      question: "What makes SocialFlair different from other AI video tools?",
      answer: "We're the only platform offering both UGC and commercial video creation powered by Google Veo3. Our Magic AI system optimizes prompts for superior quality, and we focus specifically on marketing ROI. Plus, we offer 100+ diverse AI actors and authentic environments that look real."
    },
    {
      question: "Can I use the videos for commercial purposes?",
      answer: "Yes! All videos created with SocialFlair come with full commercial usage rights. You can use them in ads, on websites, social media, and any other marketing channels without additional licensing fees or restrictions."
    },
    {
      question: "Do I need any video editing experience?",
      answer: "Not at all. SocialFlair is designed for marketers, not video editors. Our platform handles all the technical aspects automatically. You simply provide your message, choose your style, and our AI creates professional videos that match your brand."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 14-day free trial so you can test everything risk-free. If you're not completely satisfied, you can cancel anytime during the trial period. We also provide unlimited revisions and our support team is always ready to help optimize your results."
    },
    {
      question: "Can I integrate SocialFlair with my existing tools?",
      answer: "Yes! We integrate with popular marketing platforms, project management tools, and social media schedulers. Our API allows for custom integrations, and Enterprise plans include dedicated support for complex workflows and integrations."
    },
    {
      question: "How does the AI actor selection work?",
      answer: "Choose from 100+ AI actors representing different ages, ethnicities, and demographics. Each actor is designed to look authentic and relatable. You can filter by demographics, style, and personality to find the perfect match for your brand and target audience."
    },
    {
      question: "What video formats and resolutions are supported?",
      answer: "We support all major video formats including MP4, MOV, and WebM. Videos can be exported in various resolutions from HD (1080p) to 4K, depending on your plan. We also optimize videos for different platforms like Instagram, Facebook, YouTube, and TikTok."
    },
    {
      question: "Is there a limit to how many videos I can create?",
      answer: "Each plan includes a specific number of videos per month. The Creator plan includes 50 videos, Business includes 200, and Agency includes 500. If you need more, you can upgrade your plan or purchase additional video credits."
    },
    {
      question: "How does billing work for annual plans?",
      answer: "Annual plans are billed upfront and include a 20% discount compared to monthly pricing. You can cancel anytime and receive a prorated refund for unused time. All plans include the 14-day free trial before any charges begin."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SocialFlair
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you succeed with SocialFlair
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Support
              </a>
              <a 
                href="#demo" 
                className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;