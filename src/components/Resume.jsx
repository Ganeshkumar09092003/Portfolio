const Resume = () => {
  return (
    <section className="px-6 md:px-20 py-24 bg-slate-900">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>

      <a
        href={`${import.meta.env.BASE_URL}ganesh_kumar_resume.pdf`}
        className="inline-block px-6 py-3 bg-sky-500 text-black rounded" target="_blank"
      >
        Download Resume (PDF)
      </a>
    </section>
  );
};

export default Resume;
