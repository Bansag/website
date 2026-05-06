import { useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ORANGE, LIGHT } from "@/lib/constants";

export default function BansagHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Use raw DOM updates instead of React state to avoid per-frame re-renders.
  const flashlightRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    const fl = flashlightRef.current;
    if (!el || !fl) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    fl.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${ORANGE}10, transparent 60%)`;
    fl.style.opacity = "1";
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-16 pt-20 pb-10"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Flashlight cursor radial — updated via raw DOM, no re-renders */}
      <div
        ref={flashlightRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${ORANGE}07, transparent 65%)`,
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="h-px w-12" style={{ background: `${ORANGE}55` }} />
          <span
            style={{
              fontSize: 10,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: ORANGE,
            }}
          >
            Bansag · Filipino Tech Studio
          </span>
          <div className="h-px w-12" style={{ background: `${ORANGE}55` }} />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="leading-none mb-6"
          style={{
            fontSize: "clamp(44px, 8.5vw, 110px)",
            fontFamily: "'Anton','Impact',sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 0.92,
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span style={{ color: LIGHT }}>WE BUILD</span>
          <br />
          <span style={{ color: ORANGE }}>COMPLETE</span>
          <br />
          <span style={{ color: LIGHT }}>DIGITAL SYSTEMS.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mt-5 max-w-2xl"
          style={{
            fontSize: "clamp(14px, 1.5vw, 17px)",
            color: "#9E9890",
            lineHeight: 1.75,
            fontFamily: "'Inter',sans-serif",
            fontWeight: 400,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          From your{" "}
          <span style={{ color: LIGHT, fontWeight: 600 }}>brand identity</span>{" "}
          to your{" "}
          <span style={{ color: LIGHT, fontWeight: 600 }}>operations</span> — we
          design, build, and launch everything your business needs.
        </motion.p>



        {/* CTAs */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            to="/work"
            className="px-10 py-4 transition-all hover:scale-105 active:scale-95"
            style={{
              background: ORANGE,
              color: "#0A0A0A",
              fontFamily: "'Inter',sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              boxShadow: `0 0 40px ${ORANGE}30`,
            }}
            data-hover="true"
          >
            See Our Work
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 transition-all hover:scale-105 active:scale-95"
            style={{
              border: `1px solid #3A3A3A`,
              color: "#C8C3BE",
              fontFamily: "'Inter',sans-serif",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
            data-hover="true"
          >
            Start a Project
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span
          style={{
            fontFamily: "'Inter',sans-serif",
            fontWeight: 400,
            fontSize: 9,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#3A3A38",
          }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-12"
          style={{ background: `linear-gradient(${ORANGE}, transparent)` }}
          animate={{
            scaleY: [1, 0.4, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
