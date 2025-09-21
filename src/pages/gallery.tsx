import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  expandedDescription?: string;
}

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [allImages, setAllImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const projects: Project[] = [
    { 
      id: 8, 
      title: "Stylish Bedroom", 
      description: "Modern Bedroom with a Touch of Timeless Charm", 
      images: ["bedroom3.jpg", "bedroom2.jpg"],
      expandedDescription: "تصميم غرفة نوم عصرية تجمع بين الفخامة والراحة، مع استخدام الألوان الدافئة والخامات الطبيعية لخلق جو من الهدوء والاسترخاء. تتميز بإضاءة مدروسة ولمسات ديكورية تعكس الذوق الرفيع"
    },
    { 
      id: 1, 
      title: "Modern Minimalist Living Room", 
      description: "Clean lines and neutral tones create a serene living space", 
      images: ["Living.jpeg", "Living2.jpg"],
      expandedDescription: "مساحة معيشة أنيقة تعتمد على البساطة المدروسة والخطوط النظيفة. تم اختيار الألوان المحايدة بعناية لتخلق شعوراً بالسكينة والانسجام، مع قطع أثاث مختارة بدقة تجمع بين الجمال والوظائف العملية"
    },
    { 
      id: 2, 
      title: "Contemporary Kitchen Design", 
      description: "Sleek functionality meets elegant aesthetics", 
      images: ["Kitchen.png"],
      expandedDescription: "مطبخ عصري يجسد الكمال في التصميم والوظائف، حيث تلتقي التكنولوجيا المتقدمة مع التصميم الأنيق. تم استخدام خامات عالية الجودة ونظام إضاءة ذكي لخلق بيئة طبخ استثنائية"
    },
    { 
      id: 3, 
      title: "Luxury Bedroom Kids", 
      description: "Sophisticated comfort in monochromatic harmony", 
      images: ["Bedroom.webp"],
      expandedDescription: "غرفة أطفال فاخرة تحقق التوازن المثالي بين المرح والأناقة. صُممت لتنمي خيال الطفل وتوفر له بيئة آمنة ومريحة، مع استخدام ألوان هادئة وعناصر تفاعلية تحفز الإبداع"
    },
    { 
      id: 4, 
      title: "Executive Office Space", 
      description: "Professional environment with modern touches", 
      images: ["4.png"],
      expandedDescription: "مكتب تنفيذي راقي يعكس النجاح والمهنية، مصمم لتعزيز الإنتاجية والإبداع. يجمع بين الفخامة والوظائف العملية مع استخدام مواد عالية الجودة وتقنيات الإضاءة المتطورة"
    },
    { 
      id: 5, 
      title: "Dining Room Elegance", 
      description: "Where style meets functionality for memorable gatherings", 
      images: ["Dining.webp"],
      expandedDescription: "قاعة طعام أنيقة مصممة لاستضافة اللحظات المميزة والتجمعات العائلية الدافئة. تتميز بطاولة فاخرة وإضاءة مميزة تخلق أجواء حميمية وراقية لتجارب طعام لا تُنسى"
    },
    { 
      id: 6, 
      title: "Bathroom Sanctuary", 
      description: "Spa-like retreat with contemporary fixtures", 
      images: ["Bathroom.png"],
      expandedDescription: "حمام فاخر يحاكي أجواء المنتجعات الصحية العالمية، حيث الاستجمام والرفاهية. تم استخدام خامات طبيعية فاخرة وتقنيات حديثة لخلق ملاذ شخصي للاسترخاء والتجديد"
    },
    { 
      id: 7, 
      title: "Garden Projects", 
      description: "Two elegant garden views in one design", 
      images: ["4deb4433-c0f7-48c6-b9fd-8c30e2831906.jpeg", "a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg"],
      expandedDescription: "تصميم حدائق استثنائي يجمع بين الطبيعة والفن المعماري. مساحات خضراء مدروسة بعناية تحقق الانسجام بين العناصر الطبيعية والتصميم العصري، لتوفر واحة هدوء وجمال في قلب المنزل"
    },
    { 
      id: 9, 
      title: "Architectural Facade Design", 
      description: "Modern & Traditional Blend", 
      images: ["architectural.jpg"],
      expandedDescription: "واجهة معمارية مبتكرة تمزج بين روح التراث وروح العصر، حيث تلتقي العراقة بالحداثة في تناغم مثالي. تصميم يعكس الهوية الثقافية مع لمسة عصرية تجعلها تحفة معمارية فريدة"
    },
  ];

  const openLightbox = (startIndex: number) => {
    setIsLoading(true);
    const imgs = projects.flatMap(p => p.images ?? []);
    setAllImages(imgs);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const closeLightbox = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLightboxOpen(false);
      setIsLoading(false);
    }, 300);
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

  const handleCardClick = (projectId: number) => {
    if (expandedCard === projectId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(projectId);
    }
  };

  return (
    <section id="portfolio" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Luxurious animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent animate-pulse"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(209, 213, 219, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, rgba(243, 244, 246, 0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(243, 244, 246, 0.05) 25%, transparent 25%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 60px 60px, 60px 60px',
            animation: 'float 20s ease-in-out infinite alternate'
          }}
        />
      </div>

      <div className="relative z-10 py-32">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Ultra-premium header */}
          <div className="text-center mb-28 relative">
            {/* Decorative elements */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-pulse"></div>
            
            <div className="relative">
              {/* Elegant line with diamond */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
                <div className="mx-4 w-4 h-4 bg-gray-300 rotate-45 shadow-lg"></div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
              </div>
              
              <div className="space-y-2 mb-8">
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light block">
                  ✦ Exclusive Collection ✦
                </span>
                <div className="h-px w-8 bg-gray-300 mx-auto"></div>
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-gray-900 mb-8 tracking-tighter leading-none">
                <span className="block font-thin">Our</span>
                <span className="block font-light italic bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Masterworks
                </span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-2xl text-gray-600 font-extralight leading-relaxed tracking-wide">
                  Where <em className="italic font-light">architectural poetry</em> meets 
                  <em className="italic font-light"> timeless sophistication</em>
                </p>
                <div className="flex items-center justify-center space-x-6 text-gray-400">
                  <div className="h-px w-16 bg-gray-300"></div>
                  <span className="text-sm tracking-widest font-light">EST. MMXXIII</span>
                  <div className="h-px w-16 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium gallery grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
            {projects.map((project, projIndex) => {
              const imgs = project.images ?? [];
              const startIndex = projects
                .slice(0, projIndex)
                .flatMap(p => p.images ?? []).length;

              return (
                <div 
                  key={project.id} 
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Floating card with premium styling */}
                  <Card 
                    className={`relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-8 hover:rotate-1 group-hover:bg-white/90 cursor-pointer ${
                      expandedCard === project.id ? 'scale-105 -translate-y-4 shadow-4xl bg-white/95' : ''
                    }`}
                    onClick={() => handleCardClick(project.id)}
                  >
                    
                    {/* Premium image container */}
                    <div className="relative overflow-hidden rounded-t-3xl">
                      {imgs.length > 1 ? (
                        <div className="flex gap-1 aspect-[5/4] relative">
                          {imgs.map((imgSrc, index) => (
                            <div key={index} className="relative w-1/2 overflow-hidden">
                              <img
                                src={imgSrc}
                                alt={`${project.title} ${index + 1}`}
                                className={`w-full h-full object-cover transition-all duration-1000 cursor-pointer filter brightness-105 contrast-110 ${
                                  expandedCard === project.id ? 'scale-110' : 'group-hover:scale-125'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openLightbox(startIndex + index);
                                }}
                                draggable={false}
                                onContextMenu={(e) => e.preventDefault()}
                              />
                              {/* Luxury overlay gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                            </div>
                          ))}
                        </div>
                      ) : imgs.length === 1 ? (
                        <div className="aspect-[5/4] overflow-hidden relative">
                          <img
                            src={imgs[0]}
                            alt={project.title}
                            className={`w-full h-full object-cover transition-all duration-1000 cursor-pointer filter brightness-105 contrast-110 ${
                              expandedCard === project.id ? 'scale-110' : 'group-hover:scale-125'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              openLightbox(startIndex);
                            }}
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                      ) : null}

                      {/* Floating view button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-200">
                          <div className="bg-white/95 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                            <div className="flex items-center space-x-3">
                              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span className="text-gray-700 font-medium tracking-wide">View Collection</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Luxury corner accent */}
                      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Premium content area */}
                    <CardContent className="p-10 relative bg-gradient-to-b from-white/90 to-white/95">
                      {/* Elegant decorative line */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200"></div>
                        <div className="mx-4">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200"></div>
                      </div>

                      <div className="space-y-6">
                        <h3 className={`text-3xl font-extralight text-gray-900 tracking-wide leading-tight group-hover:text-gray-700 transition-all duration-500 ${
                          expandedCard === project.id ? 'text-2xl mb-2' : ''
                        }`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-gray-600 leading-loose font-light tracking-wide transition-all duration-500 ${
                          expandedCard === project.id ? 'text-base' : 'text-lg'
                        }`}>
                          {expandedCard === project.id && project.expandedDescription ? 
                            project.expandedDescription : 
                            project.description
                          }
                        </p>

                        {/* زر للتوسع/الطي */}
                        <div className="flex items-center justify-center pt-4">
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-300 text-sm uppercase tracking-wide">
                            <span>{expandedCard === project.id ? 'أظهر أقل' : 'اقرأ المزيد'}</span>
                            <svg 
                              className={`w-4 h-4 transition-transform duration-300 ${
                                expandedCard === project.id ? 'rotate-180' : ''
                              }`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        {/* Premium action area */}
                        <div className={`border-t border-gray-100 transition-all duration-500 ${
                          expandedCard === project.id ? 'pt-4 mt-4' : 'pt-6 mt-6'
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-gray-500 group-hover:text-gray-700 transition-colors duration-500">
                              <span className="text-sm uppercase tracking-[0.2em] font-light">
                                {expandedCard === project.id ? 'معرض الصور' : 'Explore'}
                              </span>
                              <div className="transform group-hover:translate-x-2 transition-transform duration-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Project number */}
                            <div className="text-gray-300 text-sm font-light">
                              {String(projIndex + 1).padStart(2, '0')}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating decoration */}
                      {hoveredCard === project.id && (
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-xl opacity-80 animate-pulse"></div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ultra-luxury lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/96 backdrop-blur-2xl flex items-center justify-center z-50 transition-all duration-500"
          onTouchStart={handleTouchStart}
      
        >
          {/* Ambient background effect */}
          <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-black/50 to-black opacity-60"></div>
          
          {/* Navigation buttons with luxury styling */}
          <button 
            className="absolute left-12 top-1/2 transform -translate-y-1/2 group z-20" 
            onClick={prevImage}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-6 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          
          {/* Premium image display */}
          <div className="relative max-w-[85vw] max-h-[85vh] flex items-center justify-center z-10">
            <div className="relative">
              {/* Image with luxury frame effect */}
              <div className="relative p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20">
                <img
                  src={allImages[currentImageIndex]}
                  alt="Portfolio Masterpiece"
                  className={`max-w-full max-h-full rounded-2xl shadow-4xl transition-all duration-700 ease-out ${
                    isLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                  }`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              
              {/* Elegant image info */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                  <span className="text-white/90 text-sm font-light tracking-wide">
                    {currentImageIndex + 1} of {allImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="absolute right-12 top-1/2 transform -translate-y-1/2 group z-20" 
            onClick={nextImage}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-6 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          
          {/* Luxury close button */}
          <button 
            className="absolute top-12 right-12 group z-20" 
            onClick={closeLightbox}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90">
              <svg className="w-6 h-6 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
          
          {/* Elegant instructions */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
              <p className="text-white/60 text-sm font-light tracking-wide">
                Use arrow keys or swipe to navigate • ESC to close
              </p>
            </div>
          </div>
        </div>
      )}

      <style >{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .shadow-4xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Gallery;