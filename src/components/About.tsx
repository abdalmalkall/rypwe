
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About <span className="text-gray-500">Ibrahem Alyan</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                As an experienced in-house designer, I specialize in creating compelling visual narratives 
                that bridge the gap between creative vision and business objectives. My expertise spans 
                across digital design, brand identity, and user experience.
              </p>
              <p>
                With over 8 years in the industry, I've had the privilege of working with diverse teams 
                and brands, helping them establish their unique visual identity in the digital landscape.
              </p>
              <p>
                My passion extends beyond client work - I'm dedicated to sharing knowledge through 
                comprehensive design courses that empower the next generation of creative professionals.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="text-center">
             
              </div>
              <div className="text-center">
       
              </div>
              <div className="text-center">

              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="78cfb5fb-b439-42b6-bec7-759c838aa163.jpeg"
                alt="Ibrahem Alyan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom- -right- w- h-24 bg-black rounded-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-lg font-bold"></div>
                <div className="text-xs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
