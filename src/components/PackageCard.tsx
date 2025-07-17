
import React from 'react';
import { MapPin, Clock, Users, Star } from 'lucide-react';

interface PackageCardProps {
  title: string;
  location: string;
  image: string;
  duration: string;
  rating: number;
  highlights: string[];
  onRegister: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  location,
  image,
  duration,
  rating,
  highlights,
  onRegister
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="font-semibold text-navy-800 mb-2">Highlights:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Register Button */}
        <button
          onClick={onRegister}
          className="w-full btn-gold text-center"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
