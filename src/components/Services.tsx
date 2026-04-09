import { motion } from "framer-motion";
import { TreePine, Disc3, LandPlot, Truck, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    description:
      "Safe, efficient removal of trees of any size, including hazardous and hard-to-reach trees near structures and power lines.",
  },
  {
    icon: Disc3,
    title: "Stump Grinding",
    description:
      "Complete stump removal below grade level, leaving your property clean and ready for landscaping or construction.",
  },
  {
    icon: LandPlot,
    title: "Land Clearing",
    description:
      "Full-scale lot clearing for residential, commercial, and agricultural projects. We handle timber, brush, and debris.",
  },
  {
    icon: Truck,
    title: "Brush Removal & Hauling",
    description:
      "Fast cleanup and hauling of brush, limbs, and organic debris. We leave your site spotless.",
  },
  {
    icon: Zap,
    title: "Storm Damage & Emergency",
    description:
      "24/7 emergency response for storm-damaged trees, fallen limbs, and hazardous situations. Fast, safe, insured.",
  },
];

const Services = () => (
  <section id="services" className="py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
          Our Services
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
          Everything Your Property Needs
        </h2>
        <p className="mt-4 text-body text-lg">
          Comprehensive tree and land services backed by years of expertise and
          a commitment to quality.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {services.slice(0, 3).map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-5">
              <service.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">{service.title}</h3>
            <p className="text-body leading-relaxed mb-4">{service.description}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-5">
              <service.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">{service.title}</h3>
            <p className="text-body leading-relaxed mb-4">{service.description}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
