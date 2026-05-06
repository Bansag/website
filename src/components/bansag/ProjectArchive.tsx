import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ORANGE, DARK, LIGHT } from "@/lib/constants";
import DeviceMockup from "./DeviceMockup";
import mehaDesktop from "@/assets/Work/meha_desktop.webp";
import mehaMobile from "@/assets/Work/meha_mobile.webp";
import taglucopDesktop from "@/assets/Work/taglucop_desktop.webp";
import taglucopMobile from "@/assets/Work/taglucop_mobile.webp";

const projects = [
  {
    name: "Meha Online",
    category: "Sports Booking Platform",
    industry: "Sports & Recreation",
    tech: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    outcome: "Courts fully booked online — zero phone calls needed.",
    problem:
      "Sports venues were losing bookings to manual scheduling, missed calls, and no payment collection.",
    solution:
      "We built a real-time court reservation system with live availability, online payments, and a facility management dashboard — so venue owners run their business from a single screen.",
    url: "https://www.meha.online",
    desktopMediaUrl: mehaDesktop,
    mobileMediaUrl: mehaMobile,
    imgClassName: "scale-[1.15]",
  },
  {
    name: "Taglucop Resort",
    category: "Resort Management System",
    industry: "Hospitality",
    tech: ["React", "Supabase", "Node.js"],
    year: "2024",
    outcome:
      "From manual reservations to a fully automated resort business.",
    problem:
      "The resort had no digital presence — bookings happened over Facebook Messenger, pricing was inconsistent, and admin work was overwhelming.",
    solution:
      "We delivered a marketing website, online booking engine with dynamic pricing, add-on packages, discount codes, and a full admin control panel — all in one platform.",
    url: "https://taglucop-co.vercel.app",
    desktopMediaUrl: taglucopDesktop,
    mobileMediaUrl: taglucopMobile,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <>

      <motion.article
        ref={ref}
        className="grid md:grid-cols-2 gap-0 overflow-hidden"
        style={{ borderBottom: "1px solid #1A1A1A" }}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: index * 0.1,
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Image / Mockup side */}
        <div
          className={`relative overflow-hidden flex items-center justify-center ${isEven ? "md:order-1" : "md:order-2"}`}
          style={{ minHeight: 420, background: "#111" }}
        >
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at center, ${ORANGE}33 0%, transparent 70%)`
          }} />
          <DeviceMockup 
            desktopMediaUrl={project.desktopMediaUrl} 
            imgClassName={(project as any).imgClassName}
          />
          {/* Mobile gradient */}
          <div
            className="absolute inset-0 pointer-events-none z-30 md:hidden"
            style={{ background: "linear-gradient(to top, #0D0D0D 0%, transparent 40%)" }}
          />
          {/* Desktop gradient */}
          <div
            className="absolute inset-0 pointer-events-none z-30 hidden md:block"
            style={{
              background: isEven
                ? "linear-gradient(to right, transparent 60%, #0D0D0D)"
                : "linear-gradient(to left, transparent 60%, #0D0D0D)",
            }}
          />
          <div className="absolute bottom-6 right-6 z-50">
            <span
              style={{
                background: DARK,
                color: ORANGE,
                fontFamily: "'Inter',sans-serif",
                fontWeight: 600,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "5px 14px",
                border: `1px solid ${ORANGE}33`,
              }}
            >
              {project.industry}
            </span>
          </div>
          <div className="absolute top-6 left-6 z-50">
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                fontWeight: 400,
                fontSize: 11,
                color: "#555550",
                letterSpacing: "0.2em",
              }}
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div
          className={`flex flex-col justify-center px-10 py-14 ${isEven ? "md:order-2" : "md:order-1"}`}
          style={{ background: "#0D0D0D" }}
        >
          <span
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              fontSize: 10,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: ORANGE,
              marginBottom: 16,
              display: "block",
            }}
          >
            {project.category}
          </span>

          <h3
            className="uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontFamily: "'Anton','Impact',sans-serif",
              fontWeight: 400,
              color: LIGHT,
            }}
          >
            {project.name}
          </h3>

          <p
            style={{
              fontSize: 18,
              color: LIGHT,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              lineHeight: 1.5,
              marginBottom: 16,
            }}
          >
            "{project.outcome}"
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#555550",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                The Challenge
              </span>
              <p
                style={{
                  fontSize: 14,
                  color: "#7A7670",
                  lineHeight: 1.65,
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 400,
                }}
              >
                {project.problem}
              </p>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: ORANGE,
                  display: "block",
                  marginBottom: 4,
                }}
              >
                What We Built
              </span>
              <p
                style={{
                  fontSize: 14,
                  color: "#9E9890",
                  lineHeight: 1.65,
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 400,
                }}
              >
                {project.solution}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  border: "1px solid #2A2A2A",
                  color: "#606060",
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3"
            style={{
              color: ORANGE,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
            data-hover="true"
          >
            <span>View Live Project</span>
            <span style={{ fontSize: 18 }}>↗</span>
          </a>
        </div>
      </motion.article>
    </>
  );
}

export default function ProjectArchive() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            Featured Projects
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
            <h2
              className="leading-none"
              style={{
                fontSize: "clamp(48px, 8vw, 96px)",
                fontFamily: "'Anton','Impact',sans-serif",
                fontWeight: 400,
                color: LIGHT,
              }}
            >
              REAL WORK.
              <br />
              <span style={{ color: ORANGE }}>REAL RESULTS.</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#7A7670",
                lineHeight: 1.65,
                fontFamily: "'Inter',sans-serif",
                fontWeight: 400,
                maxWidth: 340,
              }}
            >
              Every project we take on solves a real business problem. Here's
              proof.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div style={{ border: "1px solid #1A1A1A" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* Industries footer */}
        <motion.div
          className="mt-4 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "#0D0D0D",
            border: "1px solid #1A1A1A",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: LIGHT,
                marginBottom: 6,
              }}
            >
              Also built for: E-Commerce · Logistics · Healthcare ·
              Education · Real Estate · Food & Beverage
            </p>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "#555550",
              }}
            >
              Every business is different. We build what you actually need.
            </p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap px-8 py-4 transition-all hover:scale-105 active:scale-95"
            style={{
              background: ORANGE,
              color: DARK,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
            data-hover="true"
          >
            Let's Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
