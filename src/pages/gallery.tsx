import { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Home, ArrowLeft, Star, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  expandedDescription?: string;
  category: "interior";
  rating?: number;
  features?: string[];
}

// Configuration constants
const CONFIG = {
  animation: {
    duration: {
      short: 300,
      medium: 500,
      long: 700,
    },
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  touch: {
    swipeThreshold: 50,
  },
} as const;

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-lg py-2' : 'shadow-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src="/logo.jpg" 
                  alt="RYP Logo" 
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-pulse"></div>
              </div>
              <Link to="/" className="flex items-center">
  
  <span className="ml-3 text-2xl font-bold text-black">Render Your Plan</span>
</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { to: "/", label: "Home" },
                { to: "/gallery", label: "Interior Designs" },
                { to: "/exterior", label: "Exterior Designs" },
                { to: "/line", label: "Videos" }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="relative text-gray-700 hover:text-black transition-colors duration-300 font-medium group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <button
                onClick={() => setShowCv(true)}
                className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                View CV
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200 mt-3">
              <div className="flex flex-col space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/gallery", label: "Interior Designs" },
                  { to: "/exterior", label: "Exterior Designs" },
                  { to: "/line", label: "Videos" }
                ].map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black rounded-xl transition-all duration-300 font-medium active:bg-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setShowCv(true);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 text-center active:bg-gray-700"
                >
                  View CV
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* CV Modal */}
      {showCv && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setShowCv(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-black">My CV</h2>
              <button
                onClick={() => setShowCv(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200 touch-manipulation"
                aria-label="Close CV"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />
              </button>
            </div>
            <div className="p-4 md:p-6 max-h-[70vh] overflow-auto">
              <img
                src="/cv.jpeg"
                alt="CV"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Footer Component
const Footer = () => {
  const [showCv, setShowCv] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-black text-white pt-12 pb-6 md:pt-16 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="relative">
                  <img
                    src="/logo.jpg"
                    alt="RYP Logo"
                    className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                <span className="ml-3 text-2xl md:text-3xl font-bold text-white">
                  RYP
                </span>
              </div>
              <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Transforming spaces into extraordinary experiences through innovative interior design. 
                We create environments that inspire and delight.
              </p>
              <p className="text-white font-semibold text-sm md:text-base">
                Led by Interior Designer Ibrahem Alyan
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
              <div className="space-y-2 md:space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/gallery", label: "Interior Designs" },
                  { to: "/exterior", label: "Exterior Designs" },
                  { to: "/line", label: "Videos" }
                ].map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 md:hover:translate-x-2 transform active:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => setShowCv(true)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 md:hover:translate-x-2 transform text-left active:text-white"
                >
                  View CV 
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Get In Touch</h3>
              <div className="space-y-3 md:space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✉</span>
                  </div>
                  <span className="text-sm md:text-base">renderyourplan@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <span className="text-sm md:text-base">+962 7 7077 798 6</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <span className="text-sm md:text-base">Amman, Jordan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 Ibrahim Alayan Interior Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* CV Modal */}
      {showCv && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setShowCv(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-black">My CV</h2>
              <button
                onClick={() => setShowCv(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200 touch-manipulation"
                aria-label="Close CV"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />
              </button>
            </div>
            <div className="p-4 md:p-6 max-h-[70vh] overflow-auto">
              <img
                src="/cv.jpeg"
                alt="CV"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Rating Stars Component
const RatingStars = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 md:w-4 md:h-4 ${
            star <= rating
              ? "fill-gray-800 text-gray-800"
              : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

// Gallery Component (Main Content)
const Gallery = () => {
  // State management
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [allImages, setAllImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Auto scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Interior Projects data
  const projects: Project[] = useMemo(() => [
    { 
      id: 7, 
      title: "Modern Interior Design", 
      description: "Open Kitchen & Living Space with Elegant Details", 
      images: ["rypimges/a-(1).jpg", "rypimges/rypimg.jpeg", "rypimges/a(2).jpeg", "rypimges/a(2).jpg"],
      expandedDescription: "A sleek modern interior combining kitchen and living area in perfect harmony. Artistic cabinet patterns, warm lighting, and minimalist furniture create a refined contemporary feel, enhanced by a touch of nature with an indoor box tree and soft ambient glow.",
      category: "interior",
      rating: 5,
      features: ["Open Concept", "Minimalist Design", "Natural Lighting", "Premium Materials"]
    },
    { 
      id: 8, 
      title: "Stylish Bedroom", 
      description: "Modern Bedroom with Timeless Charm", 
      images: ["bedroom3.jpg", "bedroom2.jpg"],
      expandedDescription: "A modern bedroom design that combines luxury and comfort, using warm colors and natural materials to create an atmosphere of calm and relaxation. Features carefully planned lighting and decorative touches that reflect refined taste.",
      category: "interior",
      rating: 5,
      features: ["Luxury Materials", "Calm Atmosphere", "Smart Lighting", "Comfort Focus"]
    },
    { 
      id: 1, 
      title: "Minimalist Living Room", 
      description: "Clean lines and neutral tones create serenity", 
      images: ["Living.jpeg", "Living2.jpg"],
      expandedDescription: "An elegant living space based on thoughtful simplicity and clean lines. Neutral colors were carefully chosen to create a sense of tranquility and harmony, with furniture pieces that combine beauty and practical functionality.",
      category: "interior",
      rating: 4,
      features: ["Clean Lines", "Neutral Palette", "Functional Furniture", "Tranquil Atmosphere"]
    },
    { 
      id: 2, 
      title: "Contemporary Kitchen", 
      description: "Sleek functionality meets elegant aesthetics", 
      images: ["Kitchen.png"],
      expandedDescription: "A modern kitchen that embodies perfection in design and functionality, where advanced technology meets elegant design. High-quality materials and smart lighting systems were used to create an exceptional cooking environment.",
      category: "interior",
      rating: 5,
      features: ["Smart Technology", "High-end Materials", "Efficient Layout", "Ambient Lighting"]
    },
    { 
      id: 3, 
      title: "Luxury Kids Bedroom", 
      description: "Sophisticated comfort in perfect harmony", 
      images: ["Bedroom.webp"],
      expandedDescription: "A luxurious children's bedroom that achieves the perfect balance between fun and elegance. Designed to nurture a child's imagination while providing a safe and comfortable environment, using calm colors and interactive elements that stimulate creativity.",
      category: "interior",
      rating: 4,
      features: ["Child-Safe", "Creative Elements", "Calm Colors", "Interactive Design"]
    },
    { 
      id: 4, 
      title: "Executive Office", 
      description: "Professional environment with modern excellence", 
      images: ["4.png"],
      expandedDescription: "A sophisticated executive office that reflects success and professionalism, designed to enhance productivity and creativity. Combines luxury with practical functionality using high-quality materials and advanced lighting technologies.",
      category: "interior",
      rating: 5,
      features: ["Productivity Focus", "Luxury Materials", "Advanced Lighting", "Professional Style"]
    },
    { 
      id: 5, 
      title: "Elegant Dining Room", 
      description: "Where style meets memorable gatherings", 
      images: ["Dining.webp"],
      expandedDescription: "An elegant dining room designed to host special moments and warm family gatherings. Features a luxurious table and distinctive lighting that creates intimate and sophisticated atmospheres for unforgettable dining experiences.",
      category: "interior",
      rating: 4,
      features: ["Entertainment Ready", "Luxurious Table", "Atmospheric Lighting", "Family Focus"]
    },
    { 
      id: 6, 
      title: "Spa Bathroom", 
      description: "Luxury retreat with contemporary fixtures", 
      images: ["Bathroom.png"],
      expandedDescription: "A luxurious bathroom that mimics the atmosphere of world-class health resorts, where relaxation and well-being meet. Natural luxury materials and modern technologies were used to create a personal sanctuary for relaxation and renewal.",
      category: "interior",
      rating: 5,
      features: ["Spa-like", "Luxury Materials", "Modern Tech", "Relaxation Focus"]
    }
  ], []);

  // Image index calculation
  const getImageStartIndex = useCallback((projectIndex: number) => {
    return projects
      .slice(0, projectIndex)
      .flatMap(p => p.images ?? [])
      .length;
  }, [projects]);

  // Lightbox controls
  const openLightbox = useCallback((startIndex: number) => {
    setIsLoading(true);
    const images = projects.flatMap(p => p.images ?? []);
    setAllImages(images);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
    setTimeout(() => setIsLoading(false), CONFIG.animation.duration.short);
  }, [projects]);

  const closeLightbox = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setLightboxOpen(false);
      setIsLoading(false);
    }, CONFIG.animation.duration.short);
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    setCurrentImageIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? allImages.length - 1 : prev - 1;
      }
      return prev === allImages.length - 1 ? 0 : prev + 1;
    });
  }, [allImages.length]);

  const prevImage = useCallback(() => navigateImage('prev'), [navigateImage]);
  const nextImage = useCallback(() => navigateImage('next'), [navigateImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, prevImage, nextImage, closeLightbox]);

  // Touch controls
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > CONFIG.touch.swipeThreshold) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    
    setTouchStartX(null);
  };

  // Card interactions
  const handleCardClick = useCallback((projectId: number) => {
    setExpandedCard(prev => prev === projectId ? null : projectId);
  }, []);

  const handleImageClick = useCallback((e: React.MouseEvent, startIndex: number, index: number = 0) => {
    e.stopPropagation();
    openLightbox(startIndex + index);
  }, [openLightbox]);

  // Render methods for better organization
  const renderImageGrid = (imgs: string[], startIndex: number, projectId: number) => {
    if (imgs.length >= 4) {
      return (
        <div className="grid grid-cols-2 gap-1 aspect-[4/3] relative">
          {imgs.slice(0, 4).map((imgSrc, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={imgSrc}
                alt={`${projects.find(p => p.id === projectId)?.title} ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 cursor-pointer hover:scale-110"
                onClick={(e) => handleImageClick(e, startIndex, index)}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      );
    }

    if (imgs.length === 2) {
      return (
        <div className="flex gap-1 aspect-[4/3] relative">
          {imgs.map((imgSrc, index) => (
            <div key={index} className="relative w-1/2 overflow-hidden rounded-lg">
              <img
                src={imgSrc}
                alt={`${projects.find(p => p.id === projectId)?.title} ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 cursor-pointer hover:scale-110"
                onClick={(e) => handleImageClick(e, startIndex, index)}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      );
    }

    if (imgs.length === 1) {
      return (
        <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
          <img
            src={imgs[0]}
            alt={projects.find(p => p.id === projectId)?.title}
            className="w-full h-full object-cover transition-all duration-700 cursor-pointer hover:scale-110"
            onClick={(e) => handleImageClick(e, startIndex)}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />
        </div>
      );
    }

    return null;
  };

  const renderViewButton = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30 rounded-lg">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
       
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="relative min-h-screen bg-white overflow-hidden">
     

      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-transparent to-gray-800"></div>
      </div>

      <div className="relative z-10 py-12 sm:py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="flex items-center justify-center mb-6 sm:mb-10 md:mb-12">
                <div className="h-px w-12 sm:w-16 md:w-32 bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
                <div className="mx-3 sm:mx-4 md:mx-6 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gray-400 rotate-45 shadow-lg"></div>
                <div className="h-px w-12 sm:w-16 md:w-32 bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
              </div>
              
              {/* Category badge */}
              <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white backdrop-blur-sm rounded-full border border-gray-300 shadow-lg mb-6 md:mb-8">
                <span className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  ✦ Premium Interior Collection ✦
                </span>
              </div>

              {/* Main title */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 md:mb-8 tracking-tight leading-none">
                <span className="block">Interior</span>
                <span className="block text-gray-800">Masterworks</span>
              </h1>

              {/* Description */}
              <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                  Where <span className="font-semibold text-black">elegant interiors</span> meet 
                  <span className="font-semibold text-black"> functional sophistication</span>. 
                  Discover spaces designed to inspire.
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-center space-x-6 md:space-x-8 text-xs md:text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                    <span>{projects.length} Premium Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                    <span>100% Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {projects.map((project, projectIndex) => {
              const images = project.images ?? [];
              const startIndex = getImageStartIndex(projectIndex);
              const isExpanded = expandedCard === project.id;

              return (
                <div 
                  key={project.id} 
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card 
                    className={`relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer touch-manipulation ${
                      isExpanded ? 'scale-105 -translate-y-1 md:-translate-y-2 shadow-xl' : ''
                    }`}
                    onClick={() => handleCardClick(project.id)}
                  >
                    
                    {/* Image Container */}
                    <div className="relative p-3 md:p-4 pb-0">
                      <div className="relative overflow-hidden rounded-xl">
                        {renderImageGrid(images, startIndex, project.id)}
                        {renderViewButton()}
                        
                        {/* Rating badge */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-full shadow-lg">
                          <div className="flex items-center space-x-1">
                            <RatingStars rating={project.rating} />
                            <span className="text-xs font-semibold text-gray-700 ml-1">{project.rating}.0</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <CardContent className="p-4 md:p-6">
                      <div className="space-y-3 md:space-y-4">
                        {/* Title and description */}
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-black mb-1 md:mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Features chips */}
                        {project.features && (
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {project.features.slice(0, 3).map((feature, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                              >
                                {feature}
                              </span>
                            ))}
                            {project.features.length > 3 && (
                              <span className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                +{project.features.length - 3} more
                              </span>
                            )}
                          </div>
                        )}

                        {/* Expandable content */}
                        {isExpanded && project.expandedDescription && (
                          <div className="animate-fade-in">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-200 pt-3 md:pt-4 mt-3 md:mt-4">
                              {project.expandedDescription}
                            </p>
                          </div>
                        )}

                        {/* Expand/Collapse Button */}
                        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                          <button className="flex items-center space-x-1 md:space-x-2 text-black hover:text-gray-700 transition-colors duration-300 text-xs md:text-sm font-semibold touch-manipulation">
                            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                            ) : (
                              <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                            )}
                          </button>
                          
                          <div className="text-gray-400 text-xs md:text-sm font-medium">
                            {String(projectIndex + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button 
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 group z-20 touch-manipulation" 
            onClick={prevImage}
            aria-label="Previous image"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-2xl">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/90 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          
          {/* Image Display */}
          <div className="relative max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] max-h-[80vh] flex items-center justify-center z-10 px-2 sm:px-4 md:px-0">
            <div className="relative">
              <div className="relative p-1 md:p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl md:rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl">
                <img
                  src={allImages[currentImageIndex]}
                  alt="Portfolio Masterpiece"
                  className={`max-w-full max-h-full rounded-xl md:rounded-2xl transition-all duration-700 ease-out ${
                    isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              
              {/* Image counter */}
              <div className="absolute -bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-black/50 backdrop-blur-lg border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full">
                  <span className="text-white/90 text-xs md:text-sm font-medium">
                    {currentImageIndex + 1} of {allImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 group z-20 touch-manipulation" 
            onClick={nextImage}
            aria-label="Next image"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-2xl">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/90 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          
          {/* Close Button */}
          <button 
            className="absolute top-2 sm:top-4 md:top-8 right-2 sm:right-4 md:right-8 group z-20 touch-manipulation" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-2xl">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/90 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
          
          {/* Instructions */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="bg-black/50 backdrop-blur-lg border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full">
              <span className="text-white/70 text-xs md:text-sm font-medium">
                Use ← → keys or swipe to navigate • ESC to close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Main App Component
const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;