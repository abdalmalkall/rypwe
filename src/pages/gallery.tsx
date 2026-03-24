import { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang, type Lang } from "@/lib/lang";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  expandedDescription?: string;
  titleAr?: string;
  descriptionAr?: string;
  expandedDescriptionAr?: string;
  category: "interior";
  rating?: number;
  features?: string[];
  featuresAr?: string[];
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

const TRANSLATIONS = {
  en: {
    brand: "Render Your Plan",
    home: "Home",
    interior: "Interior Designs",
    exterior: "Exterior Designs",
    videos: "Videos",
    viewCv: "View CV",
    myCv: "My CV",
    quickLinks: "Quick Links",
    getInTouch: "Get In Touch",
    footerAbout:
      "Transforming spaces into extraordinary experiences through innovative interior design. We create environments that inspire and delight.",
    ledBy: "Led by Interior Designer Ibrahem Alyan",
    copyright: "© 2026 Ibrahim Alayan Interior Design. All rights reserved.",
    badge: "✦ Premium Interior Collection ✦",
    headerTitlePrimary: "Interior",
    headerTitleSecondary: "Masterworks",
    headerDesc:
      "Where elegant interiors meet functional sophistication. Discover spaces designed to inspire.",
    premiumProjects: "Premium Projects",
    clientSatisfaction: "100% Client Satisfaction",
    readMore: "Read More",
    showLess: "Show Less",
    lightboxAlt: "Portfolio Masterpiece",
    lightboxHint: "Use ← → keys or swipe to navigate • ESC to close",
    moreSuffix: "more",
      langToggle: "اللغة العربية",
  },
  ar: {
    brand: "Render Your Plan",
    home: "الرئيسية",
    interior: "تصاميم داخلية",
    exterior: "تصاميم خارجية",
    videos: "فيديوهات",
    viewCv: "عرض السيرة",
    myCv: "السيرة الذاتية",
    quickLinks: "روابط سريعة",
    getInTouch: "تواصل معنا",
    footerAbout:
      "نحوّل المساحات إلى تجارب استثنائية عبر تصميم داخلي مبتكر. نصنع بيئات تُلهم وتُسعد.",
    ledBy: "بإشراف المصمم الداخلي إبراهيم عليان",
    copyright: "© 2026 إبراهيم عليان للتصميم الداخلي. جميع الحقوق محفوظة.",
    badge: "✦ مجموعة داخلية مميزة ✦",
    headerTitlePrimary: "روائع",
    headerTitleSecondary: "التصميم الداخلي",
    headerDesc:
      "حيث تلتقي التصاميم الأنيقة مع الوظائف الذكية. اكتشف مساحات صُممت لتُلهمك.",
    premiumProjects: "مشاريع مميزة",
    clientSatisfaction: "رضا العملاء 100%",
    readMore: "اقرأ المزيد",
    showLess: "عرض أقل",
    lightboxAlt: "عمل من المعرض",
    lightboxHint: "استخدم الأسهم ← → أو السحب للتنقل • ESC للإغلاق",
    moreSuffix: "المزيد",
    langToggle: "English",
  },
} as const;

