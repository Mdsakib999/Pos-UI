import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { to: "/", label: "Home" },
    { to: "/solutions", label: "Solutions" },
    { to: "/pricing", label: "Pricing" },
    { to: "/offer", label: "Our Offer" },
  ];

  const handleDemoClick = () => {
    window.location.href = "/#contact";
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleMobileDemoClick = () => {
    setIsOpen(false);
    handleDemoClick();
  };

  return (
    <div className="w-full shadow-b shadow-gray-200 border-b border-gray-200 sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center px-4 py-4 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold cursor-pointer text-orange-600"
        >
          POS
        </Link>
        <div className="hidden sm:flex gap-6 items-center">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 ${
                  isActive
                    ? "text-orange-600 font-bold border-b-2"
                    : "text-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <button
          onClick={handleDemoClick}
          className="hidden sm:flex cursor-pointer bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600 duration-300 rounded-md px-5 py-2 font-semibold"
        >
          Get a Demo
        </button>
        <button
          className="sm:hidden text-3xl text-orange-600 cursor-pointer transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-6 p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-4 right-4 text-3xl text-orange-600"
          >
            <HiX />
          </button>
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? "text-orange-600 border-b-2" : "text-gray-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={handleMobileDemoClick}
            className="bg-orange-600 text-white hover:bg-orange-700 duration-300 rounded-md px-6 py-3 font-semibold text-base mt-4"
          >
            Get a Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
