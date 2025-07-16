import { useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-200 font-serif bg-white">
      <div className="flex justify-between items-center px-4 py-4 h-20">
        <h1 className="text-2xl sm:text-3xl font-extrabold cursor-pointer text-orange-600">
          POS
        </h1>
        <button
          className="sm:hidden text-3xl text-orange-600 cursor-pointer transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
        <div className="hidden sm:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive
                  ? "text-orange-600 font-bold border-b-2"
                  : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive
                  ? "text-orange-600 font-bold border-b-2"
                  : "text-gray-700"
              }`
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive
                  ? "text-orange-600 font-bold border-b-2"
                  : "text-gray-700"
              }`
            }
          >
            Pricing
          </NavLink>
        </div>
        <button className="hidden sm:flex cursor-pointer bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600 duration-300 rounded-md px-5 py-2 font-semibold">
          Get a Demo
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
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-xl font-medium ${
                isActive ? "text-orange-600 border-b-2" : "text-gray-800"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/solutions"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-xl font-medium ${
                isActive ? "text-orange-600 border-b-2" : "text-gray-800"
              }`
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-xl font-medium ${
                isActive ? "text-orange-600 border-b-2" : "text-gray-800"
              }`
            }
          >
            Pricing
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
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
