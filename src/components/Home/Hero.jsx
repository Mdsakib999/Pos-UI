import { FaStar } from "react-icons/fa";

export const Hero = () => {
  const companies = [
    {
      id: 1,
      image: "/assets/Companies/luke-resturant.png",
      name: "Luke Resturant",
    },
    {
      id: 2,
      image: "/assets/Companies/curacans.png",
      name: "Curacans",
    },
    {
      id: 3,
      image: "/assets/Companies/savory.png",
      name: "Savory",
    },
    {
      id: 4,
      image: "/assets/Companies/maze.png",
      name: "maze",
    },
    {
      id: 5,
      image: "/assets/Companies/casa-de-tapas.jpg",
      name: "Casa de Tapas",
    },
    {
      id: 6,
      image: "/assets/Companies/appetito.png",
      name: "Appetito",
    },
    {
      id: 7,
      image: "/assets/Companies/gusto.png",
      name: "Gusto",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 text-center py-10">
      {/* Tagline */}
      <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-1 rounded-full mb-6">
        <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-0.5 rounded-full">
          New
        </div>
        <span className="text-sm text-gray-800 font-medium">
          Seamless Transactions for your business
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Optimize Your Business <br className="hidden md:block" />
        With Advanced POS
      </h1>
      <p className="text-gray-600 mb-6">
        We handle everything, from POS to payroll, so you can{" "}
        <br className="hidden md:block" />
        focus on what you love
      </p>

      {/* CTA button */}
      <div className="mb-10">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
          Start for Now
        </button>
      </div>

      {/* Monitor image */}
      <div className="mb-10">
        <img src="" alt="POS SCREEN" className="mx-auto w-full max-w-4xl" />
      </div>

      {/* Stars and tagline */}
      <div className="flex justify-center items-center gap-2 mb-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} className="text-yellow-500 text-xl" />
          ))}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Providing Digital Solutions To <br className="hidden md:block" />
        Over 150,000 Business
      </h2>
      <p className="text-gray-600 mb-10">
        Take advantage of our advanced POS solutions to streamline operations{" "}
        <br className="hidden md:block" />
        and drive growth for your business
      </p>

      {/* Companies logos */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center opacity-70">
        {companies.map((company) => (
          <div className="flex items-center gap-2">
            <img
              key={company.id}
              src={company.image}
              alt={company.name}
              className="h-10 object-contain"
            />
            {company.name}
          </div>
        ))}
      </div>
    </div>
  );
};
