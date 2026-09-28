import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Getting Pregnant — Bounty",
  description: "Everything you need to know about trying to conceive, from ovulation tracking to fertility support.",
};

const topics = [
  {
    title: "Before you begin",
    desc: "Steps you can take to prepare your body and mind for pregnancy — from folic acid to lifestyle changes.",
    icon: "💊",
  },
  {
    title: "Am I pregnant?",
    desc: "The earliest signs to look for, when to take a test, and what to do when you see those two lines.",
    icon: "🤔",
  },
  {
    title: "Early signs of pregnancy",
    desc: "From missed periods to morning sickness — a guide to the common symptoms that something wonderful might be happening.",
    icon: "✨",
  },
  {
    title: "Ovulation and fertility windows",
    desc: "Understanding your cycle, tracking ovulation, and timing intercourse for the best chance of conception.",
    icon: "📅",
  },
  {
    title: "Implantation bleeding",
    desc: "What it looks like, when it happens, and how to tell it apart from a regular period.",
    icon: "🩸",
  },
  {
    title: "Fertility and assisted pregnancy",
    desc: "When to seek help, what your options are, and navigating the emotional journey of fertility treatment.",
    icon: "🏥",
  },
];

export default function GettingPregnantPage() {
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
            <Link
              key={topic.title}
              href="#"
              className="group block bg-white border border-mist rounded-2xl p-6 hover:border-sage/30 hover:shadow-sm transition-all"
            >
              <span className="text-2xl mb-3 block">{topic.icon}</span>
              <h3 className="font-heading text-base font-medium text-ink mb-2 group-hover:text-sage transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed">{topic.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Ovulation calculator teaser */}
      <div className="max-w-5xl mx-auto px-5">
        <div className="bg-peach-light border border-peach/20 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h2 className="font-heading text-xl sm:text-2xl text-ink mb-2">
              Ovulation calculator
            </h2>
            <p className="text-sm text-slate leading-relaxed max-w-md">
              Work out your most fertile days to give yourself the best chance of getting pregnant.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center h-11 px-6 bg-peach hover:bg-peach-dark text-white font-semibold rounded-full transition-colors text-sm shrink-0"
          >
            Try the calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
