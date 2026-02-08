import { useState, useEffect } from "react";

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Handle scroll for navbar background and active section
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Find active section
            const sections = navItems.map((item) => item.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
                    ? "bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a
                            href="#hero"
                            onClick={(e) => handleNavClick(e, "#hero")}
                            className="relative group"
                        >
                            <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                                GK
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-150 rounded-lg group ${activeSection === item.href.substring(1)
                                        ? "text-sky-400"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-sky-400 transition-all duration-300 ${activeSection === item.href.substring(1)
                                            ? "w-6"
                                            : "w-0 group-hover:w-4"
                                            }`}
                                    ></span>
                                </a>
                            ))}
                        </div>

                        {/* Social Links - Desktop */}
                        <div className="hidden md:flex items-center gap-4">
                            <a
                                href="https://github.com/Ganeshkumar09092003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-150"
                                aria-label="GitHub"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
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
                                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span
                                    className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                ></span>
                                <span
                                    className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-0" : ""
                                        }`}
                                ></span>
                                <span
                                    className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                {/* Menu Content */}
                <div
                    className={`absolute top-20 left-0 right-0 p-6 transition-all duration-500 ${isMobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-2">
                        {navItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300 ${activeSection === item.href.substring(1)
                                    ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Social Links */}
                    <div className="mt-8 pt-6 border-t border-gray-800 flex justify-center gap-6">
                        <a
                            href="https://github.com/Ganeshkumar09092003"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
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
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
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
        </>
    );
};

export default Navbar;
