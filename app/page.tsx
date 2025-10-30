import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-grid">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <section className="px-6 py-20 sm:px-12 sm:py-28">
        <h1 className="max-w-3xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl">
          Learn crypto the smart way
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          Bite-sized lessons, simple explanations, and beautiful visuals. No hype—just fundamentals that stick.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/sign-up" className="rounded-full bg-white px-6 py-3 font-medium text-black shadow-md hover:bg-zinc-200">Start learning</Link>
          <Link href="/courses" className="rounded-full border border-white/20 px-6 py-3 text-zinc-200 hover:bg-white/10">Browse lessons</Link>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 sm:px-12">
        <h2 className="text-xl font-semibold text-white">Popular Courses</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Crypto 101", slug: "crypto-101", desc: "Foundations of blockchain and tokens" },
            { title: "Bitcoin Fundamentals", slug: "bitcoin-fundamentals", desc: "Economics and mechanics of BTC" },
            { title: "Ethereum & Smart Contracts", slug: "ethereum-smart-contracts", desc: "How Ethereum works and why it matters" },
          ].map((c) => (
            <Link
              key={c.slug}
              href={`/courses/${c.slug}`}
              className="rounded-2xl border border-white/10 bg-black/60 p-5 hover:border-white/20 hover:bg-black/70"
            >
              <h3 className="font-medium text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{c.desc}</p>
              <span className="mt-4 inline-block text-sm text-emerald-400">View course →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
