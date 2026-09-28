import Image from "next/image";

export const metadata = {
  title: "Pre-school, 2 to 4 years — Bounty",
  description: "Development, behaviour, and starting school guidance for your pre-schooler.",
};

const topics = [
  {
    title: "Development",
    desc: "Language explodes, questions never stop, and your pre-schooler is building the social and thinking skills they'll carry into school.",
    icon: "🧩",
  },
  {
    title: "Health and care",
    desc: "Routine check-ups, immunisation schedules, and how to handle the everyday coughs, colds, and scrapes of pre-school life.",
    icon: "🩺",
  },
  {
    title: "Behaviour",
    desc: "Testing boundaries is part of growing independence. Consistent, calm responses help your child feel secure while they learn where the lines are.",
    icon: "💬",
  },
  {
    title: "Diet and nutrition",
    desc: "Fussy eating peaks around this age. Small portions, regular meal times, and low-pressure exposure to new foods tend to work better than persuasion.",
    icon: "🥦",
  },
  {
    title: "Starting school or nursery",
    desc: "Practical tips for settling in, from practising the school run to talking through what a normal day will look like.",
    icon: "🎒",
  },
];

export default function PreschoolPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative h-64 sm:h-80 overflow-hidden mb-12">
        <Image src="/images/community.jpg" alt="" fill priority className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-linen via-linen/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-5 pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-2">Pre-school, 2 to 4 years</h1>
          <p className="text-slate text-base max-w-lg">
            Tips, milestones, and support as your little one grows into a confident pre-schooler.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white border border-mist rounded-2xl p-6"
            >
              <span className="text-2xl mb-3 block">{topic.icon}</span>
              <h2 className="font-heading text-lg font-medium text-ink mb-2">
                {topic.title}
              </h2>
              <p className="text-sm text-slate leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
