import img1 from "/assets/about1.png";
import img2 from "/assets/about2.png";
export const AboutCompany = () => {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center my-10">
      {/* text area */}
      <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
        <p className="text-xs sm:text-sm text-orange-500 uppercase tracking-wide">
          About Compnay
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ">
          Innovating <br className="hidden sm:block" />
          Business Solutions
        </h2>
        <div className="px-3 text-left flex flex-col gap-3">
          <p className="text-sm">
            <span className="font-semibold text-orange-500">
              SM IT Solution
            </span>{" "}
            is a Bangladeshi tech company creating smart, user-friendly software
            for modern businesses.{" "}
          </p>
          <p className="text-sm">
            Our POS system helps streamline billing, inventory, and customer
            management, empowering retailers and entrepreneurs to grow with
            confidence. We’re committed to delivering reliable solutions backed
            by excellent support — driving business success through innovation.
          </p>
        </div>
      </div>

      {/* image */}
      <div className="relative w-fit mx-auto md:bottom-8 lg:bottom-0 right-10 md:right-0">
        <div className="w-64 h-72 md:w-64 md:h-80 lg:w-80 lg:h-[20rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={img1}
            alt="Noodles Dish"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-[-2rem] right-[-4rem] md:bottom-[-4rem] md:right-[-6rem] lg:bottom-[8rem] lg:right-[-7rem] w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-md">
          <img
            src={img2}
            alt="Fried Chicken"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
