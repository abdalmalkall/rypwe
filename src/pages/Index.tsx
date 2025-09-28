import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/pages/gallery";
import Videos from "@/pages/vid";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Camera, ArrowRight, Sparkles, Star, Zap, Users, Clock, Play } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.3); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #000 25%, #333 50%, #000 75%);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite linear;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <Header />
      <main>
        {/* إضافة id للـ Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* إضافة id للـ About */}
        <section id="about">
          <About />
        </section>
        
        {/* Enhanced Gallery Entrance Section */}
        <section id="gallery" className="py-20 px-4 bg-white font-sans">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Main Title */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="relative">
                  <Sparkles className="text-gray-800 w-10 h-10 animate-float" />
                </div>
                <h2 className="text-5xl font-bold text-black">
                  Design Portfolio
                </h2>
                <div className="relative">
                  <Sparkles className="text-gray-800 w-10 h-10 animate-float" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover our curated collection of modern interior designs where innovation meets comfort, 
                and every space tells a unique story
              </p>
            </div>

            {/* Enhanced Gallery Entrance Card */}
            <div className="flex justify-center">
              <Link
                to="/gallery"
                className="group relative block max-w-2xl w-full mx-auto overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-300"
              >
                {/* Main Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src="Living.jpeg"
                    alt="Interior Design Gallery"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-1 border border-gray-300">
                      <span className="text-gray-800 text-sm font-medium flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Elevating Interior Design Excellence
                        </h3>
                        <p className="text-white/90 text-lg mb-4">
                          Where aesthetics meet comfort in perfect harmony
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-white/80 text-sm">Premium Collection</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 group-hover:bg-white/30 group-hover:translate-x-2 transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Bottom Section */}
                <div className="relative p-8 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-800">
                          Live Updates
                        </span>
                      </div>
                      <div className="w-px h-4 bg-gray-400"></div>
                      <span className="text-sm text-gray-700">
                        New projects added weekly
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-800">
                        Explore Gallery
                      </span>
                    </div>
                  </div>
                  
                  {/* Enhanced Interactive Progress Bar */}
                  <div className="space-y-3">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-3 bg-gray-800 rounded-full transition-all duration-1000 group-hover:w-full w-4/5 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Collection Progress</span>
                      <span>80% Complete</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Camera, number: "50+", label: "Featured Projects", color: "gray" },
                { icon: Users, number: "11+", label: "Design Styles", color: "gray" },
                { icon: Clock, number: "24/7", label: "Always Accessible", color: "gray" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 text-gray-800 mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-6 text-lg">
                Ready to transform your space?
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-black hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Camera className="w-5 h-5" />
                Explore Full Gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Video Section - Black Design */}
        <section id="videos" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Video Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="relative">
                  <Sparkles className="text-white w-10 h-10 animate-float" />
                </div>
                <h2 className="text-5xl font-bold text-white">
                  Design Videos
                </h2>
                <div className="relative">
                  <Sparkles className="text-white w-10 h-10 animate-float" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Watch our design process come to life through captivating videos that showcase the transformation of spaces
              </p>
            </div>

            {/* Video Entrance Card */}
            <div className="flex justify-center">
              <Link
                to="/videos"
                className="group relative block max-w-2xl w-full mx-auto overflow-hidden rounded-3xl bg-gray-900 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-700"
              >
                {/* Video Preview Container */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Play Button */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-pulse-glow">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/80 backdrop-blur-md rounded-full px-3 py-1 border border-gray-600">
                        <span className="text-white text-sm font-medium flex items-center gap-1">
                          <Zap className="w-4 h-4" />
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Behind The Design
                        </h3>
                        <p className="text-gray-300 text-lg mb-4">
                          Exclusive look at our creative process
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">Premium Content</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-white/20 group-hover:translate-x-2 transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="relative p-8 bg-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">
                          New Videos
                        </span>
                      </div>
                      <div className="w-px h-4 bg-gray-600"></div>
                      <span className="text-sm text-gray-400">
                        Updated regularly
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-300">
                        Watch Videos
                      </span>
                    </div>
                  </div>
                  
                  {/* Interactive Progress Bar */}
                  <div className="space-y-3">
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-3 bg-white rounded-full transition-all duration-1000 group-hover:w-full w-3/4 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Content Progress</span>
                      <span>75% Complete</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Video Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Play, number: "20+", label: "Design Videos", color: "gray" },
                { icon: Users, number: "5K+", label: "Views", color: "gray" },
                { icon: Clock, number: "24/7", label: "Available", color: "gray" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-gray-900 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-800 text-white mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Video CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6 text-lg">
                Want to see our designs in motion?
              </p>
              <Link
                to="/vid"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch All Videos
                <ArrowRight className="w-5 h-5" />
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