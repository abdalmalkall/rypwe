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
    langToggle: "عربي",
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
                                <div className="bg-black bg-opacity-80 text-white p-3 md:p-4 rounded transition-all duration-300">
                                  <Play className="w-6 h-6 md:w-8 md:h-8" fill="white" />
                                </div>
                              </button>

                              {/* Duration Badge */}
                              <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs font-medium">
                                <Clock className="w-3 h-3 inline mr-1" />
                              </div>
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
