import { motion } from "framer-motion";
import { ArrowRight, TreePine } from "lucide-react";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(142 64% 29% / 0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-heading leading-[1.08] tracking-tight">
              Northeast Oklahoma's{" "}
              <span className="text-primary">Premier</span> Tree & Land
              Clearing Experts
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-body leading-relaxed max-w-xl">
              Professional tree removal, stump grinding, land clearing, and
              brush hauling — done right, on time, and at a fair price.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="px-7 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                Our Services
              </button>
            </div>
          </motion.div>

          {/* Right image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center shadow-2xl shadow-primary/10 border border-primary/10">
              <TreePine className="h-24 w-24 text-primary/30" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 bg-background border border-primary/30 rounded-full px-4 py-2 shadow-lg"
            >
              <span className="text-sm font-semibold text-primary">
                Serving NE Oklahoma Since 2009
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
