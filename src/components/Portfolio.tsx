
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
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Bathroom Sanctuary",
      description: "Spa-like retreat with contemporary fixtures",
      image: "Bathroom.png"
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
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
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
