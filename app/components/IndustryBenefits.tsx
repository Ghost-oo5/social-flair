import React from 'react';
import { Building2, ShoppingCart, Monitor, User } from 'lucide-react';

const IndustryBenefits = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Digital Marketing Agencies',
      description: 'Scale video production for multiple clients without hiring more staff',
      stats: ['70% faster delivery', '5x more videos per month'],
      link: '#agencies',
      linkText: 'See Agency Solutions'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Brands',
      description: 'Create product videos that increase conversions and reduce return rates',
      stats: ['35% higher conversion', '300% more content'],
      link: '#ecommerce',
      linkText: 'See E-commerce Solutions'
    },
    {
      icon: Monitor,
      title: 'SaaS Companies',
      description: 'Explain complex features with engaging video demos and tutorials',
      stats: ['45% better trial conversion', '60% shorter sales cycles'],
      link: '#saas',
      linkText: 'See SaaS Solutions'
    },
    {
      icon: User,
      title: 'Solopreneurs',
      description: 'Create professional content without the professional budget or time investment',
      stats: ['80% time savings', '10x content output'],
      link: '#solopreneurs',
      linkText: 'See Solo Solutions'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Your Industry
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6 text-indigo-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
              
              <div className="space-y-2 mb-6">
                {industry.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{stat}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={industry.link} 
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                {industry.linkText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;