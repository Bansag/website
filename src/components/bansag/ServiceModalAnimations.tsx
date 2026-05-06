import { motion } from "framer-motion";
import { ORANGE, DARK, LIGHT } from "@/lib/constants";

/** Story: browser chrome → wireframe → hero → mark → CTA + caption */
export function BrandWebsiteAnim() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <motion.rect
        x="20"
        y="10"
        width="200"
        height="140"
        rx="4"
        fill="#0D0D0D"
        stroke="#2A2A2A"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      />
      <motion.rect
        x="20"
        y="10"
        width="200"
        height="16"
        rx="4"
        fill="#141414"
        stroke="#2A2A2A"
        strokeWidth="1"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "20px 18px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={30 + i * 9}
          cy={18}
          r={2.5}
          fill={["#FF5F57", "#FEBC2E", "#28C840"][i]}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 + i * 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <motion.rect
        x="65"
        y="13"
        width="120"
        height="10"
        rx="2"
        fill="#0A0A0A"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.3 }}
      />
      <motion.text x="125" y="20.5" textAnchor="middle" fill="#444" fontSize="4.5" fontFamily="Inter,sans-serif">
        <motion.tspan initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          yourbrand.com
        </motion.tspan>
      </motion.text>

      <motion.rect
        x="30"
        y="34"
        width="180"
        height="20"
        rx="2"
        fill="#181818"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "30px 44px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="30"
          y={62 + i * 11}
          width={[160, 120, 90][i]}
          height="6"
          rx="1"
          fill="#181818"
          initial={{ scaleX: 0 }}
          style={{ transformOrigin: "30px 67px" }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.65 + i * 0.12, duration: 0.4 }}
        />
      ))}

      <motion.rect
        x="30"
        y="34"
        width="180"
        height="20"
        rx="2"
        fill={ORANGE}
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "30px 44px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.text x="120" y="47" textAnchor="middle" fill={DARK} fontSize="6" fontFamily="Anton,Impact,sans-serif" letterSpacing="1">
        <motion.tspan initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }}>
          YOUR BRAND
        </motion.tspan>
      </motion.text>

      <motion.g
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <polygon points="195,38 207,52 183,52" fill="none" stroke={LIGHT} strokeWidth="1.2" />
        <circle cx="195" cy="45" r="2" fill={LIGHT} />
      </motion.g>

      <motion.rect
        x="30"
        y="108"
        width="60"
        height="14"
        rx="2"
        fill={ORANGE}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1, 1, 1, 0.7, 1], scale: [0.8, 1, 1, 1.04, 1, 1] }}
        transition={{ delay: 3.5, duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "60px 115px" }}
      />
      <motion.text x="60" y="117.5" textAnchor="middle" fill={DARK} fontSize="4.5" fontFamily="Inter,sans-serif" fontWeight={700} letterSpacing="0.8">
        <motion.tspan initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.9 }}>
          GET STARTED
        </motion.tspan>
      </motion.text>

      <motion.text
        x="120"
        y="155"
        textAnchor="middle"
        fill="#444"
        fontSize="4"
        fontFamily="Inter,sans-serif"
        letterSpacing="1.5"
        style={{ textTransform: "uppercase" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 0.5 }}
      >
        YOUR BRAND. LIVE. CONVERTING.
      </motion.text>
    </svg>
  );
}

const systemNodes = [
  { x: 120, y: 25, label: "Admin", color: ORANGE },
  { x: 50, y: 75, label: "Bookings", color: "#F5F0EB" },
  { x: 190, y: 75, label: "Payments", color: "#F5F0EB" },
  { x: 85, y: 125, label: "Inventory", color: "#F5F0EB" },
  { x: 155, y: 125, label: "Reports", color: "#F5F0EB" },
] as const;
const systemEdges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 4],
] as const;

