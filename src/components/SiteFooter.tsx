import { useState } from "react";

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
                  src="/logo."
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
                <a href="#home" className="block text-gray-300 hover:text-white transition">Home</a>
                <a href="#portfolio" className="block text-gray-300 hover:text-white transition">Portfolio</a>
                <a href="#videos" className="block text-gray-300 hover:text-white transition">Videos</a>
                <a href="#courses" className="block text-gray-300 hover:text-white transition">Courses</a>
                     <button
                onClick={() => setShowCv(true)}
                className="block text-gray-300 hover:text-white transition"
              >
                View CV 
              </button>
                  <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-300 mb-6">
                <p>Email: renderyourplan@gmail.com</p>
                <p>Phone: +962 7 7077 798 6</p>
                <p>Address: Amman, JO</p>
              </div>
          
            </div>
              </div>
            </div>

            {/* Contact Info + CV Button */}
          
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
            {/* زر إغلاق */}
            <button
              onClick={() => setShowCv(false)}
              className="absolute top-4 left-4 text-black text-2xl font-bold hover:text-gray-500"
            >
              ×
            </button>

            {/* عنوان اختياري */}
            <h2 className="text-xl font-semibold text-center text-black mb-4">
            My cv
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

export default Footer;
