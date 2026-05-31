"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

const items = [
  {
    label: "Dashboard",
    icon: Home,
  },
  {
    label: "Courses",
    icon: BookOpen,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav
      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      border-t
      border-zinc-800
      bg-zinc-950/90
      backdrop-blur-xl
      md:hidden
    "
    >
      <ul className="flex justify-around py-3">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <li key={item.label}>
              <button
                onClick={() => setActive(item.label)}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  gap-1
                  px-4
                  py-2
                "
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active"
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
                  className="
                    relative
                    z-10
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    text-xs
                  "
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
