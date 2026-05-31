import TileWrapper from "../ui/TileWrapper";

export default function HeroTile() {
  return (
    <TileWrapper className="col-span-12 lg:col-span-8 min-h-[220px]">
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
  );
}
