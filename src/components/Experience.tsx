import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "Jan 2025 - feb 2025",
    description:
      "Developed delivery management feature for a booking platform, enabling users to track orders in real-time. Implemented a secure authentication system and optimized database queries for improved performance.",
    technologies: ["React.js", "TypeScript", "Express.js","Sequelize","PostgreSQL", "WebSocket"],
  },
  {
    title: "Full Stack Developer",
    company: "Innov-T consulting Madagascar",
    period: "Aug 2025 - present",
    description:
      "Developed and maintained multiple client projects, implementing responsive designs and optimizing application performance. Led frontend development on several high-impact projects.",
    technologies: ["TypeScript", "React.js", "Nest.js", "MySQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Ministry of Economy and Finance Vatovavy",
    period: "2024",
    description:
      "Built modern user interfaces and improved user experience across various web applications. Implemented backend services and database optimization.",
    technologies: ["React.js", "TypeScript", "Express.js", "PostgreSQL"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
      },
    }),
  };

  return (
    <section id="experience" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary))/3] to-transparent -z-10" />
      
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              Career Path
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building exceptional digital products
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <Card className="group border border-border/50 hover:border-primary/30 bg-card hover:bg-card/80 overflow-hidden smooth-transition-slow card-glow">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl mb-2 group-hover:text-primary smooth-transition">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base font-semibold text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 whitespace-nowrap h-fit">
                      <Briefcase size={16} className="text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/15 smooth-transition font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
