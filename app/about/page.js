export const metadata = {
  title: "About Bounty",
  description: "Bounty's story and how we support parents at every stage.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-6">About Bounty</h1>
        <div className="space-y-5 text-slate leading-relaxed">
          <p>
            Bounty has supported parents through pregnancy and the early years of parenthood since 1959. What started as a simple welcome pack for new mothers has grown into a trusted source of advice, tools, and community for millions of families.
          </p>
          <p>
            Our aim has always stayed the same: to be there with practical, reassuring guidance at every stage, from the moment you start trying to conceive through to the whirlwind of the toddler years and beyond.
          </p>
          <p>
            Everything on Bounty is written to be genuinely useful, not just to fill a page. We believe good information should feel like a conversation with someone who has been there, not a lecture.
          </p>
          <p>
            This site is a redesigned, modern rebuild of Bounty.com, created as a design and development exercise. It preserves the spirit and core tools of the original while rethinking the visual design, navigation, and user experience from the ground up.
          </p>
        </div>
      </div>
    </div>
  );
}
