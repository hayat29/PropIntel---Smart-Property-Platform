import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import { mockProperties } from '../data/mockProperties';

const Properties: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (filters: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      let filtered = mockProperties;

      if (filters.propertyType && filters.propertyType !== 'all') {
        filtered = filtered.filter(p => p.type === filters.propertyType);
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      }

      if (filters.location && filters.location !== 'all') {
        filtered = filtered.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
      }

      if (filters.bhk && filters.bhk !== 'all') {
        filtered = filtered.filter(p => p.bhk === filters.bhk);
      }

      setFilteredProperties(filtered);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Properties in Delhi NCR
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {filteredProperties.length} properties found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <PropertyFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg animate-pulse">
                    <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-2xl"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}

            {filteredProperties.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No properties found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters to see more results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;