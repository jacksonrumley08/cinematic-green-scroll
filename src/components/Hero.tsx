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
              The Four States Area's{" "}
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
            <div className="aspect-[4/3] rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(21,128,61,0.6) 0%, rgba(34,197,94,0.4) 50%, rgba(21,128,61,0.55) 100%)",
                boxShadow: "inset 0 2px 40px rgba(0,0,0,0.25), 0 25px 50px -12px rgba(21,128,61,0.3)",
              }}
            >
              {/* Background texture */}
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 40%)",
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <TreePine className="h-44 w-44 text-white/25" strokeWidth={0.8} />
              </div>
              <TreePine className="absolute bottom-4 left-6 h-28 w-28 text-white/15" strokeWidth={0.8} />
              <TreePine className="absolute top-6 right-8 h-24 w-24 text-white/12" strokeWidth={0.8} />
              <TreePine className="absolute top-1/2 left-[15%] h-16 w-16 text-white/8" strokeWidth={0.8} />
              <TreePine className="absolute bottom-8 right-[20%] h-20 w-20 text-white/10" strokeWidth={0.8} />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 bg-background border border-primary/30 rounded-full px-4 py-2 shadow-lg"
            >
              <span className="text-sm font-semibold text-primary">
                Serving the Four States Area Since 2009
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
