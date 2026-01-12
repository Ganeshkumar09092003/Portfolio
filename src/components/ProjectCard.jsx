const ProjectCard = ({ project }) => {
  return (
    <article className="group h-full flex flex-col justify-between border border-gray-800 rounded-xl p-6 bg-slate-900/50 hover:bg-slate-800/50 hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 relative overflow-hidden">
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all" title="View Code">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" h="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all" title="Live Demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            )}
          </div>
        </div>

        <p className="mt-2 text-gray-400 leading-relaxed text-sm mb-6 pb-6 border-b border-gray-800">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-sky-500 uppercase tracking-widest mb-3">Key Features</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            {project.highlights.map(item => (
              <li key={item} className="flex items-start">
                <span className="text-sky-500 mr-2 mt-1">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 text-xs font-medium text-sky-300 bg-sky-900/30 rounded-full border border-sky-500/20">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
