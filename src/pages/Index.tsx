import { FC, ComponentType, memo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Play, Home } from "lucide-react";

/* ================= TYPES ================= */

interface StatItem {
  icon: ComponentType<{ className?: string }>;
  number: string;
  label: string;
}

type SectionType = "gallery" | "video" | "exterior";

interface SectionCardProps {
  title: string;
  description: string;
  mainImage: string;
  previewItems: string[];
  stats: StatItem[];
  linkTo: string;
  type?: SectionType;
}

interface SectionHeaderProps {
  title: string;
  description: string;
}

interface StatsGridProps {
  stats: StatItem[];
}

/* ================= DATA ================= */

const galleryData = {
  images: ["bedroom3.jpg", "Living.jpeg", "bedroom2.jpg"],
  stats: [],
} as const;

const videoData = {
  thumbnails: [
    "a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg",
    "Dining.webp",
    "2_2 - Photo.jpg",
  ],
  stats: [],
} as const;

const exteriorData = {
  images: ["architectural.jpg", "a-(1).jpg", "a-(2).jpg"],
  stats: [],
} as const;

/* ================= COMPONENTS ================= */

const SectionCard: FC<SectionCardProps> = memo(
  ({
    title,
    description,
    mainImage,
    previewItems,
    stats,
    linkTo,
    type = "gallery",
  }) => {
    const isVideo = type === "video";
    const isExterior = type === "exterior";

    return (
      <div className="flex justify-center mb-16">
        <Link
          to={linkTo}
          className="group block w-full max-w-4xl overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
        >
          {/* Main */}
          <div className="relative overflow-hidden bg-gray-900">
            <div
              className={`w-full h-64 md:h-96 flex items-center justify-center relative ${
                isVideo
                  ? "bg-gray-900"
                  : isExterior
                  ? "bg-gradient-to-br from-blue-900/20 to-green-900/20"
                  : ""
              }`}
            >
              {isVideo ? (
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
              ) : (
                <img
                  src={mainImage}
                  alt={isExterior ? "Exterior Design Gallery" : "Interior Design Gallery"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4 hidden md:block">
                    {description}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-white text-white" />
                      ))}
                    </div>

                    <span className="text-gray-300 text-sm">
                      Premium{" "}
                      {type === "gallery"
                        ? "Collection"
                        : type === "video"
                        ? "Content"
                        : "Architecture"}
                    </span>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-full border transition-all duration-300 ${
                    type === "gallery"
                      ? "bg-white/20 backdrop-blur-sm border-white/30 group-hover:bg-white/30"
                      : type === "video"
                      ? "bg-white/10 backdrop-blur-sm border-white/20 group-hover:bg-white/20"
                      : "bg-green-500/20 backdrop-blur-sm border-green-400/30 group-hover:bg-green-500/30"
                  }`}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-800">
                {type === "gallery"
                  ? "Gallery Preview"
                  : type === "video"
                  ? "Video Previews"
                  : "Exterior Designs Preview"}
              </span>

              <span className="text-xs text-gray-600">
                {previewItems.length}{" "}
                {type === "gallery"
                  ? "images"
                  : type === "video"
                  ? "videos"
                  : "designs"}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {previewItems.map((item, i) => (
                <div key={i} className="relative group">
                  <img
                    src={item}
                    alt={`preview ${i + 1}`}
                    className="w-full h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    {isVideo && (
                      <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    {isExterior && (
                      <Home className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      type === "gallery"
                        ? "bg-green-500"
                        : type === "video"
                        ? "bg-blue-500"
                        : "bg-emerald-500"
                    }`}
                  />

                  <span className="text-sm font-medium text-gray-800">
                    {type === "gallery"
                      ? "Live Updates"
                      : type === "video"
                      ? "New Videos"
                      : "Latest Projects"}
                  </span>
                </div>

                <div className="w-px h-4 bg-gray-300" />

                <span className="text-sm text-gray-600">
                  {type === "gallery"
                    ? "New projects weekly"
                    : type === "video"
                    ? "Updated regularly"
                    : "Ongoing developments"}
                </span>
              </div>

              <span className="text-sm font-medium text-gray-800">
                {type === "gallery"
                  ? "Explore Gallery"
                  : type === "video"
                  ? "Watch Videos"
                  : "View Exteriors"}
              </span>
            </div>

            <div className="space-y-2">
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    type === "gallery"
                      ? "bg-gray-800 w-4/5"
                      : type === "video"
                      ? "bg-blue-600 w-3/4"
                      : "bg-emerald-600 w-2/3"
                  }`}
                />
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  {type === "gallery"
                    ? "Collection Progress"
                    : type === "video"
                    ? "Content Progress"
                    : "Projects Progress"}
                </span>

                <span>
                  {type === "gallery" ? "80%" : type === "video" ? "75%" : "65%"}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
);

SectionCard.displayName = "SectionCard";

const SectionHeader: FC<SectionHeaderProps> = memo(({ title, description }) => (
  <div className="text-center mb-12 md:mb-20">
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-2 h-2 bg-black rounded-full" />
      <h2 className="text-3xl md:text-5xl font-bold text-black">{title}</h2>
      <div className="w-2 h-2 bg-black rounded-full" />
    </div>

    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      {description}
    </p>
  </div>
));

SectionHeader.displayName = "SectionHeader";

const StatsGrid: FC<StatsGridProps> = memo(({ stats }) => {
  if (!stats.length) return null;

  return (
    <div
      className={`grid gap-6 max-w-3xl mx-auto mb-16 ${
        stats.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"
      }`}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 text-gray-800 mb-4">
            <stat.icon className="w-8 h-8" />
          </div>

          <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
});

StatsGrid.displayName = "StatsGrid";

/* ================= PAGE ================= */

const Index: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        {/* Gallery */}
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
              previewItems={[...galleryData.images]}
              stats={[...galleryData.stats]}
              linkTo="/gallery"
              type="gallery"
            />

            <StatsGrid stats={[...galleryData.stats]} />
          </div>
        </section>

        {/* Exterior */}
        <section id="exterior" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader
              title="Exterior Designs"
              description="Transform your outdoor spaces with stunning architectural facades and landscape designs"
            />

            <SectionCard
              title="Architectural Excellence"
              description="Creating captivating exteriors that blend with nature"
              mainImage={exteriorData.images[0]}
              previewItems={[...exteriorData.images]}
              stats={[...exteriorData.stats]}
              linkTo="/exterior"
              type="exterior"
            />

            <StatsGrid stats={[...exteriorData.stats]} />
          </div>
        </section>

        {/* Video */}
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
              previewItems={[...videoData.thumbnails]}
              stats={[...videoData.stats]}
              linkTo="/line"
              type="video"
            />

            <StatsGrid stats={[...videoData.stats]} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;