"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-white">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Crypto</span>
          Edu
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          {/* <Link href="/learn" className="hover:text-white">Learn</Link> */}
          <Link href="/courses" className="hover:text-white">Courses</Link>
          <Link href="/sign-in" className="hover:text-white">Sign in</Link>
          <Link href="/sign-up" className="rounded-full bg-white px-4 py-2 font-medium text-black hover:bg-zinc-200">Sign up</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-zinc-200 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="sm:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-xl backdrop-blur">
            <div className="flex flex-col gap-3 text-sm text-zinc-200">
              <Link href="/learn" onClick={() => setOpen(false)} className="hover:text-white">Learn</Link>
              <Link href="/courses" onClick={() => setOpen(false)} className="hover:text-white">Courses</Link>
              <Link href="/sign-in" onClick={() => setOpen(false)} className="hover:text-white">Sign in</Link>
              <Link href="/sign-up" onClick={() => setOpen(false)} className="rounded-lg bg-white px-4 py-2 text-center font-medium text-black hover:bg-zinc-200">Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
