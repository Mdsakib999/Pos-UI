import PriceCard from "../components/PriceCard";
import { plans } from "../utils/PricePlan";

const Pricing = () => {
  return (
    <div className="my-10 font-serif">
      <h1 className="text-center text-xl sm:text-3xl font-bold">
        Choose Your <span className="text-orange-600">Perfect Plan</span>
      </h1>
      <p className="text-center max-w-md mx-auto mt-5">
        Streamline your business operations with our powerful POS software. From
        small cafes to large retail chains, we've got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-16">
        {plans.map((offer, index) => (
          <PriceCard
            title={offer.planName}
            paragraph={offer.description}
            price={offer.price}
            features={offer.features}
            cardColor={offer.cardColor}
            buttonColor={offer.buttonColor}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
