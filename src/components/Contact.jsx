import { useInView } from "../hooks/useInView";

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const contactLinks = [
    {
      label: "Email",
      value: "ganu09092003@gmail.com",
      href: "mailto:ganu09092003@gmail.com",
      icon: "✉",
    },
    {
      label: "GitHub",
      value: "Ganeshkumar09092003",
      href: "https://github.com/Ganeshkumar09092003",
      icon: "⚡",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "ganeshkumar09",
      href: "https://www.linkedin.com/in/ganeshkumar09",
      icon: "💼",
      external: true,
    },
  ];

  return (
    <footer
      id="contact"
      ref={ref}
      className="px-6 md:px-20 py-32 bg-gradient-to-b from-slate-900/50 to-black relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`transition-all duration-700 ${isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-block mb-4 text-sky-400 font-semibold tracking-wider text-sm uppercase">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-xl">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to say hi, feel free to
            reach out!
          </p>
        </div>

        <div className="space-y-4">
          {contactLinks.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-6 group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-200 hover:-translate-x-1 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{
                transitionDelay: isInView ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-200">
                <span className="text-sky-400 text-2xl group-hover:text-sky-300">
                  {contact.icon}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">
                  {contact.label}
                </p>
                <p className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                  {contact.value}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-gray-500 text-sm">
            © 2026 Ganesh Kumar S. Built with React & Tailwind CSS.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ganeshkumar09092003"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500/20 transition-all duration-150"
              aria-label="GitHub"
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
            <a
              href="https://www.linkedin.com/in/ganeshkumar09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
              aria-label="LinkedIn"
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
