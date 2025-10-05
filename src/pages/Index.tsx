import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Camera, ArrowRight, Star, Users, Clock, Play } from "lucide-react";

const Index: React.FC = () => {
  // بيانات المعرض
  const galleryData = {
    images: [
      "bedroom3.jpg",
      "Living.jpeg", 
      "bedroom2.jpg",
    ],
    stats: [
      { icon: Camera, number: "50+", label: "Featured Projects" },
      { icon: Users, number: "11+", label: "Design Styles" },
      { icon: Clock, number: "24/7", label: "Accessible" }
    ]
  };

  // بيانات الفيديو
  const videoData = {
    thumbnails: [
      "a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg",
      "Dining.webp",
      "2_2 - Photo.jpg"
    ],
    stats: [
      { icon: Play, number: "3+", label: "Design Videos" },
      { icon: Clock, number: "24/7", label: "Available" }
    ]
  };

  // مكون القسم المشترك
  const SectionCard = ({ 
    title, 
    description, 
    mainImage,
    previewItems,
    stats,
    linkTo,
    type = "gallery"
  }: {
    title: string;
    description: string;
    mainImage: string;
    previewItems: string[];
    stats: any[];
    linkTo: string;
    type?: "gallery" | "video";
  }) => (
    <div className="flex justify-center mb-16">
      <Link
        to={linkTo}
        className="group block w-full max-w-4xl overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
      >
        {/* الصورة/الفيديو الرئيسي */}
        <div className="relative overflow-hidden bg-gray-900">
          <div className={`w-full h-64 md:h-96 flex items-center justify-center relative ${type === 'video' ? 'bg-gray-900' : ''}`}>
            
            {type === 'video' && (
              <>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <img
                  src={mainImage}
                  alt="Video preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              </>
            )}
            
            {type === 'gallery' && (
              <img
                src={mainImage}
                alt="Interior Design Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* المحتوى العلوي */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  {title}
                </h3>
                <p className="text-gray-300 text-lg mb-4 hidden md:block">
                  {description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-white text-white" />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">Premium {type === 'gallery' ? 'Collection' : 'Content'}</span>
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-full border transition-all duration-300 ${
                type === 'gallery' 
                  ? 'bg-white/20 backdrop-blur-sm border-white/30 group-hover:bg-white/30' 
                  : 'bg-white/10 backdrop-blur-sm border-white/20 group-hover:bg-white/20'
              }`}>
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* معاينة الصور/الفيديوهات */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-800">
              {type === 'gallery' ? 'Gallery Preview' : 'Video Previews'}
            </span>
            <span className="text-xs text-gray-600">{previewItems.length} {type === 'gallery' ? 'images' : 'videos'}</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {previewItems.map((item, index) => (
              <div key={index} className="relative group">
                <img
                  src={item}
                  alt={`${type === 'gallery' ? 'Gallery' : 'Video'} preview ${index + 1}`}
                  className="w-full h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  {type === 'video' && (
                    <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* معلومات إضافية */}
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-gray-800">
                  {type === 'gallery' ? 'Live Updates' : 'New Videos'}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <span className="text-sm text-gray-600">
                {type === 'gallery' ? 'New projects weekly' : 'Updated regularly'}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-800">
              {type === 'gallery' ? 'Explore Gallery' : 'Watch Videos'}
            </span>
          </div>
          
          {/* شريط التقدم */}
          <div className="space-y-2">
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className={`h-2 bg-gray-800 rounded-full transition-all duration-500 ${
                type === 'gallery' ? 'w-4/5' : 'w-3/4'
              }`} />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{type === 'gallery' ? 'Collection Progress' : 'Content Progress'}</span>
              <span>{type === 'gallery' ? '80%' : '75%'}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  // مكون العنوان المشترك
  const SectionHeader = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center mb-12 md:mb-20">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <h2 className="text-3xl md:text-5xl font-bold text-black">{title}</h2>
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </div>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );

  // مكون الإحصائيات المشترك
  const StatsGrid = ({ stats }: { stats: any[] }) => (
    <div className={`grid gap-6 max-w-3xl mx-auto mb-16 ${
      stats.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
    }`}>
      {stats.map((stat, index) => (
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
  );

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
            <SectionHeader
              title="Design Portfolio"
              description="Discover our curated collection of modern interior designs where innovation meets comfort"
            />

            <SectionCard
              title="Elevating Interior Design"
              description="Where aesthetics meet comfort in perfect harmony"
              mainImage="Living.jpeg"
              previewItems={galleryData.images}
              stats={galleryData.stats}
              linkTo="/gallery"
              type="gallery"
            />

            <StatsGrid stats={galleryData.stats} />
          </div>
        </section>

        {/* Video Section */}
        <section id="line" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader
              title="Design Videos"
              description="Watch our design process come to life through captivating videos"
            />

            <SectionCard
              title="Behind The Design"
              description="Exclusive look at our creative process"
              mainImage={videoData.thumbnails[0]}
              previewItems={videoData.thumbnails}
              stats={videoData.stats}
              linkTo="/line"
              type="video"
            />

            <StatsGrid stats={videoData.stats} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;