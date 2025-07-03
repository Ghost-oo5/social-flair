'use client'
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ExamplesGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const examples = [
    {
      id: 1,
      category: 'ugc',
      title: 'Fashion Brand UGC',
      subtitle: 'Created in 15 minutes',
      thumbnail: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:32'
    },
    {
      id: 2,
      category: 'commercial',
      title: 'SaaS Product Demo',
      subtitle: 'Created in 20 minutes',
      thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1:15'
    },
    {
      id: 3,
      category: 'product',
      title: 'E-commerce Product Video',
      subtitle: 'Created in 12 minutes',
      thumbnail: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:45'
    },
    {
      id: 4,
      category: 'ugc',
      title: 'Beauty Brand Testimonial',
      subtitle: 'Created in 18 minutes',
      thumbnail: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:28'
    },
    {
      id: 5,
      category: 'commercial',
      title: 'Agency Promo Video',
      subtitle: 'Created in 25 minutes',
      thumbnail: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1:02'
    },
    {
      id: 6,
      category: 'product',
      title: 'Tech Product Launch',
      subtitle: 'Created in 22 minutes',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:55'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Videos', count: examples.length },
    { id: 'ugc', label: 'UGC Style', count: examples.filter(e => e.category === 'ugc').length },
    { id: 'commercial', label: 'Commercial', count: examples.filter(e => e.category === 'commercial').length },
    { id: 'product', label: 'Product Demos', count: examples.filter(e => e.category === 'product').length }
  ];

  const filteredExamples = activeFilter === 'all' 
    ? examples 
    : examples.filter(example => example.category === activeFilter);

  return (
    <section id="examples" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See SocialFlair in Action
          </h2>
          <p className="text-xl text-gray-600">
            Real videos created by our customers in minutes
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-indigo-600 border border-gray-200 hover:border-indigo-200'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredExamples.map((example) => (
            <div key={example.id} className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={example.thumbnail} 
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-indigo-600 ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-medium">
                  {example.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    example.category === 'ugc' 
                      ? 'bg-green-100 text-green-800' 
                      : example.category === 'commercial'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {example.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{example.title}</h4>
                <p className="text-gray-600 text-sm flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {example.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of marketers creating professional videos in minutes
            </p>
            <a 
              href="#signup" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Create Your First Video
              <Play className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesGallery;