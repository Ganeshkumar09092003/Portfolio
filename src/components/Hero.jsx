import { useState, useEffect } from "react";

const roles = [
  "Full Stack MERN Developer",
  "React Enthusiast",
  "Problem Solver",
  "Clean Code Advocate",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === role) {
      // Pause at end of word
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-20 relative overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 pointer-events-none animate-pulse-glow"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float opacity-50"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-400/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 max-w-4xl">
        {/* Status Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full animate-fade-in-up">
          <span className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up delay-100">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Ganesh Kumar S
          </span>
        </h1>

        {/* Animated Role */}
        <h2 className="mt-6 text-2xl md:text-4xl font-semibold text-sky-400 h-12 animate-fade-in-up delay-200">
          <span className="typing-cursor">{displayText}</span>
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-in-up delay-300">
          Mechatronics Engineer turned Full Stack Developer, focused on building
          <span className="text-white font-medium"> scalable</span>,
          <span className="text-white font-medium"> production-ready</span> web
          applications with clean architecture and optimal performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up delay-400">
          <a
            href={`${import.meta.env.BASE_URL}ganesh_kumar_resume.pdf`}
            target="_blank"
            className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-black font-semibold rounded-xl overflow-hidden transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download Resume
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <a
            href="#projects"
            className="group px-8 py-4 border-2 border-gray-700 hover:border-sky-500 rounded-xl font-semibold transition-all duration-200 hover:bg-sky-500/5 active:scale-95 flex items-center gap-2"
          >
            View Projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 flex flex-wrap gap-8 animate-fade-in-up delay-500">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">3+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="w-px h-12 bg-gray-800"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4+</div>
            <div className="text-sm text-gray-500">Tech Stack</div>
          </div>
          <div className="w-px h-12 bg-gray-800"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="text-sm text-gray-500">Learning</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Scroll
        </span>
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
