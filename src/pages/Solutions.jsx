import NewsLetter from "../components/Solution/NewsLetter";
import TriSection from "../components/Solution/TriSection";
import FlowchartDesign from "../components/Solution/FlowChartDesign";
import { SolutionHero } from "../components/Solution/SolutionHero";
import { SwitchToBest } from "../components/Solution/SwitchToBest";
import { SystemExplanation } from "../components/Solution/SystemExplanation";

export const Solutions = () => {
  return (
    <div>
      <SolutionHero />
      <SwitchToBest />
      <div className="hidden lg:block">
        <FlowchartDesign />
      </div>
      <SystemExplanation />
      <TriSection />
      <NewsLetter />
    </div>
  );
};
