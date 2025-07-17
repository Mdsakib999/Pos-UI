import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="relative px-6 md:px-20 py-8 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Newsletter */}
          <div className="text-left mb-16 flex flex-col lg:flex-row justify-between items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text mb-4">
                <h2 className="text-sm font-semibold tracking-wider uppercase">
                  Stay Connected
                </h2>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Don't Miss This Exclusive
                <span className="block text-orange-400">Opportunity</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Enter your email address and start connecting with a better
                business world using our innovative POS solutions.
              </p>
            </div>

            {/* Enhanced Email Subscription */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-full overflow-hidden shadow-2xl p-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-orange-400">
                  SM IT Solution
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering businesses with cutting-edge POS solutions and
                  innovative technology services.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { Icon: FaFacebookF, color: "hover:bg-blue-600" },
                    { Icon: FaInstagram, color: "hover:bg-pink-600" },
                    { Icon: FaXTwitter, color: "hover:bg-gray-800" },
                    { Icon: FaLinkedinIn, color: "hover:bg-blue-700" },
                  ].map(({ Icon, color }, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center hover:border-orange-400 ${color} transition-all duration-300 cursor-pointer group`}
                    >
                      <Icon size={16} className="group-hover:text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Products", to: "/" },
                  { label: "Solutions", to: "/solutions" },
                  { label: "Pricing", to: "/pricing" },
                  { label: "About", to: "/about" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.to}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <FaMapMarkerAlt className="text-orange-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      123 Business Street
                      <br />
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <FaPhone className="text-orange-400 text-sm" />
                  </div>
                  <p className="text-gray-400 text-sm">+880 1234-567890</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <FaEnvelope className="text-orange-400 text-sm" />
                  </div>
                  <p className="text-gray-400 text-sm">info@smitsolution.com</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Office Hours
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Monday - Friday</span>
                  <span className="text-orange-400 text-sm font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Saturday</span>
                  <span className="text-orange-400 text-sm font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Sunday</span>
                  <span className="text-red-400 text-sm font-medium">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
                <p>
                  © {new Date().getFullYear()}{" "}
                  <span className="text-orange-400 font-semibold">
                    SM IT Solution
                  </span>
                  . All rights reserved.
                </p>
              </div>

              <div className="flex gap-4">
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-zinc-600">|</span>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </a>
                <span className="text-zinc-600">|</span>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
