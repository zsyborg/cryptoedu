import type { Metadata } from "next";
import Link from "next/link";
import { getDb } from "@/lib/mongodb";

export type CourseDoc = {
  slug: string;
  title: string;
  summary?: string;
};

export async function generateStaticParams() {
  const db = await getDb("web3");
  const slugs = await db
    .collection<CourseDoc>("courses")
    .find({}, { projection: { slug: 1, _id: 0 } })
    .toArray();
  return slugs.map((c: any) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const db = await getDb("web3");
  const doc = await db.collection<CourseDoc>("courses").findOne({ slug }, { projection: { _id: 0 } });
  return {
    title: `${doc?.title ?? "Course"} | CryptoEdu`,
    description: doc?.summary ?? "Crypto course",
  };
}

import CourseChapters from "@/components/CourseChapters";

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = await getDb("web3");
  const course = await db.collection<CourseDoc>("courses").findOne({ slug }, { projection: { _id: 0 } });

  if (!course) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-white">Course not found</h1>
        <Link href="/courses" className="mt-4 inline-block text-emerald-400">← Back to courses</Link>
      </div>
    );
  }

  const syllabus = [
    "Blockchain basics",
    "Consensus & mining",
    "Keys, wallets, and addresses",
    "Security best practices",
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
        <span className="text-xs text-emerald-400">Self-paced</span>
        <h1 className="mt-2 text-3xl font-semibold text-white">{course.title}</h1>
        <p className="mt-2 max-w-2xl text-zinc-400">{course.summary}</p>
        <div className="mt-6 flex gap-4">
          <Link href="/sign-up" className="rounded-full bg-white px-5 py-2 font-medium text-black hover:bg-zinc-200">Start course</Link>
          <Link href="/courses" className="rounded-full border border-white/20 px-5 py-2 text-zinc-200 hover:bg-white/10">All courses</Link>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
        <h2 className="text-lg font-medium text-white">Syllabus</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-300">
          {syllabus.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>

      {/* Chapters from database */}
      <div className="rounded-2xl border border-white/10 p-6">
        <h2 className="mb-4 text-lg font-medium text-white">Chapters</h2>
        <CourseChapters courseSlug={slug} />
      </div>
    </div>
  );
}
