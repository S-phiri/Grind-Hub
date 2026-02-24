import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Role = "athlete" | "coach" | "organiser";

const STORAGE_KEY = "grind_role";
const TOKEN_KEY = "grind_token";

interface User {
  role: Role;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role: Role) => void;
  logout: () => void;
  getRedirectPath: () => string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function getStoredRole(): Role | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "athlete" || stored === "coach" || stored === "organiser") {
    return stored;
  }
  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const role = getStoredRole();
    if (!role) return null;
    return { role, email: localStorage.getItem("grind_email") ?? "" };
  });

  const login = useCallback((email: string, role: Role) => {
    localStorage.setItem(STORAGE_KEY, role);
    localStorage.setItem("grind_email", email);
    localStorage.setItem(TOKEN_KEY, "mock-token");
    setUser({ role, email });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("grind_email");
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  }, []);

  const getRedirectPath = useCallback((): string => {
    const role = user?.role ?? getStoredRole();
    if (role === "athlete") return "/train";
    if (role === "coach") return "/train/manage";
    if (role === "organiser") return "/compete/dashboard";
    return "/dashboard";
  }, [user?.role]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      getRedirectPath,
    }),
    [user, login, logout, getRedirectPath]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
