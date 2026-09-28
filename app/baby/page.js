"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const monthlyGuide = [
  { month: 1, title: "Newborn", desc: "Your baby sleeps most of the day, feeds every 2-3 hours, and is beginning to recognise your voice and face. Tummy time for a few minutes at a time helps build neck strength." },
  { month: 2, title: "First smiles", desc: "Real, responsive smiles usually appear now. Your baby can briefly hold their head up and starts to follow moving objects with their eyes." },
  { month: 3, title: "Finding hands", desc: "Babies often discover their hands around now, batting at toys and bringing hands together. Sleep patterns may start to stretch a little longer at night." },
  { month: 4, title: "Rolling begins", desc: "Many babies start rolling from front to back. Laughter and cooing become more frequent, and your baby may start reaching for objects." },
  { month: 5, title: "Sitting support", desc: "With support, your baby can sit for short periods. They're exploring everything with their mouth, and may show interest in what you're eating." },
  { month: 6, title: "Starting solids", desc: "Around six months, many babies are ready to try their first solid foods alongside milk feeds. Sitting unaided often follows soon after." },
  { month: 7, title: "Babbling", desc: "Repeated sounds like 'ba-ba' or 'da-da' begin. Your baby may start to understand simple words like 'no' or their own name." },
  { month: 8, title: "On the move", desc: "Crawling, scooting, or shuffling often starts now. Separation anxiety can appear as your baby becomes more aware you can leave the room." },
  { month: 9, title: "Pulling up", desc: "Your baby may pull themselves up to standing using furniture. Pincer grip develops, letting them pick up small pieces of food." },
  { month: 10, title: "Cruising", desc: "Walking around furniture, or cruising, is common. Waving, clapping, and pointing become part of your baby's communication toolkit." },
  { month: 11, title: "First words", desc: "A first recognisable word may appear, often 'mama' or 'dada'. Your baby understands much more than they can say." },
  { month: 12, title: "First birthday", desc: "Many babies take their first independent steps around now, though the range is wide. Your baby's personality is really starting to shine through." },
];

export default function BabyPage() {
  const [activeMonth, setActiveMonth] = useState(1);

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/month-(\d+)/);
    if (match) {
      const m = Number(match[1]);
      if (m >= 1 && m <= 12) setActiveMonth(m);
    }
  }, []);

  const current = monthlyGuide.find((m) => m.month === activeMonth) || monthlyGuide[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden mb-12">
        <Image src="/images/newborn.jpg" alt="" fill priority className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-linen via-linen/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-5 pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-2">Baby, 0 to 12 months</h1>
          <p className="text-slate text-base max-w-lg">
            Milestones, feeding, and sleep guidance for your baby's first incredible year.
          </p>
        </div>
      </div>

      <div id="milestones" className="max-w-5xl mx-auto px-5 scroll-mt-24">
        <h2 className="text-xs font-semibold text-slate mb-3 tracking-wide">MONTH BY MONTH</h2>
        {/* Month selector */}
        <div className="flex flex-wrap gap-2 mb-10">
          {monthlyGuide.map((m) => (
            <button
              key={m.month}
              id={`month-${m.month}`}
              onClick={() => setActiveMonth(m.month)}
              className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all scroll-mt-24 ${
                activeMonth === m.month
                  ? "bg-peach text-white shadow-md scale-105"
                  : "bg-white border border-mist text-slate hover:border-peach/40 hover:text-ink"
              }`}
            >
              {m.month}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-peach-light border border-peach/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
            <p className="text-xs text-peach-dark font-semibold mb-2">Month {current.month}</p>
            <h3 className="font-heading text-2xl text-ink font-medium">{current.title}</h3>
          </div>
          <div className="lg:col-span-2 bg-white border border-mist rounded-2xl p-8">
            <h3 className="font-heading text-xl font-medium text-ink mb-3">
              Your baby at {current.month} {current.month === 1 ? "month" : "months"}
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-6">{current.desc}</p>
            <div className="flex flex-wrap gap-3">
              {activeMonth > 1 && (
                <button
                  onClick={() => setActiveMonth(activeMonth - 1)}
                  className="h-10 px-5 border border-mist rounded-lg text-sm font-medium text-slate hover:text-ink hover:border-peach/30 transition-colors"
                >
                  Previous month
                </button>
              )}
              {activeMonth < 12 && (
                <button
                  onClick={() => setActiveMonth(activeMonth + 1)}
                  className="h-10 px-5 bg-peach hover:bg-peach-dark text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Next month
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 space-y-16">
        <section id="feeding" className="scroll-mt-24">
          <h2 className="font-heading text-2xl text-ink mb-4">Feeding and nutrition</h2>
          <p className="text-slate leading-relaxed mb-4">
            Whether you breastfeed, formula feed, or use a combination, the goal is a well-fed, content baby, there is no single right way to do it. Newborns typically feed every 2 to 3 hours, gradually settling into a more predictable rhythm over the following months.
          </p>
          <p className="text-slate leading-relaxed">
            Around six months, most babies are ready to start solids alongside milk feeds. Start with single, soft foods, and expect mess, play, and a lot of refused spoonfuls before eating really gets going. Milk remains the main source of nutrition through the first year.
          </p>
        </section>

        <section id="sleep" className="scroll-mt-24">
          <h2 className="font-heading text-2xl text-ink mb-4">Sleep and crying</h2>
          <p className="text-slate leading-relaxed mb-4">
            Newborn sleep is scattered across day and night in short bursts. A simple, calm bedtime routine, dim lights, a bath, a story, a feed, helps signal to your baby that it is time to wind down, even from a young age.
          </p>
          <p className="text-slate leading-relaxed">
            Crying is your baby's main way of communicating hunger, tiredness, discomfort, or a need for closeness. It is not a sign you are doing something wrong. If crying feels constant or you're struggling to cope, your health visitor or GP is there to help, you do not have to manage alone.
          </p>
        </section>
      </div>
    </div>
  );
}
