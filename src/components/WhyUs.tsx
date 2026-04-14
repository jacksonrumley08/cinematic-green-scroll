import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import whyBeforeImg from "@/assets/why-before.png";
import whyAfterImg from "@/assets/why-after.png";

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
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <BeforeAfterSlider
            before={whyBeforeImg}
            after={whyAfterImg}
            beforeAlt="Before land clearing"
            afterAlt="After land clearing"
            className="aspect-[3/4]"
            objectPosition="center"
          />
        </motion.div>

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
