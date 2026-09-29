"use client";

import { useEffect, useState } from "react";

const LISTS = {
  hospital: {
    label: "Hospital bag",
    groups: [
      ["For labour", ["Birth plan and maternity notes", "Loose, comfortable clothes", "Lip balm and hair ties", "Snacks and a water bottle", "Phone charger with a long lead"]],
      ["For you after birth", ["Nightwear that opens at the front", "Maternity pads", "Comfortable underwear", "Toiletries and towel", "Going-home outfit"]],
      ["For baby", ["Two to three sleepsuits and vests", "Nappies and wipes", "Hat and cardigan", "Muslin cloths", "Car seat for the journey home"]],
    ],
  },
  essentials: {
    label: "Baby essentials",
    groups: [
      ["Sleep", ["Cot or Moses basket with a firm, flat mattress", "Two fitted sheets", "Baby sleeping bag"]],
      ["Clothes", ["Five to seven sleepsuits", "Five to seven vests", "Hats and mittens"]],
      ["Feeding", ["Muslin cloths", "Bibs", "Bottles and steriliser, if bottle feeding"]],
      ["Out and about", ["Rear-facing car seat", "Pram or sling", "Changing bag"]],
    ],
  },
};

export default function ChecklistTool() {
  const [tab, setTab] = useState("hospital");
  const [done, setDone] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setDone(JSON.parse(localStorage.getItem("bounty-checklist") || "{}"));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem("bounty-checklist", JSON.stringify(done));
    } catch {}
  }, [done, ready]);

  const list = LISTS[tab];
  const items = list.groups.flatMap(([, i]) => i);
  const count = items.filter((i) => done[`${tab}:${i}`]).length;
  const pct = Math.round((count / items.length) * 100);

  return (
    <div>
      <div role="tablist" aria-label="Checklist type" className="inline-flex bg-mist rounded-full p-1 mb-8">
        {Object.entries(LISTS).map(([key, l]) => (
          <button
            key={key}
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${tab === key ? "bg-white text-ink shadow-sm" : "text-slate hover:text-ink"}`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="bg-white border border-mist rounded-2xl p-6 mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-ink">{count} of {items.length} packed</span>
          <span className="text-slate">{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-mist overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Checklist progress">
          <div className="h-full bg-sage transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {list.groups.map(([title, entries]) => (
          <fieldset key={title} className="bg-white border border-mist rounded-2xl p-6">
            <legend className="font-heading text-lg text-ink px-1">{title}</legend>
            <ul className="mt-3 space-y-1">
              {entries.map((item) => {
                const id = `${tab}:${item}`;
                return (
                  <li key={id}>
                    <label className="flex items-start gap-3 py-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={!!done[id]}
                        onChange={() => setDone((d) => ({ ...d, [id]: !d[id] }))}
                        className="mt-0.5 h-5 w-5 shrink-0 accent-sage"
                      />
                      <span className={done[id] ? "text-slate line-through" : "text-ink"}>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>

      <button onClick={() => setDone({})} className="mt-6 text-sm text-slate underline underline-offset-4 hover:text-ink">
        Clear all ticks
      </button>
    </div>
  );
}
