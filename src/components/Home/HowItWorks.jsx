import { FaCloud, FaBolt, FaConnectdevelop } from "react-icons/fa";
import howitwoks from "/assets/advideo.mp4";

const features = [
  {
    icon: <FaCloud className="text-white text-2xl" />,
    title: "Accessible From Anywhere",
    description:
      "Access your POS system anytime, anywhere, ensuring flexibility and convenience for your business management needs.",
  },
  {
    icon: <FaBolt className="text-white text-2xl" />,
    title: "Offline Mode",
    description:
      "Stay operational even without an internet connection with our Offline Mode feature, ensuring uninterrupted sales and transactions.",
  },
  {
    icon: <FaConnectdevelop className="text-white text-2xl" />,
    title: "200+ Integration",
    description:
      "Seamlessly connecting with over 200 different platforms and services to enhance your business operations.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 text-center">
      <p className="text-sm text-orange-500 font-semibold mb-2">
        How it Works?
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What Our POS system Does And How It works
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Discover the Seamless Process of Streamlining Your Business Operations
      </p>

      <div className="mb-12">
        <video
          src={howitwoks}
          autoPlay
          loop
          muted
          controlsList="nodownload"
          className="w-full lg:w-1/2 h-full object-cover rounded-xl mx-auto"
        />
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="bg-yellow-400 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
