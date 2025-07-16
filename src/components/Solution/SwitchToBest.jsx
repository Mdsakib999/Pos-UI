import cafePosimg from "/assets/cafe-pos.jpg";
export const SwitchToBest = () => {
  const cardItems = [
    {
      id: 1,
      title: "+30%",
      subtitle: "Service Speed",
      body: "Thanks to the automated order process, the time for receiving and transferring orders to the kitchen has decreased, reducing customer wait times",
    },
    {
      id: 2,
      title: "+15%",
      subtitle: "Staff efficciency",
      body: "with simplified order management, waiters can serve more tables during a shift, increasing their productivity and reducing workload",
    },
    {
      id: 3,
      title: "+30%",
      subtitle: "Customer Satisfaction",
      body: "Improvements in speed and quality of service have led to an increase in overall customer satisfaction, resulting in repeat customers and positive feedback",
    },
  ];

  const infoCardItems = [
    {
      heading: "All-in-one restaurant POS management",
      body: "Rely on Peblla to handle key aspects of your setup. We focus on delivering pos systems for restaurant operations that simplify ordering, payment processing, and loyalty management. This allows you to scale your business without worrying about the complexities of multiple vendors. By choosing Peblla POS solution, you’ll discover why so many consider our solution the best pos system for restaurant efficiency",
    },
    {
      heading: "Customizable POS integration",
      body: "For those who prefer more control, our customizable solution lets you integrate your existing banking or merchant services with our robust pos restaurant systems. This modular design enables you to add features like loyalty programs, employee management, or advanced reporting—so your pos systems restaurants rely on can adapt as your business grows.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 my-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Switch to best point of sale system for{" "}
            <br className="hidden md:block" /> restaurant today
          </h2>
          <p className="text-gray-600 max-w-xl mb-4">
            There are two flexible models to get started with a restaurant POS
            solution. Whether you’re looking for a fully managed system or a
            more customizable approach, our platform is designed to meet the
            needs of all types of restaurants. From quick-service spots to fine
            dining establishments, we provide the tools you need to find the
            best point of sale system for restaurant success.
          </p>

          <div className="space-y-6 my-8 max-w-3xl">
            {infoCardItems.map((item, index) => (
              <div key={index} className="relative pl-6 space-y-3">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-orange-500 via-gray-400 to-gray-300"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.heading}
                </h3>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full px-5">
          <img
            src={cafePosimg}
            alt="Cafe POS"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10 w-full  md:max-w-6xl mx-auto px-5">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="bg-black/80  rounded-lg p-4 flex flex-col gap-7"
          >
            <span className="text-5xl font-bold text-orange-500">
              {item.title}
            </span>
            <span className="text-xl text-white">{item.subtitle}</span>

            <p className="text-sm text-white/80">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
