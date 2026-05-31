import TileWrapper from "../ui/TileWrapper";
import ProgressBar from "../ui/ProgressBar";
import { Course } from "@/types/course";
import { iconMap } from "@/lib/icons";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon_name as keyof typeof iconMap];

  return (
    <TileWrapper className="min-h-[180px]">
      <div className="flex items-center justify-between">
        {Icon && <Icon className="h-8 w-8 text-purple-400" />}

        <span className="text-sm text-zinc-400">{course.progress}%</span>
      </div>

      <h3 className="mt-6 text-lg font-semibold">{course.title}</h3>

      <ProgressBar progress={course.progress} />
    </TileWrapper>
  );
}
