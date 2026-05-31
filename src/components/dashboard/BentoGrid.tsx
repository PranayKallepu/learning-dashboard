"use client";

import { motion } from "framer-motion";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types/course";

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.section
      className="grid grid-cols-12 gap-4"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="col-span-12 md:col-span-8 lg:col-span-8">
        <HeroTile />
      </div>

      <div className="col-span-12 md:col-span-4 lg:col-span-4">
        <ActivityTile />
      </div>
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
    </motion.section>
  );
}
