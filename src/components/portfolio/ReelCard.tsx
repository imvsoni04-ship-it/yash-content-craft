import { useEffect, useRef, useState } from "react";
import type { Embed } from "./data";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function loadInstagramScript() {
  if (typeof window === "undefined") return;
  if (window.instgrm) {
    window.instgrm.Embeds.process();
    return;
  }
  const existing = document.querySelector<HTMLScriptElement>("script[data-ig-embed]");
  if (existing) return;
  const s = document.createElement("script");
  s.src = "https://www.instagram.com/embed.js";
  s.async = true;
  s.dataset.igEmbed = "true";
  document.body.appendChild(s);
}

export function ReelCard({ embed }: { embed: Embed }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  useEffect(() => {
    if (inView && embed.type === "instagram") {
      loadInstagramScript();
      const t = setTimeout(() => window.instgrm?.Embeds.process(), 300);
      return () => clearTimeout(t);
    }
  }, [inView, embed.type]);

  return (
    <div
      ref={ref}
      className="group rounded-2xl border border-hairline bg-white/[0.02] overflow-hidden flex flex-col"
    >
      <div className="relative w-full bg-black aspect-[9/16] overflow-hidden">
        {inView ? (
          embed.type === "youtube" ? (
            <iframe
              src={`https://www.youtube.com/embed/${embed.url}`}
              title="YouTube short"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <blockquote
              className="instagram-media absolute inset-0 !m-0 !min-w-0 !w-full !max-w-none"
              data-instgrm-permalink={embed.url}
              data-instgrm-version="14"
              style={{ background: "#000" }}
            />
          )
        ) : (
          <div className="absolute inset-0 animate-pulse bg-white/[0.04]" />
        )}
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><span aria-hidden>👁</span> {embed.views}</span>
          <span className="flex items-center gap-1"><span aria-hidden>❤</span> {embed.likes}</span>
          <span className="flex items-center gap-1"><span aria-hidden>💬</span> {embed.comments}</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-accent-blue border border-accent-blue/40 rounded-full px-2 py-1">
          {embed.category}
        </span>
      </div>
    </div>
  );
}