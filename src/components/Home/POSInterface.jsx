import { useState } from "react";
import {
  Search,
  Plus,
  Star,
  User,
  Bell,
  ShoppingCart,
  Grid,
  Menu,
} from "lucide-react";

const POSInterface = () => {
  const [activeTab, setActiveTab] = useState("Category");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Basmoti Chai",
      code: "86997504",
      price: 10,
      image: "🍵",
      category: "beverages",
    },
    {
      id: 2,
      name: "Fresh Oil 2 Liter",
      code: "59122776",
      price: 20,
      image: "🛢️",
      category: "food",
    },
    {
      id: 3,
      name: "Al Shifa Natural Honey 250gm",
      code: "07158860",
      price: 30,
      image: "🍯",
      category: "food",
    },
    {
      id: 4,
      name: "Gasoline Water Pump 7HP",
      code: "64803730",
      price: 40,
      image: "⛽",
      category: "equipment",
    },
    {
      id: 5,
      name: "Stylish And Fashionable Winter And Summer Sneakers",
      code: "83325407",
      price: 50,
      image: "👟",
      category: "clothing",
    },
    {
      id: 6,
      name: "Converse Shoes For Men",
      code: "78900263",
      price: 60,
      image: "👞",
      category: "clothing",
    },
    {
      id: 7,
      name: "Samsung Galaxy F23 5G",
      code: "97866032",
      price: 70,
      image: "📱",
      category: "electronics",
    },
    {
      id: 8,
      name: "Single Ignition",
      code: "62006281",
      price: 80,
      image: "🔥",
      category: "equipment",
    },
    {
      id: 9,
      name: "Bangla Bahar",
      code: "31644529",
      price: 90,
      image: "🏠",
      category: "home",
    },
    {
      id: 10,
      name: "12w AC/DC",
      code: "75581658",
      price: 100,
      image: "🔌",
      category: "electronics",
    },
    {
      id: 11,
      name: "Walton 180 Lt",
      code: "91057232",
      price: 110,
      image: "❄️",
      category: "appliances",
    },
    {
      id: 12,
      name: "Napa Extra Tablet",
      code: "12920150",
      price: 120,
      image: "💊",
      category: "medicine",
    },
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.includes(searchQuery)
  );
  const clearCart = () => setCartItems([]);

  return (
    <div className="flex w-full h-full bg-gray-50 rounded-lg overflow-hidden shadow-lg">
      {/* Left Panel - Responsive width */}
      <div className="w-32 sm:w-40 md:w-48 lg:w-52 bg-white shadow-lg border-r flex flex-col h-full">
        {/* Header - Compact on mobile */}
        <div className="p-1 sm:p-2 border-b bg-purple-50">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Menu size={12} className="sm:hidden" />
              <Menu size={16} className="hidden sm:block" />
            </button>
            <div className="flex items-center space-x-1">
              <Bell size={12} className="text-gray-600 sm:hidden" />
              <Bell size={16} className="text-gray-600 hidden sm:block" />
              <div className="bg-red-500 text-white rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-xs">
                2
              </div>
              <User size={12} className="text-gray-600 sm:hidden" />
              <User size={16} className="text-gray-600 hidden sm:block" />
              <span className="text-xs hidden sm:inline">Demo</span>
            </div>
          </div>

          {/* Dropdowns - Stack on mobile */}
          <div className="space-y-1 mb-1 sm:mb-2">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1">
              <select className="px-1 sm:px-2 py-1 border rounded text-xs flex-1">
                <option>Choose</option>
              </select>
              <select className="px-1 sm:px-2 py-1 border rounded text-xs flex-1">
                <option>Type</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1">
              <select className="px-1 sm:px-2 py-1 border rounded text-xs flex-1">
                <option>Main Br.</option>
              </select>
              <select className="px-1 sm:px-2 py-1 border rounded text-xs flex-1">
                <option>Select</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-1 mb-1 sm:mb-2">
            <select className="px-1 sm:px-2 py-1 border rounded text-xs flex-1">
              <option>Billing</option>
            </select>
            <select className="px-1 sm:px-2 py-1 border rounded text-xs flex-1">
              <option>Walking</option>
            </select>
            <button className="px-1 sm:px-2 py-1 text-gray-600 hover:bg-gray-100 rounded text-xs">
              ⋮
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-1 sm:p-2 border-b">
          <div className="relative">
            <Search
              size={14}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-6 pr-2 py-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-1 sm:p-2">
            <div className="grid grid-cols-3 gap-1 text-xs font-medium text-gray-700 mb-2">
              <div>Product</div>
              <div>Qty</div>
              <div>Total</div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-3 gap-1 text-xs py-1 border-b"
              >
                <div className="truncate">{item.name.substring(0, 8)}...</div>
                <div>{item.quantity}</div>
                <div>{item.price * item.quantity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="p-1 sm:p-2 border-t bg-gray-50">
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>
                Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
              <span>
                Total: {cartItems.reduce((sum, item) => sum + item.price, 0)}
              </span>
            </div>
          </div>
          <div className="mt-2 p-1 sm:p-2 bg-purple-100 rounded text-center">
            <div className="text-xs sm:text-sm font-semibold text-purple-800">
              Grand Total 0.00
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-1 sm:p-2 border-t">
          <div className="grid grid-cols-2 gap-1 mb-1">
            <button className="bg-blue-500 text-white px-1 sm:px-2 py-1 rounded text-xs hover:bg-blue-600">
              💳 <span className="hidden sm:inline">Card</span>
            </button>
            <button className="bg-green-500 text-white px-1 sm:px-2 py-1 rounded text-xs hover:bg-green-600">
              💵 <span className="hidden sm:inline">Cash</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <button className="bg-orange-500 text-white px-1 sm:px-2 py-1 rounded text-xs hover:bg-orange-600">
              📄 <span className="hidden sm:inline">Draft</span>
            </button>
            <button className="bg-red-500 text-white px-1 sm:px-2 py-1 rounded text-xs hover:bg-red-600">
              ❌{" "}
              <span className="hidden sm:inline" onClick={clearCart}>
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col h-full">
        {/* Top Nav */}
        <div className="bg-white p-1 sm:p-2 shadow-sm border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <Plus size={14} className="sm:hidden" />
                <Plus size={16} className="hidden sm:block" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Grid size={14} className="sm:hidden" />
                <Grid size={16} className="hidden sm:block" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Star size={14} className="sm:hidden" />
                <Star size={16} className="hidden sm:block" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ShoppingCart size={14} className="sm:hidden" />
                <ShoppingCart size={16} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white p-1 sm:p-2 border-b">
          <div className="flex space-x-1">
            {["Category", "Brand", "Featured"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 sm:px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeTab === tab
                    ? tab === "Category"
                      ? "bg-purple-500 text-white"
                      : tab === "Brand"
                      ? "bg-teal-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Responsive */}
        <div className="flex-1 overflow-y-auto min-h-0 p-1 sm:p-2">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredProducts.slice(0, 12).map((product) => (
              <div
                key={product.id}
                onClick={() => addToCart(product)}
                className="bg-white rounded-lg hover:shadow-lg transition duration-200 cursor-pointer p-3 flex flex-col items-center justify-between text-center"
              >
                {/* Product Icon */}
                <div className="text-2xl sm:text-3xl mb-3">{product.image}</div>

                {/* Product Name */}
                <h3 className="font-semibold text-sm sm:text-base text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h3>

                {/* Product Code */}
                <p className="text-xs text-gray-500 mb-2">
                  {product.code.slice(0, 8)}
                </p>

                {/* Price */}
                <div className="bg-gray-100 w-full py-1 rounded text-xs font-bold text-gray-700">
                  ${product.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSInterface;
