import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/pages/gallery";
import Line from "@/components/line";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Camera, ArrowRight, Sparkles, Star, Zap, Users, Clock, Play } from "lucide-react";

const Index: React.FC = () => {
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
        <section id="gallery" className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-8 md:mb-16">
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                <Sparkles className="text-gray-800 w-6 h-6 md:w-10 md:h-10" />
                <h2 className="text-2xl md:text-5xl font-bold text-black">
                  Design Portfolio
                </h2>
                <Sparkles className="text-gray-800 w-6 h-6 md:w-10 md:h-10" />
              </div>
              <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
                Discover our curated collection of modern interior designs where innovation meets comfort, 
                and every space tells a unique story
              </p>
            </div>

            {/* Gallery Entrance Card */}
            <div className="flex justify-center">
              <Link
                to="/gallery"
                className="group relative block w-full max-w-2xl mx-auto overflow-hidden rounded-xl md:rounded-3xl bg-white shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 border border-gray-300"
              >
                {/* Main Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src="Living.jpeg"
                    alt="Interior Design Gallery"
                    className="w-full h-48 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-2 py-1 md:px-3 md:py-1 border border-gray-300">
                      <span className="text-gray-800 text-xs md:text-sm font-medium flex items-center gap-1">
                        <Zap className="w-3 h-3 md:w-4 md:h-4" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">
                          Elevating Interior Design
                        </h3>
                        <p className="text-white/90 text-sm md:text-lg mb-2 md:mb-4 hidden md:block">
                          Where aesthetics meet comfort in perfect harmony
                        </p>
                        <div className="flex items-center gap-2 md:gap-4">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-white/80 text-xs md:text-sm">Premium Collection</span>
                        </div>
                      </div>
                      <div className="p-2 md:p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="relative p-4 md:p-8 bg-white">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-gray-800">
                          Live Updates
                        </span>
                      </div>
                      <div className="w-px h-3 md:h-4 bg-gray-400"></div>
                      <span className="text-xs md:text-sm text-gray-700 hidden sm:block">
                        New projects weekly
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        Explore
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                      <div 
                        className="h-2 md:h-3 bg-gray-800 rounded-full transition-all duration-500 group-hover:w-full w-4/5"
                      >
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Collection Progress</span>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { icon: Camera, number: "50+", label: "Featured Projects" },
                { icon: Users, number: "11+", label: "Design Styles" },
                { icon: Clock, number: "24/7", label: "Accessible" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 md:p-8 bg-white rounded-lg md:rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gray-100 text-gray-800 mb-3 md:mb-4">
                    <stat.icon className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-black mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-8 md:mt-12">
              <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg">
                Ready to transform your space?
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white rounded-xl md:rounded-2xl font-semibold hover:bg-black transition-all duration-300 text-sm md:text-base"
              >
                <Camera className="w-4 h-4 md:w-5 md:h-5" />
                Explore Full Gallery
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="line" className="py-12 md:py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Video Section Header */}
            <div className="text-center mb-8 md:mb-16">
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                <Sparkles className="text-white w-6 h-6 md:w-10 md:h-10" />
                <h2 className="text-2xl md:text-5xl font-bold text-white">
                  Design Videos
                </h2>
                <Sparkles className="text-white w-6 h-6 md:w-10 md:h-10" />
              </div>
              <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Watch our design process come to life through captivating videos that showcase the transformation of spaces
              </p>
            </div>

            {/* Video Entrance Card */}
            <div className="flex justify-center">
              <Link
                to="/line"
                className="group relative block w-full max-w-2xl mx-auto overflow-hidden rounded-xl md:rounded-3xl bg-gray-900 shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 border border-gray-700"
              >
                {/* Video Preview Container */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 md:h-80 bg-gray-800 flex items-center justify-center">
                    {/* Play Button */}
                    <div className="relative">
                      <div className="w-12 h-12 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Play className="w-4 h-4 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-2 md:top-4 right-2 md:right-4">
                      <div className="bg-black/80 backdrop-blur-md rounded-full px-2 py-1 md:px-3 md:py-1 border border-gray-600">
                        <span className="text-white text-xs md:text-sm font-medium flex items-center gap-1">
                          <Zap className="w-3 h-3 md:w-4 md:h-4" />
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">
                          Behind The Design
                        </h3>
                        <p className="text-gray-300 text-sm md:text-lg mb-2 md:mb-4 hidden md:block">
                          Exclusive look at our creative process
                        </p>
                        <div className="flex items-center gap-2 md:gap-4">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-gray-400 text-xs md:text-sm">Premium Content</span>
                        </div>
                      </div>
                      <div className="p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="relative p-4 md:p-8 bg-gray-900">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-gray-300">
                          New Videos
                        </span>
                      </div>
                      <div className="w-px h-3 md:h-4 bg-gray-600"></div>
                      <span className="text-xs md:text-sm text-gray-400 hidden sm:block">
                        Updated regularly
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs md:text-sm font-medium text-gray-300">
                        Watch Videos
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="w-full bg-gray-700 rounded-full h-2 md:h-3 overflow-hidden">
                      <div 
                        className="h-2 md:h-3 bg-white rounded-full transition-all duration-500 group-hover:w-full w-3/4"
                      >
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Content Progress</span>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Video Stats */}
            <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { icon: Play, number: "20+", label: "Design Videos" },
                { icon: Users, number: "5K+", label: "Views" },
                { icon: Clock, number: "24/7", label: "Available" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 md:p-8 bg-gray-900 rounded-lg md:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gray-800 text-white mb-3 md:mb-4">
                    <stat.icon className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Video CTA */}
            <div className="text-center mt-8 md:mt-12">
              <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
                Want to see our designs in motion?
              </p>
              <Link
                to="/line"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-xl md:rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                Watch All Videos
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;