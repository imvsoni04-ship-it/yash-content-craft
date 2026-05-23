import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeIn({ children, className = "", as: As = "div" }: { children: ReactNode; className?: string; as?: keyof JSX.IntrinsicElements }) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); obs.disconnect(); }
    }, { rootMargin: "-40px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Comp = As as any;
  return <Comp ref={ref as any} className={`fade-up ${seen ? "in-view" : ""} ${className}`}>{children}</Comp>;
}