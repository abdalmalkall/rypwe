import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import gallery from "@/pages/gallery";
import Videos from "@/components/Videos";
// import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Camera, ArrowLeft, Sparkles } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* إضافة CSS animations للتأثيرات المخصصة */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes glimmer {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes glow {
          0% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3)); }
          100% { filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)); }
        }
      `}</style>
      
      <Header />
      <main>
        <Hero />
        <About />
{/* Enhanced Gallery Entrance Section */}
<section className="py-16 px-4 bg-white font-sans">
  <div className="max-w-6xl mx-auto">
    {/* Main Title */}
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles className="text-black w-8 h-8" />
        <h2 className="text-4xl font-bold text-black">
      Design Works
        </h2>
        <Sparkles className="text-black w-8 h-8" />
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Creating modern spaces with comfort and elegance
      </p>
    </div>

    {/* Gallery Entrance Card */}
    <div className="flex justify-center">
      <Link
        to="/gallery"
        className="group relative block max-w-md mx-auto overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 ease-out border border-gray-300"
      >
        {/* Main Image */}
        <div className="relative overflow-hidden">
          <img
            src="Living.jpeg"
            alt="Work Gallery"
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
      
     

          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
               Elevating Interior Design
                </h3>
                <p className="text-white/90 text-sm">
               Where aesthetics meet comfort
                </p>
              </div>
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowLeft className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-sm text-gray-700">
                Updated regularly
              </span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="w-4 h-4 bg-gray-400 rounded-full opacity-80 group-hover:animate-pulse"
                  style={{ animationDelay: `${star * 0.1}s` }}
                />
              ))}
            </div>
          </div>
          
          {/* Interactive Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="h-2 bg-black rounded-full transition-all duration-1000 group-hover:w-full w-3/4" />
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">
              Click to enter and explore
            </p>
          </div>
        </div>

        {/* Light Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-full bg-black/5 rounded-3xl" />
        </div>
      </Link>
    </div>

    {/* Quick Stats */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
      <div className="text-center p-4 bg-white backdrop-blur-sm rounded-2xl border border-gray-300">
        <div className="text-2xl font-bold text-black mb-1">50+</div>
        <div className="text-sm text-gray-700">Featured Projects</div>
      </div>
      <div className="text-center p-4 bg-white backdrop-blur-sm rounded-2xl border border-gray-300">
        <div className="text-2xl font-bold text-black mb-1">11+</div>
        <div className="text-sm text-gray-700">Designs</div>
      </div>
      <div className="text-center p-4 bg-white backdrop-blur-sm rounded-2xl border border-gray-300">
        <div className="text-2xl font-bold text-black mb-1">24/7</div>
        <div className="text-sm text-gray-700">Always Accessible</div>
      </div>
    </div>
  </div>
</section>
{/* 
        <gallery /> */}
        <Videos />
        {/* <Courses /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;