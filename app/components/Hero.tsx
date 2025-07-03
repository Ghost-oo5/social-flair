import React from 'react';
import { Play, Zap, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        {/* Announcement Bar */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-medium text-indigo-700 border border-indigo-200">
            <Zap className="w-4 h-4 mr-2" />
            Powered by Google Veo3 - The most advanced AI video technology
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Professional{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Video Ads
              </span>{' '}
              in Minutes, Not Weeks
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your marketing with AI-powered video creation. Generate high-converting UGC and commercial videos that drive results - no filming, no editing, no expensive agencies.
            </p>

            {/* Hero CTA */}
            <div className="mb-10">
              <a href="#signup" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Creating Videos Free
                <Play className="w-5 h-5 ml-2" />
              </a>
              <p className="text-sm text-gray-500 mt-3 flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                No credit card required
                <CheckCircle className="w-4 h-4 ml-4 mr-2 text-green-500" />
                14-day free trial
                <CheckCircle className="w-4 h-4 ml-4 mr-2 text-green-500" />
                Cancel anytime
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 mb-4">Trusted by 1,000+ marketing teams</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {['Agency Co', 'StyleBrand', 'DataFlow', 'GrowthWorks'].map((company, index) => (
                  <div key={index} className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 font-medium">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Watch 2-minute demo</p>
                    <p className="text-sm text-gray-500">See SocialFlair in action</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>UGC Studio Demo</span>
                  <span>2:34</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              90% Cost Reduction
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              30 Min Creation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;