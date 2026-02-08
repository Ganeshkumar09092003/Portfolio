import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-gray-200 pt-16 md:pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
};

export default Home;
