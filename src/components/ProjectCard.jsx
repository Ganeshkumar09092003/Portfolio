const ProjectCard = ({ project, isInView, index }) => {
  return (
    <article
      className={`group h-full flex flex-col justify-between border border-gray-800/50 rounded-2xl p-6 bg-slate-900/50 hover:bg-slate-800/50 hover:border-sky-500/50 transition-all duration-200 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sky-500/10 relative overflow-hidden ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{
        transitionDelay: isInView ? `${index * 150 + 200}ms` : "0ms",
      }}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="absolute inset-0 animate-shimmer"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          {/* Folder Icon */}
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500/20 hover:scale-110 transition-all duration-150"
                title="View Code"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500/20 hover:scale-110 transition-all duration-300"
                title="Live Demo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-sky-500 uppercase tracking-widest mb-3">
            Key Features
          </h4>
          <ul className="text-sm text-gray-400 space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="relative z-10 mt-auto pt-4 border-t border-gray-800/50 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-medium text-sky-300 bg-sky-900/30 rounded-lg border border-sky-500/20 hover:bg-sky-900/50 hover:border-sky-500/40 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
