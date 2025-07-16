import { FaArrowRight } from "react-icons/fa";

export const GainExcellence = () => {
  return (
    <div className="relative bg-black text-white rounded-2xl overflow-hidden px-4 py-20 md:py-32 max-w-6xl mx-auto my-10">
      {/* Content */}
      <div className="max-w-3xl mx-auto text-center z-10 relative">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug md:leading-tight">
          Gain Excellence with the Best <br className="hidden md:block" /> POS
          Solutions
        </h1>
        <p className="text-sm md:text-base text-gray-300 mt-6 mb-10 px-4">
          Provide an unforgettable customer experience with fast ordering,{" "}
          <br className="hidden sm:block" />
          convenient payments, and better service.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-3 mx-auto transition">
          <span className="font-medium">Try for free</span>
          <div className="bg-white text-orange-500 rounded-full p-2 text-sm">
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};
