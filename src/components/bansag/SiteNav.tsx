import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const ORANGE = "#FF5500";
const LIGHT = "#F5F0EB";

const baybayinMap: Record<string, string> = {
  B: "ᜊ",
  A: "ᜀ",
  N: "ᜈ",
  S: "ᜐ",
  G: "ᜄ",
};
const letters = ["B", "A", "N", "S", "A", "G"];

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-16"
        style={{
          height: 72,
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #1A1A1A" : "1px solid transparent",
          transition: "background 0.35s, border-color 0.35s, backdrop-filter 0.35s",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          to="/"
          className="flex gap-1 items-end"
          data-hover="true"
          aria-label="Bansag home"
        >
          {letters.map((l, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "'Anton','Impact',sans-serif",
                  fontWeight: 400,
                  fontSize: 18,
                  color: ORANGE,
                  lineHeight: 1,
                }}
              >
                {l}
              </span>
              <span
                style={{
                  fontFamily: "'Noto Sans Tagalog', serif",
                  fontWeight: 400,
                  fontSize: 7,
                  color: "#6E6A65",
                  lineHeight: 1,
                  marginTop: 1,
                }}
              >
                {baybayinMap[l]}
              </span>
            </div>
          ))}
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              style={{
                fontFamily: "'Inter',sans-serif",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: location.pathname === link.href ? ORANGE : "#808080",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = ORANGE)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  location.pathname === link.href ? ORANGE : "#808080")
              }
              data-hover="true"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:block px-6 py-3 transition-all hover:scale-105 active:scale-95"
          style={{
            background: ORANGE,
            color: "#0A0A0A",
            fontFamily: "'Inter',sans-serif",
            fontWeight: 700,
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
          data-hover="true"
        >
          Let's Talk
        </Link>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-hover="true"
          aria-label="Toggle navigation menu"
        >
          <motion.span
            className="block w-6 h-0.5 mb-1.5"
            style={{ background: LIGHT }}
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5"
            style={{ background: LIGHT }}
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 mt-1.5"
            style={{ background: LIGHT }}
            animate={
              mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: "#0A0A0A" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={link.href}
                  style={{
                    fontFamily: "'Anton','Impact',sans-serif",
                    fontWeight: 400,
                    fontSize: 36,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: LIGHT,
                  }}
                  data-hover="true"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <Link
                to="/contact"
                className="mt-4 px-10 py-4 inline-block"
                style={{
                  background: ORANGE,
                  color: "#0A0A0A",
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
                data-hover="true"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
