import { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Home, ArrowLeft, Mail, Phone, MapPin, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  expandedDescription?: string;
  category: "exterior";
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

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://youtube.com/@renderyourplan?si=OHzNBW5WbcNNixl0",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.978 2.978 0 0 0-2.096-2.104C19.63 3.5 12 3.5 12 3.5s-7.63 0-9.402.582a2.978 2.978 0 0 0-2.096 2.104A31.03 31.03 0 0 0 0 12a31.03 31.03 0 0 0 .502 5.814 2.978 2.978 0 0 0 2.096 2.104C4.37 20.5 12 20.5 12 20.5s7.63 0 9.402-.582a2.978 2.978 0 0 0 2.096-2.104A31.03 31.03 0 0 0 24 12a31.03 31.03 0 0 0-.502-5.814zM9.546 15.568V8.432l6.18 3.568-6.18 3.568z" />
        </svg>
      ),
      color: "hover:bg-gray-700"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/render_your_plan/profilecard/?igsh=MWc3ZWF3dTUwMTlodA==",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 0.1 5.7 0.2 4.6 0.4 3.8 0.7 2.9 1 2.1 1.5 1.5 2.1.9 2.7.4 3.4.1 4.3c-.3.8-.5 1.9-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.4.6 3.2.3.9.8 1.6 1.4 2.2.6.6 1.3 1.1 2.2 1.4.8.3 1.9.5 3.2.6C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.4-.3 3.2-.6.9-.3 1.6-.8 2.2-1.4.6-.6 1.1-1.3 1.4-2.2.3-.8.5-1.9.6-3.2.1-1.3.1-1.7.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.4-.6-3.2-.3-.9-.8-1.6-1.4-2.2-.6-.6-1.3-1.1-2.2-1.4-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
        </svg>
      ),
      color: "hover:bg-gray-700"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/962790383135",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.07 1.51 5.82L0 24l6.33-1.5a11.937 11.937 0 0 0 5.67 1.44c6.627 0 12-5.373 12-12 0-3.21-1.27-6.22-3.48-8.46zM12 21.75a9.64 9.64 0 0 1-4.87-1.34l-.35-.21-3.75.89.89-3.66-.23-.37A9.52 9.52 0 0 1 2.25 12c0-5.2 4.23-9.44 9.44-9.44 2.52 0 4.88.98 6.64 2.75a9.352 9.352 0 0 1 2.75 6.7c0 5.2-4.23 9.44-9.44 9.44zm5.3-7.5c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.73.93-.9 1.12-.17.19-.35.21-.64.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.44.13-.59.14-.14.29-.35.43-.52.14-.17.19-.29.29-.48.1-.19.05-.35-.02-.5-.07-.15-.63-1.5-.86-2.06-.23-.54-.46-.47-.64-.47-.17 0-.37-.02-.57-.02s-.52.07-.79.35c-.26.29-1 1-1 2.44 0 1.44 1.02 2.84 1.16 3.04.14.19 2 3.05 4.84 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
        </svg>
      ),
      color: "hover:bg-gray-700"
    },
    {
      name: "Email",
      href: "mailto:renderyourplan@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "hover:bg-gray-700"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1FdEvP3idd/?mibextid=wwXIfr",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.406.592 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.324V1.324C24 .592 23.406 0 22.675 0z" />
        </svg>
      ),
      color: "hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ibrahem-alyan-a885a7387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:bg-gray-700"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Interior Designs", href: "/gallery" },
    { name: "Exterior Designs", href: "/exterior" },
    { name: "Videos", href: "/line" },
    { name: "View CV", onClick: () => setShowCv(true) },
    { name: "Web Developer", href: "https://cl-hub.netlify.app/", external: true }
  ];

  return (
    <>
      <footer id="contact" className="bg-black text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  Ibrahem Alyan
                </span>
              </div>
              
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                Transforming spaces into extraordinary experiences through innovative interior design and architectural visualization.
              </p>
              
              <p className="text-gray-400 mb-6 md:mb-8">
                Led by Interior Designer Ibrahem Alyan
              </p>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`
                      w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg
                      border border-gray-700
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-105
                      ${social.color}
                    `}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">
                Quick Links
              </h3>
              <div className="space-y-2 md:space-y-3">
                {quickLinks.map((link) => (
                  link.onClick ? (
                    <button
                      key={link.name}
                      onClick={link.onClick}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-full text-left text-sm md:text-base"
                    >
                      <FileText className="w-4 h-4" />
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                    >
                      {link.external ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      )}
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Email</p>
                    <a href="mailto:renderyourplan@gmail.com" className="hover:text-white transition-colors text-sm md:text-base">
                      renderyourplan@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Phone</p>
                    <a href="tel:+962790383135" className="hover:text-white transition-colors text-sm md:text-base">
                      +962 7 9038 3135
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Location</p>
                    <p className="text-sm md:text-base">Amman, Jordan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 Ibrahem Alayan Interior Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* CV Modal */}
      {showCv && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setShowCv(false)}
        >
          <div
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white">
              <h2 className="text-lg md:text-xl font-bold text-black">Curriculum Vitae</h2>
              <button
                onClick={() => setShowCv(false)}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
            </div>

            {/* CV Image */}
            <div className="overflow-auto max-h-[calc(90vh-120px)]">
              <img
                src="/cv.jpeg"
                alt="Ibrahem Alyan CV"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
              <button
                onClick={() => setShowCv(false)}
                className="px-4 md:px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Exterior Component (Main Content)
const Exterior = () => {
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

  // Exterior Projects data
  const projects: Project[] = useMemo(() => [
    { 
      id: 1, 
      title: "Modern Villa Exterior", 
      description: "Contemporary architectural design with clean lines and natural integration", 
      images: ["ryp(1).JPG"],
      expandedDescription: "A stunning modern villa that seamlessly blends with its natural surroundings. Featuring clean architectural lines, large glass surfaces, and sustainable materials that create a harmonious connection between indoor and outdoor living spaces.",
      category: "exterior"
    },
    { 
      id: 2, 
      title: "Luxury Garden Design", 
      description: "Elegant landscape with water features and outdoor entertainment areas", 
      images: ["ryp(3).PNG", "ryp(4).PNG"],
      expandedDescription: "An exquisite garden design that transforms outdoor spaces into luxurious retreats. Incorporating water features, carefully curated plant selections, and sophisticated lighting to create an atmosphere of tranquility and elegance for outdoor entertainment and relaxation.",
      category: "exterior"
    },
    { 
      id: 3, 
      title: "Residential Complex Facade", 
      description: "Modern residential building with innovative architectural elements", 
      images: ["a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg"],
      expandedDescription: "An innovative residential complex featuring a dynamic facade that plays with light and shadow. The design incorporates sustainable materials and green building principles while maintaining a striking visual appeal that stands as a landmark in urban architecture.",
      category: "exterior"
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
            <span className="text-gray-700 font-medium tracking-wide text-sm sm:text-base">View Designs</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="exterior" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">


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
                <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 font-light block">
                  ✦ Exterior Architecture Collection ✦
                </span>
                <div className="h-px w-6 sm:w-8 bg-gray-300 mx-auto"></div>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-gray-900 mb-6 sm:mb-8 tracking-tighter leading-none">
                <span className="block font-thin">Exterior</span>
                <span className="block font-light italic bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Architecture
                </span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-extralight leading-relaxed tracking-wide px-4">
                  Where <em className="italic font-light">architectural vision</em> meets 
                  <em className="italic font-light"> timeless elegance</em>
                </p>
                <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-gray-400">
                  <div className="h-px w-8 sm:w-16 bg-gray-300"></div>
                  <span className="text-xs sm:text-sm tracking-widest font-light">{projects.length} ARCHITECTURAL PROJECTS</span>
                  <div className="h-px w-8 sm:w-16 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Exterior Grid */}
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
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-xs sm:text-sm uppercase tracking-wide">
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
                            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                              <span className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-light">
                                {isExpanded ? 'Architectural Gallery' : 'Explore Design'}
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
                  alt="Architectural Masterpiece"
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
const ExteriorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Exterior />
      </main>
      <Footer />
    </div>
  );
};

export default ExteriorPage;