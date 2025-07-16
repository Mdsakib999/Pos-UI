import {
  PiNoteDuotone,
  PiCubeFocusDuotone,
  PiChartLineUpDuotone,
} from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const services = [
  {
    icon: <PiNoteDuotone className="text-orange-500 text-4xl" />,
    title: "POS Billing",
    description: "Fast checkout, barcode scanning, and discounts.",
  },
  {
    icon: <PiCubeFocusDuotone className="text-orange-500 text-4xl" />,
    title: "Inventory Management",
    description: "Track stock levels, avoid running out of products.",
  },
  {
    icon: <PiChartLineUpDuotone className="text-orange-500 text-4xl" />,
    title: "Reports & Analytics",
    description: "Get insights into sales, products, and customers.",
  },
];

export const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-semibold text-lg">Our Services</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Discover how our POS makes your business smarter.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {service.icon}
            <h4 className="text-lg font-semibold mt-4 mb-2">{service.title}</h4>
            <p className="text-sm text-gray-700">{service.description}</p>
            <div className="mt-4">
              <Link
                to="/pricing"
                className="text-sm text-black hover:text-orange-600 font-medium inline-flex items-center gap-1 group"
              >
                See Plans
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
