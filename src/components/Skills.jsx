import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="px-6 md:px-20 py-32 bg-slate-900/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky-500/5 to-transparent pointer-events-none"></div>

      <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
        Technical Expertise
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={category}
            className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-2 backdrop-blur-sm"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-bold mb-6 text-sky-400 group-hover:text-sky-300 transition-colors border-b border-gray-700 pb-2">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center text-gray-300 hover:text-white transition-colors cursor-default group/item"
                >
                  <span className="text-sky-400 mr-3 group-hover/item:text-sky-300 transition-transform group-hover/item:translate-x-1">▹</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
