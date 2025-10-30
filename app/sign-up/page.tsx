import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up | CryptoEdu",
};

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-semibold text-white">Create your account</h1>
      <p className="mt-2 text-zinc-400">Join thousands of students learning crypto.</p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm text-zinc-300" htmlFor="name">Full name</label>
          <input id="name" type="text" placeholder="Satoshi Nakamoto" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-emerald-400" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-zinc-300" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-emerald-400" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-zinc-300" htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-emerald-400" />
        </div>
        <button type="button" className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black hover:bg-zinc-200">Create account</button>
      </form>

      <p className="mt-6 text-sm text-zinc-400">
        Already have an account? <Link href="/sign-in" className="text-emerald-400">Sign in</Link>
      </p>
    </div>
  );
}
