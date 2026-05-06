import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import ScrollProgress from "./components/bansag/ScrollProgress";
import SiteNav from "./components/bansag/SiteNav";
import SiteFooter from "./components/bansag/SiteFooter";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Instant scroll — do NOT use smooth here, it causes a visible
    // slide-to-top delay on every navigation that feels broken.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#0A0A0A",
        color: "#F5F0EB",
      }}
    >
      <ScrollProgress />
      <ScrollToTop />

      {/*
       * Background overlays.
       * Previously used inline SVG data URIs that re-rendered on every frame.
       * Now using simpler CSS backgrounds applied once.
       * Both are purely decorative, pointer-events-none, and GPU-composited.
       */}
      <div
        className="fixed inset-0 pointer-events-none z-[60]"
        style={{
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.015,
          backgroundImage: `linear-gradient(#FF5500 1px, transparent 1px), linear-gradient(90deg, #FF5500 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
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
