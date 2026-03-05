import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const leftLinks = [
    {
      name: "Email",
      href: "mailto:tonioandria2@gmail.com",
      icon: Mail,
      label: "tonioandria2@gmail.com",
    },
    {
      name: "GitHub",
      href: "https://github.com/Tonio0108",
      icon: Github,
      label: "Tonio0108",
    },
  ];

  const rightLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/antonio-andriatsiaforitrarivo-5ab7b0384/",
      icon: Linkedin,
      label: "Antonio Andriatsiaforitrarivo",
    },
    {
      name: "Whatsapp",
      href: "https://wa.me/261334567890",
      icon: MessageCircle,
      label: "+261 34 28 709 70",
    },
  ];

  const mobileLinks = [...leftLinks, ...rightLinks];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary))/5] to-transparent -z-10" />
      
      <motion.div
        className="section-container text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
          {/* Profile + side links (desktop) and mobile fallback - moved here before subtitle */}
          <motion.div variants={imageVariants} className="mb-20 flex justify-center">
            <div className="w-full flex justify-center">
              <div className="hidden md:flex items-center gap-6">
                <div className="flex flex-col items-end gap-4">
                  {leftLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                        whileHover={{ x: -6, scale: 1.02 }}
                        className="p-3 rounded border border-border/50 bg-card hover:border-primary/30 hover:bg-card/80 inline-flex items-center gap-3 smooth-transition"
                      >
                        <div className="p-2 rounded-md ">
                          <Icon className="text-primary" size={18} />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-muted-foreground">{link.name}</p>
                          <p className="text-sm font-semibold text-foreground truncate">{link.label}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl" />
                  <img
                    src={profileImage}
                    alt="Antonio Andriatsiaforitrarivo"
                    className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-primary shadow-2xl card-glow hover:scale-105 smooth-transition-slow"
                  />
                </div>

                <div className="flex flex-col items-start gap-4">
                  {rightLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                        whileHover={{ x: 6, scale: 1.02 }}
                        className="p-3 rounded border border-border/50 bg-card hover:border-primary/30 hover:bg-card/80 inline-flex items-center gap-3 smooth-transition"
                      >
                        <div className="p-2 rounded-md">
                          <Icon className="text-primary" size={18} />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-muted-foreground">{link.name}</p>
                          <p className="text-sm font-semibold text-foreground truncate">{link.label}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="md:hidden flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl" />
                  <img
                    src={profileImage}
                    alt="Antonio Andriatsiaforitrarivo"
                    className="relative w-32 h-32 rounded-full object-cover border-2 border-primary shadow-2xl card-glow hover:scale-105 smooth-transition-slow"
                  />
                </div>
                <div className="flex justify-center gap-4">
                  {mobileLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.name !== "Email" ? "_blank" : undefined}
                        rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                        className="p-3 rounded-full border border-border hover:border-primary bg-card hover:bg-primary/10 transition-all duration-300 group"
                        aria-label={social.name}
                      >
                        <Icon size={18} className="text-foreground group-hover:text-primary smooth-transition" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-sm md:text-lg text-muted-foreground uppercase tracking-widest mb-6 font-medium">
          Full Stack Developer
        </motion.p>

          {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <p className="text-sm font-medium text-primary">Available for freelance work</p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-6 gradient-text leading-tight"
        >
          Antonio Andriatsiaforitrarivo
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Building robust and scalable web and mobile applications with modern technologies. Specialized in creating performant, user-centric digital experiences.
        </motion.p>

        {/* profile block moved below (inserted after badge) */}

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 text-primary-foreground font-semibold smooth-transition"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View my Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full hover:bg-secondary hover:border-secondary font-semibold smooth-transition"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in touch
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Arrow */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground/50 hover:text-primary smooth-transition" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
