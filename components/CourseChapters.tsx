import { getDb } from "@/lib/mongodb";
import CourseChaptersClient from "@/components/CourseChaptersClient";

export type ChapterDoc = {
  courseSlug: string;
  title: string;
  order?: number;
  videoUrl?: string; // full YouTube URL or id
  html?: string;     // HTML string for chapter content
};

export default async function CourseChapters({ courseSlug }: { courseSlug: string }) {
  const db = await getDb("web3");
  const docs = await db
    .collection<ChapterDoc>("chapters")
    .find({ courseSlug })
    .sort({ order: 1 })
    .toArray();

  const chapters: ChapterDoc[] = docs.map((d: any) => ({
    courseSlug: d.courseSlug,
    title: d.title,
    order: d.order,
    videoUrl: d.videoUrl,
    html: d.html,
  }));

  return <CourseChaptersClient chapters={chapters} />;
}
