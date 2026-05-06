import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  serviceModalAnimMap,
  serviceModalLoopDurations,
  serviceStillFrameMap,
} from "./ServiceModalAnimations";

const ORANGE = "#FF5500";
const DARK = "#0A0A0A";
const LIGHT = "#F5F0EB";

const services = [
  {
    num: "01",
    title: "Brand Websites",
    desc: "We design and develop fully custom websites from scratch — every layout, interaction, and line of code is tailored to your brand.",
    tag: "Web",
  },
  {
    num: "02",
    title: "Custom Systems",
    desc: "We build custom booking engines, management dashboards, and operational tools engineered around your exact workflow.",
    tag: "Backend",
  },
  {
    num: "03",
    title: "Digital Platforms",
    desc: "We architect unified digital platforms — customer portals, mobile apps, and internal tools — connected into one seamless ecosystem.",
    tag: "Platform",
  },
  {
    num: "04",
    title: "Brand Identity",
    desc: "We create complete visual identity systems: logo, typography, color palette, and motion guidelines that work across every touchpoint.",
    tag: "Design",
  },
  {
    num: "05",
    title: "Growth Tools",
    desc: "We implement analytics dashboards, email automation, CRM integrations, and conversion tracking tailored to your business goals.",
    tag: "Growth",
  },
  {
    num: "06",
    title: "Tech Consulting",
    desc: "We provide strategic guidance on your tech stack, architecture, and digital transformation — from founders who've built production systems.",
    tag: "Strategy",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [cardHovered, setCardHovered] = useState(false);
  const [animLoopKey, setAnimLoopKey] = useState(0);
  const reduceMotion = useReducedMotion();

  const Anim = serviceModalAnimMap[service.num as keyof typeof serviceModalAnimMap];
  const Still = serviceStillFrameMap[service.num as keyof typeof serviceStillFrameMap];
  const showMotion = cardHovered && !reduceMotion;

  useEffect(() => {
    if (!showMotion) return;
    const duration = (serviceModalLoopDurations[service.num] ?? 5) * 1000;
    const t = window.setInterval(() => setAnimLoopKey((k) => k + 1), duration);
    return () => window.clearInterval(t);
  }, [showMotion, service.num]);

  const handleCardEnter = () => {
    setCardHovered(true);
    if (!reduceMotion) setAnimLoopKey((k) => k + 1);
  };

  return (
    <motion.div
      ref={ref}
      className="relative group overflow-hidden p-6 md:p-8 flex flex-col gap-5 h-full"
      style={{
        border: `2px solid #1A1A1A`,
        background: DARK,
        minHeight: 420,
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.07,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ background: "#111111" }}
      data-hover="true"
      onMouseEnter={handleCardEnter}
      onMouseLeave={() => setCardHovered(false)}
    >
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 origin-center"
        style={{ background: ORANGE, width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="flex items-start justify-between shrink-0">
        <span
          className="leading-none"
          style={{
            fontSize: 36,
            color: "#4A2510",
            fontFamily: "'Anton','Impact',sans-serif",
            fontWeight: 400,
          }}
        >
          {service.num}
        </span>
        <span
          style={{
            border: "1px solid #2A2A2A",
            color: "#555550",
            fontFamily: "'Inter',sans-serif",
            fontWeight: 500,
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            padding: "3px 10px",
          }}
        >
          {service.tag}
        </span>
      </div>

      <div
        className="relative w-full shrink-0 overflow-hidden rounded-md"
        style={{ height: 180, background: "#080808" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            opacity: 0.35,
          }}
        />
        <div className="relative z-10 h-full w-full flex items-center justify-center p-2">
          {showMotion && Anim ? (
            <Anim key={`${service.num}-motion-${animLoopKey}`} />
          ) : Still ? (
            <Still key={`${service.num}-still`} />
          ) : null}
        </div>
      </div>

      <div className="min-h-0">
        <h3
          className="uppercase mb-3 leading-tight"
          style={{
            fontFamily: "'Anton','Impact',sans-serif",
            fontWeight: 400,
            fontSize: 22,
            letterSpacing: "0.04em",
            color: LIGHT,
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "#9E9890",
            lineHeight: 1.6,
            fontFamily: "'Inter',sans-serif",
            fontWeight: 400,
          }}
        >
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServiceMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="py-24 md:py-40 px-6 md:px-16"
      style={{ background: `${LIGHT}02` }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
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
            What We Do
          </span>
          <h2
            className="leading-none mt-4"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontFamily: "'Anton','Impact',sans-serif",
              fontWeight: 400,
              color: LIGHT,
            }}
          >
            FULL STACK
            <br />
            <span style={{ color: ORANGE }}>BRAND</span>
            <br />
            SOLUTIONS
          </h2>
          <p
            className="mt-6 max-w-2xl"
            style={{
              fontSize: 17,
              color: "#9E9890",
              lineHeight: 1.75,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 400,
            }}
          >
            We don&apos;t just build websites. We architect{" "}
            <span style={{ color: ORANGE }}>complete digital ecosystems</span> — tailored to the unique needs of every
            client.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: 2, background: "#1A1A1A" }}>
          {services.map((svc, i) => (
            <ServiceCard key={svc.num} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
