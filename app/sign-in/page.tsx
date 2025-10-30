import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in | CryptoEdu",
};

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
      <p className="mt-2 text-zinc-400">Sign in to continue learning.</p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm text-zinc-300" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-emerald-400" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-zinc-300" htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-emerald-400" />
        </div>
        <button type="button" className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black hover:bg-zinc-200">Sign in</button>
      </form>

      <p className="mt-6 text-sm text-zinc-400">
        New here? <Link href="/sign-up" className="text-emerald-400">Create an account</Link>
      </p>
    </div>
  );
}
