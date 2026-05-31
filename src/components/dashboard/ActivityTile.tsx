import TileWrapper from "../ui/TileWrapper";

const activityData = [
  1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0,
  0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1,
];

export default function ActivityTile() {
  return (
    <TileWrapper className="min-h-[250px]">
      <h3 className="mb-6 text-lg font-semibold">Activity</h3>

      <div className="grid grid-cols-7 gap-2">
        {activityData.map((active, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-sm ${
              active ? "bg-purple-500" : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </TileWrapper>
  );
}
