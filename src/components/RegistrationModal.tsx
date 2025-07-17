
import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, User, Phone, Mail, CreditCard } from 'lucide-react';
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
    age: '',
    email: '',
    phone: '',
    aadhaar: '',
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
        to_email: 'your@email.com', // Replace with actual email
        package_name: packageName,
        name: formData.name,
        age: formData.age,
        email: formData.email,
        phone: formData.phone,
        aadhaar: formData.aadhaar,
        start_date: formData.startDate,
        end_date: formData.endDate,
        days_nights: `${daysNights.days} Days / ${daysNights.nights} Nights`,
        adults: formData.adults,
        children: formData.children,
        total_travelers: parseInt(formData.adults) + parseInt(formData.children)
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Registration Successful!",
        description: `Thank you for choosing ULA TRAVELS. We'll contact you soon regarding your ${packageName} package.`,
      });

      // Reset form and close modal
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        aadhaar: '',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-navy-900 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Register Now</h2>
              <p className="text-gold-300">Book your {packageName} package</p>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gold-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                min="1"
                max="120"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="Age"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email ID *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          {/* Aadhaar Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <CreditCard className="w-4 h-4 inline mr-1" />
              Aadhaar Number *
            </label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleInputChange}
              required
              pattern="[0-9]{12}"
              maxLength={12}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              placeholder="12-digit Aadhaar number"
            />
          </div>

          {/* Travel Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Trip Start Date *
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Trip End Date *
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
                min={formData.startDate || new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Duration Display */}
          {daysNights.days > 0 && (
            <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
              <p className="text-lg font-semibold text-navy-800">
                Duration: {daysNights.days} Days / {daysNights.nights} Nights
              </p>
            </div>
          )}

          {/* Travelers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                No. of Adults *
              </label>
              <select
                name="adults"
                value={formData.adults}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                No. of Children
              </label>
              <select
                name="children"
                value={formData.children}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              >
                {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 btn-gold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Register Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
