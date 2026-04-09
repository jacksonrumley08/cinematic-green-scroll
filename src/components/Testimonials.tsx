import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Advanced Tree Service removed three massive oaks from our backyard that were threatening our roof. They were professional, fast, and left our yard cleaner than they found it. Highly recommend!",
    name: "Mark T.",
    location: "Broken Arrow, OK",
  },
  {
    text: "After the ice storm, they were out the next morning to clear the damage. Their emergency response is second to none. We felt safe knowing they were handling it.",
    name: "Sarah L.",
    location: "Tulsa, OK",
  },
  {
    text: "We needed five acres cleared for our new build and they handled the entire project — timber, stumps, and brush hauling. Finished two days ahead of schedule.",
    name: "James R.",
    location: "Claremore, OK",
  },
  {
    text: "Fair pricing, honest communication, and incredible results. They ground out 12 stumps in a single day and you'd never know they were there. Outstanding work.",
    name: "Linda M.",
    location: "Owasso, OK",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 sm:py-32 bg-accent/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl shadow-lg p-8 sm:p-10"
            >
              <span className="text-5xl font-bold text-primary leading-none">"</span>
              <p className="mt-2 text-lg text-body italic leading-relaxed">
                {testimonials[current].text}
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-3">
                <p className="font-bold text-heading">— {testimonials[current].name}</p>
                <p className="text-sm text-text-muted">{testimonials[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
