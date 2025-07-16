import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-black text-white px-10 md:px-20 py-12 w-full">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="max-w-xl space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Don't Miss This Exclusive Opportunity
            </h1>
            <p className="text-sm md:text-base text-white/80">
              Enter your email address and start connecting with a better
              business world using our POS products.
            </p>
          </div>

          {/* Email Subscription */}
          <div className="w-full max-w-xs sm:max-w-md">
            <div className="flex items-center bg-zinc-800 rounded-full overflow-hidden shadow-lg pl-2 pr-2.5 py-2.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-3 sm:px-5 py-2 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none"
              />
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="text-2xl font-bold">LOGO</div>
          <ul className="flex flex-col lg:flex-row gap-4 text-sm text-white/80">
            {[
              { label: "Product", to: "/" },
              { label: "Solution", to: "/solutions" },
              { label: "Learn", to: "/learn" },
            ].map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center text-sm text-white/60 gap-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-400 font-serif">SM IT Solution</span>.
            All rights reserved.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
