import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram, ArrowRight, MessageCircleWarning, MessageCircle, FacebookIcon } from "lucide-react";

const Contact = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const socialLinks = [
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
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/antonio-andriatsiaforitrarivo-5ab7b0384/",
      icon: Linkedin,
      label: "Antonio Andriatsiaforitrarivo",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/AntonioAndriatsiaforitrarivo/",
      icon: FacebookIcon,
      label: "Antonio Andriatsiaforitrarivo",
    },
    {
      name: "Whatsapp",
      href: "https://wa.me/261334567890",
      icon: MessageCircle,
      label: "+261 34 28 709 70",
    }
  ];

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary))/3] via-transparent to-transparent -z-10" />
      
      <div className="section-container" ref={ref}>
        {/* Main Content */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light">
            Have a project in mind or just want to chat? I'd love to hear about it. Let's create something amazing together.
          </p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="mailto:tonioandria2@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 inline-flex items-center gap-3 justify-center smooth-transition"
            >
              <Mail size={20} />
              Send me an email
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="https://github.com/Tonio0108"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-border hover:border-primary bg-card hover:bg-primary/10 font-semibold inline-flex items-center gap-3 justify-center smooth-transition"
            >
              <Github size={20} />
              View My GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-4 rounded-lg border border-border/50 hover:border-primary/30 bg-card hover:bg-card/80 group smooth-transition-slow"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 smooth-transition">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-sm text-muted-foreground">{social.name}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary smooth-transition truncate">
                        {social.label}
                      </p>
                    </div>
                    <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 smooth-transition" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="text-center pt-12 border-t border-border/50"
        >
          <p className="text-muted-foreground font-light">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
