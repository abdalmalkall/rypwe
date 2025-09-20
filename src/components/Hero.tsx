import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            Ibrahim Alyan
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-300 mb-6 max-w-xl mx-auto">
            Architect | Interior Designer | Founder of the RYP Brand
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#gallery" className="text-center">
              {/* <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 w-40 sm:w-48 md:w-52 text-sm sm:text-base"
              >
                View gallery
              </Button> */}
            </a>
            <a href="#courses" className="text-center">
              {/* <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 w-40 sm:w-48 md:w-52 text-sm sm:text-base"
              >
                Explore Courses
              </Button> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
