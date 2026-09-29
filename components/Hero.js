import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mother.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Gradient overlay — linen from left covering the text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/95 to-linen/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-linen/60 via-transparent to-linen/30 md:hidden" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 pt-24 pb-16 w-full">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-ink leading-[1.15] mb-5">
            Plan your pregnancy and raise your child
          </h1>
          <p className="text-slate text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Start by tracking your ovulation cycle. Once pregnant, follow fetal development week by week through detailed medical updates; we explain exactly what happens inside your body. Get immediate answers on infant sleep routines or toddler feeding schedules.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/due-date"
              className="inline-flex items-center h-12 px-7 bg-sage hover:bg-sage-dark text-white font-semibold rounded-full transition-colors text-sm"
            >
              Calculate your due date
            </Link>
            <Link
              href="/pregnancy"
              className="inline-flex items-center h-12 px-7 border-2 border-ink/15 text-ink font-semibold rounded-full hover:bg-ink/5 transition-colors text-sm"
            >
              Explore week by week
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
