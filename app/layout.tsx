import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";

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

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-400">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} CryptoEdu. All rights reserved.</p>
          <div className="flex gap-5">
            {/* <Link href="/learn" className="hover:text-white">Learn</Link> */}
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
