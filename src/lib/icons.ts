import { Code2, Rocket, Network, FileCode } from "lucide-react";

export const iconMap = {
  Code2,
  Rocket,
  Network,
  FileCode,
} as const;

export const getCourseIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap];
};
