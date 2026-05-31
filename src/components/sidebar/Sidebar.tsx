"use client";

import { useState } from "react";

import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

import NavItem from "./NavItem";

const navItems = [
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

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav
      className="
        hidden
        md:flex
        w-64
        flex-col
        border-r
        md:w-20
        lg:w-64
        border-zinc-800
        bg-[#09090b]
        p-4
        transition-all
      "
    >
      <div className="mb-10">
        <h2 className="hidden lg:block text-xl font-bold">LearnX</h2>
        <div className="flex justify-center lg:hidden">
          <BookOpen size={24} />
        </div>
        <p className="hidden lg:block mt-1 text-xs text-zinc-500">
          Learning Dashboard
        </p>{" "}
      </div>

      <ul className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </ul>
    </nav>
  );
}
