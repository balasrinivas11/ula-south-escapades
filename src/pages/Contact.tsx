
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        subject: 'Contact Form Submission - ULA TRAVELS'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_CONTACT_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting ULA TRAVELS. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="gradient-text">ULA TRAVELS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to embark on your South Indian adventure? Get in touch with our travel experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-gold flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Office Address</h4>
                    <p className="text-gray-300">
                      123 Travel Street, MG Road<br />
                      Kochi, Kerala 682001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone Numbers</h4>
                    <p className="text-gray-300">
                      +91-XXXXXXXXXX (Primary)<br />
                      +91-XXXXXXXXXX (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">
                      info@ulatravels.com<br />
                      support@ulatravels.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM<br />
                      <span className="text-gold-300">24/7 Emergency Support</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
              
              <p className="text-gray-300 mt-4">
                Stay updated with our latest travel packages, offers, and destination guides!
              </p>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Quick Response Guarantee</h3>
              <p className="text-navy-800">
                We respond to all inquiries within 2 hours during business hours. 
                For urgent travel assistance, call our 24/7 helpline.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Visit Our Office</h3>
          <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
