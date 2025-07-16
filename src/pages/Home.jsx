import { AboutCompany } from "../components/Home/AboutCompany";
import { FAQ } from "../components/Home/FAQ";
import { GainExcellence } from "../components/Home/GainExcellence";
import { Hero } from "../components/Home/HomeHero";
import { HowItWorks } from "../components/Home/HowItWorks";
import { KeyFeature } from "../components/Home/KeyFeature";
import { OurServices } from "../components/Home/OurServices";
import { Testomonial } from "../components/Home/Testomonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <KeyFeature />
      <HowItWorks />
      <AboutCompany />
      <Testomonial />
      <OurServices />
      <FAQ />
      <GainExcellence />
    </div>
  );
};

export default Home;
