import salesmanagementImg from "/assets/salesmanagement.webp";
import inventorymanagementImg from "/assets/inventorymanagement.png";
import analytics from "/assets/analytics.png";
import POSInterface from "./POSInterface";

export const KeyFeature = () => {
  const menuItems = [
    {
      id: 1,
      title: "Sales Management",
      description:
        "Effortlessly process transactions, accept various payment methods, and generate detailed sales reports.",
      image: salesmanagementImg,
    },
    {
      id: 2,
      title: "Inventory Management",
      description:
        "Track stock levels, receive low stock alerts, and manage inventory across multiple locations.",
      image: inventorymanagementImg,
    },
    {
      id: 3,
      title: "Analytics & Reporting",
      description:
        "Gain insights into your business performance with detailed analytics and customizable reports.",
      image: analytics,
    },
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 text-center">
      <p className="text-sm text-orange-500 font-semibold mb-2">Key Features</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Maximize Your Hospitality <br className="hidden md:block" />
        Potential With Our Guidance
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Our Smart, easy-to-use, all-encompassing POS system is the perfect
        solution for every business, no matter how large or small.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        {/* Left column with two stacked cards */}
        <div className="flex flex-col gap-6">
          {[menuItems[0], menuItems[2]].map((item) => (
            <div key={item.id} className="space-y-3 shadow-md p-6 rounded">
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right column with one tall card */}
        <div className="lg:row-span-2 p-2 rounded flex flex-col gap-4 max-h-[800px] shadow-md items-center">
          <div className="flex-1 max-h-[800px] overflow-hidden">
            <POSInterface />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{menuItems[1].title}</h3>
            <p className="text-gray-600 text-sm">{menuItems[1].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
