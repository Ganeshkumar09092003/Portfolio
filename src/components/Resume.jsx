import { useInView } from "../hooks/useInView";

const Resume = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="resume"
      ref={ref}
      className="px-6 md:px-20 py-24 bg-gradient-to-b from-slate-900 to-slate-900/50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sky-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm transition-all duration-700 ${isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Want to know more?
            </h2>
            <p className="text-gray-400 text-lg">
              Download my resume for a detailed overview of my experience and
              skills.
            </p>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}ganesh_kumar_resume.pdf`}
            target="_blank"
            className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95 flex items-center gap-3 whitespace-nowrap"
          >
            <span className="relative z-10">Download Resume</span>
            <svg
              className="w-5 h-5 relative z-10 group-hover:translate-y-0.5 transition-transform"
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
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
