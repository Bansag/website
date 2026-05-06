import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SlimMarquee from "./SlimMarquee";
import { ORANGE, LIGHT, marqueeWords } from "@/lib/constants";

const stats = [
  { num: "2026", label: "Year Founded" },
  { num: "10+", label: "Projects Delivered" },
  { num: "∞", label: "Possibilities" },
];
export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id="about">
      <SlimMarquee words={marqueeWords} />
      <section className="py-10 md:py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left text */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: ORANGE,
                }}
              >
                Who We Are
              </span>
              <h2
                className="leading-none mt-4 mb-8"
                style={{
                  fontSize: "clamp(52px, 8vw, 100px)",
                  fontFamily: "'Anton','Impact',sans-serif",
                  fontWeight: 400,
                }}
              >
                <span style={{ color: ORANGE }}>BANSAG</span>
                <br />
                <span style={{ color: LIGHT }}>MEANS</span>
                <br />
                <span
                  style={{
                    color: "#1E1E1E",
                    WebkitTextStroke: `1px #2A2A2A`,
                  }}
                >
                  BRAND.
                </span>
              </h2>
              <div
                style={{ width: 48, height: 2, background: ORANGE }}
                className="mb-8"
              />
              <p
                style={{
                  fontSize: 17,
                  color: "#9E9890",
                  lineHeight: 1.7,
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 400,
                }}
                className="mb-5"
              >
                In Filipino,{" "}
                <strong style={{ color: LIGHT, fontWeight: 600 }}>
                  Bansag
                </strong>{" "}
                is the word for brand or identity. We are a Filipino tech
                company that crafts the complete digital presence of businesses —
                from visual identity to the systems that power their operations.
              </p>
              <p
                style={{
                  fontSize: 17,
                  color: "#808080",
                  lineHeight: 1.7,
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 400,
                }}
              >
                We don't just build websites. We architect{" "}
                <span style={{ color: ORANGE }}>
                  complete digital ecosystems
                </span>{" "}
                — tailored to the unique needs of every client.
              </p>
            </motion.div>

            {/* Right: stats + baybayin background */}
            <div className="relative">
              {/* Baybayin watermark */}
              <div
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
                style={{
                  fontSize: "clamp(80px, 16vw, 180px)",
                  lineHeight: 1.1,
                  color: `${ORANGE}06`,
                  fontFamily: "'Noto Sans Tagalog', serif",
                  textAlign: "center",
                }}
              >
                ᜊᜀᜈ
                <br />
                ᜐᜀᜄ
              </div>

              <div
                className="relative z-10 flex flex-col divide-y divide-[#1A1A1A]"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-6 py-8"
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: i * 0.15 + 0.3,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span
                      className="leading-none"
                      style={{
                        fontSize: "clamp(56px, 8vw, 88px)",
                        color: ORANGE,
                        fontFamily: "'Anton','Impact',sans-serif",
                        fontWeight: 400,
                        minWidth: 140,
                      }}
                    >
                      {stat.num}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "#1A1A1A" }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontWeight: 500,
                        fontSize: 11,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#808080",
                        minWidth: 80,
                        textAlign: "right",
                      }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SlimMarquee words={marqueeWords} reverse />
    </div>
  );
}
