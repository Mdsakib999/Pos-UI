import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    branches: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Demo request submitted!");
  };

  return (
    <div id="#contact" className="min-h-[70vh] py-20">
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-orange-500 mb-2">
          Book Demo
        </h1>
        <p className="max-w-xl mx-auto text-xl md:text-2xl lg:text-3xl font-extrabold">
          Get a quick preview of how our POS can fit your business needs.
        </p>
      </div>

      <div className="max-w-2xl mx-3 md:mx-auto px-6 py-10 bg-white rounded-xl shadow-md border border-orange-200">
        <form onSubmit={handleSubmit} className="space-y-6 p-2 md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-orange-500"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-orange-500"
            />
            <input
              type="text"
              name="business"
              placeholder="Business Type"
              value={formData.business}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-orange-500"
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-orange-500"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-semibold w-full"
          >
            <FiSend size={18} />
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
