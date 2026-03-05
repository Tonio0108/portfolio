import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import innov from '../assets/innov.png';
import nowHere from '../assets/nowHere.png';
import dashboard from '../assets/dashboard.png';
import epure from '../assets/epure.png';

const projects = [
  {
    title: "Epure app",
    category: "Web Development",
    description:
      "Application for testing your CV and getting feedback on how to improve it using AI",
    image: epure,
    technologies: ["TypeScript", "React.js", "Tailwind CSS"],
    github: "https://github.com/Tonio0108/epure",
    demo: "https://epure-beta.vercel.app/",
  },
    {
    title: "Tour Mada Decouverte",
    category: "Full Stack",
    description:
      "Dashboard for managing tours, bookings, and customer data for a travel agency",
    image: dashboard,
    technologies: ["TypeScript", "React.js", "Nest.js", "PostgreSQL"],
    demo: "https://tour-mada.innov-t-consulting.mg/",
  },
  {
    title: "Innov-T website",
    category: "Frontend Development",
    description: "Portfolio website for Innov-T, a tech solutions company",
    image: innov,
    technologies: ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Innov-t Now Here App",
    category: "Web and mobile app",
    description:
      "Presence and attendance tracking system for employees based on qr codes scanning",
    image: nowHere,
    technologies: ["TypeScript", "React Native", "Expo", "Nest.js", "MySQL"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.12 },
    }),
  };

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary))/3] to-transparent -z-10" />

      <div className="section-container">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              Latest Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills and expertise in building modern, scalable applications
          </p>
        </motion.div>

        {/* Carousel (infinite loop) */}
        <Carousel opts={{ loop: true, skipSnaps: false }}>
          <CarouselContent className="p-8">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-1 md:basis-1/2">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  className="group h-full"
                >
                  <div className="h-full rounded overflow-hidden border border-border/50 hover:border-primary/30 bg-card hover:bg-card/80 smooth-transition-slow">
                    <div className="relative overflow-hidden bg-card-hover">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 max-h-36"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition-slow flex items-end p-3">
                        <div className="flex gap-3">
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-full bg-primary text-primary-foreground"
                            >
                              <ExternalLink size={18} />
                            </motion.a>
                          )}

                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-full bg-primary/20 text-primary"
                            >
                              <Github size={18} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-primary smooth-transition">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-1.5 py-0.5 text-[9px] rounded-lg bg-primary/10 text-primary border border-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {(project.demo || project.github) && (
                        <motion.a
                          href={project.demo ?? project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold"
                          whileHover={{ x: 4 }}
                        >
                          View Project
                          <ArrowRight size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* CTA Section */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">Want to see more projects?</p>
          <motion.a
            href="https://github.com/Tonio0108"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary smooth-transition font-semibold"
          >
            Visit My GitHub
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
