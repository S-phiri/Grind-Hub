import { ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function CompetePage() {
  return (
    <div className="min-h-screen bg-grind-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gold-muted flex items-center justify-center text-gold-primary mb-8">
          <Trophy className="w-8 h-8" />
        </div>
        <h1 className="font-syne font-extrabold text-4xl md:text-5xl text-grind-text mb-4">
          GRIND Compete
        </h1>
        <p className="font-manrope text-grind-muted text-lg mb-10 leading-relaxed">
          Host, manage, and digitise football tournaments. Coming soon.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-gold-primary hover:text-gold-light transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
