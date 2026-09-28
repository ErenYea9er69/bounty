"use client";

import { useState } from "react";
import Image from "next/image";

const weeklyGuide = [
  { week: 4, size: "Poppy seed", length: "1mm", desc: "The embryo implants into your uterine lining. The neural tube — which will become the brain and spinal cord — is beginning to form. You might not know you're pregnant yet." },
  { week: 5, size: "Sesame seed", length: "2mm", desc: "The heart begins to beat for the first time. The embryo now has three layers of cells that will develop into all the body's organs and tissues." },
  { week: 6, size: "Lentil", length: "4mm", desc: "Tiny buds that will become arms and legs are appearing. The jaw, cheeks, and chin are starting to form. You may begin to feel early pregnancy symptoms." },
  { week: 7, size: "Blueberry", length: "8mm", desc: "The brain is growing rapidly. Small hands and feet are developing, and the embryo is making small movements, though you can't feel them yet." },
  { week: 8, size: "Raspberry", length: "1.6cm", desc: "Tiny fingers and toes are forming. The heart is beating at about 150-170 times per minute — twice as fast as yours." },
  { week: 10, size: "Prune", length: "3cm", desc: "All vital organs are now in place. Your baby officially moves from being an embryo to a foetus. Bones and cartilage are forming." },
  { week: 12, size: "Lime", length: "5.4cm", desc: "Your baby can open and close their fists. Reflexes are developing — they may start to make sucking movements. Many parents choose to share the news after the 12-week scan." },
  { week: 16, size: "Avocado", length: "11.6cm", desc: "Your baby can make facial expressions. You might feel the first flutters of movement — called quickening. Their skeleton is hardening from cartilage to bone." },
  { week: 20, size: "Banana", length: "16.4cm", desc: "Halfway there! Your baby can swallow and their digestive system is producing meconium. The mid-pregnancy anomaly scan usually happens now." },
  { week: 24, size: "Corn on the cob", length: "21cm", desc: "Your baby can hear sounds outside the womb. They have regular sleep and wake cycles. Their lungs are developing surfactant, which they'll need to breathe air." },
  { week: 28, size: "Aubergine", length: "25cm", desc: "Your baby can open and close their eyes and turn their head. The brain is developing billions of neurons. You're now in the third trimester." },
  { week: 32, size: "Squash", length: "28cm", desc: "Your baby is practising breathing movements. They can tell the difference between light and dark. Their bones are fully developed, though still soft." },
  { week: 36, size: "Papaya", length: "33cm", desc: "Your baby is likely head-down, getting ready for birth. Their immune system is strengthening. Lungs are nearly mature enough for the outside world." },
  { week: 40, size: "Watermelon", length: "36cm", desc: "Full term! Your baby weighs around 3.4kg on average. They're ready to meet you. Labour could start any day now. The waiting game begins." },
];

export default function PregnancyPage() {
  const [activeWeek, setActiveWeek] = useState(12);

  const current = weeklyGuide.find((w) => w.week === activeWeek) || weeklyGuide[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden mb-12">
        <Image
          src="/images/hero-mother.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-linen via-linen/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-5 pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-2">
            Pregnancy week by week
          </h1>
          <p className="text-slate text-base max-w-lg">
            Watch your baby grow from the size of a poppy seed to ready-to-meet-you. Select a week to learn what's happening.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5">
        {/* Week selector */}
        <div className="flex flex-wrap gap-2 mb-10">
          {weeklyGuide.map((w) => (
            <button
              key={w.week}
              onClick={() => setActiveWeek(w.week)}
              className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all ${
                activeWeek === w.week
                  ? "bg-sage text-white shadow-md scale-105"
                  : "bg-white border border-mist text-slate hover:border-sage/40 hover:text-ink"
              }`}
            >
              {w.week}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Size card */}
          <div className="bg-sage/5 border border-sage/15 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
            <p className="text-xs text-sage font-semibold mb-2">Week {current.week}</p>
            <h2 className="font-heading text-4xl text-ink font-medium mb-1">{current.size}</h2>
            <p className="text-sm text-slate">About {current.length} long</p>
          </div>

          {/* Description */}
          <div className="lg:col-span-2 bg-white border border-mist rounded-2xl p-8">
            <h3 className="font-heading text-xl font-medium text-ink mb-3">
              {current.week} weeks pregnant
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-6">
              {current.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              {activeWeek > weeklyGuide[0].week && (
                <button
                  onClick={() => {
                    const idx = weeklyGuide.findIndex((w) => w.week === activeWeek);
                    if (idx > 0) setActiveWeek(weeklyGuide[idx - 1].week);
                  }}
                  className="h-10 px-5 border border-mist rounded-lg text-sm font-medium text-slate hover:text-ink hover:border-sage/30 transition-colors"
                >
                  Previous week
                </button>
              )}
              {activeWeek < weeklyGuide[weeklyGuide.length - 1].week && (
                <button
                  onClick={() => {
                    const idx = weeklyGuide.findIndex((w) => w.week === activeWeek);
                    if (idx < weeklyGuide.length - 1) setActiveWeek(weeklyGuide[idx + 1].week);
                  }}
                  className="h-10 px-5 bg-sage hover:bg-sage-dark text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Next week
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
