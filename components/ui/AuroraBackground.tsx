"use client";
import { motion } from "framer-motion";

/**
 * Aurora-style animated background — turquoise/navy palette only.
 * Soft drifting blobs + subtle SVG wave overlay create a "deep water" feel.
 */
export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden water-mesh">
      {/* Drifting blobs */}
      <motion.div
        aria-hidden
        className="aurora-blob"
        style={{ width: 720, height: 720, top: "-15%", left: "-12%", background: "#05BFDB" }}
        animate={{ x: [0, 60, -40, 0], y: [0, 50, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="aurora-blob"
        style={{ width: 640, height: 640, bottom: "-20%", right: "-10%", background: "#088395" }}
        animate={{ x: [0, -50, 30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="aurora-blob"
        style={{ width: 520, height: 520, top: "30%", left: "55%", background: "#C5F4FF", opacity: 0.25 }}
        animate={{ x: [0, 30, -20, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft caustics noise */}
      <div className="absolute inset-0 noise" />

      {/* Layered SVG waves at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[180px] -translate-x-0 animate-wave"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,160 C480,240 960,80 1440,160 C1920,240 2400,80 2880,160 L2880,320 L0,320 Z"
          fill="rgba(255,255,255,0.06)"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[140px]"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,200 C480,260 960,140 1440,200 C1920,260 2400,140 2880,200 L2880,320 L0,320 Z"
          fill="rgba(255,255,255,0.08)"
        />
      </svg>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0" style={{ background: "rgba(10,77,104,0.55)" }} />
    </div>
  );
}
