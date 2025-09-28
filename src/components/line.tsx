import { useState } from "react";
import { Play, ExternalLink, Home, Bell, Users, Eye, Clock } from "lucide-react";

const Videos = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "A Luxurious Architectural Journey with Lumion 2024",
      description: "Experience the elegance of high-end architecture in this exclusive villa design. From concept development to stunning visual rendering using Lumion 2024, this project showcases refined materials, dramatic lighting, and sophisticated spatial planning—crafted to reflect timeless luxury.",
      thumbnail: "https://youtu.be/7lTpXiLGsYI?si=_GQTQS7jNKZuEX9u",
      youtubeUrl: "https://youtu.be/7lTpXiLGsYI?si=_GQTQS7jNKZuEX9u",
      views: "2.1K",
      duration: "8:42",
      publishedAt: "3 days ago"
    },
    {
      id: 2,
      title: "The Art of Architectural Lighting with Lumion 2024 – A Luxurious Visual Journey",
      description: "Experience how lighting reshapes architectural interiors and exteriors in this creative showcase rendered with Lumion 2024. This project highlights how strategic lighting enhances materials, shadows, and spatial ambiance — delivering depth, realism, and architectural elegance in every frame.",
      thumbnail: "https://youtu.be/Y3GIdSMPpqw?si=J57ZVvktQqySknSx",
      youtubeUrl: "https://youtu.be/Y3GIdSMPpqw?si=J57ZVvktQqySknSx",
      views: "1.5K",
      duration: "6:15",
      publishedAt: "1 week ago"
    },
  ];

  const getYouTubeThumbnail = (url) => {
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

  const handleSubscribe = () => {
    window.open("https://youtube.com/@renderyourplan?si=OHzNBW5WbcNNixl0&sub_confirmation=1", "_blank");
  };

  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="videos" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
            <Play className="w-4 h-4" />
            <span>Featured Content</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Design Videos
          </h2>
          
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            Get an inside look at our design process and transformations through cinematic architectural visualizations
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              onClick={handleSubscribe}
              className="group flex items-center gap-2 md:gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              <Bell className="w-4 h-4 md:w-5 md:h-5" />
              <span>Subscribe to Our Channel</span>
            </button>

            <button
              onClick={scrollToHome}
              className="group flex items-center gap-2 md:gap-3 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              <Home className="w-4 h-4 md:w-5 md:h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Channel Stats */}
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-900 font-bold text-lg md:text-2xl">
                  <Users className="w-4 h-4 md:w-6 md:h-6 text-red-600" />
                  <span>1.2K+</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Subscribers</p>
              </div>
              
              <div className="w-px h-8 md:h-12 bg-gray-200"></div>
              
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-900 font-bold text-lg md:text-2xl">
                  <Eye className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  <span>15K+</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Total Views</p>
              </div>
              
              <div className="w-px h-8 md:h-12 bg-gray-200"></div>
              
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-900 font-bold text-lg md:text-2xl">
                  <Play className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                  <span>{videos.length}</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Videos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Card */}
              <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                {/* Thumbnail Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={getYouTubeThumbnail(video.thumbnail)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs md:text-sm font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                    
                    {/* Views Badge */}
                    <div className="absolute top-3 right-3 bg-white bg-opacity-90 text-gray-900 px-2 py-1 rounded text-xs md:text-sm font-medium flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4">
                    <span className="text-gray-500 text-xs md:text-sm font-medium">{video.publishedAt}</span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch on YouTube</span>
                    </a>
                    
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Share</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-20">
          <div className="bg-black text-white rounded-xl md:rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Transform Your Space?</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
              Subscribe to our channel for more architectural visualization content and design inspiration
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={handleSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Bell className="w-4 h-4 md:w-5 md:h-5" />
                <span>Subscribe Now</span>
              </button>
              
              <button
                onClick={scrollToHome}
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Home className="w-4 h-4 md:w-5 md:h-5" />
                <span>Back to Home</span>
              </button>
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
  );
};

export default Videos;