interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="mt-4 h-2 w-full rounded-full bg-zinc-800">
      <div
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
