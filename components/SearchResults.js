"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { articles } from "@/lib/articles";
import { guides } from "@/lib/guides";

const pages = [
  ["Due date calculator", "/due-date", "Work out your due date from your last period"],
  ["Ovulation calculator", "/getting-pregnant", "Find your fertile window when trying to conceive"],
  ["Pregnancy week by week", "/pregnancy", "Baby development and symptoms, weeks 4 to 40"],
  ["Baby names", "/baby-names", "Search and filter names by gender and meaning"],
  ["Baby month by month", "/baby", "Milestones, feeding and sleep in the first year"],
  ["Toddler guide", "/toddler", "Development, behaviour and activities, 12 to 24 months"],
  ["Pre-school", "/preschool", "Ages 2 to 4"],
  ["Family life", "/family", "Money, work and childcare"],
  ["Hospital bag and baby essentials checklist", "/checklist", "Tick off what you have packed"],
  ["Miscarriage and baby loss support", "/support", "Trusted charities and when to get help"],
];

function Results() {
  const q = (useSearchParams().get("q") || "").trim().toLowerCase();
  const all = [
    ...pages.map(([title, href, desc]) => ({ title, href, desc })),
    ...guides.map((g) => ({ title: g.title, href: `/guides/${g.slug}`, desc: g.desc })),
    { title: "Bounty app", href: "/app", desc: "Ask a Midwife, growth tracker and appointment schedule" },
    { title: "Press office", href: "/press", desc: "Media enquiries" },
    ...articles.map((a) => ({ title: a.title, href: `/articles/${a.slug}`, desc: a.desc || "Article" })),
  ];
  const hits = q ? all.filter((r) => `${r.title} ${r.desc}`.toLowerCase().includes(q)) : [];

  return (
    <>
      <p className="text-slate mb-6" aria-live="polite">
        {q ? `${hits.length} result${hits.length === 1 ? "" : "s"} for "${q}"` : "Type a search term above."}
      </p>
      <ul className="space-y-3">
        {hits.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="block bg-white border border-mist rounded-2xl p-5 hover:border-blue transition-colors">
              <span className="font-heading text-lg text-ink">{r.title}</span>
              <span className="block text-sm text-slate mt-1">{r.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={null}>
      <Results />
    </Suspense>
  );
}
