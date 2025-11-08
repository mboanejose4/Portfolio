import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}