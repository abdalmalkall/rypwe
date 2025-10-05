import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, FileText, X, Download } from "lucide-react";

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
      icon: <Mail className="w-5 h-5" />,
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
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Designs", href: "/gallery" },
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
                    <a
                      key={link.name}
                      href={link.href}
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
                    </a>
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

export default Footer;