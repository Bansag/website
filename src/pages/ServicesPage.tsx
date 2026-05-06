import ServiceMatrix from "../components/bansag/ServiceMatrix";
import { Link } from "react-router-dom";
import { ORANGE, DARK } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <ServiceMatrix />

      <section className="relative overflow-hidden py-20 px-6 md:px-16" style={{ background: ORANGE }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${DARK}18 1px, transparent 1px), linear-gradient(90deg, ${DARK}18 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2
            className="leading-none mb-6"
            style={{
              fontSize: "clamp(40px, 8vw, 100px)",
              fontFamily: "'Anton','Impact',sans-serif",
              fontWeight: 400,
              color: DARK,
            }}
          >
            READY TO START?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 transition-all hover:scale-105"
            style={{
              background: DARK,
              color: ORANGE,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
            data-hover="true"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
