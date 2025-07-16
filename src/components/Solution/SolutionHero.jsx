export const SolutionHero = () => {
  const cardItems = [
    {
      id: 1,
      title: "10+",
      subtitle: "Screen",
    },
    {
      id: 2,
      title: "30+",
      subtitle: "UI Elements",
    },
    {
      id: 3,
      title: "100+",
      subtitle: "Hours spent",
    },
    {
      id: 4,
      title: "40+",
      subtitle: "Food photos",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Convenient control of orders <br className="hidden md:block" />
            and services in your hands
          </h2>
          <p className="text-gray-600 max-w-xl mb-4">
            This application should simplify the work of waiters, make the
            process of serving customers faster and more efficient, and also
            give restaurant managers a convenient tool to control all aspects of
            service
          </p>
          <p className="text-gray-600 max-w-xl mb-4">
            The application’s main functions include taking orders, integrating
            with the kitchen to transmit orders, managing tables, and accounting
            for product balances
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 w-fit">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="bg-black/80  rounded-lg p-4 flex flex-col items-center h-32 justify-center w-52"
            >
              <span className="text-3xl font-bold text-orange-500">
                {item.title}
              </span>
              <span className="text-sm text-white">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
