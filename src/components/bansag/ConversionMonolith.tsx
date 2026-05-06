import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const ORANGE = "#FF5500";
const DARK = "#0A0A0A";
const LIGHT = "#F5F0EB";

/** Contact-page specifics: inbox, what to send, what to expect */
const contactNotes = [
  {
    num: "01",
    title: "One inbox",
    body: "Everything goes to bansag.ph@gmail.com — new builds, partnerships, or follow-ups. We read it all and aim to reply within a couple of business days.",
  },
  {
    num: "02",
    title: "What helps us reply",
    body: "Company or project name, what you need (site, product, consulting), rough timeline, and links or references if you have them. Even a short paragraph is enough to start.",
  },
  {
    num: "03",
    title: "What happens next",
    body: "If we’re a fit, we’ll suggest a short discovery call or a few clarifying questions. If we’re not the right team, we’ll say so — no chase, no hard sell.",
  },
];

export default function ConversionMonolith() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: ORANGE, minHeight: "80vh" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${DARK}18 1px, transparent 1px), linear-gradient(90deg, ${DARK}18 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Light edge depth only — avoids washing out copy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 45%, ${DARK}18 100%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-40 flex flex-col items-center text-center">
        {/* How to use this page — written for people about to email */}
        <motion.div
          className="w-full mb-20 text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-center mb-4"
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: DARK,
            }}
          >
            Contact
          </p>
          <h2
            className="text-center leading-tight mb-10 md:mb-12"
            style={{
              fontFamily: "'Anton','Impact',sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 44px)",
              color: DARK,
              letterSpacing: "0.02em",
              textShadow: "0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            Before you hit send
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {contactNotes.map((item, i) => (
              <motion.article
                key={item.num}
                className="rounded-lg p-6 md:p-7 flex flex-col border shadow-lg"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  background: DARK,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.12 + 0.2,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  className="leading-none mb-3"
                  style={{
                    fontFamily: "'Anton','Impact',sans-serif",
                    fontWeight: 400,
                    fontSize: 56,
                    color: ORANGE,
                    opacity: 0.35,
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    color: LIGHT,
                    fontFamily: "'Anton','Impact',sans-serif",
                    fontWeight: 400,
                    fontSize: 22,
                    marginBottom: 10,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(245, 240, 235, 0.88)",
                    lineHeight: 1.65,
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.4,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full"
        >
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: DARK,
              marginBottom: 24,
            }}
          >
            Let's Build Together
          </p>
          <a
            href="mailto:bansag.ph@gmail.com"
            className="block group"
            data-hover="true"
          >
            <motion.h2
              className="leading-none mb-4 transition-all"
              style={{
                fontSize: "clamp(56px, 12vw, 160px)",
                fontFamily: "'Anton','Impact',sans-serif",
                fontWeight: 400,
                color: DARK,
                letterSpacing: "-0.03em",
              }}
              whileHover={{ letterSpacing: "0.02em" }}
              transition={{ duration: 0.4 }}
            >
              TALK TO US
            </motion.h2>
          </a>
          <p
            style={{
              fontSize: 18,
              color: DARK,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 500,
            }}
          >
            bansag.ph@gmail.com
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bansag.ph@gmail.com"
              className="px-12 py-5 text-[11px] font-black tracking-[0.35em] uppercase border-2 transition-all hover:bg-black hover:text-orange-500 hover:border-black"
              style={{
                borderColor: DARK,
                color: DARK,
                background: "transparent",
              }}
              data-hover="true"
            >
              Email Us
            </a>
            <Link
              to="/work"
              className="px-12 py-5 text-[11px] font-black tracking-[0.35em] uppercase transition-all"
              style={{ background: DARK, color: ORANGE }}
              data-hover="true"
            >
              View Work First
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
