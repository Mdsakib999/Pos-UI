import { TiTick } from "react-icons/ti";

const PriceCard = ({
  title,
  paragraph,
  price,
  features,
  cardColor,
  buttonColor,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl 
      ${cardColor} font-serif 
      p-6 sm:p-8 md:p-10 
      min-h-[500px] w-full max-w-xs sm:max-w-md mx-auto mb-16`}
    >
      {/* Card Content */}
      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">{title}</h1>
        <p className="text-center text-sm sm:text-base">{paragraph}</p>
        <p className="text-xl sm:text-2xl font-bold text-center my-6">
          $<span className="font-sans">{price}</span>/month
        </p>
        <div className="space-y-2">
          {features.map((offer, index) => (
            <p
              key={index}
              className="flex items-start gap-x-2 text-sm sm:text-base"
            >
              <TiTick size={20} className="flex-shrink-0 mt-1" />
              <span>{offer}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Button at bottom */}
      <button
        className={`${buttonColor} w-full mt-8 hover:bg-white 
        duration-300 cursor-pointer px-5 py-3 rounded-full text-sm sm:text-base`}
      >
        Get started Now
      </button>
    </div>
  );
};

export default PriceCard;
