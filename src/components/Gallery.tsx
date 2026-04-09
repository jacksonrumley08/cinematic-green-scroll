import { motion } from "framer-motion";
import { TreePine, ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  { label: "Land Clearing", location: "Tulsa, OK" },
  { label: "Tree Removal", location: "Broken Arrow, OK" },
  { label: "Stump Grinding", location: "Owasso, OK" },
  { label: "Storm Damage", location: "Claremore, OK" },
  { label: "Brush Removal", location: "Bartlesville, OK" },
  { label: "Lot Clearing", location: "Catoosa, OK" },
];

const Gallery = () => (
  <section id="gallery" className="py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
          Our Work
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
          Results That Speak for Themselves
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-[4/3] rounded-xl bg-muted overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <TreePine className="h-12 w-12 text-primary/20" />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-heading/0 group-hover:bg-heading/70 transition-all duration-300 flex items-end p-5">
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-between w-full">
                <div>
                  <p className="text-primary-foreground font-semibold">{project.label}</p>
                  <p className="text-primary-foreground/70 text-sm">{project.location}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          View All Projects <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
);

export default Gallery;
