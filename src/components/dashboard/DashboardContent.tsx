import { getCourses } from "@/actions/getCourses";
import BentoGrid from "./BentoGrid";

export default async function DashboardContent() {
  const courses = await getCourses();
  if (!courses.length) {
    return (
      <div className="rounded-3xl border border-zinc-800 p-8">
        No courses available.
      </div>
    );
  }
  return (
    <main>
      <BentoGrid courses={courses} />
    </main>
  );
}
