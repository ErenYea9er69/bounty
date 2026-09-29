import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  return g ? { title: `${g.title} | Bounty`, description: g.desc } : {};
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const more = guides.filter((x) => x.group === g.group && x.slug !== g.slug);

  return (
    <div className="pt-28 pb-20">
      <article className="max-w-3xl mx-auto px-5">
        <nav aria-label="Breadcrumb" className="text-sm text-slate mb-4">
          <Link href="/guides" className="hover:text-ink underline underline-offset-4">Guides</Link> / {g.group}
        </nav>
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">{g.title}</h1>
        <p className="text-slate text-lg mb-10">{g.desc}</p>

        {g.notice && (
          <aside role="note" className="bg-peach-light border border-peach/30 rounded-2xl p-5 mb-10 text-sm text-ink">
            {g.notice}
          </aside>
        )}

        {g.sections.map((s) => (
          <section key={s.h} className="mb-10">
            <h2 className="font-heading text-2xl text-ink mb-3">{s.h}</h2>
            {s.p && <p className="text-slate mb-4">{s.p}</p>}
            {s.items && (
              <dl className="grid sm:grid-cols-2 gap-3">
                {s.items.map(([t, d]) => (
                  <div key={t} className="bg-white border border-mist rounded-2xl p-5">
                    <dt className="font-heading text-base text-ink">{t}</dt>
                    <dd className="text-sm text-slate mt-1">{d}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}

        {g.links && (
          <p className="text-sm text-slate mb-10">
            Read more:{" "}
            {g.links.map(([l, u]) => (
              <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="underline text-blue-dark mr-3">{l}</a>
            ))}
          </p>
        )}

        {more.length > 0 && (
          <div className="border-t border-mist pt-8">
            <h2 className="font-heading text-lg text-ink mb-3">More in {g.group}</h2>
            <ul className="space-y-2">
              {more.map((m) => (
                <li key={m.slug}><Link href={`/guides/${m.slug}`} className="text-blue-dark underline underline-offset-4">{m.title}</Link></li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
