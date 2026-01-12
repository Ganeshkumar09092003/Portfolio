const Contact = () => {
  return (
    <footer className="px-6 md:px-20 py-32 bg-gradient-to-b from-slate-900/50 to-black">
      <div className="max-w-4xl">
        <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
          Get In Touch
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>

        <p className="text-lg text-gray-400 mb-12">
          I'm currently open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-6 group p-4 rounded-lg hover:bg-white/5 transition-all duration-300">
            <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300">
              <span className="text-sky-400 text-2xl group-hover:text-sky-300">✉</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">Email</p>
              <a
                className="text-gray-300 hover:text-sky-400 transition-colors text-lg font-medium relative group-hover:text-white"
                href="mailto:ganu09092003@gmail.com"
              >
                ganu09092003@gmail.com
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group p-4 rounded-lg hover:bg-white/5 transition-all duration-300">
            <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300">
              <span className="text-sky-400 text-2xl group-hover:text-sky-300">⚡</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">GitHub</p>
              <a
                className="text-gray-300 hover:text-sky-400 transition-colors text-lg font-medium relative group-hover:text-white"
                href="https://github.com/Ganeshkumar09092003"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ganeshkumar09092003
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group p-4 rounded-lg hover:bg-white/5 transition-all duration-300">
            <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300">
              <span className="text-sky-400 text-2xl group-hover:text-sky-300">💼</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">LinkedIn</p>
              <a
                className="text-gray-300 hover:text-sky-400 transition-colors text-lg font-medium relative group-hover:text-white"
                href="https://www.linkedin.com/in/ganeshkumar09"
                target="_blank"
                rel="noopener noreferrer"
              >
                ganeshkumar09
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2026 Ganesh Kumar S. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
