import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, TreePine } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete liability coverage and workers' comp so you never have to worry.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "We show up when we say we will and finish on schedule — no excuses.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Clean, professional results that exceed expectations on every project.",
  },
  {
    icon: Users,
    title: "Trusted by Hundreds",
    description: "Over 500 satisfied customers across Northeast Oklahoma and growing.",
  },
];

const WhyUs = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/15 to-primary-light/10 flex items-center justify-center border-l-4 border-primary">
            <TreePine className="h-20 w-20 text-primary/20" />
          </div>
        </motion.div>

        {/* Right content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              Why Advanced Tree Service
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
              The Team Northeast Oklahoma Trusts
            </h2>
          </motion.div>

          <div className="mt-10 space-y-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-4"
              >
                <div className="h-11 w-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-heading">{item.title}</h3>
                  <p className="text-body mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
