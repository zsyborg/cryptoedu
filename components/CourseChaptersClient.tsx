"use client";

import { useState, useMemo } from "react";
import type { ChapterDoc } from "@/components/CourseChapters";

function getYouTubeEmbed(urlOrId?: string) {
  if (!urlOrId) return null;
  // If it's already an ID (no protocol and short length), return as-is
  const idMatch = urlOrId.match(/^[a-zA-Z0-9_-]{6,}$/);
  if (idMatch) return `https://www.youtube-nocookie.com/embed/${urlOrId}`;

  try {
    const u = new URL(urlOrId);
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube-nocookie.com/embed/${v}`;
      // e.g., /embed/VIDEOID
      const parts = u.pathname.split("/").filter(Boolean);
      const idx = parts.indexOf("embed");
      if (idx >= 0 && parts[idx + 1]) return `https://www.youtube-nocookie.com/embed/${parts[idx + 1]}`;
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
    }
  } catch {}
  return null;
}

export default function CourseChaptersClient({ chapters }: { chapters: ChapterDoc[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const processed = useMemo(
    () =>
      chapters.map((c) => ({
        ...c,
        embed: getYouTubeEmbed(c.videoUrl ?? undefined),
      })),
    [chapters]
  );

  if (!processed.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-zinc-400">
        Chapters will appear here once available.
      </div>
    );
  }

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
      {processed.map((ch, i) => (
        <div key={i} className="bg-black/60">
          <button
            type="button"
            className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-white/5"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
          >
            <span className="font-medium text-white">{ch.title}</span>
            <svg className={`h-5 w-5 text-zinc-400 transition-transform ${openIndex === i ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="space-y-4 px-5 pb-6">
              {ch.embed && (
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                  <iframe
                    className="h-full w-full"
                    src={ch.embed}
                    title={ch.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
              {/* {ch.html && (
                <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: ch.html }} />
              )} */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
