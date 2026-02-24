import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-grind-black via-grind-dark to-grind-darker" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-grind-text uppercase tracking-tight leading-[1.1]"
        >
          Build. Compete.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-light">
            Get Discovered.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-6 md:mt-8 font-manrope text-lg md:text-xl text-grind-muted max-w-2xl mx-auto leading-relaxed"
        >
          Digital infrastructure for African grassroots football.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => navigate("/train")}
            className="w-full sm:w-auto font-manrope text-sm md:text-base font-semibold px-8 py-3.5 bg-gold-primary text-grind-black rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,196,48,0.4)] active:scale-95"
          >
            Explore Training
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => navigate("/compete")}
            className="w-full sm:w-auto font-manrope text-sm md:text-base font-semibold px-8 py-3.5 border-2 border-gold-primary text-gold-primary rounded-lg transition-all duration-300 hover:bg-gold-primary hover:text-grind-black hover:shadow-[0_0_20px_rgba(244,196,48,0.3)] hover:scale-105 active:scale-95"
          >
            Host Tournament
          </button>
        </motion.div>

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="mt-16 md:mt-20 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent"
        />
      </div>
    </section>
  );
}
