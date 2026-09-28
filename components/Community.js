import Link from "next/link";
import Image from "next/image";

export default function Community() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden h-80 lg:h-[480px]">
            <Image
              src="/images/community.jpg"
              alt="Parents and babies in a community playgroup"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-ink mb-4">
              A community that gets it
            </h2>
            <p className="text-slate text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Since 1959, Bounty has been the go-to resource for parents across the UK. We're a community that understands the late-night feeds, the first-time worries, and the moments of pure joy that make it all worthwhile.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Expert-written guides reviewed by healthcare professionals",
                "Free Bounty packs with samples and offers",
                "Live and on-demand classes with specialists",
                "Personalised pregnancy and baby content",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ink">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-sage shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="inline-flex items-center h-11 px-6 border-2 border-ink/15 text-ink font-semibold rounded-full hover:bg-ink/5 transition-colors text-sm"
            >
              Learn more about Bounty
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
