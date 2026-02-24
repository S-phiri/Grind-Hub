import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-24 md:py-32 bg-gradient-to-b from-grind-black to-grind-dark overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-primary/[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Gold accent bar */}
          <div className="mx-auto w-12 h-[2px] bg-gold-primary mb-8" />

          <p className="font-manrope text-sm font-semibold text-gold-primary tracking-widest uppercase mb-6">
            Our Vision
          </p>

          <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-grind-text leading-snug mb-8">
            The Future of African Football is Digital
          </h2>

          <p className="font-manrope text-base md:text-lg text-grind-muted leading-relaxed max-w-3xl mx-auto">
            GRIND connects daily training data with competitive performance to give
            African athletes digital visibility. Every session tracked, every
            tournament recorded — building a bridge between grassroots talent and
            professional opportunity.
          </p>

          {/* Projections row */}
          <p className="font-manrope text-xs font-semibold text-grind-muted tracking-widest uppercase mt-16 mb-6">
            Projected reach
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { value: "10K+", label: "Athletes" },
              { value: "500+", label: "Tournaments" },
              { value: "15+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-syne font-extrabold text-3xl md:text-4xl text-gold-primary">
                  {stat.value}
                </p>
                <p className="font-manrope text-sm text-grind-muted mt-2 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
