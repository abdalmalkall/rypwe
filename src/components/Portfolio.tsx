import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Living Room",
      description: "Clean lines and neutral tones create a serene living space",
      image: "Living.jpeg"
    },
    {
      id: 2,
      title: "Contemporary Kitchen Design",
      description: "Sleek functionality meets elegant aesthetics",
      image: "Kitchen.png"
    },
    {
      id: 3,
      title: "Luxury Bedroom Suite",
      description: "Sophisticated comfort in monochromatic harmony",
      image: "Bedroom.webp"
    },
    {
      id: 4,
      title: "Executive Office Space",
      description: "Professional environment with modern touches",
      image: "4.png"
    },
    {
      id: 5,
      title: "Dining Room Elegance",
      description: "Where style meets functionality for memorable gatherings",
      image: "Dining.webp"
    },
    {
      id: 6,
      title: "Bathroom Sanctuary",
      description: "Spa-like retreat with contemporary fixtures",
      image: "Bathroom.png"
    },
    {
      id: 7,
      title: "Garden Projects",
      description: "Two elegant garden views in one design",
      images: ["4deb4433-c0f7-48c6-b9fd-8c30e2831906.jpeg", "a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg"] // ← لاحظ استخدام array بدلاً من image مفرد
    }
  ];

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
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* إذا كانت الصور متعددة */}
              {project.images ? (
                <div className="flex gap-2 aspect-video">
                  {project.images.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${project.title} ${index + 1}`}
                      className="w-1/2 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              ) : (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
