import TileWrapper from "../ui/TileWrapper";
import MotionTile from "../ui/MotionTile";
import { motion } from "framer-motion";
import { Book, ChartLine, CircleStar } from "lucide-react";

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
        className="absolute right-6 top-6 h-24 w-24 rounded-full bg-purple-500/20 blur-3xl"
      />
      <TileWrapper className="min-h-[100px] sm:min-h-[250px]">
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className="text-sm text-zinc-400">Welcome Back</p>

            <h1 className="text-3xl font-bold tracking-tight">
              Pranay Kallepu
            </h1>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <div>
              <div className="mt-4 flex items-center gap-2">
                <CircleStar size={20} />
                <span className="font-medium">
                  <span className="text-2xl font-bold">14</span> Day Streak
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <ChartLine />
                <span className="font-medium">
                  <span className="text-xl font-bold">+18%</span> This Week
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Book size={20} />
                <span className="font-medium">
                  {" "}
                  <span className="text-2xl font-bold">4</span> Active
                  Courses{" "}
                </span>
              </div>
              <p className="text-sm mt-1 text-zinc-400">keep going!</p>
            </div>
          </div>
        </div>
      </TileWrapper>
    </MotionTile>
  );
}
