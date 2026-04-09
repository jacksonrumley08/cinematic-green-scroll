import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Tulsa", "Broken Arrow", "Owasso", "Claremore",
  "Bartlesville", "Catoosa", "Sapulpa", "Sand Springs",
  "Bixby", "Jenks", "Collinsville", "Vinita",
  "Miami", "Grove", "Jay", "Pryor",
];

const OklahomaSVG = () => (
  <svg viewBox="0 0 500 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Full Oklahoma outline with proportional panhandle */}
    <path
      d="M 30 95 L 165 95 L 165 70 L 195 70 L 195 95 L 470 95 L 470 125 L 478 145 L 470 165 L 474 185 L 460 200 L 464 218 L 450 235 L 446 252 L 432 262 L 420 254 L 402 258 L 384 252 L 366 258 L 348 252 L 330 258 L 312 252 L 294 258 L 276 252 L 258 258 L 240 252 L 222 258 L 204 252 L 186 258 L 168 252 L 150 258 L 132 252 L 114 258 L 96 252 L 78 258 L 60 252 L 42 258 L 30 252 Z"
      fill="#E5E7EB"
      stroke="#15803D"
      strokeWidth="1.5"
    />
    {/* NE Oklahoma highlighted region */}
    <path
      d="M 290 95 L 470 95 L 470 125 L 478 145 L 470 165 L 474 185 L 460 200 L 464 218 L 450 235 L 446 252 L 432 262 L 420 254 L 402 258 L 384 252 L 366 258 L 348 252 L 330 258 L 312 252 L 294 258 L 290 252 L 290 95 Z"
      fill="rgba(21,128,61,0.25)"
      stroke="#15803D"
      strokeWidth="2"
    />
    {/* Tulsa marker */}
    <circle cx="355" cy="160" r="7" fill="#15803D" />
    <circle cx="355" cy="160" r="3.5" fill="white" />
    <text x="355" y="182" textAnchor="middle" fill="#15803D" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
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
