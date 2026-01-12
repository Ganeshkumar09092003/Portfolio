const About = () => {
  return (
    <section className="px-6 md:px-20 py-32 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-4xl">
        <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
          About Me
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Building Digital Solutions
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I started my career in <span className="text-white font-semibold">Mechatronics Engineering</span>, where system design,
            precision, and problem-solving were essential. That mindset naturally
            transitioned into software engineering.
          </p>
          
          <p>
            Today, I build full-stack web applications using the <span className="text-sky-400 font-semibold">MERN stack</span>, with a
            strong focus on clean architecture, performance, and maintainability. I'm passionate about
            creating solutions that are both technically robust and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
