import { useEffect, useRef, useCallback } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * Custom orange cursor that follows the pointer.
 *
 * Performance notes:
 * - Uses raw DOM updates (no React state, no re-renders).
 * - Uses requestAnimationFrame for batched painting.
 * - Avoids document.elementFromPoint() which forces layout recalculation.
 *   Instead, CSS handles hover styling via `data-hover` attribute + `:hover`.
 *   The cursor grows on hover via CSS `pointer-events: none` on the cursor itself
 *   and a MutationObserver-free approach: we check the hovered element via
 *   event.target in the mouseover/mouseout delegated handlers.
 */
export default function OrangeCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const sizeRef = useRef(20);
  const rafRef = useRef(0);

  const paint = useCallback(() => {
    const el = cursorRef.current;
    if (!el) return;
    const s = sizeRef.current;
    const half = s / 2;
    el.style.transform = `translate3d(${posRef.current.x - half}px, ${posRef.current.y - half}px, 0)`;
    el.style.width = `${s}px`;
    el.style.height = `${s}px`;
    rafRef.current = 0;
  }, []);

  const scheduleFrame = useCallback(() => {
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(paint);
    }
  }, [paint]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      scheduleFrame();
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest?.("a,button,[data-hover='true']")) {
        sizeRef.current = 80;
        scheduleFrame();
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest?.("a,button,[data-hover='true']")) {
        sizeRef.current = 20;
        scheduleFrame();
      }
    };

    const onDown = () => {
      sizeRef.current = 14;
      scheduleFrame();
    };

    const onUp = () => {
      sizeRef.current = 20;
      scheduleFrame();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, scheduleFrame]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
      style={{
        width: 20,
        height: 20,
        background: "#FF5500",
        mixBlendMode: "difference",
        willChange: "transform",
        transition: "width 0.15s ease-out, height 0.15s ease-out",
      }}
    />
  );
}
