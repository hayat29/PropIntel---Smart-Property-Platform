import React from 'react';
import { Brain, MapPin, TrendingUp, Shield, Home, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Recommendations',
    description: 'Machine learning algorithms analyze your preferences and lifestyle to suggest perfect matches.',
    color: 'bg-blue-500'
  },
  {
    icon: MapPin,
    title: 'Location Intelligence',
    description: 'Smart commute analysis, nearby amenities, and neighborhood insights for informed decisions.',
    color: 'bg-green-500'
  },
  {
    icon: TrendingUp,
    title: 'Market Predictions',
    description: 'Real-time pricing trends and investment forecasting for Delhi NCR properties.',
    color: 'bg-purple-500'
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'RERA-compliant properties with verified ownership and legal documentation.',
    color: 'bg-red-500'
  },
  {
    icon: Home,
    title: 'Virtual Tours',
    description: '360° property tours with AI narration in Hindi and English.',
    color: 'bg-yellow-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Seamless experience across all devices with voice search in Hinglish.',
    color: 'bg-indigo-500'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose PropIntel?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technology to revolutionize property discovery in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture Showcase */}
        <div className="mt-20 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Platform Architecture
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">
              React + Next.js
            </div>
            <span className="text-gray-400">→</span>
            <div className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
              AI/ML Models
            </div>
            <span className="text-gray-400">→</span>
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg">
              Firebase Backend
            </div>
            <span className="text-gray-400">→</span>
            <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg">
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;