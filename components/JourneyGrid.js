import Link from "next/link";
import Image from "next/image";

const journeys = [
  {
    title: "Getting Pregnant",
    desc: "Fertility advice, ovulation tracking, and what to expect when you're trying to conceive.",
    href: "/getting-pregnant",
    image: null,
    gradient: "from-[#e8d5ef] to-[#f0e0f6]",
    size: "small",
  },
  {
    title: "Pregnancy & Birth",
    desc: "Week-by-week development, health advice, due date tools, and birth preparation.",
    href: "/pregnancy",
    image: "/images/hero-mother.jpg",
    gradient: null,
    size: "large",
  },
  {
    title: "Baby Names",
    desc: "Thousands of names to explore — trending lists, meanings, and origin filters.",
    href: "/baby-names",
    image: null,
    gradient: "from-[#fde8d0] to-[#fef1e1]",
    size: "small",
  },
  {
    title: "Baby 0–12 months",
    desc: "Milestones, feeding guides, sleep advice, and everything for baby's first year.",
    href: "/baby",
    image: "/images/newborn.jpg",
    gradient: null,
    size: "small",
  },
  {
    title: "Toddler 1–2 years",
    desc: "Developmental leaps, behavioural guidance, and activities for curious minds.",
    href: "/toddler",
    image: null,
    gradient: "from-[#d5e8de] to-[#e4f1e8]",
    size: "small",
  },
  {
    title: "Pre-school 2–4 years",
    desc: "Preparing for school, social skills, independence, and creative play.",
    href: "/preschool",
    image: null,
    gradient: "from-[#d8e4f0] to-[#e8eff8]",
    size: "small",
  },
];

export default function JourneyGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="font-heading text-2xl sm:text-3xl text-ink mb-2">
          Your parenting journey starts here
        </h2>
        <p className="text-slate text-sm mb-10 max-w-lg">
          Wherever you are on the path, we have guides and support ready for you.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {journeys.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className={`relative group block rounded-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.02] ${
                item.size === "large" ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              {/* Image or gradient */}
              <div
                className={`relative overflow-hidden ${
                  item.size === "large" ? "h-64 lg:h-full lg:min-h-[380px]" : "h-40"
                } ${
                  item.gradient
                    ? `bg-gradient-to-br ${item.gradient}`
                    : "bg-mist"
                }`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                )}
                {/* Overlay for text legibility on images */}
                {item.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                )}
              </div>
              {/* Body */}
              <div
                className={`p-5 ${
                  item.image
                    ? "absolute bottom-0 left-0 right-0 text-white"
                    : "bg-white border border-mist/80 border-t-0 rounded-b-2xl"
                }`}
                style={item.image ? { position: "absolute" } : {}}
              >
                <h3
                  className={`font-heading text-lg font-medium mb-1 ${
                    item.image ? "text-white" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.image ? "text-white/80" : "text-slate"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