/** Story: nodes → edges draw → pulses */
export function CustomSystemsAnim() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      {systemEdges.map(([a, b], i) => {
        const na = systemNodes[a];
        const nb = systemNodes[b];
        return (
          <motion.path
            key={`e-${i}`}
            d={`M ${na.x} ${na.y} L ${nb.x} ${nb.y}`}
            stroke={`${ORANGE}40`}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.0 + i * 0.2, duration: 0.5 }}
          />
        );
      })}

      {systemEdges.map(([a, b], i) => {
        const na = systemNodes[a];
        const nb = systemNodes[b];
        return (
          <motion.circle
            key={`p-${i}`}
            r="2.5"
            fill={ORANGE}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              cx: [na.x, nb.x],
              cy: [na.y, nb.y],
            }}
            transition={{ delay: 2.4 + i * 0.35, duration: 0.7, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
          />
        );
      })}

      {systemNodes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <rect x={n.x - 22} y={n.y - 9} width="44" height="18" rx="3" fill="#111" stroke={i === 0 ? ORANGE : "#2A2A2A"} strokeWidth={i === 0 ? 1.5 : 0.8} />
          <text x={n.x} y={n.y + 2} textAnchor="middle" fill={n.color} fontSize="5" fontFamily="Inter,sans-serif" letterSpacing="0.5">
            {n.label}
          </text>
        </motion.g>
      ))}

      <motion.text
        x="120"
        y="155"
        textAnchor="middle"
        fill="#444"
        fontSize="4"
        fontFamily="Inter,sans-serif"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        BUILT AROUND YOUR EXACT WORKFLOW
      </motion.text>
    </svg>
  );
}

/** Story: devices appear → synced bars → link pulse */
export function DigitalPlatformsAnim() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <motion.rect
        x="20"
        y="35"
        width="40"
        height="70"
        rx="5"
        fill="#111"
        stroke="#2A2A2A"
        strokeWidth="1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.rect x="20" y="35" width="40" height="10" rx="5" fill="#1A1A1A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
      <motion.rect
        x="26"
        y="52"
        width="28"
        height="4"
        rx="1"
        fill={ORANGE}
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "26px 54px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      />
      <motion.rect
        x="26"
        y="60"
        width="28"
        height="2.5"
        rx="1"
        fill="#1E1E1E"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "26px 61px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.15, duration: 0.3 }}
      />
      <motion.rect
        x="26"
        y="65"
        width="20"
        height="2.5"
        rx="1"
        fill="#1E1E1E"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "26px 66px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.25, duration: 0.3 }}
      />

      <motion.rect
        x="72"
        y="25"
        width="56"
        height="90"
        rx="5"
        fill="#111"
        stroke="#2A2A2A"
        strokeWidth="1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.rect x="72" y="25" width="56" height="10" rx="5" fill="#1A1A1A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
      <motion.rect
        x="80"
        y="44"
        width="40"
        height="6"
        rx="1"
        fill={ORANGE}
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "80px 47px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      />
      <motion.rect
        x="80"
        y="55"
        width="40"
        height="3"
        rx="1"
        fill="#1E1E1E"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "80px 56px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.25, duration: 0.3 }}
      />
      <motion.rect
        x="80"
        y="62"
        width="28"
        height="3"
        rx="1"
        fill="#1E1E1E"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "80px 63px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.35, duration: 0.3 }}
      />

      <motion.rect
        x="140"
        y="20"
        width="88"
        height="100"
        rx="4"
        fill="#111"
        stroke="#2A2A2A"
        strokeWidth="1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.rect x="140" y="20" width="88" height="12" rx="4" fill="#1A1A1A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} />
      <motion.rect
        x="150"
        y="42"
        width="68"
        height="8"
        rx="1"
        fill={ORANGE}
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "150px 46px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      />
      <motion.rect
        x="150"
        y="56"
        width="68"
        height="4"
        rx="1"
        fill="#1E1E1E"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "150px 58px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.35, duration: 0.4 }}
      />
      <motion.rect
        x="150"
        y="64"
        width="48"
        height="4"
        rx="1"
        fill="#1E1E1E"
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "150px 66px" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.45, duration: 0.4 }}
      />

      {[
        [60, 70, 72, 70],
        [128, 70, 140, 70],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={`${ORANGE}60`}
          strokeWidth="1"
          strokeDasharray="3 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 2.0, duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
        />
      ))}

      <motion.rect x="175" y="120" width="16" height="6" rx="1" fill="#1A1A1A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} />
      <motion.rect x="168" y="126" width="30" height="2" rx="1" fill="#2A2A2A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} />

      <motion.text
        x="120"
        y="155"
        textAnchor="middle"
        fill="#444"
        fontSize="4"
        fontFamily="Inter,sans-serif"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
      >
        ONE PLATFORM. EVERY SCREEN. ALWAYS IN SYNC.
      </motion.text>
    </svg>
  );
}

