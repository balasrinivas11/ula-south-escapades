import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, User, Phone, Mail, Sparkles, Heart, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, packageName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    adults: '1',
    children: '0'
  });

  const [daysNights, setDaysNights] = useState({ days: 0, nights: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate days and nights when dates change
  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        setDaysNights({ days: diffDays, nights: diffDays - 1 });
      } else {
        setDaysNights({ days: 0, nights: 0 });
      }
    }
  }, [formData.startDate, formData.endDate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - replace these with your actual IDs
      const templateParams = {
        to_email: 'ulark491999@gmail.com', // Replace with actual email
        package_name: packageName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        start_date: formData.startDate,
        end_date: formData.endDate,
        days_nights: `${daysNights.days} Days / ${daysNights.nights} Nights`,
        adults: formData.adults,
        children: formData.children,
        total_travelers: parseInt(formData.adults) + parseInt(formData.children)
      };

      await emailjs.send(
        'service_x2t314b', // Replace with your EmailJS service ID
        'template_6iiyjcr', // Replace with your EmailJS template ID
        templateParams,
        'zPk1D6Jtt-0vf4I-h' // Replace with your EmailJS public key
      );

      toast({
        title: "Registration Successful!",
        description: `Thank you for choosing ULA TRAVEL. We'll contact you soon regarding your ${packageName} package.`,
      });

      // Reset form and close modal
      setFormData({
        name: '',
        
        email: '',
        phone: '',
        startDate: '',
        endDate: '',
        adults: '1',
        children: '0'
      });
      onClose();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send registration. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in border border-gold-200/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-6 rounded-t-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gold-300 bg-clip-text text-transparent">
                  Register Now
                </h2>
                <p className="text-gold-300 flex items-center">
                  <Heart className="w-4 h-4 mr-1 animate-pulse" />
                  Book your {packageName} package
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gold-300 transition-all duration-300 hover:scale-110 hover:rotate-90 p-2 rounded-full hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-gradient-to-b from-white to-gold-50/30">
          {/* Personal Information */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-navy-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-gold-600" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-navy-800 transition-colors">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 hover:border-gold-400 bg-white/80"
                    placeholder="Enter your full name"
                  />
                </div>
                
                
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-navy-800 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gold-600" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-navy-800 transition-colors">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 hover:border-gold-400 bg-white/80"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-navy-800 transition-colors">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 hover:border-gold-400 bg-white/80"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>
            </div>

            {/* Travel Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-navy-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gold-600" />
                Travel Information
              </h3>
              
              {/* Travel Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-navy-800 transition-colors">
                    Trip Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 hover:border-gold-400 bg-white/80"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-navy-800 transition-colors">
                    Trip End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                    min={formData.startDate || new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 hover:border-gold-400 bg-white/80"
                  />
                </div>
              </div>

              {/* Duration Display */}
              {daysNights.days > 0 && (
                <div className="bg-gradient-to-r from-gold-100 to-gold-50 border border-gold-300 rounded-lg p-4 mb-4 animate-fade-in">
                  <p className="text-lg font-semibold text-navy-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gold-600" />
                    Duration: {daysNights.days} Days / {daysNights.nights} Nights
                  </p>
                </div>
              )}

              {/* Travelers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-navy-800 transition-colors">
                    <Users className="w-4 h-4 inline mr-1" />
                    No. of Adults *
                  </label>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 hover:border-gold-400 bg-white/80"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-navy-800 transition-colors">
                    <Users className="w-4 h-4 inline mr-1" />
                    No. of Children
                  </label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 hover:border-gold-400 bg-white/80"
                  >
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-gold-600 hover:to-gold-700 hover:scale-105 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy-900 mr-2"></div>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Register Now
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;