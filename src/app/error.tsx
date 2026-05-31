"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-red-500">
          Something went wrong
        </h2>

        <p className="mb-6 text-zinc-400">{error.message}</p>

        <button
          onClick={() => reset()}
          className="rounded-xl bg-white px-4 py-2 text-black"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
