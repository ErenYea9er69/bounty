import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";

export default function Articles() {
  const [featured, ...rest] = articles;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-ink mb-2">
              Latest from Bounty
            </h2>
            <p className="text-slate text-sm">
              Practical advice and stories from parents who get it.
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden sm:inline-block text-sm font-semibold text-blue hover:text-blue-dark transition-colors"
          >
            View all articles
          </Link>
        </div>

        {/* Magazine layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured */}
          <Link href={`/articles/${featured.slug}`} className="group lg:col-span-3 block rounded-2xl overflow-hidden bg-mist">
            <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[400px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue rounded-full mb-3">
                  {featured.tag}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-white font-medium mb-2">
                  {featured.title}
                </h3>
                <p className="text-sm text-white/80 max-w-md mb-2">{featured.desc}</p>
                <span className="text-xs text-white/60">{featured.read}</span>
              </div>
            </div>
          </Link>

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.slice(0, 2).map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex gap-4 bg-linen rounded-2xl overflow-hidden p-4 hover:shadow-sm transition-shadow"
              >
                <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="112px"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-xs font-semibold text-blue mb-1">{article.tag}</span>
                  <h3 className="font-heading text-base font-medium text-ink mb-1 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate line-clamp-2">{article.desc}</p>
                  <span className="text-xs text-slate/60 mt-2">{article.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/articles"
          className="sm:hidden block text-center text-sm font-semibold text-blue mt-6"
        >
          View all articles
        </Link>
      </div>
    </section>
  );
}
