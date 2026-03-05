import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Database, Layers, Zap, GitBranch } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive and performant web applications with React and TypeScript",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile apps with React Native for iOS and Android",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Developing robust APIs and server-side logic with Nest.js and PostgreSQL",
  },
  {
    icon: Layers,
    title: "Full Stack Solutions",
    description:
      "End-to-end development from database design to user interface",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, efficiency, and user experience",
  },
];

const Services = () => {
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
    <section id="services" className="relative">
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
              What I Offer
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive development services tailored to bring your ideas to life with quality, innovation, and attention to detail
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                className="group"
              >
                <Card className="h-full p-8 border border-border/50 hover:border-primary/30 bg-card hover:bg-card/80 smooth-transition-slow card-glow">
                  <div className="mb-6 w-fit group-hover:scale-110 smooth-transition">
                    <Icon className="text-primary" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary smooth-transition">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
