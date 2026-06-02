import TileWrapper from "../ui/TileWrapper";
import MotionTile from "../ui/MotionTile";
import { motion } from "framer-motion";
const activityData = [
  0, 1, 2, 3, 1, 0, 2, 1, 2, 3, 2, 1, 0, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 1, 0,
  1, 2, 3, 2, 1, 2, 3, 2, 0, 1, 2, 3, 1, 0, 1, 2,
];

export default function ActivityTile() {
  const getActivityColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-zinc-800";
      case 1:
        return "bg-purple-900";
      case 2:
        return "bg-purple-700";
      case 3:
        return "bg-purple-500";
      default:
        return "bg-zinc-800";
    }
  };
  return (
    <MotionTile>
      <TileWrapper className="min-h-[250px]">
        <h3 className="mb-6 text-lg font-semibold tracking-tight">Activity</h3>

        <div className="grid grid-cols-6 gap-1">
          {activityData.map((active, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.02,
              }}
              className={`h-4 w-4 rounded-sm ${getActivityColor(active)}`}
            />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-zinc-400">Last 6 Weeks</span>

          <span className="font-medium text-purple-400">27 Contributions</span>
        </div>
      </TileWrapper>
    </MotionTile>
  );
}
