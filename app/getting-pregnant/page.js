"use client";

import { useState } from "react";

const topics = [
  { title: "Before you begin", anchor: "before", icon: "💊" },
  { title: "Am I pregnant?", anchor: "signs", icon: "🤔" },
  { title: "Early signs of pregnancy", anchor: "signs", icon: "✨" },
  { title: "Ovulation and fertility windows", anchor: "ovulation", icon: "📅" },
  { title: "Implantation bleeding", anchor: "fertility", icon: "🩸" },
  { title: "Fertility and assisted pregnancy", anchor: "fertility", icon: "🏥" },
];

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(date) {
  return date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
}

export default function GettingPregnantPage() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    if (!lastPeriod) return;
    const lmp = new Date(lastPeriod);
    const ovulationDay = addDays(lmp, cycleLength - 14);
    const fertileStart = addDays(ovulationDay, -5);
    const fertileEnd = addDays(ovulationDay, 1);
    const nextPeriod = addDays(lmp, cycleLength);

    setResult({
      ovulationDay: formatDate(ovulationDay),
      fertileStart: formatDate(fertileStart),
      fertileEnd: formatDate(fertileEnd),
      nextPeriod: formatDate(nextPeriod),
    });
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-5 mb-16">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">
          Getting pregnant
        </h1>
        <p className="text-slate text-base max-w-lg mb-10">
          Whether you're just starting to think about it or you've been trying for a while, we're here with practical advice and support.
        </p>

        {/* Topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <a
              key={topic.title}
              href={`#${topic.anchor}`}
              className="group block bg-white border border-mist rounded-2xl p-6 hover:border-sage/30 hover:shadow-sm transition-all"
            >
              <span className="text-2xl mb-3 block">{topic.icon}</span>
              <h3 className="font-heading text-base font-medium text-ink mb-2 group-hover:text-sage transition-colors">
                {topic.title}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* Ovulation calculator */}
      <div id="ovulation" className="max-w-5xl mx-auto px-5 mb-16 scroll-mt-24">
        <div className="bg-peach-light border border-peach/20 rounded-3xl p-8 sm:p-12">
          <h2 className="font-heading text-xl sm:text-2xl text-ink mb-2">
            Ovulation calculator
          </h2>
          <p className="text-sm text-slate leading-relaxed max-w-md mb-8">
            Work out your most fertile days to give yourself the best chance of getting pregnant.
          </p>

          <form onSubmit={calculate} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label htmlFor="lmp2" className="block text-sm font-medium text-ink mb-2">
                First day of your last period
              </label>
              <input
                type="date"
                id="lmp2"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="w-full h-12 px-4 border-2 border-white bg-white rounded-xl text-ink text-sm focus:border-peach focus:outline-none transition-colors"
                required
              />
            </div>
            <div className="sm:w-48">
              <label htmlFor="cycle" className="block text-sm font-medium text-ink mb-2">
                Average cycle length
              </label>
              <select
                id="cycle"
                value={cycleLength}
                onChange={(e) => setCycleLength(Number(e.target.value))}
                className="w-full h-12 px-4 border-2 border-white bg-white rounded-xl text-ink text-sm focus:border-peach focus:outline-none transition-colors"
              >
                {Array.from({ length: 15 }, (_, i) => i + 21).map((n) => (
                  <option key={n} value={n}>{n} days</option>
                ))}
              </select>
            </div>
            <div className="sm:self-end">
              <button
                type="submit"
                className="w-full sm:w-auto h-12 px-8 bg-peach hover:bg-peach-dark text-white font-semibold rounded-xl transition-colors text-sm"
              >
                Calculate
              </button>
            </div>
          </form>

          {result && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5">
                <div className="text-xs text-slate mb-1">Most fertile window</div>
                <div className="text-sm font-semibold text-ink">{result.fertileStart} – {result.fertileEnd}</div>
              </div>
              <div className="bg-white rounded-xl p-5">
                <div className="text-xs text-slate mb-1">Estimated ovulation day</div>
                <div className="text-sm font-semibold text-ink">{result.ovulationDay}</div>
              </div>
              <div className="bg-white rounded-xl p-5">
                <div className="text-xs text-slate mb-1">Next period expected</div>
                <div className="text-sm font-semibold text-ink">{result.nextPeriod}</div>
              </div>
            </div>
          )}
          <p className="text-xs text-slate/70 mt-6 leading-relaxed">
            This tool gives an estimate based on average cycle timing. Real cycles vary, so use it as a guide alongside other fertility signs, not a guarantee.
          </p>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-3xl mx-auto px-5 space-y-16">
        <section id="before" className="scroll-mt-24">
          <h2 className="font-heading text-2xl text-ink mb-4">Before you begin</h2>
          <p className="text-slate leading-relaxed mb-4">
            A few simple steps before you start trying can make a real difference. Most doctors recommend starting a daily folic acid supplement at least a month before you conceive, since it helps reduce the risk of certain birth defects in early pregnancy.
          </p>
          <p className="text-slate leading-relaxed">
            It is also worth booking a general check-up, reviewing any medications with your doctor, and thinking about lifestyle habits like smoking, alcohol, and caffeine. Small changes now tend to be easier than big changes later.
          </p>
        </section>

        <section id="signs" className="scroll-mt-24">
          <h2 className="font-heading text-2xl text-ink mb-4">Am I pregnant?</h2>
          <p className="text-slate leading-relaxed mb-4">
            A missed period is usually the first clue, but early pregnancy can also bring tiredness, tender breasts, mild cramping, and a heightened sense of smell. None of these are certain on their own.
          </p>
          <p className="text-slate leading-relaxed">
            A home pregnancy test is the most reliable next step, ideally taken from the first day of a missed period for the most accurate result. If it is positive, book an appointment with your doctor or midwife to confirm and plan your first booking appointment.
          </p>
        </section>

        <section id="fertility" className="scroll-mt-24">
          <h2 className="font-heading text-2xl text-ink mb-4">Fertility support</h2>
          <p className="text-slate leading-relaxed mb-4">
            Implantation bleeding is light spotting that can happen around 10 to 14 days after conception, as the fertilised egg attaches to the uterine lining. It is usually much lighter and shorter than a period, but if you are ever unsure, a test or a chat with your doctor can put your mind at ease.
          </p>
          <p className="text-slate leading-relaxed">
            If you have been trying for a baby for over a year without success, or over six months if you are 36 or older, it is worth speaking to your doctor about a fertility assessment. Support ranges from simple lifestyle guidance through to assisted conception options, and reaching out early gives you more time to explore what is right for you.
          </p>
        </section>
      </div>
    </div>
  );
}
