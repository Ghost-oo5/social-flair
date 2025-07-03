import React from "react";
import { Star, TrendingUp, DollarSign, Clock } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "SocialFlair reduced our video production time from 3 weeks to 30 minutes. We're now creating 10x more content for our clients and our profit margins have increased by 40%.",
      author: {
        name: "Sarah Chen",
        title: "Marketing Director",
        company: "GrowthWorks Agency",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      results: ["10x more content", "40% higher margins"],
      rating: 5,
    },
    {
      id: 2,
      content:
        "Our product videos created with SocialFlair convert 35% better than our previous content. The ROI is incredible - we've saved $50K in production costs this year alone.",
      author: {
        name: "Marcus Rodriguez",
        title: "Marketing Manager",
        company: "StyleCo Fashion",
        avatar:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      results: ["35% higher conversion", "$50K saved"],
      rating: 5,
    },
    {
      id: 3,
      content:
        "SocialFlair's video demos helped us reduce our sales cycle by 30%. Our trial-to-paid conversion rate improved dramatically once we started using AI-generated feature explanations.",
      author: {
        name: "David Kim",
        title: "VP Marketing",
        company: "DataFlow Analytics",
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      results: ["30% shorter sales cycle", "45% better trial conversion"],
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "1,000+",
      label: "Happy customers",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      value: "50,000+",
      label: "Videos created",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Customer rating",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: DollarSign,
      value: "90%",
      label: "Cost reduction",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Marketing Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See how businesses like yours are transforming their video marketing
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                {`"${testimonial.content}"`}
              </blockquote>
              {/* Author Info */}
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  width={250}
                  height={250}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.author.title}, {testimonial.author.company}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-wrap gap-2">
                {testimonial.results.map((result, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join marketing teams from these leading companies:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "TechCorp",
              "BrandFlow",
              "MarketPro",
              "GrowthHub",
              "StyleWorks",
              "DataSync",
            ].map((company, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
