import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-12 h-12 rounded-xl bg-gold-muted flex items-center justify-center text-gold-primary">
          <LayoutDashboard className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-syne font-extrabold text-2xl text-grind-text">
            Dashboard
          </h1>
          <p className="font-manrope text-sm text-grind-muted capitalize">
            {user?.role} · {user?.email}
          </p>
        </div>
      </motion.div>
      <p className="font-manrope text-grind-muted mb-6">
        Welcome to your GRIND dashboard. Role-based areas:
      </p>
      <ul className="space-y-2 font-manrope text-sm text-grind-text">
        <li>
          <Link
            to="/train"
            className="text-gold-primary hover:text-gold-light transition-colors duration-200"
          >
            Train
          </Link>{" "}
          — Track performance & build your football CV
        </li>
        <li>
          <Link
            to="/train/manage"
            className="text-gold-primary hover:text-gold-light transition-colors duration-200"
          >
            Train (Manage)
          </Link>{" "}
          — Coach view
        </li>
        <li>
          <Link
            to="/compete/dashboard"
            className="text-gold-primary hover:text-gold-light transition-colors duration-200"
          >
            Compete (Dashboard)
          </Link>{" "}
          — Organiser view
        </li>
      </ul>
    </div>
  );
}
