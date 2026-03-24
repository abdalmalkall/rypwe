import { useState, useEffect } from "react";
import { Play, ExternalLink, Clock, Search, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/lang";

const TRANSLATIONS = {
  en: {
    brand: "Render Your Plan",
    home: "Home",
    videos: "Videos",
    viewCv: "View CV",
    myCv: "My CV",
    title: "Design Videos",
    subtitle:
      "Get an inside look at our design process and transformations through cinematic architectural visualizations",
    watchNow: "Watch Now",
    youtube: "YouTube",
    noVideos: "No videos found",
    adjustSearch: "Try adjusting your search query",
    quickLinks: "Quick Links",
    getInTouch: "Get In Touch",
    footerAbout:
      "Transforming spaces into extraordinary experiences through innovative interior design.",
    ledBy: "Led by Interior Designer Ibrahem Alyan",
    email: "Email: renderyourplan@gmail.com",
    phone: "Phone: +962 7 7077 798 6",
    address: "Address: Amman, JO",
    copyright: "© 2026 Ibrahim Alayan Interior Design. All rights reserved.",
        langToggle: "اللغة العربية",
  },
  ar: {
    brand: "Render Your Plan",
    home: "الرئيسية",
    videos: "فيديوهات",
    viewCv: "عرض السيرة",
    myCv: "السيرة الذاتية",
    title: "فيديوهات التصميم",
    subtitle:
      "نظرة على عملية التصميم والتحوّلات من خلال تصوّرات معمارية سينمائية",
    watchNow: "شاهد الآن",
    youtube: "يوتيوب",
    noVideos: "لا توجد فيديوهات",
    adjustSearch: "جرّب تعديل البحث",
    quickLinks: "روابط سريعة",
    getInTouch: "تواصل معنا",
    footerAbout:
      "نحوّل المساحات إلى تجارب استثنائية عبر التصميم الداخلي المبتكر.",
    ledBy: "بإشراف المصمم الداخلي إبراهيم عليان",
    email: "البريد الإلكتروني: renderyourplan@gmail.com",
    phone: "الهاتف: +962 7 7077 798 6",
    address: "العنوان: عمّان، الأردن",
    copyright: "© 2026 إبراهيم عليان للتصميم الداخلي. جميع الحقوق محفوظة.",
    langToggle: "English",
  },
} as const;

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const { lang, toggleLang } = useLang();
  const t = TRANSLATIONS[lang];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
    <Link to="/" className="flex items-center">
  <img src="/logo.jpg" alt="RYP Logo" className="h-10 w-10 rounded-full object-cover" />
  <span className={`${lang === "ar" ? "mr-3" : "ml-3"} text-2xl font-bold text-black`}>{t.brand}</span>
</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-600 transition-colors">{t.home}</Link>
              <Link to="/line" className="text-gray-900 hover:text-gray-600 transition-colors">{t.videos}</Link>
              <button
                onClick={() => setShowCv(true)}
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                {t.viewCv}
              </button>
              <button
                onClick={toggleLang}
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                {t.langToggle}
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
                <Link to="/" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.home}</Link>
                <Link to="/line" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.videos}</Link>
                <button
                  onClick={() => setShowCv(true)}
                  className="px-3 py-2 text-gray-900 hover:bg-gray-100 text-left"
                >
                  {t.viewCv}
                </button>
                <button
                  onClick={toggleLang}
                  className="px-3 py-2 text-gray-900 hover:bg-gray-100 text-left"
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
          className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={() => setShowCv(false)}
        >
          <div
            className="relative bg-white rounded-xl p-4 shadow-2xl w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زر إغلاق */}
            <button
              onClick={() => setShowCv(false)}
              className="absolute top-4 left-4 text-black text-2xl font-bold hover:text-gray-500"
            >
              ×
            </button>

            {/* عنوان اختياري */}
            <h2 className="text-xl font-semibold text-center text-black mb-4">
              {t.myCv}
            </h2>

            {/* صورة CV */}
            <img
              src="/cv.jpeg"
              alt="CV"
              className="w-full max-h-[75vh] object-contain rounded-md"
            />

            {/* زر تحميل */}
            <div className="mt-6 text-center">

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
  const { lang } = useLang();
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
                {t.footerAbout}
              </p>
              <p className="text-gray-400 text-sm">
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
                    className={`w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-white transition">{t.home}</Link>
                <Link to="/line" className="block text-gray-300 hover:text-white transition">{t.videos}</Link>
                <button
                  onClick={() => setShowCv(true)}
                  className="block text-gray-300 hover:text-white transition"
                >
                  {t.viewCv}
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.getInTouch}</h3>
              <div className="space-y-2 text-gray-300 mb-6">
                <p>{t.email}</p>
                <p>{t.phone}</p>
                <p>{t.address}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              {t.copyright}
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
            {/* زر إغلاق */}
            <button
              onClick={() => setShowCv(false)}
              className="absolute top-4 left-4 text-black text-2xl font-bold hover:text-gray-500"
            >
              ×
            </button>

            {/* عنوان اختياري */}
            <h2 className="text-xl font-semibold text-center text-black mb-4">
              {t.myCv}
            </h2>

            {/* صورة CV */}
            <img
              src="/cv.jpeg"
              alt="CV"
              className="w-full max-h-[75vh] object-contain rounded-md"
            />

            {/* زر تحميل */}
            <div className="mt-6 text-center">

            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Videos = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  // Auto scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const videos = [
    {
      id: 1,
      title: "A Luxurious Architectural Journey with Lumion 2024",
      description: "Experience the elegance of high-end architecture in this exclusive villa design. From concept development to stunning visual rendering using Lumion 2024, this project showcases refined materials, dramatic lighting, and sophisticated spatial planning—crafted to reflect timeless luxury.",
      thumbnail: "https://youtu.be/7lTpXiLGsYI?si=_GQTQS7jNKZuEX9u",
      youtubeUrl: "https://youtu.be/7lTpXiLGsYI?si=_GQTQS7jNKZuEX9u",
    },
    {
      id: 2,
      title: "The Art of Architectural Lighting with Lumion 2024 – A Luxurious Visual Journey",
      description: "Experience how lighting reshapes architectural interiors and exteriors in this creative showcase rendered with Lumion 2024. This project highlights how strategic lighting enhances materials, shadows, and spatial ambiance — delivering depth, realism, and architectural elegance in every frame.",
      thumbnail: "https://youtu.be/Y3GIdSMPpqw?si=J57ZVvktQqySknSx",
      youtubeUrl: "https://youtu.be/Y3GIdSMPpqw?si=J57ZVvktQqySknSx",
    },
    {
      id: 3,
      title: "Modern Travel Shop Design in Industrial Style",
      description: "Explore the transformation of a travel shop into a modern industrial space. This project highlights the use of raw materials, open layouts, and functional design elements to create an inviting retail environment that reflects contemporary aesthetics and practicality.",
      thumbnail: "https://youtu.be/oRgEdrtIbMI?si=nbyQ1DS-l7CnObZy",
      youtubeUrl: "https://youtu.be/oRgEdrtIbMI?si=nbyQ1DS-l7CnObZy",
    },
    {
      id: 4,
      title: "Modern Home Interior Design",
      description: "Modern Contemporary Residential House Design with Elegant Architectural Details",
      thumbnail: "https://youtu.be/57rifx3j2Zk?is=Wa9aSxlxoN8NAi_s",
      youtubeUrl: "https://youtu.be/57rifx3j2Zk?is=Wa9aSxlxoN8NAi_s",
    },
    {
      id: 5,
      title: "Modern Contemporary Residential House Design",
      description: "Modern Home Interior Design | Calm, Cozy and Elegant Living Spaces",
      thumbnail: "https://youtu.be/Kp25glLkwfU?is=cglLzoP4fhLwmB3H",
      youtubeUrl: "https://youtu.be/Kp25glLkwfU?is=cglLzoP4fhLwmB3H",
    }
  ];

  const getYouTubeThumbnail = (url: string) => {
    try {
      const cleanUrl = url.split("?")[0];
      const videoId = cleanUrl.includes("youtu.be")
        ? cleanUrl.split("/").pop()
        : new URLSearchParams(new URL(cleanUrl).search).get("v");
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } catch {
      return "/api/placeholder/600/400";
    }
  };

  const getYouTubeVideoId = (url: string) => {
    try {
      const cleanUrl = url.split("?")[0];
      return cleanUrl.includes("youtu.be")
        ? cleanUrl.split("/").pop()
        : new URLSearchParams(new URL(cleanUrl).search).get("v");
    } catch {
      return null;
    }
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubscribe = () => {
    window.open("https://youtube.com/@renderyourplan?si=OHzNBW5WbcNNixl0&sub_confirmation=1", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="videos" className="py-12 md:py-20 bg-white relative">
          {/* Back to Home Button */}


          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-16">


              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
                {t.title}
              </h2>

              <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
                {t.subtitle}
              </p>

              {/* Search Bar */}


              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">




              </div>
            </div>





            {/* Videos Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    {/* Video Card */}
                    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 hover:border-gray-400">
                      {/* Video Player or Thumbnail */}
                      <div className="relative overflow-hidden">
                        <div className="aspect-video relative bg-black">
                          {playingVideo === video.id ? (
                            <div className="relative w-full h-full">
                              <iframe
                                src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.youtubeUrl)}?autoplay=1`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              />
                              <button
                                onClick={() => setPlayingVideo(null)}
                                className="absolute top-4 right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded transition-all z-10"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          ) : (
                            <>
                              <img
                                src={getYouTubeThumbnail(video.thumbnail)}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />

                              {/* Play Button Overlay */}
                              <button
                                onClick={() => setPlayingVideo(video.id)}
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                              >
                              </button>

                            </>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 leading-tight line-clamp-2">
                          {video.title}
                        </h3>

                        <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-3">
                          {video.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => setPlayingVideo(video.id)}
                            className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                          >
                            <Play className="w-4 h-4" />
                            <span>{t.watchNow}</span>
                          </button>

                          <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-gray-50 text-black px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base border border-gray-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{t.youtube}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">{t.noVideos}</h3>
                  <p className="text-gray-600">{t.adjustSearch}</p>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-20">

            </div>
          </div>

          {/* Custom Styles */}
          <style>{`
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
