import Hero from "@/components/Hero";
import ToolsBar from "@/components/ToolsBar";
import Timeline from "@/components/Timeline";
import JourneyGrid from "@/components/JourneyGrid";
import Articles from "@/components/Articles";
import CtaBanner from "@/components/CtaBanner";
import Community from "@/components/Community";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsBar />
      <Timeline />
      <JourneyGrid />
      <Articles />
      <CtaBanner />
      <Community />
    </>
  );
}
