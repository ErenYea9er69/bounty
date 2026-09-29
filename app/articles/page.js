import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Articles — Bounty",
  description: "Practical, parent-tested advice on pregnancy, birth, and life with a baby.",
};

export default function ArticlesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5 mb-12">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">
          Articles
        </h1>
        <p className="text-slate text-base max-w-lg">
          Practical advice and stories from parents who get it, covering pregnancy, birth, and the early years.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block bg-white border border-mist rounded-2xl overflow-hidden hover:shadow-sm hover:border-blue/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-block px-3 py-1 text-xs font-semibold text-white bg-blue rounded-full">
                  {article.tag}
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-heading text-lg font-medium text-ink mb-2 group-hover:text-blue transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate leading-relaxed mb-3">{article.desc}</p>
                <span className="text-xs text-slate/60">{article.read}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
