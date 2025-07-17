import {
  PiNoteDuotone,
  PiCubeFocusDuotone,
  PiChartLineUpDuotone,
  PiUsersThreeDuotone,
  PiGearDuotone,
  PiCreditCardDuotone,
} from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: <PiNoteDuotone className="text-orange-500 text-4xl" />,
    title: "POS Billing",
    description: "Fast checkout, barcode scanning, and discounts.",
  },
  {
    icon: <PiCubeFocusDuotone className="text-orange-500 text-4xl" />,
    title: "Inventory Management",
    description: "Track stock levels, avoid running out of products.",
  },
  {
    icon: <PiChartLineUpDuotone className="text-orange-500 text-4xl" />,
    title: "Reports & Analytics",
    description: "Get insights into sales, products, and customers.",
  },
  {
    icon: <PiUsersThreeDuotone className="text-orange-500 text-4xl" />,
    title: "Customer Management",
    description: "Build loyalty with CRM and purchase history tracking.",
  },
  {
    icon: <PiCreditCardDuotone className="text-orange-500 text-4xl" />,
    title: "Multiple Payment Modes",
    description: "Accept cards, UPI, wallets, and split bills easily.",
  },
  {
    icon: <PiGearDuotone className="text-orange-500 text-4xl" />,
    title: "Custom Settings",
    description: "Flexible tax, invoice, and receipt configurations.",
  },
];

export const OurServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-semibold text-lg">Our Services</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Discover how our POS makes your business smarter.
        </h2>
      </div>

      {/* Swiper Carousel */}
      {navReady && (
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md transition h-[220px] flex flex-col justify-between mb-10">
                <div>
                  {service.icon}
                  <h4 className="text-lg font-semibold mt-4 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/pricing"
                    className="text-sm text-black hover:text-orange-600 font-medium inline-flex items-center gap-1 group"
                  >
                    See Plans
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center gap-2 md:me-10 mt-4">
        <button
          ref={prevRef}
          className="bg-orange-100 hover:bg-orange-200 text-orange-600 px-3 py-2 rounded-full shadow-sm"
        >
          &#8592;
        </button>
        <button
          ref={nextRef}
          className="bg-orange-100 hover:bg-orange-200 text-orange-600 px-3 py-2 rounded-full shadow-sm"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};
