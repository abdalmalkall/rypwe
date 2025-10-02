import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // مصفوفة الصور الخاصة بك
  const backgroundImages = [
    "/Living.jpeg",
    "/Dining.webp", 
    "/Kitchen.png",
    "/Bedroom.webp",
    "/4.png",
    "/Bathroom.png",
    "/architectural.jpg",
    "/a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg"
  ];

  // تغيير الخلفية كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* خلفيات متعددة تتغير */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Architectural Design ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay داكن لجعل النص مقروءًا */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* شعار RYP */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <img 
                src="/logo.jpg" 
                alt="RYP Logo" 
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Ibrahim <span className="text-white">Alyan</span>
          </h1>
          
          {/* الوصف */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Architect <span className="text-white/50">|</span> Interior Designer <span className="text-white/50">|</span>{" "}
            <span className="text-white font-semibold">
              Founder of RYP
            </span>
          </p>

          {/* وصف إضافي */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming spaces into extraordinary experiences through innovative architectural design 
            and immersive 3D visualizations
          </p>

          {/* أزرار التحكم */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View Gallery
            </Button>
          </div>
          {/* مؤشر الصور */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {backgroundImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentBgIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;