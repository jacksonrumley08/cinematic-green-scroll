import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import beforeImg1 from "@/assets/before.webp";
import afterImg1 from "@/assets/after.webp";
import beforeImg2 from "@/assets/before2.webp";
import afterImg2 from "@/assets/after2.webp";
import beforeImg3 from "@/assets/before3.webp";
import afterImg3 from "@/assets/after3.webp";
import beforeImg4 from "@/assets/before4.webp";
import afterImg4 from "@/assets/after4.webp";
import whyBeforeImg from "@/assets/why-before.webp";
import whyAfterImg from "@/assets/why-after.webp";
import heroBeforeImg from "@/assets/hero-before.webp";
import heroAfterImg from "@/assets/hero-after.webp";

const photos = [
  { src: heroBeforeImg, alt: "Tree leaning near commercial building before removal", height: "h-[360px]" },
  { src: heroAfterImg, alt: "Commercial property after tree removal", height: "h-[300px]" },
  { src: beforeImg1, alt: "Residential property before tree removal", height: "h-[420px]" },
  { src: afterImg1, alt: "Residential property after tree removal", height: "h-[320px]" },
  { src: beforeImg2, alt: "Storm-damaged tree before cleanup", height: "h-[360px]" },
  { src: afterImg2, alt: "Cleared property after storm cleanup", height: "h-[300px]" },
  { src: beforeImg3, alt: "Tall trees before trimming and removal", height: "h-[420px]" },
  { src: afterImg3, alt: "Yard after trimming and stump removal", height: "h-[320px]" },
  { src: beforeImg4, alt: "Tree over deck before removal", height: "h-[420px]" },
  { src: afterImg4, alt: "Deck area after tree removal", height: "h-[320px]" },
  { src: whyBeforeImg, alt: "Open field before clearing", height: "h-[360px]" },
  { src: whyAfterImg, alt: "Open field after clearing work", height: "h-[300px]" },
];

const GalleryPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-heading leading-tight">
              Photo Gallery From Real Jobs
            </h1>
            <p className="mt-4 text-lg text-body max-w-2xl">
              A full collection of project photos showing tree removal, land clearing, storm cleanup, and finished results across the Four States area.
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {photos.map((photo, index) => (
              <motion.figure
                key={`${photo.alt}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full ${photo.height} object-cover`}
                  loading="lazy"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
