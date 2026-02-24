import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/grind/Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Train", to: "/train" },
  { label: "Compete", to: "/compete" },
  { label: "About", to: "/#vision" },
];

const linkBase =
  "font-manrope text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gold-primary after:transition-all after:duration-200";
const linkMuted = "text-grind-muted hover:text-grind-text";
const linkActive = "text-gold-primary after:w-full";
const linkInactive = "after:w-0 hover:after:w-full";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-grind-black/80 backdrop-blur-md border-b border-grind-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary rounded transition-opacity duration-200 hover:opacity-90"
          >
            <Logo variant="lightning" size="sm" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => {
              const isHash = to.startsWith("/#");
              if (isHash) {
                return (
                  <a
                    key={label}
                    href={to}
                    className={`${linkBase} ${linkMuted} ${linkInactive}`}
                  >
                    {label}
                  </a>
                );
              }
              return (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) =>
                    `${linkBase} ${linkMuted} ${isActive ? linkActive : linkInactive}`
                  }
                  end={to === "/"}
                >
                  {label}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="font-manrope text-sm font-medium text-grind-muted hover:text-grind-text transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="font-manrope text-sm font-semibold px-6 py-2.5 rounded-lg border border-grind-border text-grind-text hover:border-gold-primary/50 hover:text-gold-primary transition-all duration-200"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="font-manrope text-sm font-semibold px-6 py-2.5 bg-gold-primary text-grind-black rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_20px_rgba(244,196,48,0.4)] active:scale-[0.98]"
              >
                Login
              </Link>
            )}
          </div>

          <button
            type="button"
            className="md:hidden text-grind-text p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-grind-border bg-grind-black/95 backdrop-blur-md"
          >
            <div className="px-6 pb-6 pt-4 flex flex-col gap-1">
              {navLinks.map(({ label, to }) => {
                const isHash = to.startsWith("/#");
                if (isHash) {
                  return (
                    <a
                      key={label}
                      href={to}
                      onClick={() => setMobileOpen(false)}
                      className="font-manrope text-base font-medium text-grind-muted hover:text-gold-primary py-3 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={label}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `font-manrope text-base font-medium py-3 transition-colors duration-200 ${
                        isActive ? "text-gold-primary" : "text-grind-muted hover:text-gold-primary"
                      }`
                    }
                    end={to === "/"}
                  >
                    {label}
                  </NavLink>
                );
              })}
              <div className="mt-4 pt-4 border-t border-grind-border">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="block font-manrope text-base font-medium text-grind-muted hover:text-gold-primary py-3 transition-colors duration-200"
                    >
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setMobileOpen(false);
                      }}
                      className="w-full text-left font-manrope text-sm font-semibold py-3 text-grind-muted hover:text-gold-primary transition-colors duration-200"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block font-manrope text-sm font-semibold px-6 py-3 bg-gold-primary text-grind-black rounded-lg text-center transition-all duration-200 hover:opacity-90"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
