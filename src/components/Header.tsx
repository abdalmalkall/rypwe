import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";

const TRANSLATIONS = {
  en: {
    brand: "Render Your Plan",
    home: "Home",
    about: "About",
    designs: "Designs",
    videos: "Videos",
    exterior: "Exterior",
    contact: "Contact",
    viewCv: "View CV",
    langToggle: "اللغة العربية",
    cvTitle: "My CV",
  },
  ar: {
    brand: "Render Your Plan",
    home: "الرئيسية",
    about: "من نحن",
    designs: "التصاميم",
    videos: "فيديوهات",
    exterior: "التصاميم الخارجية",
    contact: "تواصل",
    viewCv: "عرض السيرة",
    langToggle: "English",
    cvTitle: "السيرة الذاتية",
  },
} as const;

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
            <div className="flex items-center shrink-0">
              <img src="/logo.jpg" alt="RYP Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className={`${lang === "ar" ? "mr-3" : "ml-3"} text-xl lg:text-2xl font-bold text-black whitespace-nowrap`}>
                {t.brand}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base">
              <a href="#home" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">{t.home}</a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">{t.about}</a>
              <a href="/gallery" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">{t.designs}</a>
              <a href="/line" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">{t.videos}</a>
              <a href="/exterior" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">{t.exterior}</a>
              {/* <a href="#courses" className="text-gray-900 hover:text-gray-600 transition-colors">Courses</a> */}
              <a href="#contact" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">{t.contact}</a>


              <button
                onClick={() => setShowCv(true)}
                className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {t.viewCv}
              </button>
              <button
                onClick={toggleLang}
                className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
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
                <a href="#home" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.home}</a>
                <a href="#about" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.about}</a>
                <a href="#gallery" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.designs}</a>
                <a href="/line" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.videos}</a>
                <a href="/exterior" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.exterior}</a>
                {/* <a href="#courses" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Courses</a> */}
                <a href="#contact" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">{t.contact}</a>

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
              {t.cvTitle}
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


export default Header;
