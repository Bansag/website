import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const ORANGE = "#FF5500";

/** Unicode Tagalog / Baybayin block */
const BAYBAYIN = /[\u1700-\u171F]/;
const CJK = /[\u4E00-\u9FFF]/;
const HANGUL = /[\uAC00-\uD7AF]/;

function marqueeSpanStyle(word: string, i: number): CSSProperties {
  const accent = i % 4 === 0;

  if (BAYBAYIN.test(word)) {
    return {
      fontFamily: "'Noto Sans Tagalog', serif",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.06em",
      textTransform: "none",
      fontFeatureSettings: '"liga" 1',
      color: accent ? ORANGE : "#6E6560",
    };
  }

  if (CJK.test(word) || HANGUL.test(word)) {
    return {
      fontFamily:
        "'Inter', 'Apple SD Gothic Neo', 'Malgun Gothic', 'PingFang SC', sans-serif",
      fontWeight: accent ? 500 : 500,
      fontSize: 11,
      letterSpacing: "0.16em",
      textTransform: "none",
      color: accent ? ORANGE : "#2A2A2A",
    };
  }

  return {
    fontFamily: accent ? "'Anton','Impact',sans-serif" : "'Inter',sans-serif",
    fontWeight: accent ? 400 : 500,
    fontSize: 10,
    letterSpacing: "0.38em",
    textTransform: "uppercase",
    color: accent ? ORANGE : "#2A2A2A",
  };
}

export default function SlimMarquee({
  words,
  reverse = false,
}: {
  words: string[];
  reverse?: boolean;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const row = [...words, ...words];

  return (
    <div
      className="overflow-hidden py-2"
      style={{
        borderTop: "1px solid #1A1A1A",
        borderBottom: "1px solid #1A1A1A",
        background: "#050505",
      }}
    >
      {prefersReducedMotion ? (
        <div className="flex gap-8 flex-wrap justify-center px-4 py-1">
          {words.map((word, i) => (
            <span key={i} style={marqueeSpanStyle(word, i)}>
              {word}
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex gap-8 whitespace-nowrap w-max"
          animate={{ x: reverse ? ["-25%", "0%"] : ["0%", "-25%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {row.map((word, i) => (
            <span key={i} style={marqueeSpanStyle(word, i)}>
              {word}
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