const brandPalette = [ORANGE, "#F5F0EB", "#1A1A1A", "#808080", "#2A2A2A"];

/** Story: mark draws → core → swatches → type */
export function BrandIdentityAnim() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <motion.path
        d="M 120 20 L 158 80 L 82 80 Z"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="120"
        cy="50"
        r="8"
        fill={ORANGE}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "120px 50px" }}
      />

      {brandPalette.map((c, i) => (
        <motion.rect
          key={c}
          x={70 + i * 22}
          y={96}
          width="18"
          height="18"
          rx="2"
          fill={c}
          stroke="#1A1A1A"
          strokeWidth="0.5"
          initial={{ scaleY: 0, opacity: 0 }}
          style={{ transformOrigin: `79px 105px` }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 2.0 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      <motion.text
        x="120"
        y="130"
        textAnchor="middle"
        fill={LIGHT}
        fontSize="13"
        fontFamily="Anton,Impact,sans-serif"
        letterSpacing="2"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.5 }}
      >
        BANSAG
      </motion.text>
      <motion.text
        x="120"
        y="140"
        textAnchor="middle"
        fill="#555"
        fontSize="4.5"
        fontFamily="Inter,sans-serif"
        letterSpacing="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 0.5 }}
      >
        Digital partner · Built for scale
      </motion.text>

      <motion.text
        x="120"
        y="155"
        textAnchor="middle"
        fill="#444"
        fontSize="4"
        fontFamily="Inter,sans-serif"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        A COMPLETE IDENTITY SYSTEM — NOT JUST A LOGO
      </motion.text>
    </svg>
  );
}

const growthBars = [22, 31, 28, 45, 38, 58, 52, 74, 67, 88, 80, 100];
const growthMonths = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const maxBarH = 70;

/** Story: grid → bars → trend → KPI */
export function GrowthToolsAnim() {
  const trendPath = `M ${growthBars.map((h, i) => `${24 + i * 17},${90 - (h / 100) * maxBarH}`).join(" L ")}`;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      {[0, 1, 2, 3].map((i) => (
        <motion.line
          key={i}
          x1="20"
          y1={90 - i * (maxBarH / 3)}
          x2="220"
          y2={90 - i * (maxBarH / 3)}
          stroke="#1A1A1A"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.05 }}
        />
      ))}

      {growthBars.map((h, i) => (
        <motion.rect
          key={i}
          x={15 + i * 17}
          y={90}
          width="12"
          rx="1"
          fill={i === growthBars.length - 1 ? ORANGE : "#1E1E1E"}
          stroke={i === growthBars.length - 1 ? ORANGE : "#2A2A2A"}
          strokeWidth="0.5"
          initial={{ height: 0, y: 90 }}
          animate={{ height: (h / 100) * maxBarH, y: 90 - (h / 100) * maxBarH }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {growthMonths.map((m, i) => (
        <motion.text key={i} x={21 + i * 17} y="98" textAnchor="middle" fill="#333" fontSize="4" fontFamily="Inter,sans-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
          {m}
        </motion.text>
      ))}

      <motion.path
        d={trendPath}
        fill="none"
        stroke={ORANGE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
      />

      <motion.rect
        x="158"
        y="8"
        width="64"
        height="28"
        rx="4"
        fill="#0D0D0D"
        stroke={ORANGE}
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "190px 22px" }}
      />
      <motion.text x="190" y="20" textAnchor="middle" fill={ORANGE} fontSize="9" fontFamily="Anton,Impact,sans-serif" letterSpacing="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
        +347%
      </motion.text>
      <motion.text x="190" y="31" textAnchor="middle" fill="#555" fontSize="4" fontFamily="Inter,sans-serif" letterSpacing="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }}>
        CONVERSION
      </motion.text>

      <motion.text
        x="120"
        y="112"
        textAnchor="middle"
        fill="#444"
        fontSize="4"
        fontFamily="Inter,sans-serif"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.9, duration: 0.5 }}
      >
        TURNING TRAFFIC INTO MEASURABLE REVENUE
      </motion.text>
    </svg>
  );
}

