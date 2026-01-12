const ProjectCard = ({ project }) => {
  return (
    <article className="border border-gray-800 rounded-lg p-6 hover:border-sky-500 transition">
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-3 text-gray-400">{project.description}</p>

      <ul className="mt-4 text-sm text-gray-500 space-y-1">
        {project.highlights.map(item => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <div className="mt-5 flex gap-4 text-sky-400 ">
        <a href={project.github}>GitHub</a>
      </div>
    </article>
  );
};

export default ProjectCard;
