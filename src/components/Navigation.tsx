
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-navy-900/95 backdrop-blur-sm border-b border-gold-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-gold-500" />
            <span className="text-2xl font-bold gradient-text">ULA TRAVELS</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-gold-400 transition-colors ${
                isActive('/') ? 'text-gold-400 border-b-2 border-gold-400' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-white hover:text-gold-400 transition-colors ${
                isActive('/about') ? 'text-gold-400 border-b-2 border-gold-400' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-white hover:text-gold-400 transition-colors ${
                isActive('/contact') ? 'text-gold-400 border-b-2 border-gold-400' : ''
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gold-300">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@ulatravels.com</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
