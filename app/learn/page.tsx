import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn | CryptoEdu",
  description: "Free lessons to understand cryptocurrency and blockchain.",
};

// Link lessons to the existing course slugs used by /courses/[slug]
const lessons = [
  { title: "What is Blockchain?", slug: "what-is-blockchain", level: "Beginner", courseSlug: "crypto-101" },
  { title: "Public vs Private Keys", slug: "keys-basics", level: "Beginner", courseSlug: "crypto-101" },
  { title: "How Bitcoin Works", slug: "how-bitcoin-works", level: "Beginner", courseSlug: "bitcoin-fundamentals" },
  { title: "Ethereum & Gas", slug: "ethereum-gas", level: "Intermediate", courseSlug: "ethereum-smart-contracts" },
  { title: "Smart Contracts 101", slug: "smart-contracts-101", level: "Intermediate", courseSlug: "ethereum-smart-contracts" },
  { title: "Wallet Security", slug: "wallet-security", level: "Intermediate", courseSlug: "crypto-101" },
];

export default function LearnPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-white">Start Learning</h1>
      <p className="mt-2 max-w-2xl text-zinc-400">
        Curated lessons to go from zero to confident. No prior knowledge required.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((l) => (
          <Link
            key={l.slug}
            href={`/courses/${l.courseSlug}`}
            className="rounded-2xl border border-white/10 bg-black/60 p-5 hover:border-white/20 hover:bg-black/70"
          >
            <span className="text-xs text-emerald-400">{l.level}</span>
            <h3 className="mt-2 font-medium text-white">{l.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">5–10 min • Interactive visuals</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
