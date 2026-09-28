"use client";

import { useState } from "react";



export default function DueDatePage() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    if (!lastPeriod) return;
    const lmp = new Date(lastPeriod);
    const due = new Date(lmp);
    due.setDate(due.getDate() + 280); // 40 weeks

    const today = new Date();
    const diffMs = today - lmp;
    const diffWeeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
    const diffDays = Math.floor((diffMs / (1000 * 60 * 60 * 24)) % 7);
    const trimester = diffWeeks < 13 ? 1 : diffWeeks < 27 ? 2 : 3;

    const daysLeft = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

    setResult({
      dueDate: due.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
      weeks: Math.max(0, diffWeeks),
      days: Math.max(0, diffDays),
      trimester,
      daysLeft: Math.max(0, daysLeft),
      progress: Math.min(100, Math.max(0, ((280 - daysLeft) / 280) * 100)),
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">
          Due date calculator
        </h1>
        <p className="text-slate text-base mb-10 max-w-lg">
          Enter the first day of your last menstrual period to find your estimated due date and how far along you are.
        </p>

        {/* Form */}
        <form onSubmit={calculate} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="lmp" className="block text-sm font-medium text-ink mb-2">
                First day of your last period
              </label>
              <input
                type="date"
                id="lmp"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
                className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-ink text-sm focus:border-sage focus:outline-none transition-colors"
                required
              />
            </div>
            <div className="sm:self-end">
              <button
                type="submit"
                className="w-full sm:w-auto h-12 px-8 bg-sage hover:bg-sage-dark text-white font-semibold rounded-xl transition-colors text-sm"
              >
                Calculate
              </button>
            </div>
          </div>
        </form>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {/* Main result */}
            <div className="bg-sage/5 border border-sage/15 rounded-2xl p-8">
              <p className="text-sm text-sage font-semibold mb-1">Your estimated due date</p>
              <h2 className="font-heading text-2xl sm:text-3xl text-ink font-medium mb-6">
                {result.dueDate}
              </h2>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-slate mb-2">
                  <span>Conception</span>
                  <span>Due date</span>
                </div>
                <div className="h-3 bg-sage/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sage rounded-full transition-all duration-700"
                    style={{ width: `${result.progress}%` }}
                  />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: `${result.weeks}w ${result.days}d`, label: "Current stage" },
                  { value: `Trimester ${result.trimester}`, label: "Phase" },
                  { value: `${result.daysLeft}`, label: "Days to go" },
                  { value: `${Math.round(result.progress)}%`, label: "Complete" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center">
                    <div className="font-heading text-lg font-medium text-ink">{stat.value}</div>
                    <div className="text-xs text-slate mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="bg-peach-light border border-peach/20 rounded-2xl p-6">
              <h3 className="font-heading text-lg font-medium text-ink mb-2">How is this calculated?</h3>
              <p className="text-sm text-slate leading-relaxed">
                This calculator uses Naegele's rule: your due date is 280 days (40 weeks) from the first day of your last menstrual period. Remember, only about 5% of babies arrive on their exact due date. Most are born within a two-week window either side. Always confirm with your midwife or doctor.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
