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

   
    </div>
  );
}
