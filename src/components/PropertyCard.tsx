import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Phone } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)}Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(0)}L`;
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.type === 'rent' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
          }`}>
            For {property.type === 'rent' ? 'Rent' : 'Sale'}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        {property.featured && (
          <div className="absolute bottom-3 left-3">
            <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bhk} BHK</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.area} sq ft</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPrice(property.price)}
              {property.type === 'rent' && <span className="text-sm font-normal text-gray-500">/month</span>}
            </div>
            {property.type === 'sale' && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                ₹{Math.round(property.price / property.area).toLocaleString()}/sq ft
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
              {property.furnished}
            </div>
            {property.verified && (
              <div className="text-xs text-blue-600 dark:text-blue-400">
                ✓ Verified
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            to={`/property/${property.id}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors duration-200"
          >
            View Details
          </Link>
          <button className="p-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <Phone className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;