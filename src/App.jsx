import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import LeadershipCommunity from "./components/LeadershipCommunity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-orange focus:px-4 focus:py-2 focus:font-bold focus:text-ink">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <LeadershipCommunity />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
