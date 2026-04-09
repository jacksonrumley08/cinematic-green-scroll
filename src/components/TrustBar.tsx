import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Insured & Licensed" },
  { value: 24, suffix: "hr", label: "Emergency Response" },
];

const StatItem = ({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) => {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <span className="text-3xl sm:text-4xl font-bold text-primary">
        {count}{suffix}
      </span>
      <span className="mt-1 text-sm text-text-muted font-medium">{label}</span>
    </div>
  );
};

const TrustBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-accent/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 py-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBar;
