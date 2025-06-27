import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "A Luxurious Architectural Journey with Lumion 2024",
      description: "Experience the elegance of high-end architecture  in this exclusive villa design. From concept development to stunning visual rendering using Lumion 2024, this project showcases refined materials, dramatic lighting, and sophisticated spatial planning—crafted to reflect timeless luxury.",
      thumbnail: "https://youtu.be/7lTpXiLGsYI?si=_GQTQS7jNKZuEX9u",
      type: "youtube",
      duration: "",
    },
    {
      id: 2,
      title: "The Art of Architectural Lighting with Lumion 2024 – A Luxurious Visual Journey",
    description: "Experience how lighting reshapes architectural interiors and exteriors in this creative showcase rendered with Lumion 2024. This project highlights how strategic lighting enhances materials, shadows, and spatial ambiance — delivering depth, realism, and architectural elegance in every frame.",

      thumbnail:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "image",
    },
  ];

  const getYouTubeEmbedURL = (url: string) => {
    try {
      const videoId = url.includes("youtu.be")
        ? url.split("/")[3].split("?")[0]
        : new URLSearchParams(new URL(url).search).get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    } catch {
      return "";
    }
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Videos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an inside look at our design process and transformations
          </p>
        </div>

        {/* ✅ شبكة من عمودين فقط، ومركزّة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="w-full max-w-sm mx-auto overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  {video.type === "youtube" ? (
                    <iframe
                      src={getYouTubeEmbedURL(video.thumbnail)}
                      title={video.title}
                      className="w-full h-full rounded"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover rounded"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </>
                  )}

                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  )}
                </AspectRatio>
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-semibold">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
