import Image from "next/image";

export const metadata = {
  title: "Family — Bounty",
  description: "Money, work, childcare, and everyday family life advice for parents.",
};

const topics = [
  { title: "Money and finances", desc: "Budgeting for a growing family, understanding parental benefits, and planning ahead for childcare costs.", icon: "💷" },
  { title: "Work", desc: "Navigating maternity and paternity leave, flexible working requests, and the return to work after having a baby.", icon: "💼" },
  { title: "Childcare", desc: "Comparing nurseries, childminders, and family care, plus what to ask when you're choosing the right fit.", icon: "🧸" },
  { title: "Family dynamics", desc: "Adjusting to life as a bigger family, sibling relationships, and keeping your own relationship strong along the way.", icon: "👨‍👩‍👧" },
  { title: "Family fun and activities", desc: "Low-cost, high-fun ideas for weekends and school holidays, from local playgrounds to rainy-day crafts.", icon: "🎨" },
  { title: "First aid for families", desc: "The basics every parent should know, from treating minor bumps to recognising when to call for help.", icon: "🩹" },
];

export default function FamilyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative h-64 sm:h-80 overflow-hidden mb-12">
        <Image src="/images/community.jpg" alt="Families with parents and children playing together" fill priority className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-linen via-linen/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-5 pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-2">Family life</h1>
          <p className="text-slate text-base max-w-lg">
            Practical support for the everyday realities of raising a family.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-white border border-mist rounded-2xl p-6">
              <span className="text-2xl mb-3 block">{topic.icon}</span>
              <h2 className="font-heading text-base font-medium text-ink mb-2">{topic.title}</h2>
              <p className="text-sm text-slate leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
