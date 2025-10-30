import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoEdu — Learn Cryptocurrency Fast",
  description: "A sleek, student-friendly e-learning site to learn crypto fundamentals.",
};

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-white">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Crypto</span>
          Edu
        </Link>
        <div className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          {/* <Link href="/learn" className="hover:text-white">Learn</Link> */}
          <Link href="/courses" className="hover:text-white">Courses</Link>
          <Link href="/sign-in" className="hover:text-white">Sign in</Link>
          <Link href="/sign-up" className="rounded-full bg-white px-4 py-2 font-medium text-black hover:bg-zinc-200">Sign up</Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-400">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} CryptoEdu. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/learn" className="hover:text-white">Learn</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/sign-in" className="hover:text-white">Sign in</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100`}>
        <NavBar />
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
