import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { RxExit } from "react-icons/rx";

// Card items data
const cardItems = [
  {
    id: 1,
    icon: <RxExit />,
    title: "Onboarding & Login",
    description: `on the login screen, users can scan a special card for automatic authorization, simplifying the login process by eliminating the need for manual data entry.
        Immediately after that, onboarding starts on the same screen, which briefly introduces new users to the main features of the app
        `,
    img: "/assets/login.jpg",
  },
  {
    id: 2,
    icon: <IoIosHome />,
    title: "Home",
    description: `The main screen of the application is focused on the convenience of waiters, displaying key information for quick service
        Popular dishes that are frequently ordered are highlighted on the screen, making it easy to add them to new orders
        The status of each order is displayed in real time: from latest to completed or in preparation
        `,
    img: "/assets/HomeUI.jpg",
  },
  {
    id: 3,
    icon: <BiSolidDish />,
    title: "Create order",
    description: `The order creation screen in the application allows users to easily and quickly select dishes from the menu
        Waiters can see popular dishes, and available items, and receive notifications about dishes that are out of stock
        The interface provides easy navigation, allowing you to add or remove dishes, select additional options, and instantly transfer orders to the kitchen
        `,
    img: "/assets/createorderUI.jpg",
  },
  {
    id: 4,
    icon: <GiHamburgerMenu />,
    title: "Choose Menu",
    description: `The menu is organized so that it is easy to navigate through different categories such as appetizers, main courses, desserts, and drinks
        A photo, name, price, and a brief description of the ingredients or features of the dish accompany each dishes
        it is possible to filter dishes by categories, price, or menu availability
        In addition, dishes that are not available are marked with a corresponding indicator
        `,
    img: "/assets/chooseMenuUI.jpg",
  },
];

export const SystemExplanation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <div className="space-y-12">
        {cardItems.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Content Section */}
            <div className="flex-1 space-y-4 min-h-[300px] bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-xl">
                  {card.icon}
                </div>
                <h2 className="text-2xl font-bold text-orange-500">
                  {card.title}
                </h2>
              </div>

              <p className="text-black leading-relaxed whitespace-pre-line">
                {card.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 lg:h-80 object-fit"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-64 lg:h-80 bg-gray-200 items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{card.icon}</div>
                    <p>Image not available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
