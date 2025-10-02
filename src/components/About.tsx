const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* العنوان الرئيسي مع اللوجو */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src="logo.jpg"
              alt="RYP Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-6 rounded-xl shadow-lg"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About <span className="text-gray-600">Ibrahim Alyan</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gray-200 to-gray-200 mx-auto"></div>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          
          {/* قسم النص */}
          <div className="space-y-6">
            {/* بطاقة العلامة التجارية */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <img
                  src="logo.jpg"
                  alt="RYP Logo"
                  className="w-14 h-14 object-contain rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-black">RYP Studio</h3>
                  <p className="text-gray-600">Render Your Plan</p>
                </div>
              </div>
            </div>

            {/* بطاقات النص */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-lg">
                  <span className="font-bold text-black">Ibrahim Alyan</span> is an architect and interior designer based in Jordan. He is the founder and creative lead behind{' '}
                  <span className="font-bold text-black">RYP</span>{' '}
                  <span className="text-gray-600">(Render Your Plan)</span>
                  — a design brand specializing in architectural visualization and interior design solutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-lg">
                  With a strong academic foundation and hands-on experience in lighting and interior design firms in Amman, Ibrahim blends technical expertise with artistic vision to deliver bespoke, high-end spatial experiences.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Driven by innovation and attention to detail, he brings clients' visions to life through thoughtful planning, immersive 3D renderings, and functional yet elegant design concepts.
                </p>
              </div>
            </div>
          </div>

          {/* قسم الصور */}
          <div className="space-y-5">
            {/* الصورة الرئيسية */}
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Architectural Design"
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                  <img
                    src="logo.jpg"
                    alt="RYP Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* الصور الصغيرة */}
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Interior Design"
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                />
              </div>
              
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="3D Rendering"
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* قسم الإحصاءات */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-black mb-3">2+ Years</div>
              <div className="text-gray-600 font-medium">Professional Experience</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-black mb-3">50+ Projects</div>
              <div className="text-gray-600 font-medium">Successfully Completed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-black mb-3">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* التوقيع */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
            <img
              src="logo.jpg"
              alt="RYP Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <div className="text-lg font-bold text-black">Render Your Plan</div>
              <div className="text-sm text-gray-600">Architectural Visualization Studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;