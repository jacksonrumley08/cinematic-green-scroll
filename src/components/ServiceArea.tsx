import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Tulsa", "Broken Arrow", "Owasso", "Claremore",
  "Bartlesville", "Catoosa", "Sapulpa", "Sand Springs",
  "Bixby", "Jenks", "Collinsville", "Vinita",
  "Miami", "Grove", "Jay", "Pryor",
];

const OklahomaSVG = () => (
  <svg viewBox="0 0 500 350" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Oklahoma state outline - simplified */}
    <path
      d="M 30 90 L 170 90 L 170 30 L 200 30 L 200 90 L 470 90 L 470 120 L 480 140 L 470 160 L 475 180 L 460 200 L 465 220 L 450 240 L 445 260 L 430 270 L 420 260 L 400 265 L 380 260 L 360 265 L 340 260 L 320 265 L 300 260 L 280 265 L 260 260 L 240 265 L 220 260 L 200 265 L 180 260 L 160 265 L 140 260 L 120 265 L 100 260 L 80 265 L 60 260 L 40 265 L 30 260 Z"
      fill="#E5E7EB"
      stroke="#D1D5DB"
      strokeWidth="2"
    />
    {/* NE Oklahoma highlight region */}
    <path
      d="M 280 90 L 470 90 L 470 120 L 480 140 L 470 160 L 475 180 L 460 200 L 465 220 L 450 240 L 445 260 L 430 270 L 420 260 L 400 265 L 380 260 L 360 265 L 340 260 L 320 265 L 300 260 L 280 265 L 280 90 Z"
      fill="hsl(142 64% 29% / 0.2)"
      stroke="#15803D"
      strokeWidth="2"
    />
    {/* Tulsa pin */}
    <circle cx="350" cy="160" r="6" fill="#15803D" />
    <circle cx="350" cy="160" r="3" fill="white" />
    <text x="350" y="185" textAnchor="middle" fill="#15803D" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
      Tulsa
    </text>
  </svg>
);

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

        {/* Oklahoma SVG map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-4"
        >
          <OklahomaSVG />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
