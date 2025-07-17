import { FaRegNewspaper } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const NewsLetter = () => {
  return (
    <div className="bg-[#FFEDE6] flex flex-col justify-center items-center mt-20 px-4 py-10 space-y-5 my-10">
      <FaRegNewspaper size={32} color="orange" />
      <h1 className="text-2xl sm:text-3xl text-center font-semibold">
        Subscribe to Our Newsletter
      </h1>
      <p className="font-mono font-bold text-center text-sm sm:text-base">
        DELIVERED TO YOUR INBOX MONTHLY
      </p>
      <p className="font-mono font-extrabold text-center text-base sm:text-xl">
        YOUR EMAIL
      </p>
      <div className="w-full max-w-md space-y-3">
        <div className="relative w-full">
          <CiMail
            size={20}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-orange-600"
          />
          <input
            className="w-full text-gray-800 bg-white rounded-md py-2.5 pl-12 pr-5  focus:border-2 focus:border-orange-600 outline-none"
            placeholder="Enter your email"
          />
        </div>
        <button className="cursor-pointer w-full border rounded-md bg-black text-white py-2.5 hover:bg-white hover:text-black transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
