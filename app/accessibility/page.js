export const metadata = { title: "Accessibility — Bounty" };

export default function AccessibilityPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5">
        <h1 className="font-heading text-3xl text-ink mb-6">Accessibility</h1>
        <div className="space-y-5 text-slate leading-relaxed text-sm">
          <p>This redesign was built with accessibility as a starting point, not an afterthought. It includes a visible skip link, keyboard-focusable navigation, semantic landmarks, sufficient colour contrast, and respect for reduced-motion preferences.</p>
          <p>All interactive elements are reachable and operable by keyboard, and images include descriptive or empty alt text depending on whether they carry meaning.</p>
          <p>If you find anything on this site that is difficult to use, please get in touch through the contact page.</p>
        </div>
      </div>
    </div>
  );
}
