const TriSection = () => {
  const sections = [
    {
      title: "Appointments",
      heading: "Manage your appointments effortlessly",
      description:
        "Create your services catalog and make online scheduling faster and easier than ever.",
      image: "/assets/p1.png",
    },
    {
      title: "PAYMENTS",
      heading: "Flexible ways to get paid the way your business needs",
      description:
        "Take online and in-person payments, recurring payments, gift cards, and more. With so many ways to get paid, it’s easy to run your business your way.",
      image: "/assets/p2.png",
    },
    {
      title: "Flexibility",
      heading: "Accept payments anywhere with ultimate flexibility",
      description:
        "Take Tap-to-Pay payments on your iPhone with the Clover Go app—plus chip, dip, and contactless payments with the Go card reader.",
      image: "/assets/p3.png",
    },
  ];

  return (
    <div className="mt-32 space-y-16 px-4">
      {sections.map((section, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center md:gap-10 gap-6 ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1">
            <p className="font-serif inline-block text-orange-600 text-sm sm:text-base mb-3">
              {section.title}
            </p>
            <h1 className="text-2xl sm:text-5xl font-bold leading-tight mb-3 max-w-xl">
              {section.heading}
            </h1>
            <p className="text-sm sm:text-base max-w-md">
              {section.description}
            </p>
          </div>
          <div className="flex-1">
            <img src={section.image} alt="" className="w-full object-cver" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TriSection;
