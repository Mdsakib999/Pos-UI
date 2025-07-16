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
    </div>
  );
};
