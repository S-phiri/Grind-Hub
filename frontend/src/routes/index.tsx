import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

const HomePage = lazy(() => import("@/pages/HomePage"));
const TrainPage = lazy(() => import("@/pages/TrainPage"));
const CompetePage = lazy(() => import("@/pages/CompetePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-grind-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/train" element={<TrainPage />} />
          <Route path="/compete" element={<CompetePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
        </Route>

        <Route
          path="/train/manage"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<TrainPage />} />
        </Route>

        <Route
          path="/compete/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<CompetePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
