import { useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-b shadow-gray-200 border-b border-gray-200 font-serif">
      <div className="flex justify-between items-center px-4 py-4 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold cursor-pointer">
          POS
        </h1>

        {/* Hamburger Button - visible on small screens */}
        <button
          className="sm:hidden text-3xl text-orange-600 cursor-pointer transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "border-b-2 border-orange-600" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "border-b-2 border-orange-600" : ""
              }`
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "border-b-2 border-orange-600" : ""
              }`
            }
          >
            Pricing
          </NavLink>
        </div>
        <button className="hidden sm:flex cursor-pointer bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600 duration-500 rounded-md px-5 py-2 font-semibold">
          Get a Demo
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 sm:hidden py-4 bg-gray-50">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "border-b-2 border-orange-600" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/solutions"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "border-b-2 border-orange-600" : ""
              }`
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "border-b-2 border-orange-600" : ""
              }`
            }
          >
            Pricing
          </NavLink>
          <button className="cursor-pointer bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600 duration-500 rounded-md px-5 py-2 font-semibold">
            Get a Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
