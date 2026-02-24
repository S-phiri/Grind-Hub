import { Outlet } from "react-router-dom";
import Navbar from "@/components/grind/Navbar";
import Footer from "@/components/grind/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-grind-black">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
