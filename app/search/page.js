import SearchResults from "@/components/SearchResults";

export const metadata = { title: "Search — Bounty" };

export default function SearchPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="font-heading text-3xl text-ink mb-6">Search</h1>
        <SearchResults />
      </div>
    </div>
  );
}
