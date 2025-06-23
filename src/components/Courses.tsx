
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Interior Design Fundamentals",
      description: "Master the basics of interior design including color theory, space planning, and design principles",
      price: "$299",
      duration: "8 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Advanced Space Planning",
      description: "Learn professional techniques for optimizing layouts and creating functional, beautiful spaces",
      price: "$499",
      duration: "10 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Commercial Design Mastery",
      description: "Specialized course focusing on commercial interior design for offices, restaurants, and retail spaces",
      price: "$799",
      duration: "12 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from expert interior designer Ibrahem Alyan with our comprehensive online courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-black text-white text-xs px-2 py-1 rounded">{course.level}</span>
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
