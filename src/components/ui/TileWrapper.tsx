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
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/80
        backdrop-blur-sm
        p-6
        ${className}
      `}
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          pointer-events-none
          bg-gradient-to-br
          from-purple-500/10
          via-transparent
          to-cyan-500/10
          group-hover:opacity-100
        "
      />

      {children}
    </motion.article>
  );
}
