const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* خلفية ديكورية */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-black rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center justify-center mb-12">
            {/* شعار دائري فاخر */}
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-900 to-black shadow-2xl flex items-center justify-center border-4 border-white">
                <img
                  src="logowh.webp"
                  alt="RYP Logo"
                  className="w-20 h-20 object-contain rounded-lg"
                />
              </div>
              {/* حلقة متحركة */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gray-300 animate-spin-slow"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">Ibrahim Alyan</span>
            </h2>
            
            {/* خط فاصل فاخر */}
            <div className="relative">
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rotate-45"></div>
            </div>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start mb-20">
          
          {/* قسم النص */}
          <div className="space-y-8">
            {/* بطاقة العلامة التجارية الفاخرة */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg flex items-center justify-center">
                    <img
                      src="logowh.webp"
                      alt="RYP Logo"
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">RYP Studio</h3>
                  <p className="text-gray-600 font-light tracking-wide">Render Your Plan</p>
                </div>
              </div>
            </div>

            {/* بطاقات النص الفاخرة */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 transform hover:scale-[1.01] transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-20 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full mt-2 group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-500"></div>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    <span className="font-bold text-gray-900">Ibrahim Alyan</span> is an architect and interior designer based in Jordan. He is the founder and creative lead behind{' '}
                    <span className="font-bold text-gray-900">RYP</span>{' '}
                    <span className="text-gray-600">(Render Your Plan)</span>
                    — a design brand specializing in architectural visualization and interior design solutions.
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 transform hover:scale-[1.01] transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-20 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full mt-2 group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-500"></div>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    With a strong academic foundation and hands-on experience in lighting and interior design firms in Amman, Ibrahim blends technical expertise with artistic vision to deliver bespoke, high-end spatial experiences.
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 transform hover:scale-[1.01] transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-20 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full mt-2 group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-500"></div>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Driven by innovation and attention to detail, he brings clients' visions to life through thoughtful planning, immersive 3D renderings, and functional yet elegant design concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* قسم الصور الفاخر */}
          <div className="space-y-6">
            {/* الصورة الرئيسية */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200/50 transform hover:scale-[1.02] transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/Living.jpeg"
                  alt="Architectural Design"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay فاخر */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                
                {/* شارة اللوجو */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-2">
                    <img
                      src="logo.jpg"
                      alt="RYP Logo"
                      className="w-8 h-8 object-contain rounded-lg"
                    />
                    <span className="text-sm font-bold text-gray-900">RYP</span>
                  </div>
                </div>

                {/* نص على الصورة */}
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white text-xl font-bold drop-shadow-lg">Signature Design</h4>
                  <p className="text-white/80 text-sm drop-shadow-lg">Luxury Interior</p>
                </div>
              </div>
            </div>

            {/* شبكة الصور الصغيرة */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200/50 transform hover:scale-[1.05] transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/Dining.webp"
                    alt="Dining Design"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm font-semibold drop-shadow-lg">Elegant Dining</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200/50 transform hover:scale-[1.05] transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/Kitchen.png"
                    alt="Kitchen Design"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm font-semibold drop-shadow-lg">Modern Kitchen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم الإحصاءات الفاخر */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 shadow-2xl mb-16 relative overflow-hidden">
          {/* خلفية ديكورية */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="p-8 group">
              <div className="text-4xl font-bold text-white mb-4 transform group-hover:scale-110 transition-transform duration-500">2+ Years</div>
              <div className="text-gray-300 font-light tracking-wide text-lg">Professional Experience</div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-4 group-hover:from-white group-hover:to-gray-300 transition-all duration-500"></div>
            </div>
            <div className="p-8 group">
              <div className="text-4xl font-bold text-white mb-4 transform group-hover:scale-110 transition-transform duration-500">50+ Projects</div>
              <div className="text-gray-300 font-light tracking-wide text-lg">Successfully Completed</div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-4 group-hover:from-white group-hover:to-gray-300 transition-all duration-500"></div>
            </div>
            <div className="p-8 group">
              <div className="text-4xl font-bold text-white mb-4 transform group-hover:scale-110 transition-transform duration-500">100%</div>
              <div className="text-gray-300 font-light tracking-wide text-lg">Client Satisfaction Rate</div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-4 group-hover:from-white group-hover:to-gray-300 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* التوقيع الفاخر */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-xl px-12 py-6 rounded-3xl shadow-2xl border border-gray-200/50 transform hover:scale-105 transition-all duration-500">
            <div className="relative">
              <img
                src="logowh.webp"
                alt="RYP Logo"
                className="w-16 h-16 object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">Render Your Plan</div>
              <div className="text-gray-600 font-light tracking-wide">Architectural Visualization Studio</div>
            </div>
          </div>
        </div>
      </div>

      {/* إضافة أنيميشن للـ CSS */}
      <style >{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;