const consultPhases = [
  { label: "01 AUDIT", sub: "Discover gaps", icon: "◎" },
  { label: "02 ROADMAP", sub: "Define the path", icon: "▸" },
  { label: "03 EXECUTE", sub: "Ship with precision", icon: "✦" },
  { label: "04 SCALE", sub: "Grow without limits", icon: "◆" },
] as const;

/** Story: rail → phases → glow */
export function TechConsultingAnim() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <motion.path
        d="M 30 80 L 210 80"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      {consultPhases.map((p, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <motion.circle
            cx={30 + i * 60}
            cy={80}
            r="10"
            fill={i < 3 ? ORANGE : "#0D0D0D"}
            stroke={ORANGE}
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 + i * 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${30 + i * 60}px 80px` }}
          />
          <text x={30 + i * 60} y={83.5} textAnchor="middle" fill={i < 3 ? DARK : ORANGE} fontSize="7" fontFamily="Anton,Impact,sans-serif">
            {p.icon}
          </text>

          <motion.text x={30 + i * 60} y={64} textAnchor="middle" fill={LIGHT} fontSize="5" fontFamily="Anton,Impact,sans-serif" letterSpacing="0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 + i * 0.4 }}>
            {p.label}
          </motion.text>

          <motion.text x={30 + i * 60} y={100} textAnchor="middle" fill="#555" fontSize="3.8" fontFamily="Inter,sans-serif" letterSpacing="0.3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 + i * 0.4 }}>
            {p.sub}
          </motion.text>
        </motion.g>
      ))}

      <motion.circle
        cx="210"
        cy="80"
        r="18"
        fill="none"
        stroke={ORANGE}
        strokeWidth="0.5"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.4, 1], opacity: [0, 0.6, 0] }}
        transition={{ delay: 2.5, duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
        style={{ transformOrigin: "210px 80px" }}
      />

      <motion.text
        x="120"
        y="125"
        textAnchor="middle"
        fill="#444"
        fontSize="4"
        fontFamily="Inter,sans-serif"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
      >
        CLARITY BEFORE CODE. STRATEGY BEFORE SYSTEMS.
      </motion.text>
    </svg>
  );
}

// ——— Static end frames (card default, no motion) ———

export function BrandWebsiteStill() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <rect x="20" y="10" width="200" height="140" rx="4" fill="#0D0D0D" stroke="#2A2A2A" strokeWidth="1" />
      <rect x="20" y="10" width="200" height="16" rx="4" fill="#141414" stroke="#2A2A2A" strokeWidth="1" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={30 + i * 9} cy={18} r={2.5} fill={["#FF5F57", "#FEBC2E", "#28C840"][i]} />
      ))}
      <rect x="65" y="13" width="120" height="10" rx="2" fill="#0A0A0A" />
      <text x="125" y="20.5" textAnchor="middle" fill="#444" fontSize="4.5" fontFamily="Inter,sans-serif">
        yourbrand.com
      </text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="30" y={62 + i * 11} width={[160, 120, 90][i]} height="6" rx="1" fill="#181818" />
      ))}
      <rect x="30" y="34" width="180" height="20" rx="2" fill={ORANGE} />
      <text x="120" y="47" textAnchor="middle" fill={DARK} fontSize="6" fontFamily="Anton,Impact,sans-serif" letterSpacing="1">
        YOUR BRAND
      </text>
      <g>
        <polygon points="195,38 207,52 183,52" fill="none" stroke={LIGHT} strokeWidth="1.2" />
        <circle cx="195" cy="45" r="2" fill={LIGHT} />
      </g>
      <rect x="30" y="108" width="60" height="14" rx="2" fill={ORANGE} />
      <text x="60" y="117.5" textAnchor="middle" fill={DARK} fontSize="4.5" fontFamily="Inter,sans-serif" fontWeight={700} letterSpacing="0.8">
        GET STARTED
      </text>
      <text
        x="120"
        y="155"
        textAnchor="middle"
        fill="#444"
        fontSize="4"
        fontFamily="Inter,sans-serif"
        letterSpacing="1.5"
        style={{ textTransform: "uppercase" }}
      >
        YOUR BRAND. LIVE. CONVERTING.
      </text>
    </svg>
  );
}

export function CustomSystemsStill() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      {systemEdges.map(([a, b], i) => {
        const na = systemNodes[a];
        const nb = systemNodes[b];
        return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke={`${ORANGE}55`} strokeWidth="1" />;
      })}
      {systemNodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x - 22} y={n.y - 9} width="44" height="18" rx="3" fill="#111" stroke={i === 0 ? ORANGE : "#2A2A2A"} strokeWidth={i === 0 ? 1.5 : 0.8} />
          <text x={n.x} y={n.y + 2} textAnchor="middle" fill={n.color} fontSize="5" fontFamily="Inter,sans-serif" letterSpacing="0.5">
            {n.label}
          </text>
        </g>
      ))}
      <text x="120" y="155" textAnchor="middle" fill="#444" fontSize="4" fontFamily="Inter,sans-serif" letterSpacing="1.5">
        BUILT AROUND YOUR EXACT WORKFLOW
      </text>
    </svg>
  );
}

export function DigitalPlatformsStill() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <rect x="20" y="35" width="40" height="70" rx="5" fill="#111" stroke="#2A2A2A" strokeWidth="1" />
      <rect x="20" y="35" width="40" height="10" rx="5" fill="#1A1A1A" />
      <rect x="26" y="52" width="28" height="4" rx="1" fill={ORANGE} />
      <rect x="26" y="60" width="28" height="2.5" rx="1" fill="#1E1E1E" />
      <rect x="26" y="65" width="20" height="2.5" rx="1" fill="#1E1E1E" />
      <rect x="72" y="25" width="56" height="90" rx="5" fill="#111" stroke="#2A2A2A" strokeWidth="1" />
      <rect x="72" y="25" width="56" height="10" rx="5" fill="#1A1A1A" />
      <rect x="80" y="44" width="40" height="6" rx="1" fill={ORANGE} />
      <rect x="80" y="55" width="40" height="3" rx="1" fill="#1E1E1E" />
      <rect x="80" y="62" width="28" height="3" rx="1" fill="#1E1E1E" />
      <rect x="140" y="20" width="88" height="100" rx="4" fill="#111" stroke="#2A2A2A" strokeWidth="1" />
      <rect x="140" y="20" width="88" height="12" rx="4" fill="#1A1A1A" />
      <rect x="150" y="42" width="68" height="8" rx="1" fill={ORANGE} />
      <rect x="150" y="56" width="68" height="4" rx="1" fill="#1E1E1E" />
      <rect x="150" y="64" width="48" height="4" rx="1" fill="#1E1E1E" />
      <line x1="60" y1="70" x2="72" y2="70" stroke={`${ORANGE}50`} strokeWidth="1" strokeDasharray="3 2" />
      <line x1="128" y1="70" x2="140" y2="70" stroke={`${ORANGE}50`} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="175" y="120" width="16" height="6" rx="1" fill="#1A1A1A" />
      <rect x="168" y="126" width="30" height="2" rx="1" fill="#2A2A2A" />
      <text x="120" y="155" textAnchor="middle" fill="#444" fontSize="4" fontFamily="Inter,sans-serif" letterSpacing="1.5">
        ONE PLATFORM. EVERY SCREEN. ALWAYS IN SYNC.
      </text>
    </svg>
  );
}

export function BrandIdentityStill() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <path d="M 120 20 L 158 80 L 82 80 Z" fill="none" stroke={ORANGE} strokeWidth="2" />
      <circle cx="120" cy="50" r="8" fill={ORANGE} />
      {brandPalette.map((c, i) => (
        <rect key={c} x={70 + i * 22} y={96} width="18" height="18" rx="2" fill={c} stroke="#1A1A1A" strokeWidth="0.5" />
      ))}
      <text x="120" y="130" textAnchor="middle" fill={LIGHT} fontSize="13" fontFamily="Anton,Impact,sans-serif" letterSpacing="2">
        BANSAG
      </text>
      <text x="120" y="140" textAnchor="middle" fill="#555" fontSize="4.5" fontFamily="Inter,sans-serif" letterSpacing="2">
        Digital partner · Built for scale
      </text>
      <text x="120" y="155" textAnchor="middle" fill="#444" fontSize="4" fontFamily="Inter,sans-serif" letterSpacing="1.5">
        A COMPLETE IDENTITY SYSTEM — NOT JUST A LOGO
      </text>
    </svg>
  );
}

const growthTrendPathStill = `M ${growthBars.map((h, i) => `${24 + i * 17},${90 - (h / 100) * maxBarH}`).join(" L ")}`;

export function GrowthToolsStill() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="20" y1={90 - i * (maxBarH / 3)} x2="220" y2={90 - i * (maxBarH / 3)} stroke="#1A1A1A" strokeWidth="0.5" />
      ))}
      {growthBars.map((h, i) => (
        <rect
          key={i}
          x={15 + i * 17}
          y={90 - (h / 100) * maxBarH}
          width="12"
          height={(h / 100) * maxBarH}
          rx="1"
          fill={i === growthBars.length - 1 ? ORANGE : "#1E1E1E"}
          stroke={i === growthBars.length - 1 ? ORANGE : "#2A2A2A"}
          strokeWidth="0.5"
        />
      ))}
      {growthMonths.map((m, i) => (
        <text key={i} x={21 + i * 17} y="98" textAnchor="middle" fill="#333" fontSize="4" fontFamily="Inter,sans-serif">
          {m}
        </text>
      ))}
      <path d={growthTrendPathStill} fill="none" stroke={ORANGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.75} />
      <rect x="158" y="8" width="64" height="28" rx="4" fill="#0D0D0D" stroke={ORANGE} strokeWidth="1" />
      <text x="190" y="20" textAnchor="middle" fill={ORANGE} fontSize="9" fontFamily="Anton,Impact,sans-serif" letterSpacing="1">
        +347%
      </text>
      <text x="190" y="31" textAnchor="middle" fill="#555" fontSize="4" fontFamily="Inter,sans-serif" letterSpacing="1">
        CONVERSION
      </text>
      <text x="120" y="112" textAnchor="middle" fill="#444" fontSize="4" fontFamily="Inter,sans-serif" letterSpacing="1.5">
        TURNING TRAFFIC INTO MEASURABLE REVENUE
      </text>
    </svg>
  );
}

export function TechConsultingStill() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-full" style={{ display: "block" }}>
      <line x1="30" y1="80" x2="210" y2="80" stroke="#1A1A1A" strokeWidth="1.5" />
      {consultPhases.map((p, i) => (
        <g key={i}>
          <circle cx={30 + i * 60} cy={80} r="10" fill={i < 3 ? ORANGE : "#0D0D0D"} stroke={ORANGE} strokeWidth="1.5" />
          <text x={30 + i * 60} y={83.5} textAnchor="middle" fill={i < 3 ? DARK : ORANGE} fontSize="7" fontFamily="Anton,Impact,sans-serif">
            {p.icon}
          </text>
          <text x={30 + i * 60} y={64} textAnchor="middle" fill={LIGHT} fontSize="5" fontFamily="Anton,Impact,sans-serif" letterSpacing="0.5">
            {p.label}
          </text>
          <text x={30 + i * 60} y={100} textAnchor="middle" fill="#555" fontSize="3.8" fontFamily="Inter,sans-serif" letterSpacing="0.3">
            {p.sub}
          </text>
        </g>
      ))}
      <circle cx="210" cy="80" r="14" fill="none" stroke={ORANGE} strokeWidth="0.5" opacity={0.35} />
      <text x="120" y="125" textAnchor="middle" fill="#444" fontSize="4" fontFamily="Inter,sans-serif" letterSpacing="1.5">
        CLARITY BEFORE CODE. STRATEGY BEFORE SYSTEMS.
      </text>
    </svg>
  );
}

export const serviceStillFrameMap = {
  "01": BrandWebsiteStill,
  "02": CustomSystemsStill,
  "03": DigitalPlatformsStill,
  "04": BrandIdentityStill,
  "05": GrowthToolsStill,
  "06": TechConsultingStill,
} as const;

export const serviceModalAnimMap = {
  "01": BrandWebsiteAnim,
  "02": CustomSystemsAnim,
  "03": DigitalPlatformsAnim,
  "04": BrandIdentityAnim,
  "05": GrowthToolsAnim,
  "06": TechConsultingAnim,
} as const;

/** Seconds before remounting the modal story (one full play). */
export const serviceModalLoopDurations: Record<string, number> = {
  "01": 5.5,
  "02": 5.0,
  "03": 4.5,
  "04": 4.5,
  "05": 5.5,
  "06": 4.5,
};
