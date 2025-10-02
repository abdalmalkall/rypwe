const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50"> {/* خلفية كاملة رمادية */}
      <div className="max-w-6xl mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About <span className="text-gray-500">Ibrahim Alyan</span>
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        {/* المحتوى */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              is an architect and interior designer based in Jordan. He is the founder and creative lead behind 
              <span className="font-bold text-black mx-1">RYP</span>
              <span className="text-gray-500">(Render Your Plan)</span>
              — a design brand specializing in architectural visualization and interior design solutions. With a strong academic foundation and hands-on experience in lighting and interior design firms in Amman, Ibrahim blends technical expertise with artistic vision to deliver bespoke, high-end spatial experiences.
            </p>
            <p>
              Driven by innovation and attention to detail, he brings clients' visions to life through thoughtful planning, immersive 3D renderings, and functional yet elegant design concepts.
            </p>
          </div>

          {/* الصور */}
          <div className="grid grid-cols-2 gap-4">
            {/* الصورة الرئيسية */}
            <div className="col-span-2">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Architectural Design"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* الصور الصغيرة */}
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Interior Design"
                className="w-full h-32 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="3D Rendering"
                className="w-full h-32 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;