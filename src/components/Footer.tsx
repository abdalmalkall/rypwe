import { useState } from "react";

const Footer = () => {
  const [showCv, setShowCv] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-10 sm:px-9 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
             
                <span className="ml-3 text-2xl font-bold">Ibrahem Alyan</span>
              </div>
              <p className="text-gray-300 mb-4">
                Transforming spaces into extraordinary experiences through innovative interior design.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Led by Interior Designer Ibrahem Alyan
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {/* YouTube */}
                <a
                  href="https://youtube.com/@renderyourplan?si=OHzNBW5WbcNNixl0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a2.978 2.978 0 0 0-2.096-2.104C19.63 3.5 12 3.5 12 3.5s-7.63 0-9.402.582a2.978 2.978 0 0 0-2.096 2.104A31.03 31.03 0 0 0 0 12a31.03 31.03 0 0 0 .502 5.814 2.978 2.978 0 0 0 2.096 2.104C4.37 20.5 12 20.5 12 20.5s7.63 0 9.402-.582a2.978 2.978 0 0 0 2.096-2.104A31.03 31.03 0 0 0 24 12a31.03 31.03 0 0 0-.502-5.814zM9.546 15.568V8.432l6.18 3.568-6.18 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/render_your_plan/profilecard/?igsh=MWc3ZWF3dTUwMTlodA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 0.1 5.7 0.2 4.6 0.4 3.8 0.7 2.9 1 2.1 1.5 1.5 2.1.9 2.7.4 3.4.1 4.3c-.3.8-.5 1.9-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.4.6 3.2.3.9.8 1.6 1.4 2.2.6.6 1.3 1.1 2.2 1.4.8.3 1.9.5 3.2.6C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.4-.3 3.2-.6.9-.3 1.6-.8 2.2-1.4.6-.6 1.1-1.3 1.4-2.2.3-.8.5-1.9.6-3.2.1-1.3.1-1.7.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.4-.6-3.2-.3-.9-.8-1.6-1.4-2.2-.6-.6-1.3-1.1-2.2-1.4-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/962770777986"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.07 1.51 5.82L0 24l6.33-1.5a11.937 11.937 0 0 0 5.67 1.44c6.627 0 12-5.373 12-12 0-3.21-1.27-6.22-3.48-8.46zM12 21.75a9.64 9.64 0 0 1-4.87-1.34l-.35-.21-3.75.89.89-3.66-.23-.37A9.52 9.52 0 0 1 2.25 12c0-5.2 4.23-9.44 9.44-9.44 2.52 0 4.88.98 6.64 2.75a9.352 9.352 0 0 1 2.75 6.7c0 5.2-4.23 9.44-9.44 9.44zm5.3-7.5c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.73.93-.9 1.12-.17.19-.35.21-.64.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.44.13-.59.14-.14.29-.35.43-.52.14-.17.19-.29.29-.48.1-.19.05-.35-.02-.5-.07-.15-.63-1.5-.86-2.06-.23-.54-.46-.47-.64-.47-.17 0-.37-.02-.57-.02s-.52.07-.79.35c-.26.29-1 1-1 2.44 0 1.44 1.02 2.84 1.16 3.04.14.19 2 3.05 4.84 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:renderyourplan@gmail.com"
                  aria-label="Email"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l7.65 5.15c.2.14.45.14.65 0L20 8v10H4z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1FdEvP3idd/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.406.592 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.324V1.324C24 .592 23.406 0 22.675 0z" />
                  </svg>
                </a>
              </div>
            </div>
{/* Quick Links */}
<div>
  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
  <div className="space-y-2">
    <a href="#home" className="block text-gray-300 hover:text-white transition">Home</a>
    <a href="#portfolio" className="block text-gray-300 hover:text-white transition">Portfolio</a>
    <a href="#videos" className="block text-gray-300 hover:text-white transition">Videos</a>
    <button
      onClick={() => setShowCv(true)}
      className="block text-gray-300 hover:text-white transition"
    >
      View CV
    </button>
    <a
      href="https://abdalmalkall.github.io/communication-launcher/"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-300 hover:text-white transition"
    >
      Web Developer
    </a>
  </div>
</div>


            {/* Get In Touch */}
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
            {/* Close Button */}
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

export default Footer;
