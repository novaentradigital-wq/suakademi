"use client";
import { useEffect, useRef } from "react";

/**
 * Magnetic hover — element drifts toward the cursor while pointer is nearby.
 * Strength controls maximum displacement in pixels; radius defines activation distance.
 */
export function useMagnetic<T extends HTMLElement>(strength = 18, radius = 140) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let active = false;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        active = true;
        const f = (1 - dist / radius) * strength;
        tx = (dx / radius) * f * 1.6;
        ty = (dy / radius) * f * 1.6;
      } else if (active) {
        active = false;
        tx = 0;
        ty = 0;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };

    const reset = () => {
      tx = 0;
      ty = 0;
      el.style.transform = "translate3d(0,0,0)";
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
      cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return ref;
}
