"use client";

import { useState } from "react";
import Link from "next/link";

const weekData = {
  4: { title: "4 weeks pregnant", desc: "Your embryo is the size of a poppy seed. The neural tube, which becomes the brain and spinal cord, is starting to form." },
  8: { title: "8 weeks pregnant", desc: "Your baby is now about the size of a raspberry. Tiny fingers and toes are forming, and the heart is beating strongly." },
  12: { title: "12 weeks pregnant", desc: "Your baby is the size of a lime. All essential organs are in place, and reflexes are beginning to develop." },
  16: { title: "16 weeks pregnant", desc: "About the size of an avocado. You might start feeling the first flutters of movement — called quickening." },
  20: { title: "20 weeks pregnant", desc: "Halfway there! Your baby is the size of a banana and may respond to sounds. The mid-pregnancy scan usually happens around now." },
  24: { title: "24 weeks pregnant", desc: "Your baby is the size of an ear of corn. The lungs are developing and they can now hear your voice clearly." },
  28: { title: "28 weeks pregnant", desc: "The size of an aubergine. Your baby can open and close their eyes, and the brain is developing rapidly." },
  32: { title: "32 weeks pregnant", desc: "About the size of a squash. Your baby is practising breathing movements and gaining weight steadily." },
  36: { title: "36 weeks pregnant", desc: "The size of a papaya. Your baby is nearly full-term and may have moved into the head-down position." },
  40: { title: "40 weeks pregnant", desc: "Full term! Your baby is the size of a watermelon and ready to meet you. Labour could begin any day now." },
};

const milestones = [10, 20, 30, 40];

export default function Timeline() {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClick = (week) => {
    setSelectedWeek(selectedWeek === week ? null : week);
  };

  const getInfo = (week) => {
    const nearest = Object.keys(weekData)
      .map(Number)
      .reduce((prev, curr) => (Math.abs(curr - week) < Math.abs(prev - week) ? curr : prev));
    return { ...weekData[nearest], title: `${week} weeks pregnant` };
  };

  return (
    <section className="py-20 bg-mist/40">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="font-heading text-2xl sm:text-3xl text-ink mb-2">
          Follow your pregnancy, week by week
        </h2>
        <p className="text-slate text-sm mb-10 max-w-lg">
          Select a week to see what's happening with you and your baby.
        </p>

        {/* Track */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate mb-3 tracking-wide">
            Pregnancy by week
          </h3>
          <div className="flex items-center gap-1 overflow-x-auto pb-3 scrollbar-hide">
            {Array.from({ length: 40 }, (_, i) => i + 1).map((week) => {
              const isMilestone = milestones.includes(week);
              const isSelected = selectedWeek === week;
              return (
                <button
                  key={week}
                  onClick={() => handleClick(week)}
                  className={`shrink-0 rounded-full transition-all duration-200 flex items-center justify-center font-medium ${
                    isMilestone
                      ? `w-9 h-9 text-xs border-2 ${
                          isSelected
                            ? "bg-blue border-blue text-white"
                            : "border-blue/40 text-blue hover:border-blue hover:bg-blue/10"
                        }`
                      : `w-3 h-3 ${
                          isSelected
                            ? "bg-blue scale-150"
                            : "bg-blue/25 hover:bg-blue/50"
                        }`
                  }`}
                  aria-label={`Week ${week}`}
                  title={`Week ${week}`}
                >
                  {isMilestone ? week : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Baby & Toddler tracks (simpler) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xs font-semibold text-slate mb-3 tracking-wide">Baby by month</h3>
            <div className="flex items-center gap-2">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((m) => (
                <Link
                  key={m}
                  href={`/baby#month-${m}`}
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                    [4, 8, 12].includes(m)
                      ? "border-2 border-peach/40 text-peach hover:bg-peach/10 hover:border-peach"
                      : "bg-peach/15 text-peach/70 hover:bg-peach/30"
                  }`}
                >
                  {[4, 8, 12].includes(m) ? m : ""}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate mb-3 tracking-wide">Toddler by month</h3>
            <div className="flex items-center gap-2">
              {[12,15,18,21,24].map((m) => (
                <Link
                  key={m}
                  href={`/toddler#month-${m}`}
                  className="w-9 h-9 shrink-0 rounded-full border-2 border-blue/30 flex items-center justify-center text-xs font-medium text-blue hover:bg-blue/10 hover:border-blue transition-colors"
                >
                  {m}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        {selectedWeek && (
          <div className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 shadow-sm border border-mist">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-blue/10 flex items-center justify-center">
              <span className="text-lg font-heading font-semibold text-blue">{selectedWeek}</span>
            </div>
            <div>
              <h4 className="font-heading text-lg font-medium text-ink mb-1">
                {getInfo(selectedWeek).title}
              </h4>
              <p className="text-sm text-slate leading-relaxed mb-3 max-w-lg">
                {getInfo(selectedWeek).desc}
              </p>
              <Link
                href={`/pregnancy#week-${selectedWeek}`}
                className="text-sm font-semibold text-blue hover:text-blue-dark transition-colors"
              >
                Read the full guide
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
