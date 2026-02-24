import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth, type Role } from "@/context/AuthContext";
import Logo from "@/components/grind/Logo";

const ROLES: { value: Role; label: string }[] = [
  { value: "athlete", label: "Athlete" },
  { value: "coach", label: "Coach" },
  { value: "organiser", label: "Organiser" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("athlete");
  const { login, isAuthenticated, getRedirectPath } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    login(email.trim(), role);
    const redirect = from && from !== "/login" ? from : getRedirectPath();
    navigate(redirect, { replace: true });
  };

  if (isAuthenticated) {
    navigate(getRedirectPath(), { replace: true });
    return null;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md rounded-xl border border-grind-border bg-grind-dark p-8"
      >
        <div className="flex justify-center mb-8">
          <Logo variant="lightning" size="md" />
        </div>
        <h1 className="font-syne font-bold text-2xl text-grind-text mb-2">
          Sign in (mock)
        </h1>
        <p className="font-manrope text-sm text-grind-muted mb-6">
          Choose a role to simulate login. Stored in localStorage.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block font-manrope text-sm font-medium text-grind-text mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-grind-black border border-grind-border text-grind-text font-manrope placeholder:text-grind-muted focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-gold-primary transition-all duration-200"
              required
            />
          </div>
          <div>
            <label className="block font-manrope text-sm font-medium text-grind-text mb-2">
              Role
            </label>
            <div className="space-y-2">
              {ROLES.map((r) => (
                <label
                  key={r.value}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-grind-border hover:border-gold-primary/40 cursor-pointer transition-colors duration-200 has-[:checked]:border-gold-primary has-[:checked]:bg-gold-muted"
                >
                  <input
                    type="radio"
                    name="role"
                    value={r.value}
                    checked={role === r.value}
                    onChange={() => setRole(r.value)}
                    className="text-gold-primary focus:ring-gold-primary"
                  />
                  <span className="font-manrope text-sm text-grind-text">
                    {r.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full font-manrope text-sm font-semibold px-6 py-3.5 bg-gold-primary text-grind-black rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_20px_rgba(244,196,48,0.3)] active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>
      </motion.div>
    </div>
  );
}
