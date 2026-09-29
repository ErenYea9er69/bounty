import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Bounty`,
    description: article.desc,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-64 sm:h-96 overflow-hidden mb-10">
        <Image
          src={article.image}
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-5 pb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue rounded-full mb-3">
            {article.tag}
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl text-white font-medium leading-tight">
            {article.title}
          </h1>
          <p className="text-xs text-white/70 mt-2">{article.read}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5">
        <Link href="/articles" className="text-sm font-semibold text-blue hover:text-blue-dark transition-colors">
          ← Back to articles
        </Link>

        <div className="mt-6 space-y-5">
          {article.body.map((para, i) => (
            <p key={i} className="text-slate text-base leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-mist">
          <h2 className="font-heading text-lg font-medium text-ink mb-5">
            More from Bounty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {more.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group block rounded-xl overflow-hidden bg-white border border-mist hover:border-blue/30 hover:shadow-sm transition-all"
              >
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-ink line-clamp-2 group-hover:text-blue transition-colors">
                    {a.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
