import { motion } from "framer-motion";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
    {/* Green radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
          Get In Touch
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-body max-w-xl mx-auto">
          Request your free, no-obligation quote today. We respond within 24 hours.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 grid sm:grid-cols-3 gap-6"
      >
        <div className="text-center p-6 rounded-xl border border-border bg-card">
          <Phone className="h-6 w-6 text-primary mx-auto" />
          <p className="mt-3 font-bold text-heading">Phone</p>
          <a href="tel:+19185550123" className="mt-1 text-primary font-semibold text-lg hover:underline block">
            (918) 555-0123
          </a>
        </div>
        <div className="text-center p-6 rounded-xl border border-border bg-card">
          <Mail className="h-6 w-6 text-primary mx-auto" />
          <p className="mt-3 font-bold text-heading">Email</p>
          <a href="mailto:info@advancedtreeservice.com" className="mt-1 text-primary font-semibold hover:underline block text-sm sm:text-base">
            info@advancedtreeservice.com
          </a>
        </div>
        <div className="text-center p-6 rounded-xl border border-border bg-card">
          <Clock className="h-6 w-6 text-primary mx-auto" />
          <p className="mt-3 font-bold text-heading">Hours</p>
          <p className="mt-1 text-body text-sm">Mon–Sat, 7AM–6PM</p>
          <p className="text-primary text-sm font-semibold">Emergency: 24/7</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 text-center"
      >
        <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2">
          Request a Quote
          <ArrowRight className="h-5 w-5" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default Contact;
