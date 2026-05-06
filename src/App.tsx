import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import OrangeCursor from "./components/bansag/OrangeCursor";
import ScrollProgress from "./components/bansag/ScrollProgress";
import SiteNav from "./components/bansag/SiteNav";
import SiteFooter from "./components/bansag/SiteFooter";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <div
      className="min-h-[50vh]"
      style={{ background: "#0A0A0A" }}
      aria-hidden
    />
  );
}

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#0A0A0A",
        color: "#F5F0EB",
        cursor: prefersReducedMotion ? "auto" : "none",
      }}
    >
      <OrangeCursor />
      <ScrollProgress />
      <ScrollToTop />

      <div
        className="fixed inset-0 pointer-events-none z-[60] opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.018]"
        style={{
          backgroundImage: `linear-gradient(#FF5500 1px, transparent 1px), linear-gradient(90deg, #FF5500 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <SiteNav />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <SiteFooter />
    </div>
  );
}

export default App;
