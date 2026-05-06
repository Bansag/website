import BansagHero from "../components/bansag/BansagHero";
import SlimMarquee from "../components/bansag/SlimMarquee";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ORANGE, LIGHT, marqueeWords } from "@/lib/constants";
import MehaDesktopImg from "../assets/Work/MehaHome.png";
import MehaMobileImg from "../assets/Work/MehaMobileView.png";
import TaglucopDesktopImg from "../assets/Work/TaglucopHome.png";
import TaglucopMobileImg from "../assets/Work/TaglucopMobileView.png";

const servicePillars = [
  {
    num: "01",
    title: "Design & Brand",
    desc: "Visual identity systems that make your brand instantly recognizable across every touchpoint.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke={ORANGE} strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="8" fill={ORANGE} />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Build & Ship",
    desc: "Custom websites, booking systems, and platforms engineered around your exact business workflow.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M12 36 L24 12 L36 36" stroke={ORANGE} strokeWidth="2" fill="none" />
        <line x1="16" y1="28" x2="32" y2="28" stroke={ORANGE} strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Grow & Scale",
    desc: "Analytics, automation, and strategic consulting that turn your digital presence into a growth machine.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 40 L16 28 L26 32 L40 12" stroke={ORANGE} strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="12" r="3" fill={ORANGE} />
      </svg>
    ),
  },
];

function WhatWeDoTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", color: ORANGE }}>
            What We Do
          </span>
          <h2
            className="leading-none mt-4"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", fontFamily: "'Anton','Impact',sans-serif", fontWeight: 400, color: LIGHT }}
          >
            THREE PILLARS.
            <br />
            <span style={{ color: ORANGE }}>ONE STUDIO.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-[1px]" style={{ background: "#1A1A1A" }}>
          {servicePillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              className="group relative p-8 md:p-10"
              style={{ background: "#0A0A0A" }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-6 select-none pointer-events-none"
                style={{ fontSize: 80, color: "#FFFFFF04", fontFamily: "'Anton','Impact',sans-serif", fontWeight: 400, lineHeight: 1 }}
              >
                {pillar.num}
              </span>

              <div className="mb-6">{pillar.icon}</div>

              <h3
                className="uppercase leading-tight mb-4"
                style={{ fontSize: 22, fontFamily: "'Anton','Impact',sans-serif", fontWeight: 400, color: LIGHT, letterSpacing: "0.04em" }}
              >
                {pillar.title}
              </h3>

              <p style={{ fontSize: 14, color: "#7A7670", lineHeight: 1.65, fontFamily: "'Inter',sans-serif", fontWeight: 400, marginBottom: 24 }}>
                {pillar.desc}
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 transition-all group-hover:gap-5"
                style={{ color: ORANGE, fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}
                data-hover="true"
              >
                <span>Explore</span>
                <span style={{ fontSize: 16 }}>→</span>
              </Link>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: ORANGE }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} className="mb-16 md:mb-20" initial={{ opacity:0, y:50 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:11, letterSpacing:"0.45em", textTransform:"uppercase", color:ORANGE }}>Featured Projects</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
            <h2 className="leading-none" style={{ fontSize:"clamp(48px, 8vw, 96px)", fontFamily:"'Anton','Impact',sans-serif", fontWeight:400, color:LIGHT }}>REAL WORK.<br/><span style={{ color:ORANGE }}>REAL RESULTS.</span></h2>
            <p style={{ fontSize:16, color:"#7A7670", lineHeight:1.65, fontFamily:"'Inter',sans-serif", fontWeight:400, maxWidth:340 }}>Every project we take on solves a real business problem.</p>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-20 md:gap-32">
          {/* Meha Project */}
          <motion.div className="group relative w-full" initial={{ opacity:0, y:40 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:0.2, duration:0.8, ease:[0.16,1,0.3,1] }}>
            <div className="relative w-full h-[500px] md:h-[800px] overflow-hidden mb-8 md:mb-10 rounded-2xl bg-[#111]">
              <img src={MehaDesktopImg} alt="Meha Online" className="hidden md:block w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              <img src={MehaMobileImg} alt="Meha Online Mobile" className="block md:hidden w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12">
              <div className="flex-1">
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase", color:ORANGE, marginBottom:12, display:"block" }}>Sports Booking Platform</span>
                <h3 className="uppercase leading-tight" style={{ fontSize:"clamp(32px, 4vw, 56px)", fontFamily:"'Anton','Impact',sans-serif", fontWeight:400, color:LIGHT }}>Meha Online</h3>
              </div>
              <div className="flex-1 md:max-w-md flex flex-col md:items-end md:text-right">
                <p style={{ fontSize:16, color:"#B0AAA4", lineHeight:1.6, fontFamily:"'Inter',sans-serif", marginBottom: 24 }}>"Courts fully booked online — zero phone calls needed."</p>
                <Link to="/work" className="inline-flex items-center gap-3 transition-all group-hover:gap-5" style={{ color:ORANGE, fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase" }} data-hover="true">
                  <span>View Case Study</span><span style={{ fontSize:16 }}>→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Taglucop Project */}
          <motion.div className="group relative w-full" initial={{ opacity:0, y:40 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:0.4, duration:0.8, ease:[0.16,1,0.3,1] }}>
            <div className="relative w-full h-[500px] md:h-[800px] overflow-hidden mb-8 md:mb-10 rounded-2xl bg-[#111]">
              <img src={TaglucopDesktopImg} alt="Taglucop Resort" className="hidden md:block w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              <img src={TaglucopMobileImg} alt="Taglucop Resort Mobile" className="block md:hidden w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12">
              <div className="flex-1">
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase", color:ORANGE, marginBottom:12, display:"block" }}>Resort Management System</span>
                <h3 className="uppercase leading-tight" style={{ fontSize:"clamp(32px, 4vw, 56px)", fontFamily:"'Anton','Impact',sans-serif", fontWeight:400, color:LIGHT }}>Taglucop Resort</h3>
              </div>
              <div className="flex-1 md:max-w-md flex flex-col md:items-end md:text-right">
                <p style={{ fontSize:16, color:"#B0AAA4", lineHeight:1.6, fontFamily:"'Inter',sans-serif", marginBottom: 24 }}>"From manual reservations to a fully automated resort business."</p>
                <Link to="/work" className="inline-flex items-center gap-3 transition-all group-hover:gap-5" style={{ color:ORANGE, fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase" }} data-hover="true">
                  <span>View Case Study</span><span style={{ fontSize:16 }}>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-32 text-center border-t border-[#1A1A1A] pt-16">
          <Link to="/work" className="inline-flex items-center gap-4 transition-all hover:gap-6" style={{ color:ORANGE, fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:12, letterSpacing:"0.3em", textTransform:"uppercase" }} data-hover="true">
            <span>See All Work</span><span style={{ fontSize:20 }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-16" style={{ background:ORANGE }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:`linear-gradient(#0A0A0A18 1px, transparent 1px), linear-gradient(90deg, #0A0A0A18 1px, transparent 1px)`, backgroundSize:"40px 40px" }}/>
      <motion.div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center" initial={{ opacity:0, y:40 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <Link to="/contact" className="block group" data-hover="true">
          <motion.h2
            className="leading-none mb-6 transition-all"
            style={{
              fontSize: "clamp(56px, 12vw, 160px)",
              fontFamily: "'Anton','Impact',sans-serif",
              fontWeight: 400,
              color: "#0A0A0A",
              letterSpacing: "-0.03em",
            }}
            whileHover={{ letterSpacing: "0.02em" }}
            transition={{ duration: 0.4 }}
          >
            LET&apos;S BUILD.
          </motion.h2>
        </Link>
        <p className="mb-10" style={{ fontSize:18, color:"#0A0A0ABB", fontFamily:"'Inter',sans-serif", fontWeight:400 }}>Ready to bring your business to life? Let&apos;s talk.</p>
        <Link to="/contact" className="inline-block px-12 py-5 transition-all hover:scale-105 active:scale-95" style={{ background:"#0A0A0A", color:ORANGE, fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase" }} data-hover="true">Start a Project</Link>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <BansagHero />
      <SlimMarquee words={marqueeWords} />
      <WhatWeDoTeaser />
      <SlimMarquee words={marqueeWords} reverse />
      <WorkPreview />
      <HomeCTA />
    </>
  );
}
