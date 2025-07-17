
import React, { useState, useEffect } from 'react';
import { ArrowRight, Mountain, Waves, Trees, Camera, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import RegistrationModal from '../components/RegistrationModal';

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&h=1080&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const packages = [
    {
      id: 1,
      title: "Munnar Hill Station",
      location: "Munnar, Kerala",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      duration: "3 Days / 2 Nights",
      rating: 4.8,
      highlights: [
        "Tea plantation tours",
        "Eravikulam National Park",
        "Top Station viewpoint",
        "Luxury resort stay"
      ]
    },
    {
      id: 2,
      title: "Coorg Coffee Hills",
      location: "Coorg, Karnataka",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
      duration: "2 Days / 1 Night",
      rating: 4.6,
      highlights: [
        "Coffee plantation tours",
        "Abbey Falls",
        "Raja's Seat viewpoint",
        "Traditional Kodava cuisine"
      ]
    },
    {
      id: 3,
      title: "Alappuzha Backwaters",
      location: "Alappuzha, Kerala",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
      duration: "2 Days / 1 Night",
      rating: 4.9,
      highlights: [
        "Houseboat cruise",
        "Backwater village tour",
        "Traditional Kerala cuisine",
        "Sunset photography"
      ]
    },
    {
      id: 4,
      title: "Ooty Queen of Hills",
      location: "Ooty, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      duration: "4 Days / 3 Nights",
      rating: 4.7,
      highlights: [
        "Nilgiri Mountain Railway",
        "Botanical Gardens",
        "Doddabetta Peak",
        "Tea factory visit"
      ]
    },
    {
      id: 5,
      title: "Kodaikanal Princess",
      location: "Kodaikanal, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
      duration: "3 Days / 2 Nights",
      rating: 4.8,
      highlights: [
        "Kodai Lake boating",
        "Pillar Rocks viewpoint",
        "Bear Shola Falls",
        "Homemade chocolate tour"
      ]
    },
    {
      id: 6,
      title: "Wayanad Wildlife",
      location: "Wayanad, Kerala",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
      duration: "3 Days / 2 Nights",
      rating: 4.7,
      highlights: [
        "Wildlife sanctuary safari",
        "Soochipara Falls",
        "Bamboo village stay",
        "Spice plantation tour"
      ]
    }
  ];

  const handleRegister = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-navy-800/60 z-10"></div>
        
        {/* Image Slider */}
        {heroImages.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`South India Landscape ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gold-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Explore South India with <span className="gradient-text">ULA TRAVELS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gold-200 animate-fade-in">
            Discover the enchanting beauty of Kerala and Tamil Nadu with our curated premium packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-navy-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Premium Experience</h3>
              <p className="text-gray-300">Handpicked luxury accommodations and exclusive experiences</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Family Friendly</h3>
              <p className="text-gray-300">Perfect packages designed for families and groups</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Memorable Moments</h3>
              <p className="text-gray-300">Create lasting memories with our expertly crafted itineraries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Premium Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the diverse beauty of South India through our carefully curated travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                title={pkg.title}
                location={pkg.location}
                image={pkg.image}
                duration={pkg.duration}
                rating={pkg.rating}
                highlights={pkg.highlights}
                onRegister={() => handleRegister(pkg.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">
            Ready for Your South Indian Adventure?
          </h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have explored the wonders of South India with ULA TRAVELS
          </p>
          <button 
            onClick={() => handleRegister('Custom Package')}
            className="bg-navy-900 text-gold-300 hover:bg-navy-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Plan Your Journey Today
          </button>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage}
      />
    </div>
  );
};

export default Index;
