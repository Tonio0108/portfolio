import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import innov from '../assets/innov.png';
import nowHere from '../assets/nowHere.png';
import dashboard from '../assets/dashboard.png';
import todo from '../assets/todo.png';
const projects = [
  {
    title: "Innov-T website",
    category: "Frontend Development",
    description:
      "Portfolio website for Innov-T, a tech solutions company",
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
  {
    title: "Tour Mada Decouverte dasboard",
    category: "Full Stack",
    description:
      "Dashboard for managing tours, bookings, and customer data for a travel agency",
    image: dashboard,
    technologies: ["TypeScript", "React.js", "Nest.js", "PostgreSQL"],
  },
  {
    title: "Task Management System",
    category: "Full Stack",
    description:
      "Multi-user task management system",
    image: todo,
    technologies: ["TypeScript", "Vue.js", "Supabase"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Animation de base pour chaque carte de projet
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="projects" className="bg-section-bg">
      <div className="section-container">
        {/* Animation du titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Animation des cartes */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ExternalLink className="text-primary" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
