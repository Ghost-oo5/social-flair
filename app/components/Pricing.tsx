'use client'
import React, { useState } from 'react';
import { Check, Zap, Crown, Building, Star } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Creator",
      description: "Perfect for solopreneurs and small businesses",
      icon: Zap,
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "50 videos per month",
        "UGC Studio access",
        "100+ AI actors",
        "Basic templates",
        "Email support",
        "HD video quality",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Business",
      description: "Ideal for agencies and growing companies",
      icon: Crown,
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        "200 videos per month",
        "UGC + Commercial Studio",
        "Magic AI enhancement",
        "Custom branding",
        "Team collaboration",
        "Priority support",
        "4K video quality",
        "Advanced analytics",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Agency",
      description: "For large agencies and enterprises",
      icon: Building,
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        "500 videos per month",
        "White-label options",
        "Advanced analytics",
        "Full API access",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited team members",
        "Custom AI training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start free, scale as you grow
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={isAnnual}
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <div className="w-14 h-8 bg-gray-200 rounded-full relative transition-colors duration-200 ease-in-out">
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${isAnnual ? 'translate-x-6 bg-gradient-to-r from-indigo-600 to-purple-600' : ''}`}></div>
              </div>
            </label>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''}`}>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700'
                  }`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 mt-2">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a 
                  href={plan.cta === 'Contact Sales' ? '#contact' : '#signup'}
                  className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Talk to our team about enterprise pricing and custom features
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200"
            >
              Contact Enterprise Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;