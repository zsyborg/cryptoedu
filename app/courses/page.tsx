import type { Metadata } from "next";
import Link from "next/link";
import { getDb } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Courses | CryptoEdu",
  description: "Explore beginner-friendly cryptocurrency courses.",
};

export type CourseListDoc = {
  slug: string;
  title: string;
  level?: string;
  lessons?: number;
  summary?: string;
};

export default async function CoursesPage() {
  const db = await getDb("web3");
  let items: CourseListDoc[] = [];
  try {
    items = await db
      .collection<CourseListDoc>("courses")
      .find({}, { projection: { _id: 0 } })
      .sort({ title: 1 })
      .toArray();
  } catch (e) {
    console.error("Failed to load courses:", e);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-white">Courses</h1>
      <p className="mt-2 max-w-2xl text-zinc-400">Handcrafted tracks to master the crypto essentials.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-zinc-400">
            No courses found.
          </div>
        )}
        {items.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="rounded-2xl border border-white/10 bg-black/60 p-6 hover:border-white/20 hover:bg-black/70"
          >
            {c.level && <span className="text-xs text-emerald-400">{c.level}</span>}
            <h3 className="mt-2 text-lg font-medium text-white">{c.title}</h3>
            {typeof c.lessons === "number" ? (
              <p className="mt-1 text-sm text-zinc-400">{c.lessons} lessons</p>
            ) : (
              c.summary && <p className="mt-1 text-sm text-zinc-400">{c.summary}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
