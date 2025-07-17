import {
  ShoppingCart,
  BarChart3,
  Users,
  CreditCard,
  Package,
  TrendingUp,
  Shield,
  Smartphone,
  Clock,
  Award,
  Zap,
  Headphones,
} from "lucide-react";
import { Link } from "react-router";

const mainFeatures = [
  {
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "Complete Sales Management",
    description:
      "Streamline your entire sales process with our intuitive point-of-sale system. Handle transactions and exchanges effortlessly.",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Advanced Analytics & Reporting",
    description:
      "Get deep insights into your business with real-time analytics, sales reports, and performance metrics that drive growth.",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: "Smart Inventory Management",
    description:
      "Track stock levels, manage suppliers, and automate reordering with our intelligent inventory control system.",
    color: "from-orange-400 to-orange-500",
  },
];

const additionalFeatures = [
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Multi-Payment Processing",
    desc: "Accept all payment methods",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer Management",
    desc: "Build lasting relationships",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Sales Forecasting",
    desc: "Predict future trends",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Compliance",
    desc: "Bank-level security",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Ready",
    desc: "Sell anywhere, anytime",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Operations",
    desc: "Never miss a sale",
  },
];

const benefits = [
  {
    icon: <Award className="w-6 h-6" />,
    text: "Award-winning user interface",
  },
  { icon: <Zap className="w-6 h-6" />, text: "Lightning-fast performance" },
  { icon: <Headphones className="w-6 h-6" />, text: "24/7 premium support" },
];
const OurOffer = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What We <span className="text-orange-500">Offer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Revolutionize your business with our comprehensive POS solution
              designed to streamline operations, boost sales, and enhance
              customer experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-orange-100"
                >
                  <div className="text-orange-500">{benefit.icon}</div>
                  <span className="text-gray-700 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Business{" "}
              <span className="text-orange-500">Solution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your business efficiently in one
              powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                10K+
              </div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <div className="text-orange-100">Uptime Guarantee</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-orange-100">Countries Served</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-orange-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized
              their operations with our POS solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                See Our Plans
              </Link>
              <button
                onClick={() => {
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
                }}
                className="cursor-pointer border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
