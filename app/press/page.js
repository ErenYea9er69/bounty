import Link from "next/link";

export const metadata = { title: "Press office | Bounty", description: "Media enquiries and background on Bounty." };

export default function PressPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-4">Press office</h1>
        <p className="text-slate text-lg mb-8">Bounty began in 1959 and supports parents from pregnancy through the early years.</p>
        <section className="bg-white border border-mist rounded-2xl p-6 mb-6">
          <h2 className="font-heading text-lg text-ink mb-2">Media enquiries</h2>
          <p className="text-sm text-slate mb-4">Send interview requests, expert comment requests and story ideas through our contact form. Mark your message "Press".</p>
          <Link href="/contact" className="inline-block bg-sage text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sage-dark transition-colors">Contact the team</Link>
        </section>
        <section className="bg-white border border-mist rounded-2xl p-6">
          <h2 className="font-heading text-lg text-ink mb-2">Topics we cover</h2>
          <p className="text-sm text-slate">Pregnancy, baby names, early years development, family health and money.</p>
        </section>
      </div>
    </div>
  );
}
