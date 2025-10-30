import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses | CryptoEdu",
  description: "Explore beginner-friendly cryptocurrency courses.",
};

const courses = [
  { title: "Crypto 101", slug: "crypto-101", level: "Beginner", lessons: 8 },
  { title: "Bitcoin Fundamentals", slug: "bitcoin-fundamentals", level: "Beginner", lessons: 6 },
  { title: "Ethereum & Smart Contracts", slug: "ethereum-smart-contracts", level: "Intermediate", lessons: 7 },
];

export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-white">Courses</h1>
      <p className="mt-2 max-w-2xl text-zinc-400">Handcrafted tracks to master the crypto essentials.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="rounded-2xl border border-white/10 bg-black/60 p-6 hover:border-white/20 hover:bg-black/70"
          >
            <span className="text-xs text-emerald-400">{c.level}</span>
            <h3 className="mt-2 text-lg font-medium text-white">{c.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{c.lessons} lessons • ~45 mins</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