// Header Component
const Header = ({ lang, onToggleLang }: { lang: Lang; onToggleLang: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

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

  <span className="ml-3 text-2xl font-bold text-black">{t.brand}</span>
</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { to: "/", label: t.home },
                { to: "/gallery", label: t.interior },
                { to: "/exterior", label: t.exterior },
                { to: "/line", label: t.videos }
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
                {t.viewCv}
              </button>
              <button
                onClick={onToggleLang}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:text-black hover:border-gray-400 transition-all duration-300 font-medium"
                aria-label="Toggle language"
              >
                {t.langToggle}
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
                  { to: "/", label: t.home },
                  { to: "/gallery", label: t.interior },
                  { to: "/exterior", label: t.exterior },
                  { to: "/line", label: t.videos }
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
                  {t.viewCv}
                </button>
                <button
                  onClick={() => {
                    onToggleLang();
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:text-black hover:border-gray-400 transition-all duration-300 text-center"
                >
                  {t.langToggle}
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
              <h2 className="text-xl md:text-2xl font-bold text-black">{t.myCv}</h2>
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
const Footer = ({ lang }: { lang: Lang }) => {
  const [showCv, setShowCv] = useState(false);
  const t = TRANSLATIONS[lang];

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://youtube.com/@renderyourplan?si=OHzNBW5WbcNNixl0",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.978 2.978 0 0 0-2.096-2.104C19.63 3.5 12 3.5 12 3.5s-7.63 0-9.402.582a2.978 2.978 0 0 0-2.096 2.104A31.03 31.03 0 0 0 0 12a31.03 31.03 0 0 0 .502 5.814 2.978 2.978 0 0 0 2.096 2.104C4.37 20.5 12 20.5 12 20.5s7.63 0 9.402-.582a2.978 2.978 0 0 0 2.096-2.104A31.03 31.03 0 0 0 24 12a31.03 31.03 0 0 0-.502-5.814zM9.546 15.568V8.432l6.18 3.568-6.18 3.568z" />
        </svg>
      ),
      color: "hover:bg-red-600"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/render_your_plan/profilecard/?igsh=MWc3ZWF3dTUwMTlodA==",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 0.1 5.7 0.2 4.6 0.4 3.8 0.7 2.9 1 2.1 1.5 1.5 2.1.9 2.7.4 3.4.1 4.3c-.3.8-.5 1.9-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.4.6 3.2.3.9.8 1.6 1.4 2.2.6.6 1.3 1.1 2.2 1.4.8.3 1.9.5 3.2.6C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.4-.3 3.2-.6.9-.3 1.6-.8 2.2-1.4.6-.6 1.1-1.3 1.4-2.2.3-.8.5-1.9.6-3.2.1-1.3.1-1.7.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.4-.6-3.2-.3-.9-.8-1.6-1.4-2.2-.6-.6-1.3-1.1-2.2-1.4-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
        </svg>
      ),
      color: "hover:bg-pink-500"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/962790383135",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.07 1.51 5.82L0 24l6.33-1.5a11.937 11.937 0 0 0 5.67 1.44c6.627 0 12-5.373 12-12 0-3.21-1.27-6.22-3.48-8.46zM12 21.75a9.64 9.64 0 0 1-4.87-1.34l-.35-.21-3.75.89.89-3.66-.23-.37A9.52 9.52 0 0 1 2.25 12c0-5.2 4.23-9.44 9.44-9.44 2.52 0 4.88.98 6.64 2.75a9.352 9.352 0 0 1 2.75 6.7c0 5.2-4.23 9.44-9.44 9.44zm5.3-7.5c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.73.93-.9 1.12-.17.19-.35.21-.64.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.44.13-.59.14-.14.29-.35.43-.52.14-.17.19-.29.29-.48.1-.19.05-.35-.02-.5-.07-.15-.63-1.5-.86-2.06-.23-.54-.46-.47-.64-.47-.17 0-.37-.02-.57-.02s-.52.07-.79.35c-.26.29-1 1-1 2.44 0 1.44 1.02 2.84 1.16 3.04.14.19 2 3.05 4.84 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
        </svg>
      ),
      color: "hover:bg-green-500"
    },
    {
      name: "Email",
      href: "mailto:renderyourplan@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      color: "hover:bg-blue-600"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1FdEvP3idd/?mibextid=wwXIfr",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.406.592 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.324V1.324C24 .592 23.406 0 22.675 0z" />
        </svg>
      ),
      color: "hover:bg-blue-700"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ibrahem-alyan-a885a7387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:bg-blue-800"
    },
    {
      name: "Phone",
      href: "tel:+962790383135",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
        </svg>
      ),
      color: "hover:bg-emerald-500"
    }
  ];

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
                {t.footerAbout}
              </p>
              <p className="text-white font-semibold text-sm md:text-base">
                {t.ledBy}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">{t.quickLinks}</h3>
              <div className="space-y-2 md:space-y-3">
                {[
                  { to: "/", label: t.home },
                  { to: "/gallery", label: t.interior },
                  { to: "/exterior", label: t.exterior },
                  { to: "/line", label: t.videos }
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
                  {t.viewCv}
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">{t.getInTouch}</h3>
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
              {t.copyright}
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
              <h2 className="text-xl md:text-2xl font-bold text-black">{t.myCv}</h2>
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
const Gallery = ({ lang }: { lang: Lang }) => {
  const t = TRANSLATIONS[lang];
  const getFeatures = (project: Project) =>
    (lang === "ar" && project.featuresAr ? project.featuresAr : project.features) ?? [];
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

  // Scroll reveal effects
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in-view", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Interior Projects data
  const projects: Project[] = useMemo(() => [

    {
      id: 1,
      title: "Modern Living Room Interior Design",
      description: "Elegant Living Space with Contemporary Comfor",
      descriptionAr: "مساحة معيشة أنيقة بطابع معاصر ومريح",
      images: ["newphoto/living.png"],
      expandedDescription: "A sophisticated modern living room designed to balance comfort and visual elegance. Clean architectural lines, warm lighting, and refined materials create a welcoming and harmonious atmosphere. The space features minimalist furniture, carefully curated decor, and an open layout that enhances both functionality and flow. Natural light highlights the textures of wood, fabric, and stone, resulting in a contemporary living environment that feels both stylish and relaxing.",
      expandedDescriptionAr: "غرفة معيشة عصرية راقية صُممت لتحقيق توازن بين الراحة والأناقة البصرية. خطوط معمارية نظيفة وإضاءة دافئة ومواد مختارة بعناية تمنح المكان أجواء ترحيبية متناغمة. يضم التصميم أثاثًا بسيطًا وديكورًا منتقى بعناية مع مخطط مفتوح يعزز الوظيفة وسلاسة الحركة. يبرز الضوء الطبيعي خامات الخشب والقماش والحجر لينتج فضاءً معاصرًا يجمع بين الأناقة والهدوء.",
      category: "interior",
      rating: 5,
      features: ["Clean Lines", "Neutral Palette", "Functional Furniture", "Tranquil Atmosphere"]
    },

    {
      id: 2,
      title: "Stylish Bedroom",
      description: "Modern Bedroom with Timeless Charm",
      descriptionAr: "غرفة نوم عصرية بسحر خالد",
      images: ["bedroom3.jpg", "bedroom2.jpg"],
      expandedDescription: "A modern bedroom design that combines luxury and comfort, using warm colors and natural materials to create an atmosphere of calm and relaxation. Features carefully planned lighting and decorative touches that reflect refined taste.",
      expandedDescriptionAr: "تصميم غرفة نوم حديثة يجمع بين الفخامة والراحة، بألوان دافئة ومواد طبيعية لخلق أجواء هادئة ومريحة. إضاءة مدروسة ولمسات ديكورية تعكس ذوقًا راقيًا.",
      category: "interior",
      rating: 5,
      features: ["Luxury Materials", "Calm Atmosphere", "Smart Lighting", "Comfort Focus"]
    },
    {
      id: 3,
      title: "Minimalist Living Room",
      description: "Clean lines and neutral tones create serenity",
      descriptionAr: "خطوط نظيفة وألوان حيادية تصنع الهدوء",
      images: ["Living.jpeg", "Living2.jpg"],
      expandedDescription: "An elegant living space based on thoughtful simplicity and clean lines. Neutral colors were carefully chosen to create a sense of tranquility and harmony, with furniture pieces that combine beauty and practical functionality.",
      expandedDescriptionAr: "مساحة معيشة أنيقة تعتمد على بساطة مدروسة وخطوط نظيفة. ألوان حيادية مختارة بعناية لخلق إحساس بالسكينة والانسجام، مع قطع أثاث تجمع بين الجمال والوظيفة العملية.",
      category: "interior",
      rating: 4,
      features: ["Clean Lines", "Neutral Palette", "Functional Furniture", "Tranquil Atmosphere"]
    },
    {
      id: 4,
      title: "Contemporary Kitchen",
      description: "Sleek functionality meets elegant aesthetics",
      descriptionAr: "وظائف سلسة مع جمالية أنيقة",
      images: ["Kitchen.png"],
      expandedDescription: "A modern kitchen that embodies perfection in design and functionality, where advanced technology meets elegant design. High-quality materials and smart lighting systems were used to create an exceptional cooking environment.",
      expandedDescriptionAr: "مطبخ حديث يجسّد الكمال في التصميم والوظيفة، حيث تلتقي التقنية المتقدمة بالتصميم الأنيق. تم اعتماد مواد عالية الجودة وأنظمة إضاءة ذكية لخلق بيئة طهي استثنائية.",
      category: "interior",
      rating: 5,
      features: ["Smart Technology", "High-end Materials", "Efficient Layout", "Ambient Lighting"]
    },
    {
      id: 5,
      title: "Luxury Kids Bedroom",
      description: "Sophisticated comfort in perfect harmony",
      descriptionAr: "راحة راقية في تناغم تام",
      images: ["Bedroom.webp"],
      expandedDescription: "A luxurious children's bedroom that achieves the perfect balance between fun and elegance. Designed to nurture a child's imagination while providing a safe and comfortable environment, using calm colors and interactive elements that stimulate creativity.",
      expandedDescriptionAr: "غرفة أطفال فاخرة تحقق التوازن المثالي بين المتعة والأناقة. صُممت لتنمية خيال الطفل مع توفير بيئة آمنة ومريحة، بألوان هادئة وعناصر تفاعلية تحفّز الإبداع.",
      category: "interior",
      rating: 4,
      features: ["Child-Safe", "Creative Elements", "Calm Colors", "Interactive Design"]
    },
    {
      id: 6,
      title: "Executive Office",
      description: "Professional environment with modern excellence",
      descriptionAr: "بيئة احترافية بلمسة عصرية متقنة",
      images: ["4.png"],
      expandedDescription: "A sophisticated executive office that reflects success and professionalism, designed to enhance productivity and creativity. Combines luxury with practical functionality using high-quality materials and advanced lighting technologies.",
      expandedDescriptionAr: "مكتب تنفيذي راقٍ يعكس النجاح والاحتراف، صُمم لتعزيز الإنتاجية والإبداع. يجمع بين الفخامة والوظيفة العملية باستخدام مواد عالية الجودة وتقنيات إضاءة متقدمة.",
      category: "interior",
      rating: 5,
      features: ["Productivity Focus", "Luxury Materials", "Advanced Lighting", "Professional Style"]
    },
    {
      id: 7,
      title: "Elegant Dining Room",
      description: "Where style meets memorable gatherings",
      descriptionAr: "حيث يلتقي الذوق بجلسات لا تُنسى",
      images: ["Dining.webp"],
      expandedDescription: "An elegant dining room designed to host special moments and warm family gatherings. Features a luxurious table and distinctive lighting that creates intimate and sophisticated atmospheres for unforgettable dining experiences.",
      expandedDescriptionAr: "غرفة طعام أنيقة صُممت لاحتضان اللحظات الخاصة واللقاءات العائلية الدافئة. تتضمن طاولة فاخرة وإضاءة مميزة تخلق أجواء حميمة وراقية لتجارب طعام لا تُنسى.",
      category: "interior",
      rating: 4,
      features: ["Entertainment Ready", "Luxurious Table", "Atmospheric Lighting", "Family Focus"]
    },
    {
      id: 8,
      title: "Spa Bathroom",
      description: "Luxury retreat with contemporary fixtures",
      descriptionAr: "ملاذ فاخر بتجهيزات عصرية",
      images: ["Bathroom.png",],
      expandedDescription: "A luxurious bathroom that mimics the atmosphere of world-class health resorts, where relaxation and well-being meet. Natural luxury materials and modern technologies were used to create a personal sanctuary for relaxation and renewal.",
      expandedDescriptionAr: "حمّام فاخر يحاكي أجواء المنتجعات الصحية العالمية، حيث تلتقي الراحة بالعناية الذاتية. تم استخدام مواد طبيعية فاخرة وتقنيات حديثة لخلق ملاذ شخصي للاسترخاء والتجدد.",
      category: "interior",
      rating: 5,
      features: ["Spa-like", "Luxury Materials", "Modern Tech", "Relaxation Focus"]
    },
    {
      id:  9,
      title: "Spa Bathroom",
      description: "Luxury retreat with contemporary fixtures",
      descriptionAr: "ملاذ فاخر بتجهيزات عصرية",
      images: ["lurom.jpeg", "bathroom2.png", "bathroom3.png", "bathroom1.png"],
      expandedDescription: "A luxurious bathroom that mimics the atmosphere of world-class health resorts, where relaxation and well-being meet. Natural luxury materials and modern technologies were used to create a personal sanctuary for relaxation and renewal.",
      expandedDescriptionAr: "حمّام فاخر يحاكي أجواء المنتجعات الصحية العالمية، حيث تلتقي الراحة بالعناية الذاتية. تم استخدام مواد طبيعية فاخرة وتقنيات حديثة لخلق ملاذ شخصي للاسترخاء والتجدد.",
      category: "interior",
      rating: 5,
      features: ["Spa-like", "Luxury Materials", "Modern Tech", "Relaxation Focus"]
    },
    {
      id: 10,
      title: "Modern Bedroom Interior Design",
      description: "Calm and Elegant Bedroom with Warm Natural Materials",
      descriptionAr: "غرفة نوم هادئة وأنيقة بمواد طبيعية دافئة",
      images: ["newphoto/image.png", "newphoto/im1.png"],
      expandedDescription: "A serene modern bedroom designed to create a sense of comfort and balance. Soft natural tones, warm wood textures, and minimalist furniture shape a relaxing atmosphere ideal for rest. Integrated lighting and clean architectural lines enhance the spatial harmony, while carefully selected materials add depth and warmth to the design. The result is a refined contemporary bedroom that blends simplicity, functionality, and timeless elegance.",
      expandedDescriptionAr: "غرفة نوم عصرية هادئة صُممت لإحساس بالراحة والتوازن. ألوان طبيعية ناعمة وملامس خشب دافئة وأثاث بسيط تشكّل أجواء مثالية للراحة. إضاءة مدمجة وخطوط معمارية نظيفة تعزز انسجام المكان، مع مواد مختارة بعناية تضيف عمقًا ودفئًا. النتيجة غرفة نوم معاصرة راقية تجمع بين البساطة والوظيفة والأناقة الخالدة.",
      category: "interior",
      rating: 4,
      features: ["Clean Lines", "Neutral Palette", "Functional Furniture", "Tranquil Atmosphere"]
    },
    {
      id: 11,
      title: "Modern Interior Design",
      description: "Open Kitchen & Living Space with Elegant Details",
      descriptionAr: "مطبخ مفتوح وغرفة معيشة بتفاصيل أنيقة",
      images: ["rypimges/a-(1).jpg", "rypimges/rypimg.jpeg", "rypimges/a(2).jpeg", "rypimges/a(2).jpg"],
      expandedDescription: "A sleek modern interior combining kitchen and living area in perfect harmony. Artistic cabinet patterns, warm lighting, and minimalist furniture create a refined contemporary feel, enhanced by a touch of nature with an indoor box tree and soft ambient glow.",
      expandedDescriptionAr: "تصميم داخلي حديث وأنيق يجمع المطبخ وغرفة المعيشة بتناغم مثالي. نقوش خزائن فنية وإضاءة دافئة وأثاث بسيط تمنح إحساسًا معاصرًا راقيًا، مع لمسة طبيعية عبر شجرة داخلية وإضاءة محيطية ناعمة.",
      category: "interior",
      rating: 5,
      features: ["Open Concept", "Minimalist Design", "Natural Lighting", "Premium Materials"]
    },
    {
      id: 12,
      title: "Modern Bedroom Interior Design",
      description: "Open Kitchen & Living Space with Elegant Details",
      descriptionAr: "مطبخ مفتوح وغرفة معيشة بتفاصيل أنيقة",
      images: ["newphoto/bedroom1.png", "newphoto/bedroom2.png"],
      expandedDescription: "A serene modern bedroom designed to create a sense of comfort and balance. Soft natural tones, warm wood textures, and minimalist furniture shape a relaxing atmosphere ideal for rest. Integrated lighting and clean architectural lines enhance the spatial harmony, while carefully selected materials add depth and warmth to the design. The result is a refined contemporary bedroom that blends simplicity, functionality, and timeless elegance..",
      expandedDescriptionAr: "غرفة نوم عصرية هادئة صُممت لإحساس بالراحة والتوازن. ألوان طبيعية ناعمة وملامس خشب دافئة وأثاث بسيط تشكّل أجواء مثالية للراحة. إضاءة مدمجة وخطوط معمارية نظيفة تعزز انسجام المكان، مع مواد مختارة بعناية تضيف عمقًا ودفئًا. النتيجة غرفة نوم معاصرة راقية تجمع بين البساطة والوظيفة والأناقة الخالدة.",
      category: "interior",
      rating: 5,
      features: ["Open Concept", "Minimalist Design", "Natural Lighting", "Premium Materials"]
    },
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
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openLightbox(startIndex + index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 pointer-events-none" />
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
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openLightbox(startIndex + index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 pointer-events-none" />
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
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onClick={() => openLightbox(startIndex)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 pointer-events-none" />
        </div>
      );
    }

    return null;
  };

  return (
    <section id="portfolio" className="relative min-h-screen bg-white overflow-hidden">
      <style>{`
        .lux-reveal {
          opacity: 0;
          transform: translateY(24px) scale(0.98);
          filter: blur(6px);
          transition: opacity 700ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 700ms cubic-bezier(0.4, 0, 0.2, 1),
            filter 700ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform, filter;
        }
        .lux-reveal[data-in-view="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
        .lux-card[data-in-view="true"] .lux-ring {
          opacity: 1;
        }
        .lux-glow {
          background: radial-gradient(1200px 600px at 10% -10%, rgba(0, 0, 0, 0.08), transparent 60%),
            radial-gradient(900px 500px at 90% 10%, rgba(0, 0, 0, 0.06), transparent 55%);
        }
      `}</style>


      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-transparent to-gray-800"></div>
      </div>
      <div className="absolute inset-0 lux-glow pointer-events-none" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gray-200/60 blur-3xl pointer-events-none" />
      <div className="absolute top-32 -right-20 h-80 w-80 rounded-full bg-gray-300/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gray-200/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 py-12 sm:py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div
                className="flex items-center justify-center mb-6 sm:mb-10 md:mb-12 lux-reveal"
                data-animate
                style={{ transitionDelay: "0ms" }}
              >
                <div className="h-px w-12 sm:w-16 md:w-32 bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
                <div className="mx-3 sm:mx-4 md:mx-6 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gray-400 rotate-45 shadow-lg"></div>
                <div className="h-px w-12 sm:w-16 md:w-32 bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
              </div>

              {/* Category badge */}
              <div
                className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white backdrop-blur-sm rounded-full border border-gray-300 shadow-lg mb-6 md:mb-8 lux-reveal"
                data-animate
                style={{ transitionDelay: "80ms" }}
              >
                <span className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  {t.badge}
                </span>
              </div>

              {/* Main title */}
              <h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 md:mb-8 tracking-tight leading-none lux-reveal"
                data-animate
                style={{ transitionDelay: "140ms" }}
              >
                <span className="block">{t.headerTitlePrimary}</span>
                <span className="block text-gray-800">{t.headerTitleSecondary}</span>
              </h1>

              {/* Description */}
              <div
                className="max-w-3xl mx-auto space-y-4 md:space-y-6 lux-reveal"
                data-animate
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                  {t.headerDesc}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-center space-x-6 md:space-x-8 text-xs md:text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                    <span>{projects.length} {t.premiumProjects}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                    <span>{t.clientSatisfaction}</span>
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
                    data-animate
                    style={{ transitionDelay: `${Math.min(projectIndex * 60, 360)}ms` }}
                    className={`lux-reveal lux-card relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 touch-manipulation ${
                      isExpanded ? 'scale-105 -translate-y-1 md:-translate-y-2 shadow-xl' : ''
                    }`}
                  >
                    <div className="lux-ring pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 opacity-0 transition-opacity duration-700" />
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-black/80 via-gray-500 to-black/80" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-black/5 via-transparent to-black/10" />

                    {/* Image Container */}
                    <div className="relative p-3 md:p-4 pb-0">
                      <div className="relative overflow-hidden rounded-xl">
                        {renderImageGrid(images, startIndex, project.id)}

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
                            {lang === "ar" && project.titleAr ? project.titleAr : project.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {lang === "ar" && project.descriptionAr ? project.descriptionAr : project.description}
                          </p>
                        </div>

                        {/* Features chips */}
                        {project.features && (
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {getFeatures(project).slice(0, 3).map((feature, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                              >
                                {feature}
                              </span>
                            ))}
                            {getFeatures(project).length > 3 && (
                              <span className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                +{getFeatures(project).length - 3} {t.moreSuffix}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Expandable content */}
                        {isExpanded && project.expandedDescription && (
                          <div className="animate-fade-in">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-200 pt-3 md:pt-4 mt-3 md:mt-4">
                              {lang === "ar" && project.expandedDescriptionAr
                                ? project.expandedDescriptionAr
                                : project.expandedDescription}
                            </p>
                          </div>
                        )}

                        {/* Expand/Collapse Button */}
                        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                          <button
                            onClick={() => handleCardClick(project.id)}
                            className="flex items-center space-x-1 md:space-x-2 text-black hover:text-gray-700 transition-colors duration-300 text-xs md:text-sm font-semibold touch-manipulation"
                          >
                            <span>{isExpanded ? t.showLess : t.readMore}</span>
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
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 group z-20 touch-manipulation"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-2xl">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/90 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          {/* Image Display */}
          <div
            className="relative max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] max-h-[80vh] flex items-center justify-center z-10 px-2 sm:px-4 md:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative p-1 md:p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl md:rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl">
                <img
                  src={allImages[currentImageIndex]}
                  alt={t.lightboxAlt}
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
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
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
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
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
                {t.lightboxHint}
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
  const { lang, toggleLang } = useLang();

  return (
    <div className="min-h-screen flex flex-col bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Header lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1">
        <Gallery lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default GalleryPage;
