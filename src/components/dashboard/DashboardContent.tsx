import { getCourses } from "@/actions/getCourses";
import BentoGrid from "./BentoGrid";

export default async function DashboardContent() {
  const courses = await getCourses();

  return (
    <main>
      <BentoGrid courses={courses} />
    </main>
  );
}
