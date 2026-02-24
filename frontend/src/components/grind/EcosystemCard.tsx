import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface EcosystemCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  route: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function EcosystemCard({
  title,
  description,
  buttonLabel,
  route,
  icon,
  delay = 0,
}: EcosystemCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className="group relative rounded-xl bg-grind-dark border border-grind-border p-8 md:p-12 transition-all duration-400 ease-out hover:-translate-y-2 hover:border-gold-primary/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
    >
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-gold-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 w-12 h-12 rounded-lg bg-gold-muted flex items-center justify-center text-gold-primary transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.3)]">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-syne font-bold text-2xl md:text-3xl text-grind-text mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="font-manrope text-base text-grind-muted leading-relaxed mb-8 max-w-md">
          {description}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate(route)}
          className="inline-flex items-center gap-2 font-manrope text-sm font-semibold px-6 py-3 bg-gold-primary/10 text-gold-primary border border-gold-primary/30 rounded-lg transition-all duration-300 hover:bg-gold-primary hover:text-grind-black hover:shadow-[0_0_20px_rgba(244,196,48,0.3)] hover:scale-105 active:scale-95 group/btn"
        >
          {buttonLabel}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
