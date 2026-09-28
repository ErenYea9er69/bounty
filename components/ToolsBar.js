"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const tools = [
  {
    label: "Due date calculator",
    href: "/due-date",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
  },
  {
    label: "Week by week",
    href: "/pregnancy",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Baby names",
    href: "/baby-names",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Baby essentials",
    href: "/pregnancy#essentials",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Ovulation tracker",
    href: "/getting-pregnant#ovulation",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
];

export default function ToolsBar() {
  const stripRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative -mt-14 z-10">
      {/* Sage gradient strip behind the glass cards */}
      <div className="absolute inset-x-0 top-6 bottom-0 bg-gradient-to-r from-sage/10 via-sage/20 to-sage/10 rounded-none" />
      <div className="relative max-w-7xl mx-auto px-5" ref={stripRef}>
        <div className="flex gap-3 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory">
          {tools.map((tool, i) => (
            <Link
              key={tool.label}
              href={tool.href}
              className={`group shrink-0 snap-start flex flex-col items-center gap-3 w-40 py-6 px-4 rounded-2xl glass-light glass-sheen transition-all duration-300 hover:scale-[1.03] hover:shadow-md ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-colors">
                {tool.icon}
              </div>
              <span className="text-sm font-medium text-ink text-center leading-tight">
                {tool.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
