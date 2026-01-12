const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl">
        <div className="inline-block mb-4 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full">
          <span className="text-sky-400 text-sm font-medium">Available for opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
          Ganesh Kumar S
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-sky-400">
          Full Stack MERN Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
          Mechatronics Engineer turned Full Stack Developer, focused on building
          scalable, production-ready web applications with clean architecture and optimal performance.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/Ganesh_Kumar_Resume.pdf"
            className="group px-8 py-4 bg-sky-500 hover:bg-sky-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50"
          >
            Download Resume
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="#projects"
            className="px-8 py-4 border-2 border-gray-700 hover:border-sky-500 rounded-lg font-semibold transition-all duration-300 hover:bg-sky-500/5"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
