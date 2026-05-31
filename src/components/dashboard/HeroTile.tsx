import TileWrapper from "../ui/TileWrapper";
import MotionTile from "../ui/MotionTile";
import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <MotionTile>
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
    absolute
    right-6
    top-6
    h-24
    w-24
    rounded-full
    bg-purple-500/20
    blur-3xl
  "
      />
      <TileWrapper className="min-h-[100px] sm:min-h-[250px]">
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className="text-zinc-400">Welcome Back</p>

            <h1 className="mt-2 text-4xl font-bold">Pranay </h1>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <p className="font-medium">14 Day Learning Streak</p>

              <p className="text-sm text-zinc-400">Keep going!</p>
            </div>
          </div>
        </div>
      </TileWrapper>
    </MotionTile>
  );
}
