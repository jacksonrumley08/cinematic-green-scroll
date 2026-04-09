import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-background/0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2 group">
            <TreePine className="h-7 w-7 text-primary" />
            <span className="text-lg md:text-xl font-bold text-primary tracking-tight">
              Advanced Tree Service
            </span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative text-body text-sm font-medium hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-heading"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-heading"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-semibold text-heading hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="w-12 h-0.5 bg-primary rounded-full" />
              <button
                onClick={() => scrollTo("#contact")}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-lg"
              >
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
