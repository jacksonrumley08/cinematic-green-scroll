import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import beforeImg1 from "@/assets/before.webp";
import afterImg1 from "@/assets/after.webp";
import beforeImg2 from "@/assets/before2.webp";
import afterImg2 from "@/assets/after2.webp";
import beforeImg4 from "@/assets/before4.webp";
import afterImg4 from "@/assets/after4.webp";
import whyBeforeImg from "@/assets/why-before.webp";
import whyAfterImg from "@/assets/why-after.webp";

const beforeAfterPairs = [
  { before: beforeImg1, after: afterImg1 },
  { before: beforeImg2, after: afterImg2 },
  { before: whyBeforeImg, after: whyAfterImg },
  { before: beforeImg4, after: afterImg4 },
];

interface GalleryProps {
  showViewAllLink?: boolean;
}

const Gallery = ({ showViewAllLink = true }: GalleryProps) => (
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-2 gap-6 mb-16"
      >
        {beforeAfterPairs.map((pair, i) => (
          <BeforeAfterSlider key={i} {...pair} />
        ))}
      </motion.div>

      {showViewAllLink && (
        <div className="mt-10 text-center">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          View All Photos <ArrowRight className="h-4 w-4" />
        </Link>
        </div>
      )}
    </div>
  </section>
);

export default Gallery;
