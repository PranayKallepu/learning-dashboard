import TileWrapper from "../ui/TileWrapper";
import MotionTile from "../ui/MotionTile";
import { motion } from "framer-motion";
const activityData = [
  1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0,
  0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1,
];

export default function ActivityTile() {
  return (
    <MotionTile>
      <TileWrapper className="min-h-[250px]">
        <h3 className="mb-6 text-lg font-semibold">Activity</h3>

        <div className="grid grid-cols-7 gap-2">
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
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.02,
              }}
              className={`h-4 w-4 rounded-sm ${
                active ? "bg-purple-500" : "bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </TileWrapper>
    </MotionTile>
  );
}
