export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-3xl bg-zinc-900"
          />
        ))}
      </div>
    </main>
  );
}
