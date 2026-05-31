import { createSupabaseServerClient } from "@/lib/superbase/server";
import { Course } from "@/types/course";

export async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error("Failed to fetch courses");
  }

  return data ?? [];
}
