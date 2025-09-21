import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
}

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [allImages, setAllImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const projects: Project[] = [
    { id: 8, title: "Stylish Bedroom", description: "Modern Bedroom with a Touch of Timeless Charm", images: ["bedroom3.jpg", "bedroom2.jpg"] },
    { id: 1, title: "Modern Minimalist Living Room", description: "Clean lines and neutral tones create a serene living space", images: ["Living.jpeg", "Living2.jpg"] },
    { id: 2, title: "Contemporary Kitchen Design", description: "Sleek functionality meets elegant aesthetics", images: ["Kitchen.png"] },
    { id: 3, title: "Luxury Bedroom Kids", description: "Sophisticated comfort in monochromatic harmony", images: ["Bedroom.webp"] },
    { id: 4, title: "Executive Office Space", description: "Professional environment with modern touches", images: ["4.png"] },
    { id: 5, title: "Dining Room Elegance", description: "Where style meets functionality for memorable gatherings", images: ["Dining.webp"] },
    { id: 6, title: "Bathroom Sanctuary", description: "Spa-like retreat with contemporary fixtures", images: ["Bathroom.png"] },
    { id: 7, title: "Garden Projects", description: "Two elegant garden views in one design", images: ["4deb4433-c0f7-48c6-b9fd-8c30e2831906.jpeg", "a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg"] },
    { id: 9, title: "Architectural Facade Design", description: "Modern & Traditional Blend", images: ["architectural.jpg"] },
  ];

  const openLightbox = (startIndex: number) => {
    setIsLoading(true);
    const imgs = projects.flatMap(p => p.images ?? []);
    setAllImages(imgs);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeLightbox = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLightboxOpen(false);
      setIsLoading(false);
    }, 200);
  };

  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
    setTouchStartX(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-4 mx-auto"></div>
            <span className="text-sm uppercase tracking-widest text-gray-500 font-light">Portfolio</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-4 mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Our <span className="font-semibold italic">Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our exquisite collection of interior design projects, where every space tells a story of 
            <span className="italic"> luxury, sophistication, and timeless elegance</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, projIndex) => {
            const imgs = project.images ?? [];
            const startIndex = projects
              .slice(0, projIndex)
              .flatMap(p => p.images ?? []).length;

            return (
              <div key={project.id} className="group relative">
                <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-2xl">
                  <div className="relative overflow-hidden">
                    {imgs.length > 1 ? (
                      <div className="flex gap-1 aspect-[4/3]">
                        {imgs.map((imgSrc, index) => (
                          <div key={index} className="relative w-1/2 overflow-hidden">
                            <img
                              src={imgSrc}
                              alt={`${project.title} ${index + 1}`}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 cursor-pointer"
                              onClick={() => openLightbox(startIndex + index)}
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    ) : imgs.length === 1 ? (
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={imgs[0]}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 cursor-pointer"
                          onClick={() => openLightbox(startIndex)}
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ) : null}
                    
                    {/* Elegant overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-gray-800 text-sm font-medium">View Gallery</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8 relative">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent"></div>
                      </div>
                      
                      <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed font-light text-base">
                        {project.description}
                      </p>
                      
                      <div className="pt-4">
                        <div className="inline-flex items-center space-x-2 text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          <span className="text-sm uppercase tracking-wider font-light">Explore Design</span>
                          <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Luxury Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation buttons */}
          <button 
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-5xl font-thin transition-all duration-300 hover:scale-110 z-10" 
            onClick={prevImage}
          >
            ‹
          </button>
          
          {/* Main image */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={allImages[currentImageIndex]}
              alt="Portfolio Image"
              className={`max-w-full max-h-full rounded-xl shadow-2xl transition-all duration-500 ease-out ${
                isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="text-white/90 text-sm font-light">
                {currentImageIndex + 1} of {allImages.length}
              </span>
            </div>
          </div>
          
          <button 
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-5xl font-thin transition-all duration-300 hover:scale-110 z-10" 
            onClick={nextImage}
          >
            ›
          </button>
          
          {/* Close button */}
          <button 
            className="absolute top-8 right-8 text-white/80 hover:text-white text-4xl font-thin transition-all duration-300 hover:scale-110 hover:rotate-90" 
            onClick={closeLightbox}
          >
            ×
          </button>
          
          {/* Elegant close instruction */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-light">
            Press ESC or click outside to close
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;