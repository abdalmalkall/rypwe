import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";


interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
}

const  gallery= () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [allImages, setAllImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const projects: Project[] = [
    { id: 8, title: "Stylish Bedroom", description: "Modern Bedroom with a Touch of Timeless Charm", images: ["bedroom3.jpg", "bedroom2.jpg"] },
    { id: 1, title: "Modern Minimalist Living Room", description: "Clean lines and neutral tones create a serene living space", image: "Living.jpeg" },
    { id: 2, title: "Contemporary Kitchen Design", description: "Sleek functionality meets elegant aesthetics", image: "Kitchen.png" },
    { id: 3, title: "Luxury Bedroom Kids", description: "Sophisticated comfort in monochromatic harmony", image: "Bedroom.webp" },
    { id: 4, title: "Executive Office Space", description: "Professional environment with modern touches", image: "4.png" },
    { id: 5, title: "Dining Room Elegance", description: "Where style meets functionality for memorable gatherings", image: "Dining.webp" },
    { id: 6, title: "Bathroom Sanctuary", description: "Spa-like retreat with contemporary fixtures", image: "Bathroom.png" },
    { id: 7, title: "Garden Projects", description: "Two elegant garden views in one design", images: ["4deb4433-c0f7-48c6-b9fd-8c30e2831906.jpeg", "a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg"] },
  ];

  const openLightbox = (startIndex: number) => {
    const imgs = projects.flatMap(p => p.images ?? (p.image ? [p.image] : []));
    setAllImages(imgs);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));

  // تحكم بالكيبورد
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

  // دعم السحب على الهاتف
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) nextImage(); // سحب لليسار
    if (diff < -50) prevImage(); // سحب لليمين
    setTouchStartX(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest interior design projects featuring stunning transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, projIndex) => {
            const imgs = project.images ?? (project.image ? [project.image] : []);
            const startIndex = projects
              .slice(0, projIndex)
              .flatMap(p => p.images ?? (p.image ? [p.image] : [])).length;

            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                {imgs.length > 1 ? (
                  <div className="flex gap-2 aspect-video">
                    {imgs.map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc}
                        alt={`${project.title} ${index + 1}`}
                        className="w-1/2 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                        onClick={() => openLightbox(startIndex + index)}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={imgs[0]}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                      onClick={() => openLightbox(startIndex)}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                )}

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="absolute left-5 text-white text-4xl font-bold" onClick={prevImage}>‹</button>
          <img
            src={allImages[currentImageIndex]}
            alt="Lightbox"
            className="max-w-full max-h-full md:max-w-[90%] md:max-h-[90%] rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <button className="absolute right-5 text-white text-4xl font-bold" onClick={nextImage}>›</button>
          <button className="absolute top-5 right-5 text-white text-4xl font-bold" onClick={closeLightbox}>×</button>
        </div>
      )}
    </section>
  );
};



export default gallery;
