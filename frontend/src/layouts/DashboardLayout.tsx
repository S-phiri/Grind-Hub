import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Activity, Trophy, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import Logo from "@/components/grind/Logo";

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Train", href: "/train", icon: Activity },
  { label: "Compete", href: "/compete", icon: Trophy },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-grind-black flex">
      <aside className="w-56 border-r border-grind-border bg-grind-dark flex flex-col shrink-0">
        <Link
          to="/dashboard"
          className="flex items-center p-6 border-b border-grind-border"
        >
          <Logo variant="lightning" size="sm" />
        </Link>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-manrope text-sm font-medium text-grind-muted hover:text-grind-text hover:bg-grind-black/50 transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-grind-border">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-manrope text-sm font-medium text-grind-muted hover:text-gold-primary hover:bg-grind-black/50 transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-grind-border bg-grind-black/50 backdrop-blur-sm flex items-center justify-between px-6 shrink-0">
          <span className="font-manrope text-sm text-grind-muted">
            {user?.email && (
              <span>
                {user.email} <span className="text-grind-border">·</span>{" "}
              </span>
            )}
            <span className="capitalize text-grind-text">{user?.role}</span>
          </span>
        </header>
        <div className="flex-1 p-6 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
