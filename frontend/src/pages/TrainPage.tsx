import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/grind/Logo";

export default function TrainPage() {
  return (
    <div className="min-h-screen bg-grind-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-8">
          <Logo variant="dumbbell" size="lg" />
        </div>
        <h1 className="font-syne font-extrabold text-2xl md:text-3xl text-grind-text mb-2 uppercase tracking-wider">
          Train
        </h1>
        <p className="font-manrope text-grind-muted text-lg mb-10 leading-relaxed">
          Track performance, manage athletes, and build digital football CVs. Coming soon.
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
