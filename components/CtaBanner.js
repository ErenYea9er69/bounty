import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="bg-sage rounded-3xl overflow-hidden">
          <div className="px-8 py-14 sm:px-14 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1">
              <h2 className="font-heading text-2xl sm:text-3xl text-white font-medium mb-3">
                Join Bounty — it's free
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mb-6">
                Get personalised pregnancy updates, exclusive offers, samples, and access to expert-led classes. Over 3 million parents already trust Bounty.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center h-12 px-8 bg-white text-sage font-semibold rounded-full hover:bg-linen transition-colors text-sm"
                >
                  Create your free account
                </Link>
                <span className="text-xs text-white/60">No credit card required</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-10 shrink-0">
              {[
                { value: "3M+", label: "Downloads" },
                { value: "38K+", label: "Reviews" },
                { value: "4.5★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl sm:text-3xl text-white font-medium">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
