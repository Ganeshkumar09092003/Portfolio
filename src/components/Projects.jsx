import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useInView } from "../hooks/useInView";

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="px-6 md:px-20 py-32 relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl">
            A collection of projects that showcase my skills and passion for
            building practical, well-designed applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
