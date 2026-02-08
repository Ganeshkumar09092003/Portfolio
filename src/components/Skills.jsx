import { skills } from "../data/skills";
import { useInView } from "../hooks/useInView";

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      ref={ref}
      className="px-6 md:px-20 py-32 relative overflow-hidden"
    >
      {/* Subtle Background - matching Projects section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-700 ${isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(([category, items], index) => (
            <div
              key={category}
              className={`group p-6 rounded-2xl bg-slate-900/50 border border-gray-800/50 hover:border-sky-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2 backdrop-blur-sm ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{
                transitionDelay: isInView ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              {/* Category Icon */}
              <div className="w-12 h-12 mb-4 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-150">
                <span className="text-2xl">
                  {category === "Frontend" && "🎨"}
                  {category === "Backend" && "⚙️"}
                  {category === "Database" && "🗄️"}
                  {category === "Tools" && "🛠️"}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-sky-400 transition-colors">
                {category}
              </h3>

              <ul className="space-y-2.5">
                {items.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-150 cursor-default group/item"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center mr-3 group-hover/item:bg-sky-500/20 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover/item:scale-125 transition-transform"></span>
                    </span>
                    <span className="group-hover/item:translate-x-1 transition-transform">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
