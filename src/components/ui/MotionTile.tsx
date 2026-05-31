"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionTileProps {
  children: ReactNode;
}

export default function MotionTile({ children }: MotionTileProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
