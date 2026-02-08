import { useInView } from "../hooks/useInView";

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="px-6 md:px-20 py-32 bg-gradient-to-b from-transparent to-slate-900/50 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-gradient-to-l from-sky-500/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Building Digital Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Main Content */}
          <div
            className={`md:col-span-3 space-y-6 text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <p>
              I started my career in{" "}
              <span className="text-white font-semibold">
                Mechatronics Engineering
              </span>
              , where system design, precision, and problem-solving were
              essential. That mindset naturally transitioned into software
              engineering.
            </p>

            <p>
              Today, I build full-stack web applications using the{" "}
              <span className="text-sky-400 font-semibold">MERN stack</span>,
              with a strong focus on clean architecture, performance, and
              maintainability. I'm passionate about creating solutions that are
              both technically robust and user-friendly.
            </p>

            <p>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and continuously improving
              my craft.
            </p>
          </div>

          {/* Highlights Card */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-400 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  "B.E. in Mechatronics Engineering",
                  "Self-taught Full Stack Developer",
                  "Strong focus on clean code",
                  "Passionate about UX/UI",
                  "Always learning new technologies",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
