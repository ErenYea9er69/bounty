"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const allNames = [
  // Boys
  { name: "Oliver", gender: "boy", origin: "English", meaning: "Olive tree", popularity: 1 },
  { name: "Noah", gender: "boy", origin: "Hebrew", meaning: "Rest, comfort", popularity: 2 },
  { name: "George", gender: "boy", origin: "Greek", meaning: "Farmer", popularity: 3 },
  { name: "Arthur", gender: "boy", origin: "Celtic", meaning: "Bear king", popularity: 4 },
  { name: "Muhammad", gender: "boy", origin: "Arabic", meaning: "Praised one", popularity: 5 },
  { name: "Leo", gender: "boy", origin: "Latin", meaning: "Lion", popularity: 6 },
  { name: "Harry", gender: "boy", origin: "English", meaning: "Home ruler", popularity: 7 },
  { name: "Oscar", gender: "boy", origin: "Irish", meaning: "Deer friend", popularity: 8 },
  { name: "Jack", gender: "boy", origin: "English", meaning: "God is gracious", popularity: 9 },
  { name: "Charlie", gender: "boy", origin: "English", meaning: "Free man", popularity: 10 },
  { name: "Henry", gender: "boy", origin: "German", meaning: "Ruler of the home", popularity: 11 },
  { name: "Theodore", gender: "boy", origin: "Greek", meaning: "Gift of God", popularity: 12 },
  { name: "Freddie", gender: "boy", origin: "German", meaning: "Peaceful ruler", popularity: 13 },
  { name: "Alfie", gender: "boy", origin: "English", meaning: "Wise counsellor", popularity: 14 },
  { name: "Thomas", gender: "boy", origin: "Aramaic", meaning: "Twin", popularity: 15 },
  { name: "Archie", gender: "boy", origin: "English", meaning: "Truly brave", popularity: 16 },
  { name: "Finley", gender: "boy", origin: "Scottish", meaning: "Fair warrior", popularity: 17 },
  { name: "Teddy", gender: "boy", origin: "English", meaning: "Wealthy guardian", popularity: 18 },
  { name: "Luca", gender: "boy", origin: "Italian", meaning: "Bringer of light", popularity: 19 },
  { name: "Isaac", gender: "boy", origin: "Hebrew", meaning: "He will laugh", popularity: 20 },
  // Girls
  { name: "Olivia", gender: "girl", origin: "Latin", meaning: "Olive tree", popularity: 1 },
  { name: "Amelia", gender: "girl", origin: "German", meaning: "Industrious", popularity: 2 },
  { name: "Isla", gender: "girl", origin: "Scottish", meaning: "Island", popularity: 3 },
  { name: "Ava", gender: "girl", origin: "Latin", meaning: "Life, birdlike", popularity: 4 },
  { name: "Ivy", gender: "girl", origin: "English", meaning: "Faithfulness", popularity: 5 },
  { name: "Freya", gender: "girl", origin: "Norse", meaning: "Noble woman", popularity: 6 },
  { name: "Lily", gender: "girl", origin: "English", meaning: "Purity, beauty", popularity: 7 },
  { name: "Florence", gender: "girl", origin: "Latin", meaning: "Flourishing", popularity: 8 },
  { name: "Mia", gender: "girl", origin: "Scandinavian", meaning: "Mine, beloved", popularity: 9 },
  { name: "Willow", gender: "girl", origin: "English", meaning: "Graceful, slender", popularity: 10 },
  { name: "Rosie", gender: "girl", origin: "English", meaning: "Rose", popularity: 11 },
  { name: "Sophie", gender: "girl", origin: "Greek", meaning: "Wisdom", popularity: 12 },
  { name: "Elsie", gender: "girl", origin: "Scottish", meaning: "Pledged to God", popularity: 13 },
  { name: "Daisy", gender: "girl", origin: "English", meaning: "Day's eye", popularity: 14 },
  { name: "Sienna", gender: "girl", origin: "Italian", meaning: "Reddish brown", popularity: 15 },
  { name: "Harper", gender: "girl", origin: "English", meaning: "Harp player", popularity: 16 },
  { name: "Luna", gender: "girl", origin: "Latin", meaning: "Moon", popularity: 17 },
  { name: "Eva", gender: "girl", origin: "Hebrew", meaning: "Life", popularity: 18 },
  { name: "Aria", gender: "girl", origin: "Italian", meaning: "Air, melody", popularity: 19 },
  { name: "Penelope", gender: "girl", origin: "Greek", meaning: "Weaver", popularity: 20 },
];

