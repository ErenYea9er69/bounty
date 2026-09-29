import Link from "next/link";

export const metadata = { title: "Page not found — Bounty" };

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 px-5 text-center">
      <p className="text-sage-dark font-medium mb-2">Error 404</p>
      <h1 className="font-heading text-4xl text-ink mb-4">We cannot find that page</h1>
      <p className="text-slate mx-auto mb-8">The link may be old or mistyped. Try search, or start from the home page.</p>
      <div className="flex justify-center gap-3 flex-wrap">
        <Link href="/" className="bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-dark transition-colors">Go home</Link>
        <Link href="/search" className="border border-mist bg-white text-ink px-6 py-3 rounded-full font-medium hover:border-sage transition-colors">Search the site</Link>
      </div>
    </div>
  );
}
