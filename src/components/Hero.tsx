import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, TrendingUp, Shield, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Delhi Skyline Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-32 text-blue-600 opacity-30" viewBox="0 0 1200 200" fill="currentColor">
            <path d="M0,200 L0,120 L100,120 L120,100 L140,120 L200,120 L220,80 L240,120 L300,120 L320,90 L340,120 L400,120 L420,110 L440,120 L500,120 L520,70 L540,120 L600,120 L620,95 L640,120 L700,120 L720,85 L740,120 L800,120 L820,105 L840,120 L900,120 L920,75 L940,120 L1000,120 L1020,90 L1040,120 L1200,120 L1200,200 Z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Smarter Homes,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Smarter Decisions
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              AI-powered property discovery for Delhi NCR. Find homes that understand your lifestyle.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">RERA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-blue-400" />
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-red-400" />
              <span className="text-sm">Delhi NCR</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/properties"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Properties</span>
              </span>
            </Link>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Market Insights</span>
              </span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-blue-100 mb-4">Quick Search</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Gurgaon', 'Noida', 'Dwarka', 'Vasant Kunj'].map((area) => (
                  <Link
                    key={area}
                    to={`/properties?area=${area}`}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;