const origins = [...new Set(allNames.map((n) => n.origin))].sort();

function BabyNamesContent() {
  const searchParams = useSearchParams();
  const initialGender = searchParams.get("gender");
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState(
    initialGender === "boy" || initialGender === "girl" ? initialGender : "all"
  );
  const [origin, setOrigin] = useState("all");
  const [selectedName, setSelectedName] = useState(null);

  useEffect(() => {
    const g = searchParams.get("gender");
    if (g === "boy" || g === "girl") setGender(g);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return allNames
      .filter((n) => {
        if (gender !== "all" && n.gender !== gender) return false;
        if (origin !== "all" && n.origin !== origin) return false;
        if (search && !n.name.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
      })
      .sort((a, b) => a.popularity - b.popularity);
  }, [search, gender, origin]);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">
          Baby name finder
        </h1>
        <p className="text-slate text-base mb-10 max-w-lg">
          Explore thousands of baby names, find their meanings, and discover the perfect name for your little one.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {/* Search */}
          <div className="flex-1 min-w-56">
            <div className="flex items-center gap-2 h-11 px-4 bg-white border-2 border-mist rounded-xl focus-within:border-sage transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate shrink-0"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                type="text"
                placeholder="Search names..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate/50"
              />
            </div>
          </div>
          {/* Gender */}
          <div className="flex bg-mist rounded-xl p-1">
            {["all", "boy", "girl"].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors capitalize ${
                  gender === g
                    ? "bg-white text-ink shadow-sm"
                    : "text-slate hover:text-ink"
                }`}
              >
                {g === "all" ? "All" : g === "boy" ? "Boys" : "Girls"}
              </button>
            ))}
          </div>
          {/* Origin */}
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="h-11 px-4 bg-white border-2 border-mist rounded-xl text-sm text-ink focus:border-sage outline-none transition-colors"
          >
            <option value="all">All origins</option>
            {origins.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-xs text-slate mb-4">{filtered.length} names found</p>

        {/* Names grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {filtered.map((n) => (
            <button
              key={`${n.name}-${n.gender}`}
              onClick={() => setSelectedName(selectedName?.name === n.name && selectedName?.gender === n.gender ? null : n)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selectedName?.name === n.name && selectedName?.gender === n.gender
                  ? "border-sage bg-sage/5 shadow-sm"
                  : "border-mist bg-white hover:border-sage/30 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-heading text-lg font-medium text-ink">{n.name}</span>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    n.gender === "boy"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-pink-50 text-pink-600"
                  }`}
                >
                  {n.gender === "boy" ? "Boy" : "Girl"}
                </span>
              </div>
              <p className="text-xs text-slate">{n.origin} · {n.meaning}</p>
            </button>
          ))}
        </div>

        {/* Selected name detail */}
        {selectedName && (
          <div className="bg-white border border-sage/20 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-heading text-2xl font-medium text-ink">{selectedName.name}</h2>
                <p className="text-sm text-slate">{selectedName.origin} origin</p>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  selectedName.gender === "boy"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-pink-50 text-pink-600"
                }`}
              >
                {selectedName.gender === "boy" ? "Boy's name" : "Girl's name"}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-linen rounded-xl p-4">
                <div className="text-xs text-slate mb-1">Meaning</div>
                <div className="text-sm font-medium text-ink">{selectedName.meaning}</div>
              </div>
              <div className="bg-linen rounded-xl p-4">
                <div className="text-xs text-slate mb-1">Origin</div>
                <div className="text-sm font-medium text-ink">{selectedName.origin}</div>
              </div>
              <div className="bg-linen rounded-xl p-4">
                <div className="text-xs text-slate mb-1">Popularity rank</div>
                <div className="text-sm font-medium text-ink">#{selectedName.popularity}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BabyNamesPage() {
  return (
    <Suspense fallback={null}>
      <BabyNamesContent />
    </Suspense>
  );
}
