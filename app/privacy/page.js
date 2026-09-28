export const metadata = { title: "Privacy Policy — Bounty" };

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5">
        <h1 className="font-heading text-3xl text-ink mb-6">Privacy policy</h1>
        <div className="space-y-5 text-slate leading-relaxed text-sm">
          <p>This is a placeholder privacy policy for this demo redesign of Bounty.com. A production version of this site would explain, in plain language, exactly what personal data is collected, why, and how it is stored and protected.</p>
          <p>In general, a service like this would collect account details you provide directly, such as your name, email, and due date, along with basic usage data to improve the site.</p>
          <p>You would always have the right to see what data is held about you, correct it, or ask for it to be deleted. Any real deployment of this site should replace this page with a policy reviewed by a qualified professional.</p>
        </div>
      </div>
    </div>
  );
}
