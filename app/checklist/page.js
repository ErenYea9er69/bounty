import ChecklistTool from "@/components/ChecklistTool";

export const metadata = {
  title: "Hospital bag and baby essentials checklist — Bounty",
  description: "Tick off what you have packed. Your progress saves on this device.",
};

export default function ChecklistPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3">Checklists</h1>
        <p className="text-slate mb-8">Tick items as you go. Your progress saves on this device only.</p>
        <ChecklistTool />
      </div>
    </div>
  );
}
