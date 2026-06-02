"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TileWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function TileWrapper({
  children,
  className = "",
}: TileWrapperProps) {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.article>
  );
}
