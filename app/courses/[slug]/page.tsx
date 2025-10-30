import type { Metadata } from "next";
import Link from "next/link";

const courses = [
  { slug: "crypto-101", title: "Crypto 101", summary: "Foundations of blockchain and tokens" },
  { slug: "bitcoin-fundamentals", title: "Bitcoin Fundamentals", summary: "Economics and mechanics of BTC" },
  { slug: "ethereum-smart-contracts", title: "Ethereum & Smart Contracts", summary: "How Ethereum works and why it matters" },
];

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  return {
    title: `${course?.title ?? "Course"} | CryptoEdu`,
    description: course?.summary ?? "Crypto course",
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

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
    </div>
  );
}
