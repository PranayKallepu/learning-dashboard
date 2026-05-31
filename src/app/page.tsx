import { Suspense } from "react";
import DashboardContent from "@/components/dashboard/DashboardContent";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-6">
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </main>
  );
}
