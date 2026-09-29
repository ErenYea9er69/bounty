export const metadata = { title: "Bounty app | Bounty", description: "Pregnancy and baby support in your pocket." };

const features = [
  ["Ask a Midwife", "Live chat with a qualified midwife."],
  ["Week-by-week updates", "Baby development emails timed to your dates."],
  ["Hospital appointment schedule", "Keep every appointment in one place."],
  ["Baby growth tracker", "Record weight and length as your baby grows."],
  ["Free vouchers and discounts", "Offers matched to your stage."],
  ["Expert advice", "Guides written and checked by professionals."],
];

export default function AppPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">The Bounty Pregnancy and Baby app</h1>
        <p className="text-slate text-lg mb-8">Personal support from your first scan to your baby's first steps.</p>
        <div className="flex flex-wrap gap-3 mb-12">
          <a href="https://link.bounty.com/WCcV/17vguIq0uK" target="_blank" rel="noopener noreferrer" className="bg-ink text-white px-6 py-3 rounded-full font-medium hover:bg-ink/85 transition-colors">Download on the App Store</a>
          <a href="https://link.bounty.com/WCcV/X6jtgqV0uK" target="_blank" rel="noopener noreferrer" className="bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-dark transition-colors">Get it on Google Play</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(([t, d]) => (
            <div key={t} className="bg-white border border-mist rounded-2xl p-6">
              <h2 className="font-heading text-base text-ink mb-1">{t}</h2>
              <p className="text-sm text-slate">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
