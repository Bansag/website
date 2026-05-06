import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function OrangeCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const springX = useSpring(pos.x, { stiffness: 400, damping: 28 });
  const springY = useSpring(pos.y, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) =>
      setHovered(
        !!(e.target as HTMLElement).closest("a,button,[data-hover='true']")
      );
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  useEffect(() => {
    springX.set(pos.x - (hovered ? 40 : 10));
    springY.set(pos.y - (hovered ? 40 : 10));
  }, [pos, hovered, springX, springY]);

  const size = hovered ? 80 : clicking ? 14 : 20;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
        style={{
          x: springX,
          y: springY,
          width: size,
          height: size,
          background: "#FF5500",
          mixBlendMode: "difference",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
      {/* Small trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full hidden md:block"
        style={{
          x: pos.x - 3,
          y: pos.y - 3,
          width: 6,
          height: 6,
          background: "#FF5500",
          opacity: 0.5,
        }}
      />
    </>
  );
}
