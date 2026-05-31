import { Suspense } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import MobileBottomNav from "@/components/sidebar/MobileBottomNav";
import DashboardContent from "@/components/dashboard/DashboardContent";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#09090b] text-white">
      <Sidebar />

      <main className="flex-1 p-4 lg:p-6">
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardContent />
        </Suspense>
      </main>
      <MobileBottomNav />
    </div>
  );
}
