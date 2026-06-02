import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

import { NavigationItem } from "@/types/navigation";

export const NAV_ITEMS: NavigationItem[] = [
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
