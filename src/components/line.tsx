import { useState, useEffect } from "react";
import { Play, ExternalLink, Home, Bell, Users, Eye, Clock, Search, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

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
    <Link to="/" className="flex items-center">
  <img src="/logo.jpg" alt="RYP Logo" className="h-10 w-10 rounded-full object-cover" />
  <span className="ml-3 text-2xl font-bold text-black">Render Your Plan</span>
</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-600 transition-colors">Home</Link>
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

// Footer Component
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
                  src="/logo.jpg"
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
                <Link to="/" className="block text-gray-300 hover:text-white transition">Home</Link>
                <Link to="/line" className="block text-gray-300 hover:text-white transition">Videos</Link>
                <button
                  onClick={() => setShowCv(true)}
                  className="block text-gray-300 hover:text-white transition"
                >
                  View CV 
                </button>
              </div>
            </div>

            {/* Contact Info */}
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

const Videos = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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
              <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
                <Play className="w-4 h-4" />
                <span>Featured Content</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
                Design Videos
              </h2>
              
              <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
                Get an inside look at our design process and transformations through cinematic architectural visualizations
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-6 md:mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search videos by title or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-300 focus:border-black focus:outline-none text-black placeholder-gray-500 transition-all bg-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <button
                  onClick={handleSubscribe}
                  className="group flex items-center gap-2 md:gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base"
                >
                  <Bell className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Subscribe to Our Channel</span>
                </button>

                <Link
                  to="/"
                  className="group flex items-center gap-2 md:gap-3 bg-white hover:bg-gray-50 text-black px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base border border-gray-300"
                >
                  <Home className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>

            {/* Channel Stats */}
            <div className="flex justify-center mb-8 md:mb-16">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200">
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-black font-bold text-lg md:text-2xl">
                      <Users className="w-4 h-4 md:w-6 md:h-6" />
                      <span>35K+</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">Subscribers</p>
                  </div>
                  
                  <div className="w-px h-8 md:h-12 bg-gray-300"></div>
                  
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-black font-bold text-lg md:text-2xl">
                      <Eye className="w-4 h-4 md:w-6 md:h-6" />
                      <span>15K+</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">Total Views</p>
                  </div>
                  
                  <div className="w-px h-8 md:h-12 bg-gray-300"></div>
                  
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-black font-bold text-lg md:text-2xl">
                      <Play className="w-4 h-4 md:w-6 md:h-6" />
                      <span>{videos.length}</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">Videos</p>
                  </div>
                </div>
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
                            <span>Watch Now</span>
                          </button>
                          
                          <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-gray-50 text-black px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base border border-gray-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>YouTube</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">No videos found</h3>
                  <p className="text-gray-600">Try adjusting your search query</p>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-20">
              <div className="bg-black text-white rounded-xl md:rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-full mb-6">
                    <Bell className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't Miss Out!</h3>
                  <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Subscribe to our channel for exclusive architectural visualization content, design inspiration, and behind-the-scenes looks at our creative process
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleSubscribe}
                      className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg"
                    >
                      <Bell className="w-5 h-5" />
                      <span>Subscribe Now</span>
                    </button>
                    
                    <Link
                      to="/"
                      className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg border border-white border-opacity-30"
                    >
                      <Home className="w-5 h-5" />
                      <span>Back to Home</span>
                    </Link>
                  </div>
                </div>
              </div>
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