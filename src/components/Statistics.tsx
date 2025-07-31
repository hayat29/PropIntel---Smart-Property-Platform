import React from 'react';
import { TrendingUp, Users, Home, Award } from 'lucide-react';

const stats = [
  {
    icon: Home,
    value: '10,000+',
    label: 'Properties Listed',
    description: 'Verified listings across Delhi NCR'
  },
  {
    icon: Users,
    value: '25,000+',
    label: 'Happy Customers',
    description: 'Families found their dream homes'
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Accuracy Rate',
    description: 'AI recommendation precision'
  },
  {
    icon: Award,
    value: '4.8/5',
    label: 'Customer Rating',
    description: 'Based on 5000+ reviews'
  }
];

const Statistics: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our AI-powered platform has helped families across Delhi NCR find their perfect homes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-blue-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Investment Insights */}
        <div className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Market Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">₹8,500</div>
              <div className="text-sm text-blue-100">Avg. price per sq ft in Gurgaon</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">12%</div>
              <div className="text-sm text-blue-100">Annual appreciation in Noida</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">₹25,000</div>
              <div className="text-sm text-blue-100">Avg. rental yield per month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;