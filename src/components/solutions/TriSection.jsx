const TriSection = () => {
  return (
    <div className="mt-10 space-y-16 px-4">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center md:gap-10 gap-6">
        <div className="flex-1">
          <p className="font-serif inline-block border-b-2 border-orange-600 text-orange-600 text-sm sm:text-base mb-3">
            Appointments
          </p>
          <h1 className="text-2xl sm:text-5xl font-bold leading-tight mb-3 max-w-xl">
            Manage your appointments effortlessly
          </h1>
          <p className="text-sm sm:text-base max-w-md">
            Create your services catalog and make online scheduling faster and
            easier than ever.
          </p>
        </div>
        <div className="flex-1">
          <img src="/assets/p1.png" alt="" className="w-full object-contain" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center md:gap-10 gap-6">
        <div className="flex-1 order-2 md:order-1">
          <img src="/assets/p2.png" alt="" className="w-full object-contain" />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <p className="font-serif inline-block border-b-2 border-orange-600 text-orange-600 text-sm sm:text-base mb-3">
            PAYMENTS
          </p>
          <h1 className="text-2xl sm:text-5xl font-bold leading-tight mb-3 max-w-xl">
            Flexible ways to get paid the way your business needs
          </h1>
          <p className="text-sm sm:text-base max-w-md">
            Take online and in-person payments, recurring payments, gift cards,
            and more. With so many ways to get paid, it’s easy to run your
            business your way.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center md:gap-10 gap-6">
        <div className="flex-1">
          <p className="font-serif inline-block border-b-2 border-orange-600 text-orange-600 text-sm sm:text-base mb-3">
            Flexibility
          </p>
          <h1 className="text-2xl sm:text-5xl font-bold leading-tight mb-3 max-w-xl">
            Accept payments anywhere with ultimate flexibility
          </h1>
          <p className="text-sm sm:text-base max-w-md">
            Take Tap-to-Pay payments on your iPhone with the Clover Go app—plus
            chip, dip, and contactless payments with the Go card reader.
          </p>
        </div>
        <div className="flex-1">
          <img src="/assets/p3.png" alt="" className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default TriSection;
