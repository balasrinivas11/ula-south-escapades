
import React from 'react';
import { Users, Award, MapPin, Heart, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">ULA TRAVELS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in discovering the enchanting beauty and rich culture of South India
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Founded with a passion for showcasing the incredible diversity of South India, 
                ULA TRAVELS has been creating unforgettable journeys for travelers from around the world. 
                Our deep-rooted connection to the region and extensive local knowledge ensures authentic 
                experiences that go beyond typical tourist destinations.
              </p>
              <p>
                From the misty hill stations of Kerala to the ancient temples of Tamil Nadu, 
                we curate each journey with meticulous attention to detail, ensuring that every 
                moment of your trip is filled with wonder and discovery.
              </p>
              <p>
                Our commitment to sustainable tourism practices helps preserve the natural beauty 
                and cultural heritage of South India for future generations while providing 
                meaningful benefits to local communities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
              alt="South India landscape"
              className="rounded-lg h-48 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
              alt="Kerala backwaters"
              className="rounded-lg h-48 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
              alt="Hill station"
              className="rounded-lg h-48 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
              alt="Waterfall"
              className="rounded-lg h-48 w-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Passionate Service</h3>
              <p className="text-gray-300">
                We pour our heart into every journey, ensuring each traveler feels the warmth 
                of South Indian hospitality throughout their experience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">
                From luxury accommodations to expert guides, we maintain the highest standards 
                in every aspect of your travel experience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Trust & Safety</h3>
              <p className="text-gray-300">
                Your safety and peace of mind are our top priorities. We ensure secure, 
                reliable, and worry-free travel experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-xl p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-navy-900 mb-2">10+</div>
              <div className="text-navy-800 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy-900 mb-2">5000+</div>
              <div className="text-navy-800 font-medium">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy-900 mb-2">50+</div>
              <div className="text-navy-800 font-medium">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy-900 mb-2">24/7</div>
              <div className="text-navy-800 font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose <span className="gradient-text">ULA TRAVELS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Local Expertise</h3>
                  <p className="text-gray-300">
                    Our deep knowledge of South India's hidden gems and cultural nuances 
                    ensures authentic and enriching experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Personalized Service</h3>
                  <p className="text-gray-300">
                    Every itinerary is tailored to your preferences, ensuring a unique 
                    and memorable journey that exceeds expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">
                    Our dedicated support team is available round-the-clock to assist 
                    you throughout your journey.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Explore?</h3>
              <p className="text-gray-300 mb-6">
                Join us on an incredible journey through South India's most spectacular 
                destinations. From serene backwaters to majestic mountains, every moment 
                promises to be extraordinary.
              </p>
              <button className="btn-gold w-full">
                Start Planning Your Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
