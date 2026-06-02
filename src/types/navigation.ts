import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: "Dashboard" | "Courses" | "Analytics" | "Settings";
  icon: LucideIcon;
}

export type NavLabel = "Dashboard" | "Courses" | "Analytics" | "Settings";
