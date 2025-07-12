import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
         Ibrahim Alyan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Architect | Interior Designer | Founder of the RYP Brand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="text-center">
              {/* <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 w-52"
              >
                View Portfolio
              </Button> */}
            </a>
            <a href="#courses" className="text-center">
              {/* <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 w-52"
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
