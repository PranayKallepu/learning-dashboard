import { getCourses } from "@/actions/getCourses";

export default async function DashboardContent() {
  const courses = await getCourses();

  return (
    <>
      {courses.map((course) => (
        <div
          key={course.id}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <h3 className="text-lg font-semibold">{course.title}</h3>

          <p className="mt-2 text-sm text-zinc-400">
            Progress: {course.progress}%
          </p>
        </div>
      ))}
    </>
  );
}
