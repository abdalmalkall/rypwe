import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/pages/gallery";
import Line from "@/components/line"; 
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Camera, ArrowRight, Sparkles, Star, Zap, Users, Clock, Play } from "lucide-react";

const Index: React.FC = () => {
  // صور المعرض
  const galleryImages = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  ];

  // صور الفيديو
  const videoThumbnails = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-12 md:mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  Design Portfolio
                </h2>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover our curated collection of modern interior designs where innovation meets comfort
              </p>
            </div>

            {/* Gallery Entrance Card */}
            <div className="flex justify-center mb-16">
              <Link
                to="/gallery"
                className="group block w-full max-w-4xl overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                {/* Main Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src="Living.jpeg"
                    alt="Interior Design Gallery"
                    className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                          Elevating Interior Design
                        </h3>
                        <p className="text-gray-200 text-lg mb-4 hidden md:block">
                          Where aesthetics meet comfort in perfect harmony
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-white text-white" />
                              ))}
                            </div>
                            <span className="text-white text-sm">Premium Collection</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview Images Grid */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-800">Gallery Preview</span>
                    <span className="text-xs text-gray-600">{galleryImages.length} images</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {galleryImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Gallery preview ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Info Section */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm font-medium text-gray-800">
                          Live Updates
                        </span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <span className="text-sm text-gray-600">
                        New projects weekly
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Explore Gallery
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="h-2 bg-gray-800 rounded-full w-4/5 transition-all duration-500" />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Collection Progress</span>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
              {[
                { icon: Camera, number: "50+", label: "Featured Projects" },
                { icon: Users, number: "11+", label: "Design Styles" },
                { icon: Clock, number: "24/7", label: "Accessible" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 text-gray-800 mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 text-lg"
              >
                <Camera className="w-5 h-5" />
                Explore Full Gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="line" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            {/* Video Section Header */}
            <div className="text-center mb-12 md:mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  Design Videos
                </h2>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Watch our design process come to life through captivating videos
              </p>
            </div>

            {/* Video Entrance Card */}
            <div className="flex justify-center mb-16">
              <Link
                to="/line"
                className="group block w-full max-w-4xl overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
              >
                {/* Video Preview Container */}
                <div className="relative overflow-hidden bg-gray-900">
                  <div className="w-full h-64 md:h-96 flex items-center justify-center relative">
                    {/* Play Button */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Video Thumbnail Background */}
                    <img
                      src={videoThumbnails[0]}
                      alt="Video preview"
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                          Behind The Design
                        </h3>
                        <p className="text-gray-300 text-lg mb-4 hidden md:block">
                          Exclusive look at our creative process
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-white text-white" />
                              ))}
                            </div>
                            <span className="text-gray-300 text-sm">Premium Content</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnails Grid */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-800">Video Previews</span>
                    <span className="text-xs text-gray-600">{videoThumbnails.length} videos</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {videoThumbnails.map((thumbnail, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={thumbnail}
                          alt={`Video preview ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Info Section */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm font-medium text-gray-800">
                          New Videos
                        </span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <span className="text-sm text-gray-600">
                        Updated regularly
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Watch Videos
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="h-2 bg-gray-800 rounded-full w-3/4 transition-all duration-500" />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Content Progress</span>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
              {[
                { icon: Play, number: "3+", label: "Design Videos" },
                { icon: Clock, number: "24/7", label: "Available" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 text-gray-800 mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
        
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;