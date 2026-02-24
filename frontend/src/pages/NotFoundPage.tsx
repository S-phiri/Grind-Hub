import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <p className="font-syne font-extrabold text-6xl md:text-8xl text-grind-muted/30 mb-4">
          404
        </p>
        <h1 className="font-syne font-bold text-xl md:text-2xl text-grind-text mb-2">
          Page not found
        </h1>
        <p className="font-manrope text-grind-muted mb-8 max-w-sm mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-manrope text-sm font-semibold px-6 py-3 bg-gold-primary text-grind-black rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
