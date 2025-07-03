'use client'
import React, { useState } from 'react';
import { Users, Film, MessageCircle, Palette, Target, Zap, Play } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('ugc');

  const ugcFeatures = [
    {
      icon: Users,
      title: 'Diverse AI Actors',
      description: 'Choose from 100+ realistic AI actors representing different demographics'
    },
    {
      icon: Film,
      title: 'Natural Environments',
      description: 'Authentic settings that look like real customer homes and spaces'
    },
    {
      icon: MessageCircle,
      title: 'Conversational Scripts',
      description: 'AI-generated scripts that sound natural and build trust'
    }
  ];

  const commercialFeatures = [
    {
      icon: Palette,
      title: 'Brand-Perfect Scenes',
      description: 'Professional environments that match your brand aesthetic'
    },
    {
      icon: Target,
      title: 'Conversion-Optimized',
      description: 'Templates designed specifically for maximum marketing ROI'
    },
    {
      icon: Zap,
      title: 'Magic AI Enhancement',
      description: 'Our proprietary prompt optimization for superior video quality'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Two Powerful Studios, One Platform
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect approach for your video needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === 'ugc'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('ugc')}
            >
              UGC Studio
            </button>
            <button
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === 'commercial'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('commercial')}
            >
              Commercial Studio
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">
                      {activeTab === 'ugc' ? 'UGC Studio Demo' : 'Commercial Studio Demo'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {activeTab === 'ugc' ? (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  UGC Studio: Authentic Creator-Style Videos
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Generate authentic user-generated content that converts like real customer testimonials.
                </p>
                
                <div className="space-y-6 mb-8">
                  {ugcFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a href="#signup" className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                  Try UGC Studio Free
                </a>
              </div>
            ) : (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Commercial Studio: Professional Brand Videos
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Create polished, professional videos that elevate your brand and drive conversions.
                </p>
                
                <div className="space-y-6 mb-8">
                  {commercialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a href="#signup" className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                  Try Commercial Studio Free
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;