"use client";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  message: string;
  onClose: () => void;
}

export default function Toast({ open, message }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-full border border-aqua/30 bg-white px-6 py-4 shadow-[0_25px_60px_-20px_rgba(8,131,149,0.5)]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-aqua text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </span>
          <span className="text-[14px] text-ink-deep">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
