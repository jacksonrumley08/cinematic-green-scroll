import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Tulsa", "Broken Arrow", "Owasso", "Claremore",
  "Bartlesville", "Catoosa", "Sapulpa", "Sand Springs",
  "Bixby", "Jenks", "Collinsville", "Vinita",
  "Miami", "Grove", "Jay", "Pryor",
];

const ServiceArea = () => (
  <section className="py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
          Service Area
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
          Proudly Serving Northeast Oklahoma
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* City list */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-3">
            {cities.map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-2"
              >
                <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-body font-medium">{city}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-text-muted">
            Not sure if we cover your area?{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary font-semibold hover:underline"
            >
              Contact us
            </button>{" "}
            — we probably do.
          </p>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/3] rounded-2xl bg-muted border border-border flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5" />
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary/30 mx-auto" />
            <p className="mt-2 text-sm text-text-muted font-medium">Northeast Oklahoma</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
