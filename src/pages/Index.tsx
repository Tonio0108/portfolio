import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <footer className="bg-section-bg py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-muted-foreground">
          <p>© 2025 Antonio Andriatsiaforitrarivo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
