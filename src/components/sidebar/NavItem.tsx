"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
}

export default function NavItem({
  label,
  icon: Icon,
  active,
  onClick,
}: NavItemProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className="relative flex w-full items-center justify-center lg:justify-start gap-3 overflow-hidden rounded-xl px-4 py-3 text-sm font-medium"
      >
        {active && (
          <motion.div
            layoutId="active-nav"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="
              absolute
              inset-0
              rounded-xl
              bg-zinc-800
            "
          />
        )}

        <Icon
          size={18}
          className={`relative z-10 ${active ? "text-white" : "text-zinc-400"}`}
        />

        <span
          className={`hidden lg:block relative z-10
                    ${active ? "text-white" : "text-zinc-400"}`}
        >
          {label}
        </span>
      </button>
    </li>
  );
}
