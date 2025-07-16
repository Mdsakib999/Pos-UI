import { AboutCompany } from "../components/Home/AboutCompany";
import { GainExcellence } from "../components/Home/GainExcellence";
import { HowItWorks } from "../components/Home/HowItWorks";
import { KeyFeature } from "../components/Home/KeyFeature";
import { OurServices } from "../components/Home/OurServices";
import { Testomonial } from "../components/Home/Testomonial";

const Home = () => {
  return (
    <div>
      <KeyFeature />
      <HowItWorks />
      <AboutCompany />
      <Testomonial />
      <OurServices />
      <GainExcellence />
    </div>
  );
};

export default Home;
