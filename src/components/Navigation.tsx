import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services","Skills", "Projects", "Experience", "Contact"];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="text-2xl font-bold gradient-text hover:scale-110 smooth-transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AA
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover:text-primary relative group smooth-transition"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full smooth-transition" />
              </motion.a>
            ))}
          </motion.div>

          {/* Desktop CTA Button */}
          <motion.div 
            className="hidden md:block"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              size="sm"
              className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 smooth-transition"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-border/50 bg-black"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/10 smooth-transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={itemVariants}
                >
                  {item}
                </motion.a>
              ))}
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold w-full mt-2"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
