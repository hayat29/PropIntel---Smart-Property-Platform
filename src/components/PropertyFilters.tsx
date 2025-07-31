import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface PropertyFiltersProps {
  onFilterChange: (filters: any) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    propertyType: 'all',
    priceRange: [0, 10000000],
    location: 'all',
    bhk: 'all',
    furnished: 'all',
    amenities: [] as string[]
  });

  const handleFilterUpdate = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      propertyType: 'all',
      priceRange: [0, 10000000],
      location: 'all',
      bhk: 'all',
      furnished: 'all',
      amenities: []
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-gray-900 dark:text-white font-semibold"
        >
          <span className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </span>
          {isExpanded ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block p-4 space-y-6`}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Clear All
          </button>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Property Type
          </label>
          <select
            value={filters.propertyType}
            onChange={(e) => handleFilterUpdate('propertyType', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="rent">For Rent</option>
            <option value="sale">For Sale</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterUpdate('location', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Locations</option>
            <option value="gurgaon">Gurgaon</option>
            <option value="noida">Noida</option>
            <option value="delhi">Delhi</option>
            <option value="faridabad">Faridabad</option>
            <option value="ghaziabad">Ghaziabad</option>
          </select>
        </div>

        {/* BHK */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            BHK
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['all', '1', '2', '3', '4', '5+'].map((bhk) => (
              <button
                key={bhk}
                onClick={() => handleFilterUpdate('bhk', bhk)}
                className={`p-2 rounded-lg border transition-all duration-200 ${
                  filters.bhk === bhk
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
              >
                {bhk === 'all' ? 'Any' : bhk === '5+' ? '5+' : `${bhk} BHK`}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price Range (₹)
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="10000000"
              step="100000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterUpdate('priceRange', [0, parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>₹0</span>
              <span>₹{(filters.priceRange[1] / 100000).toFixed(0)}L</span>
            </div>
          </div>
        </div>

        {/* Furnished */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Furnished Status
          </label>
          <select
            value={filters.furnished}
            onChange={(e) => handleFilterUpdate('furnished', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Any</option>
            <option value="furnished">Furnished</option>
            <option value="semi-furnished">Semi-Furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </select>
        </div>

        {/* Popular Amenities */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Amenities
          </label>
          <div className="space-y-2">
            {['Parking', 'Gym', 'Swimming Pool', 'Security', 'Power Backup'].map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={(e) => {
                    const newAmenities = e.target.checked
                      ? [...filters.amenities, amenity]
                      : filters.amenities.filter(a => a !== amenity);
                    handleFilterUpdate('amenities', newAmenities);
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;