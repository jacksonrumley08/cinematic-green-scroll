import { motion } from "framer-motion";
import { TreePine, ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  { label: "Land Clearing", location: "Tulsa, OK", height: "aspect-[3/4]" },
  { label: "Tree Removal", location: "Broken Arrow, OK", height: "aspect-[4/3]" },
  { label: "Stump Grinding", location: "Owasso, OK", height: "aspect-[1/1]" },
  { label: "Storm Damage", location: "Claremore, OK", height: "aspect-[4/3]" },
  { label: "Brush Removal", location: "Bartlesville, OK", height: "aspect-[3/4]" },
  { label: "Lot Clearing", location: "Catoosa, OK", height: "aspect-[1/1]" },
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

      {/* Masonry layout with CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="break-inside-avoid"
          >
            <div
              className={`group relative ${project.height} rounded-xl bg-muted overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
                <TreePine className="h-12 w-12 text-primary/20" />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
                  <p className="text-white font-semibold">{project.label}</p>
                  <p className="text-white/70 text-sm">{project.location}</p>
                  <ArrowUpRight className="h-5 w-5 text-white mx-auto mt-2" />
                </div>
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
