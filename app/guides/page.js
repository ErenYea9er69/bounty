import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata = { title: "Guides | Bounty", description: "Baby names, weaning, safer sleep, immunisations and family health guides." };

export default function GuidesPage() {
  const groups = [...new Set(guides.map((g) => g.group))];
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">Guides</h1>
        <p className="text-slate mb-10">Clear answers for each stage of parenthood.</p>
        {groups.map((grp) => (
          <section key={grp} className="mb-10" aria-labelledby={`g-${grp}`}>
            <h2 id={`g-${grp}`} className="font-heading text-2xl text-ink mb-4">{grp}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.filter((g) => g.group === grp).map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="bg-white border border-mist rounded-2xl p-6 hover:border-sage transition-colors">
                  <h3 className="font-heading text-base font-medium text-ink mb-2">{g.title}</h3>
                  <p className="text-sm text-slate">{g.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
