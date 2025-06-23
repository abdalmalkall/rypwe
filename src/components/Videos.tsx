
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Before & After: Living Room Transformation",
      description: "Watch how we transformed this outdated living room into a modern masterpiece",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "8:45"
    },
    {
      id: 2,
      title: "Kitchen Design Process: From Concept to Reality",
      description: "A complete walkthrough of our kitchen design methodology",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "12:30"
    },
    {
      id: 3,
      title: "Color Theory in Interior Design",
      description: "Learn how to use the perfect color palette for any space",
      thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6:15"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Videos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an inside look at our design process and transformations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{video.title}</CardTitle>
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
