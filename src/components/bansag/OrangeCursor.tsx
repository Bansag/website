import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * Follows the pointer via motion values only (no springs) for tight, low-latency tracking.
 */
export default function OrangeCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const size = useMotionValue(20);
  const clickingRef = useRef(false);

  useEffect(() => {
    const last = { x: 0, y: 0 };

    const paint = (clientX: number, clientY: number) => {
      last.x = clientX;
      last.y = clientY;
      const target = document.elementFromPoint(clientX, clientY);
      const hovered = !!(target as HTMLElement)?.closest?.(
        "a,button,[data-hover='true']",
      );
      const clicking = clickingRef.current;
      const s = hovered ? 80 : clicking ? 14 : 20;
      const half = s / 2;
      size.set(s);
      x.set(clientX - half);
      y.set(clientY - half);
    };

    const onMove = (e: MouseEvent) => paint(e.clientX, e.clientY);

    const onDown = () => {
      clickingRef.current = true;
      paint(last.x, last.y);
    };
    const onUp = () => {
      clickingRef.current = false;
      paint(last.x, last.y);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y, size]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block transform-gpu"
      style={{
        x,
        y,
        width: size,
        height: size,
        background: "#FF5500",
        mixBlendMode: "difference",
        willChange: "transform, width, height",
      }}
    />
  );
}
