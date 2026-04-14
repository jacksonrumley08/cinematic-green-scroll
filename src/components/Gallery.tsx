import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TreePine, ArrowUpRight, ArrowRight } from "lucide-react";
import beforeImg1 from "@/assets/before.png";
import afterImg1 from "@/assets/after.png";
import beforeImg2 from "@/assets/before2.png";
import afterImg2 from "@/assets/after2.png";
import beforeImg3 from "@/assets/before3.png";
import afterImg3 from "@/assets/after3.png";

const projects = [
  { label: "Land Clearing", location: "Tulsa, OK", h: "h-[280px]" },
  { label: "Tree Removal", location: "Broken Arrow, OK", h: "h-[380px]" },
  { label: "Stump Grinding", location: "Owasso, OK", h: "h-[280px]" },
  { label: "Storm Damage", location: "Claremore, OK", h: "h-[350px]" },
  { label: "Brush Removal", location: "Bartlesville, OK", h: "h-[250px]" },
  { label: "Lot Clearing", location: "Catoosa, OK", h: "h-[350px]" },
];

const beforeAfterPairs = [
  { before: beforeImg1, after: afterImg1, label: "Tree Removal — Tulsa, OK" },
  { before: beforeImg2, after: afterImg2, label: "Storm Damage Cleanup — Claremore, OK" },
  { before: beforeImg3, after: afterImg3, label: "Tree Trimming — Broken Arrow, OK" },
];

const Slider = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div className="space-y-3">
      <div
        ref={ref}
        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none shadow-lg"
        onPointerDown={(e) => { dragging.current = true; (e.target as HTMLElement).setPointerCapture(e.pointerId); update(e.clientX); }}
        onPointerMove={(e) => { if (dragging.current) update(e.clientX); }}
        onPointerUp={() => { dragging.current = false; }}
        onPointerLeave={() => { dragging.current = false; }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: ref.current?.offsetWidth || "100%", maxWidth: "none" }} draggable={false} />
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-primary">
              <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-20">Before</div>
        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-20">After</div>
      </div>
      <p className="text-sm font-medium text-body text-center">{label}</p>
    </div>
  );
};

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

      {/* Before & After sliders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-2 gap-6 mb-16"
      >
        {beforeAfterPairs.map((pair, i) => (
          <Slider key={i} {...pair} />
        ))}
      </motion.div>

      {/* Masonry gallery */}
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
              className={`group relative ${project.h} rounded-xl bg-muted overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
                <TreePine className="h-12 w-12 text-primary/20" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
                  <p className="text-white font-semibold text-lg">{project.label}</p>
                  <p className="text-white/70 text-sm mt-1">{project.location}</p>
                  <ArrowUpRight className="h-5 w-5 text-white mx-auto mt-3" />
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
