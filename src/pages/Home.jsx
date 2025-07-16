import { AboutCompany } from "../components/Home/AboutCompany";
import { FAQ } from "../components/Home/FAQ";
import { GainExcellence } from "../components/Home/GainExcellence";
import { Hero } from "../components/Home/HomeHero";
import { HowItWorks } from "../components/Home/HowItWorks";
import { KeyFeature } from "../components/Home/KeyFeature";
import { OurServices } from "../components/Home/OurServices";
import { Testimonial } from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <KeyFeature />
      <HowItWorks />
      <AboutCompany />
      <Testimonial />
      <OurServices />
      <FAQ />
      <GainExcellence />
    </div>
  );
};

export default Home;
