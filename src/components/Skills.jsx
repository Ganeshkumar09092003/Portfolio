import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="px-6 md:px-20 py-32 bg-slate-900/50">
      <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
        Technical Expertise
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="group">
            <h3 className="text-xl font-bold mb-6 text-sky-400 group-hover:text-sky-300 transition-colors">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map(skill => (
                <li 
                  key={skill}
                  className="flex items-center text-gray-300 hover:text-white transition-colors cursor-default"
                >
                  <span className="text-sky-400 mr-3">▹</span>
                  <span>{skill}</span>
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
