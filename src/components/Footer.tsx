
const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.jpg" alt="RYP Logo" className="h-10 w-10 rounded-full object-cover" />
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
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#portfolio" className="block text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#videos" className="block text-gray-300 hover:text-white transition-colors">Videos</a>
              <a href="#courses" className="block text-gray-300 hover:text-white transition-colors">Courses</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@rypdesign.com</p>
              <p>Phone: +962 7 7077 798 6</p>
              <p>Address: 123 Design Street, Creative City, CC 12345</p>
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
  );
};

export default Footer;
