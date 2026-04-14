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
    description: "Over 500 satisfied customers across the Four States area and growing.",
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
          <div className="aspect-[3/4] rounded-2xl relative overflow-hidden border-l-4 border-primary"
            style={{
              background: "linear-gradient(180deg, #15803D 0%, #064E3B 100%)",
              boxShadow: "inset 0 2px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <TreePine className="h-40 w-40 text-white/20" strokeWidth={0.8} />
            </div>
            <TreePine className="absolute bottom-6 left-6 h-24 w-24 text-white/10" strokeWidth={0.8} />
            <TreePine className="absolute top-8 right-8 h-20 w-20 text-white/8" strokeWidth={0.8} />
            <TreePine className="absolute top-1/3 left-[20%] h-14 w-14 text-white/6" strokeWidth={0.8} />
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
              The Team the Four States Area Trusts
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
