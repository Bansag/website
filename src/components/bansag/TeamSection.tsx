import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ORANGE = "#FF5500";
const LIGHT = "#F5F0EB";

/** Bundled at build time — add photos under `src/assets/founders/` (see SLUG map). */
const founderImageUrls = import.meta.glob("../../assets/founders/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

/** Filename (any extension) must start with this slug, e.g. `dabon.jpg` or `dabon-2024.png`. */
const FOUNDER_SLUG: Record<string, string> = {
  "Lyla Alexys Dabon": "dabon",
  "Sid Adrian Digamon": "digamon",
  "Jhon Glenn Fabul": "fabul",
  "James Manon-og": "manon-og",
  "Job Stefan Megriño": "megrino",
  "Adolfo Cedric Sarillo": "sarillo",
};

function resolveFounderImageUrl(name: string): string | undefined {
  const slug = FOUNDER_SLUG[name];
  if (!slug) return undefined;
  const slugNorm = slug.toLowerCase().replace(/ñ/g, "n");
  const hit = Object.entries(founderImageUrls).find(([path]) => {
    const file = path.split("/").pop() ?? "";
    const base = file.replace(/\.[^.]+$/i, "").toLowerCase().replace(/ñ/g, "n");
    const s = slugNorm;
    return (
      base === s ||
      base.startsWith(`${s}-`) ||
      base.startsWith(`${s}_`) ||
      base.startsWith(`${s},`)
    );
  });
  return hit?.[1];
}

interface TeamMember {
  name: string;
  role: string;
}

const team: TeamMember[] = [
  { name: "Lyla Alexys Dabon", role: "Co-Founder" },
  { name: "Sid Adrian Digamon", role: "Co-Founder" },
  { name: "Jhon Glenn Fabul", role: "Co-Founder" },
  { name: "James Manon-og", role: "Co-Founder" },
  { name: "Job Stefan Megriño", role: "Co-Founder" },
  { name: "Adolfo Cedric Sarillo", role: "Co-Founder" },
];

function TeamPhoto({ name }: { name: string }) {
  const src = resolveFounderImageUrl(name);
  const [ok, setOk] = useState(true);

  if (!src || !ok) {
    return <PlaceholderAvatar name={name} />;
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover object-top transition-all duration-700 ease-out"
      style={{
        filter: "brightness(0.85) contrast(1.05)",
      }}
      onError={() => setOk(false)}
      onMouseEnter={(e) => {
        (e.target as HTMLImageElement).style.filter = "brightness(1) contrast(1.05)";
        (e.target as HTMLImageElement).style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLImageElement).style.filter = "brightness(0.85) contrast(1.05)";
        (e.target as HTMLImageElement).style.transform = "scale(1)";
      }}
    />
  );
}

function PlaceholderAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)`,
        border: `1px solid #2A2A2A`,
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            border: `2px solid ${ORANGE}44`,
            background: `${ORANGE}0A`,
          }}
        >
          <span
            style={{
              fontFamily: "'Anton','Impact',sans-serif",
              fontSize: 28,
              color: ORANGE,
              letterSpacing: "0.05em",
            }}
          >
            {initials}
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#3A3A3A",
          }}
        >
          Photo Coming Soon
        </span>
      </div>
    </div>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden"
      style={{
        border: "1px solid #1A1A1A",
        background: "#0A0A0A",
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      data-hover="true"
    >
      {/* Photo container */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/4" }}
      >
        <TeamPhoto name={member.name} />

        {/* Orange overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${ORANGE}22, transparent 60%)`,
          }}
        />
      </div>

      {/* Info */}
      <div className="p-6" style={{ borderTop: "1px solid #1A1A1A" }}>
        <h3
          className="leading-tight mb-1"
          style={{
            fontFamily: "'Anton','Impact',sans-serif",
            fontWeight: 400,
            fontSize: 20,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: LIGHT,
          }}
        >
          {member.name}
        </h3>
        <span
          style={{
            fontFamily: "'Inter',sans-serif",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: ORANGE,
          }}
        >
          {member.role}
        </span>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: ORANGE }}
      />
    </motion.div>
  );
}

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-40 px-6 md:px-16">
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
            The People
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
            MEET THE
            <br />
            <span style={{ color: ORANGE }}>FOUNDERS.</span>
          </h2>
          <p
            className="mt-6 max-w-xl"
            style={{
              fontSize: 17,
              color: "#9E9890",
              lineHeight: 1.75,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 400,
            }}
          >
            A team of Filipino builders passionate about crafting digital
            experiences that empower businesses.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]" style={{ background: "#1A1A1A" }}>
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
