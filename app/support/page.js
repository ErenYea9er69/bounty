import Link from "next/link";

export const metadata = {
  title: "Miscarriage and baby loss support — Bounty",
  description: "Gentle information and trusted charities for anyone affected by miscarriage or baby loss.",
};

const orgs = [
  { name: "The Miscarriage Association", url: "https://www.miscarriageassociation.org.uk", desc: "Information and a support line for anyone affected by miscarriage, ectopic or molar pregnancy." },
  { name: "Sands", url: "https://www.sands.org.uk", desc: "Support for anyone affected by the death of a baby, before or after birth." },
  { name: "Tommy's", url: "https://www.tommys.org", desc: "Research-led pregnancy and baby loss information, including midwife support." },
];

export default function SupportPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-4">Miscarriage and baby loss</h1>
        <p className="text-slate text-lg mb-8">
          Losing a baby is painful, whatever the stage. There is no right way to feel and no timetable for grief. You did not cause this.
        </p>

        <section className="bg-peach-light border border-peach/30 rounded-2xl p-6 mb-10" aria-labelledby="urgent">
          <h2 id="urgent" className="font-heading text-lg text-ink mb-2">When to get medical help now</h2>
          <p className="text-sm text-ink">
            Call NHS 111 or your maternity unit if you have heavy bleeding, severe pain, dizziness or fever. Call 999 if you feel faint or very unwell.
          </p>
        </section>

        <h2 className="font-heading text-2xl text-ink mb-4">Where to find support</h2>
        <ul className="space-y-4 mb-10">
          {orgs.map((o) => (
            <li key={o.name} className="bg-white border border-mist rounded-2xl p-6">
              <a href={o.url} target="_blank" rel="noopener noreferrer" className="font-heading text-lg text-blue-dark hover:underline">
                {o.name}
              </a>
              <p className="text-sm text-slate mt-1">{o.desc}</p>
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate">
          Your GP or midwife can also refer you for counselling. Want to talk to someone who listens? <Link href="/contact" className="underline text-ink">Contact us</Link>.
        </p>
      </div>
    </div>
  );
}
