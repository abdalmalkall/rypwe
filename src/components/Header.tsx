
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.jpg" alt="RYP Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="ml-3 text-2xl font-bold text-black">RYP</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-900 hover:text-gray-600 transition-colors">Home</a>
            <a href="#portfolio" className="text-gray-900 hover:text-gray-600 transition-colors">Portfolio</a>
            <a href="#videos" className="text-gray-900 hover:text-gray-600 transition-colors">Videos</a>
            <a href="#courses" className="text-gray-900 hover:text-gray-600 transition-colors">Courses</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
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
              <a href="#home" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Home</a>
              <a href="#portfolio" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Portfolio</a>
              <a href="#videos" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Videos</a>
              <a href="#courses" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Courses</a>
              <a href="#contact" className="px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
