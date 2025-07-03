import React from 'react';
import { Play, CheckCircle, Zap, Users, TrendingUp } from 'lucide-react';

const FinalCTA = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "14-day free trial"
    },
    {
      icon: CheckCircle,
      text: "No credit card required"
    },
    {
      icon: CheckCircle,
      text: "Setup in under 5 minutes"
    }
  ];

  const quickStats = [
    {
      icon: Users,
      value: "1,000+",
      label: "Marketing teams"
    },
    {
      icon: TrendingUp,
      value: "90%",
      label: "Cost reduction"
    },
    {
      icon: Zap,
      value: "30min",
      label: "Average creation time"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Video Marketing?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Join 1,000+ marketing teams creating professional videos in minutes, not weeks. 
              Start your journey to faster, cheaper, better video content today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a 
                href="#signup" 
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Creating Videos Free
                <Play className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-200"
              >
                Book a Demo
              </a>
            </div>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-indigo-100">
                  <benefit.icon className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-indigo-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="bg-white rounded-lg p-6">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  {/* Video Preview Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-90"></div>
                  <div className="relative text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="font-semibold">SocialFlair Dashboard Preview</p>
                    <p className="text-sm opacity-75">See how easy it is to create videos</p>
                  </div>
                  
                  {/* Floating UI Elements */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-medium text-indigo-600">
                    Creating Video...
                  </div>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Ready in 2 min
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <span>Professional Brand Video</span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Processing
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Success Elements */}
            <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              🎉 Video Created!
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              💰 $2,000 Saved
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="text-center mt-16 pt-8 border-t border-white border-opacity-20">
          <p className="text-indigo-200 mb-4">
            Trusted by marketing teams at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            {['TechFlow', 'BrandCorp', 'GrowthLabs', 'StyleBrand', 'MarketPro', 'DataWorks'].map((company, index) => (
              <div key={index} className="text-white font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;