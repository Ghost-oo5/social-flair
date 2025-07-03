import React from 'react';
import { Clock, DollarSign, Target, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Weeks of Production Time',
      description: 'Traditional video creation takes 2-4 weeks per project, slowing down your campaigns and missing market opportunities.'
    },
    {
      icon: DollarSign,
      title: 'Expensive Agency Costs',
      description: 'Professional video production costs $2,000-$10,000 per video, making it impossible to scale content creation.'
    },
    {
      icon: Target,
      title: 'Inconsistent Quality',
      description: 'Freelancers and DIY tools deliver unpredictable results that don\'t match your brand standards.'
    }
  ];

  const benefits = [
    'Professional videos in under 30 minutes',
    '90% cost reduction vs. traditional production',
    'Consistent, brand-aligned quality every time'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stop Wasting Time and Money on Video Production
          </h2>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution Highlight */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            SocialFlair solves this with AI-powered video creation that delivers:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;