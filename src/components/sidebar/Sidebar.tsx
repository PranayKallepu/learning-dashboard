import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

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
  return (
    <nav
      className="
      hidden
      lg:flex
      w-64
      flex-col
      border-r
      border-zinc-800
      p-4
    "
    >
      <h2 className="mb-8 text-xl font-bold">LearnX</h2>

      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <button
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-zinc-300
                  hover:bg-zinc-800
                "
              >
                <Icon size={18} />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
