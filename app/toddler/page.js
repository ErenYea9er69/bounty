"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const monthlyGuide = [
  { month: 12, title: "First steps", desc: "Many toddlers take their first independent steps around now, though anywhere from 9 to 18 months is normal. Your toddler is starting to understand simple instructions." },
  { month: 15, title: "Little explorer", desc: "Walking becomes more confident, and climbing starts in earnest. Vocabulary is growing, often with several recognisable words alongside a lot of pointing and gesturing." },
  { month: 18, title: "Big feelings", desc: "Tantrums often appear as your toddler feels more, understands more, but still has limited words to express it. Running, kicking a ball, and scribbling with crayons are common new skills." },
  { month: 21, title: "Growing independence", desc: "Your toddler wants to do more for themselves, from feeding to dressing. Short sentences of two or three words start to appear alongside a rapidly growing vocabulary." },
  { month: 24, title: "The terrific twos", desc: "Pretend play takes off, alongside a strong sense of 'mine' and a growing ability to follow two-step instructions. Toilet training readiness often starts to show around now." },
];

export default function ToddlerPage() {
  const [activeMonth, setActiveMonth] = useState(12);

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/month-(\d+)/);
    if (match) {
      const m = Number(match[1]);
      if (monthlyGuide.some((g) => g.month === m)) setActiveMonth(m);
    }
  }, []);

  const current = monthlyGuide.find((m) => m.month === activeMonth) || monthlyGuide[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden mb-12">
        <Image src="/images/toddler.jpg" alt="Toddler playing with wooden toys" fill priority className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-linen via-linen/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-5 pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-2">Toddler, 1 to 2 years</h1>
          <p className="text-slate text-base max-w-lg">
            Developmental leaps, behaviour, and everyday guidance for your curious toddler.
          </p>
        </div>
      </div>

      <div id="development" className="max-w-5xl mx-auto px-5 scroll-mt-24">
        <h2 className="text-xs font-semibold text-slate mb-3 tracking-wide">MONTH BY MONTH</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {monthlyGuide.map((m) => (
            <button
              key={m.month}
              id={`month-${m.month}`}
              onClick={() => setActiveMonth(m.month)}
              className={`h-12 px-5 rounded-xl text-sm font-semibold transition-all scroll-mt-24 ${
                activeMonth === m.month
                  ? "bg-blue text-white shadow-md scale-105"
                  : "bg-white border border-mist text-slate hover:border-blue/40 hover:text-ink"
              }`}
            >
              {m.month}m
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-blue/5 border border-blue/15 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
            <p className="text-xs text-blue font-semibold mb-2">{current.month} months</p>
            <h3 className="font-heading text-2xl text-ink font-medium">{current.title}</h3>
          </div>
          <div className="lg:col-span-2 bg-white border border-mist rounded-2xl p-8">
            <h3 className="font-heading text-xl font-medium text-ink mb-3">
              Your toddler at {current.month} months
            </h3>
            <p className="text-slate text-sm leading-relaxed">{current.desc}</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 space-y-16">
        <section id="behaviour" className="scroll-mt-24">
          <h2 className="font-heading text-2xl text-ink mb-4">Behaviour</h2>
          <p className="text-slate leading-relaxed mb-4">
            Tantrums are a normal part of toddler development, not a discipline failure. Your toddler's brain simply hasn't developed the tools yet to manage big feelings, so those feelings come out as tears, shouting, or a dramatic floor moment.
          </p>
          <p className="text-slate leading-relaxed">
            Staying calm, naming the feeling, and offering simple choices, "red cup or blue cup", helps your toddler feel some control without giving in to every demand. Consistency matters more than perfection here.
          </p>
        </section>

        <section id="activities" className="scroll-mt-24">
          <h2 className="font-heading text-2xl text-ink mb-4">Activities</h2>
          <p className="text-slate leading-relaxed mb-4">
            Toddlers learn best through play, not worksheets. Simple activities like stacking cups, water play, chalk on the pavement, or a cardboard box turned into a den all build coordination, language, and imagination.
          </p>
          <p className="text-slate leading-relaxed">
            Reading together every day, even just a few minutes, builds vocabulary and gives you both a calm, connected moment in a busy day. Following your toddler's interests, dinosaurs, trucks, animals, tends to hold their attention far longer than anything imposed.
          </p>
        </section>
      </div>
    </div>
  );
}
