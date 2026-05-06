import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed right-5 top-0 bottom-0 z-50 hidden md:flex flex-col items-center justify-between py-8 pointer-events-none">
      <span
        className="text-[9px] tracking-[0.3em] uppercase"
        style={{ color: "#FF550044", writingMode: "vertical-rl" }}
      >
        scroll
      </span>
      <div
        className="relative flex-1 w-px mx-auto my-3"
        style={{ background: "#FF550015" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full origin-top"
          style={{ scaleY, background: "#FF5500", height: "100%" }}
        />
      </div>
      <span
        className="text-[9px] tracking-[0.3em] uppercase"
        style={{ color: "#FF550044", writingMode: "vertical-rl" }}
      >
        bansag
      </span>
    </div>
  );
}
