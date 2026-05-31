import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types/course";

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <section
      className="
      grid
      grid-cols-12
      gap-4
    "
    >
      <HeroTile />

      {courses.map((course) => (
        <div
          key={course.id}
          className="
            col-span-12
            md:col-span-6
            lg:col-span-4
          "
        >
          <CourseCard course={course} />
        </div>
      ))}

      <div
        className="
          col-span-12
          lg:col-span-4
        "
      >
        <ActivityTile />
      </div>
    </section>
  );
}
