"use client";

import { motion } from "framer-motion";
interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="mt-4 h-2 w-full rounded-full bg-zinc-800">
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
    h-full
    rounded-full
    bg-gradient-to-r
    from-purple-500
    to-blue-500
  "
      />
    </div>
  );
}
