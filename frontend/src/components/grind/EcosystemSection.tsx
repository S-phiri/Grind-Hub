import EcosystemCard from "./EcosystemCard";
import { Activity, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32 bg-grind-black">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.04)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-manrope text-sm font-semibold text-gold-primary tracking-widest uppercase mb-3">
            The Ecosystem
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-grind-text">
            Two Engines. One Mission.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <EcosystemCard
            title="GRIND Train"
            description="Track performance, manage athletes, and build digital football CVs. Transform raw talent into measurable data that scouts and academies trust."
            buttonLabel="Enter Train"
            route="/train"
            icon={<Activity className="w-6 h-6" />}
            delay={0}
          />
          <EcosystemCard
            title="GRIND Compete"
            description="Host, manage, and digitise football tournaments. From grassroots leagues to elite showcases — bring every match to life with real-time data."
            buttonLabel="Enter Compete"
            route="/compete"
            icon={<Trophy className="w-6 h-6" />}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
