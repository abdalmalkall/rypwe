import { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  expandedDescription?: string;
  category: "interior";
}

// Configuration constants
const CONFIG = {
  animation: {
    duration: {
      short: 300,
      medium: 500,
      long: 700,
    },
    easing: "ease-out",
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.jpg" alt="RYP Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="ml-3 text-2xl font-bold text-black">Render Your Plan</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-600 transition-colors">Home</Link>
              <Link to="/gallery" className="text-gray-900 hover:text-gray-600 transition-colors">Interior Designs</Link>
              <Link to="/exterior" className="text-gray-900 hover:text-gray-600 transition-colors">Exterior Designs</Link>
              <Link to="/line" className="text-gray-900 hover:text-gray-600 transition-colors">Videos</Link>
              <button
                onClick={() => setShowCv(true)}
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                View CV
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Home</Link>
                <Link to="/gallery" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Interior Designs</Link>
                <Link to="/exterior" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Exterior Designs</Link>
                <Link to="/line" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Videos</Link>
                <button
                  onClick={() => setShowCv(true)}
                  className="px-3 py-2 text-gray-900 hover:bg-gray-100 text-left"
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
          className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={() => setShowCv(false)}
        >
          <div
            className="relative bg-white rounded-xl p-4 shadow-2xl w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCv(false)}
              className="absolute top-4 left-4 text-black text-2xl font-bold hover:text-gray-500"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center text-black mb-4">
              My CV
            </h2>
            <img
              src="/cv.jpeg"
              alt="CV"
              className="w-full max-h-[75vh] object-contain rounded-md"
            />
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
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/logo.jpg"
                  alt="RYP Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="ml-3 text-2xl font-bold">RYP</span>
              </div>
              <p className="text-gray-300 mb-4">
                Transforming spaces into extraordinary experiences through innovative interior design.
              </p>
              <p className="text-gray-400 text-sm">
                Led by Interior Designer Ibrahem Alyan
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-white transition">Home</Link>
                <Link to="/gallery" className="block text-gray-300 hover:text-white transition">Interior Designs</Link>
                <Link to="/exterior" className="block text-gray-300 hover:text-white transition">Exterior Designs</Link>
                <Link to="/line" className="block text-gray-300 hover:text-white transition">Videos</Link>
                <button
                  onClick={() => setShowCv(true)}
                  className="block text-gray-300 hover:text-white transition"
                >
                  View CV 
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-300 mb-6">
                <p>Email: renderyourplan@gmail.com</p>
                <p>Phone: +962 7 7077 798 6</p>
                <p>Address: Amman, JO</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Ibrahim Alayan Interior Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* CV Modal */}
      {showCv && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={() => setShowCv(false)}
        >
          <div
            className="relative bg-white rounded-xl p-4 shadow-2xl w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCv(false)}
              className="absolute top-4 left-4 text-black text-2xl font-bold hover:text-gray-500"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center text-black mb-4">
              My CV
            </h2>
            <img
              src="/cv.jpeg"
              alt="CV"
              className="w-full max-h-[75vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </>
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
      id: 8, 
      title: "Stylish Bedroom", 
      description: "Modern Bedroom with a Touch of Timeless Charm", 
      images: ["bedroom3.jpg", "bedroom2.jpg"],
      expandedDescription: "A modern bedroom design that combines luxury and comfort, using warm colors and natural materials to create an atmosphere of calm and relaxation. Features carefully planned lighting and decorative touches that reflect refined taste.",
      category: "interior"
    },
    { 
      id: 1, 
      title: "Modern Minimalist Living Room", 
      description: "Clean lines and neutral tones create a serene living space", 
      images: ["Living.jpeg", "Living2.jpg"],
      expandedDescription: "An elegant living space based on thoughtful simplicity and clean lines. Neutral colors were carefully chosen to create a sense of tranquility and harmony, with furniture pieces that combine beauty and practical functionality.",
      category: "interior"
    },
    { 
      id: 2, 
      title: "Contemporary Kitchen Design", 
      description: "Sleek functionality meets elegant aesthetics", 
      images: ["Kitchen.png"],
      expandedDescription: "A modern kitchen that embodies perfection in design and functionality, where advanced technology meets elegant design. High-quality materials and smart lighting systems were used to create an exceptional cooking environment.",
      category: "interior"
    },
    { 
      id: 3, 
      title: "Luxury Kids Bedroom", 
      description: "Sophisticated comfort in monochromatic harmony", 
      images: ["Bedroom.webp"],
      expandedDescription: "A luxurious children's bedroom that achieves the perfect balance between fun and elegance. Designed to nurture a child's imagination while providing a safe and comfortable environment, using calm colors and interactive elements that stimulate creativity.",
      category: "interior"
    },
    { 
      id: 4, 
      title: "Executive Office Space", 
      description: "Professional environment with modern touches", 
      images: ["4.png"],
      expandedDescription: "A sophisticated executive office that reflects success and professionalism, designed to enhance productivity and creativity. Combines luxury with practical functionality using high-quality materials and advanced lighting technologies.",
      category: "interior"
    },
    { 
      id: 5, 
      title: "Dining Room Elegance", 
      description: "Where style meets functionality for memorable gatherings", 
      images: ["Dining.webp"],
      expandedDescription: "An elegant dining room designed to host special moments and warm family gatherings. Features a luxurious table and distinctive lighting that creates intimate and sophisticated atmospheres for unforgettable dining experiences.",
      category: "interior"
    },
    { 
      id: 6, 
      title: "Bathroom Sanctuary", 
      description: "Spa-like retreat with contemporary fixtures", 
      images: ["Bathroom.png"],
      expandedDescription: "A luxurious bathroom that mimics the atmosphere of world-class health resorts, where relaxation and well-being meet. Natural luxury materials and modern technologies were used to create a personal sanctuary for relaxation and renewal.",
      category: "interior"
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
    if (imgs.length > 1) {
      return (
        <div className="flex gap-0.5 sm:gap-1 aspect-[5/4] relative">
          {imgs.map((imgSrc, index) => (
            <div key={index} className="relative w-1/2 overflow-hidden">
              <img
                src={imgSrc}
                alt={`${projects.find(p => p.id === projectId)?.title} ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-1000 cursor-pointer filter brightness-105 contrast-110 ${
                  expandedCard === projectId ? 'scale-110' : 'group-hover:scale-110 sm:group-hover:scale-125'
                }`}
                onClick={(e) => handleImageClick(e, startIndex, index)}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          ))}
        </div>
      );
    }

    if (imgs.length === 1) {
      return (
        <div className="aspect-[5/4] overflow-hidden relative">
          <img
            src={imgs[0]}
            alt={projects.find(p => p.id === projectId)?.title}
            className={`w-full h-full object-cover transition-all duration-1000 cursor-pointer filter brightness-105 contrast-110 ${
              expandedCard === projectId ? 'scale-110' : 'group-hover:scale-110 sm:group-hover:scale-125'
            }`}
            onClick={(e) => handleImageClick(e, startIndex)}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </div>
      );
    }

    return null;
  };

  const renderViewButton = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
      <div className="transform translate-y-4 sm:translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-200">
        <div className="bg-white/95 backdrop-blur-md border border-white/20 px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-gray-700 font-medium tracking-wide text-sm sm:text-base">View Collection</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Back to Home Button */}
      <div className="fixed top-24 left-4 sm:left-8 z-40">
        <Link
          to="/"
          className="group flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4 text-gray-700 group-hover:text-gray-900 transition-colors" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Back to Home
          </span>
        </Link>
      </div>

      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent animate-pulse"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(209, 213, 219, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, rgba(243, 244, 246, 0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(243, 244, 246, 0.05) 25%, transparent 25%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 60px 60px, 60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 py-16 sm:py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 md:mb-28 relative">
            <div className="absolute -top-8 sm:-top-16 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-pulse"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
                <div className="mx-2 sm:mx-4 w-3 sm:w-4 h-3 sm:h-4 bg-gray-300 rotate-45 shadow-lg"></div>
                <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
              </div>
              
              <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 font-light block">
                  ✦ Interior Design Collection ✦
                </span>
                <div className="h-px w-6 sm:w-8 bg-gray-300 mx-auto"></div>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-gray-900 mb-6 sm:mb-8 tracking-tighter leading-none">
                <span className="block font-thin">Interior</span>
                <span className="block font-light italic bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Masterworks
                </span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-extralight leading-relaxed tracking-wide px-4">
                  Where <em className="italic font-light">elegant interiors</em> meet 
                  <em className="italic font-light"> functional sophistication</em>
                </p>
                <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-gray-400">
                  <div className="h-px w-8 sm:w-16 bg-gray-300"></div>
                  <span className="text-xs sm:text-sm tracking-widest font-light">{projects.length} PROJECTS</span>
                  <div className="h-px w-8 sm:w-16 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
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
                    className={`relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-8 hover:rotate-1 group-hover:bg-white/90 cursor-pointer ${
                      isExpanded ? 'scale-105 -translate-y-2 sm:-translate-y-4 shadow-4xl bg-white/95' : ''
                    }`}
                    onClick={() => handleCardClick(project.id)}
                  >
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                      {renderImageGrid(images, startIndex, project.id)}
                      {renderViewButton()}
                      
                      {/* Corner accent */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Area */}
                    <CardContent className="p-6 sm:p-8 md:p-10 relative bg-gradient-to-b from-white/90 to-white/95">
                      <div className="flex items-center justify-center mb-4 sm:mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200"></div>
                        <div className="mx-3 sm:mx-4">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200"></div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <h3 className={`text-xl sm:text-2xl md:text-3xl font-extralight text-gray-900 tracking-wide leading-tight group-hover:text-gray-700 transition-all duration-500 ${
                          isExpanded ? 'text-xl sm:text-2xl mb-2' : ''
                        }`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-gray-600 leading-relaxed sm:leading-loose font-light tracking-wide transition-all duration-500 ${
                          isExpanded ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
                        }`}>
                          {isExpanded && project.expandedDescription ? 
                            project.expandedDescription : 
                            project.description
                          }
                        </p>

                        {/* Expand/Collapse Button */}
                        <div className="flex items-center justify-center pt-3 sm:pt-4">
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-300 text-xs sm:text-sm uppercase tracking-wide">
                            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                            <svg 
                              className={`w-3 sm:w-4 h-3 sm:h-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        {/* Action Area */}
                        <div className={`border-t border-gray-100 transition-all duration-500 ${
                          isExpanded ? 'pt-3 sm:pt-4 mt-3 sm:mt-4' : 'pt-4 sm:pt-6 mt-4 sm:mt-6'
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-500 group-hover:text-gray-700 transition-colors duration-500">
                              <span className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-light">
                                {isExpanded ? 'Image Gallery' : 'Explore'}
                              </span>
                              <div className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500">
                                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                            
                            <div className="text-gray-300 text-xs sm:text-sm font-light">
                              {String(projectIndex + 1).padStart(2, '0')}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating decoration */}
                      {hoveredCard === project.id && (
                        <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-xl opacity-80 animate-pulse"></div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/96 backdrop-blur-2xl flex items-center justify-center z-50 transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-black/50 to-black opacity-60"></div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-2 sm:left-4 md:left-12 top-1/2 transform -translate-y-1/2 group z-20" 
            onClick={prevImage}
            aria-label="Previous image"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          
          {/* Image Display */}
          <div className="relative max-w-[90vw] sm:max-w-[85vw] max-h-[70vh] sm:max-h-[85vh] flex items-center justify-center z-10 px-4 sm:px-0">
            <div className="relative">
              <div className="relative p-1 sm:p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-white/20">
                <img
                  src={allImages[currentImageIndex]}
                  alt="Portfolio Masterpiece"
                  className={`max-w-full max-h-full rounded-xl sm:rounded-2xl shadow-4xl transition-all duration-700 ease-out ${
                    isLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                  }`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              
              <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 sm:space-x-8">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                  <span className="text-white/90 text-xs sm:text-sm font-light tracking-wide">
                    {currentImageIndex + 1} of {allImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="absolute right-2 sm:right-4 md:right-12 top-1/2 transform -translate-y-1/2 group z-20" 
            onClick={nextImage}
            aria-label="Next image"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          
          {/* Close Button */}
          <button 
            className="absolute top-4 sm:top-8 md:top-12 right-4 sm:right-8 md:right-12 group z-20" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90">
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
          
          {/* Instructions */}
          <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center hidden sm:block">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <span className="text-white/70 text-xs font-light tracking-wide">
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;