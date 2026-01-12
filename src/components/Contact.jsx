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
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
              <span className="text-sky-400 text-xl">✉</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <a 
                className="text-sky-400 hover:text-sky-300 transition-colors text-lg font-medium" 
                href="mailto:ganu09092003@gmail.com"
              >
                ganu09092003@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
              <span className="text-sky-400 text-xl">⚡</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">GitHub</p>
              <a 
                className="text-sky-400 hover:text-sky-300 transition-colors text-lg font-medium" 
                href="https://github.com/Ganeshkumar09092003"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ganeshkumar09092003
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
              <span className="text-sky-400 text-xl">💼</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
              <a 
                className="text-sky-400 hover:text-sky-300 transition-colors text-lg font-medium" 
                href="https://www.linkedin.com/in/ganeshkumar09"
                target="_blank"
                rel="noopener noreferrer"
              >
                ganeshkumar09
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
