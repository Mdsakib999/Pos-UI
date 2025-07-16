import { useState } from "react";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const categories = [
    { name: "General", active: true },
    { name: "Transactions", active: false },
    { name: "Payment", active: false },
    { name: "Others", active: false },
  ];

  const faqData = {
    General: [
      {
        question: "What are the common features in the Coca POS system?",
        answer:
          "Common features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support.",
      },
      {
        question: "How does Coca POS help in managing stock?",
        answer:
          "Coca POS provides real-time inventory tracking, automated stock alerts, supplier management, and detailed reporting to help you maintain optimal stock levels and reduce waste.",
      },
      {
        question:
          "Can the Coca POS application be integrated with other systems?",
        answer:
          "Yes, Coca POS can be integrated with various third-party systems including accounting software, e-commerce platforms, loyalty programs, and payment gateways through our API.",
      },
      {
        question:
          "What is the average cost to purchase and implement a Coca POS?",
        answer:
          "The cost varies based on your business size and requirements. Contact our sales team for a customized quote that includes hardware, software licensing, and implementation support.",
      },
      {
        question: "What about customer data security?",
        answer:
          "We implement enterprise-grade security measures including data encryption, secure payment processing, regular security audits, and compliance with industry standards like PCI DSS.",
      },
    ],
    Transactions: [
      {
        question: "How to process refunds and returns?",
        answer:
          "Access the transaction history, select the original sale, and follow the refund process. The system will automatically update inventory and generate necessary receipts.",
      },
      {
        question: "Can I split payments across multiple methods?",
        answer:
          "Yes, Coca POS supports split payments allowing customers to pay using multiple payment methods like cash, card, and digital wallets for a single transaction.",
      },
      {
        question: "How to handle voided transactions?",
        answer:
          "Voided transactions can be processed through the transaction management interface with proper authorization levels and audit trails for compliance.",
      },
    ],
    Payment: [
      {
        question: "What payment methods are supported?",
        answer:
          "Coca POS supports cash, credit/debit cards, contactless payments, mobile wallets, gift cards, and various digital payment platforms.",
      },
      {
        question: "How secure are payment transactions?",
        answer:
          "All payment transactions are encrypted and processed through PCI DSS compliant payment gateways with tokenization for enhanced security.",
      },
      {
        question: "Can I set up recurring payments?",
        answer:
          "Yes, the system supports recurring payment setup for subscription-based services and regular customers with automated billing cycles.",
      },
    ],
    Others: [
      {
        question: "How to generate sales reports?",
        answer:
          "Navigate to the Reports section, select your desired date range and report type. You can export reports in various formats including PDF, Excel, and CSV.",
      },
      {
        question: "Is there mobile app support?",
        answer:
          "Yes, Coca POS offers mobile applications for both iOS and Android devices, allowing you to manage your business on the go.",
      },
      {
        question: "What kind of customer support is available?",
        answer:
          "We provide 24/7 customer support through multiple channels including phone, email, live chat, and an extensive knowledge base.",
      },
    ],
  };

  const currentFAQs = faqData[activeCategory] || [];

  const filteredFAQs = currentFAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12 gap-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Frequently Asked
          <br />
          Questions
        </h1>

        {/* Search Bar */}
        <div className="w-full lg:w-auto lg:min-w-96">
          <div className="relative flex items-center bg-white border-2 border-gray-200 rounded-full overflow-hidden focus-within:border-orange-500 transition-colors">
            <input
              type="text"
              placeholder="Type your question here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 lg:py-4 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-3 lg:py-4 rounded-full transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
              <FaSearch className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setOpenIndex(null);
                }}
                className={`w-full px-2 py-3 rounded-full transition-colors text-center duration-200 ${
                  activeCategory === category.name
                    ? " text-orange-600 font-medium border-2 border-orange-500"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="flex-1">
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No questions found matching your search.
                </p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-gray-800 font-medium text-lg pr-4">
                      {faq.question}
                    </span>
                    <span className="text-gray-500 flex-shrink-0">
                      {openIndex === index ? (
                        <FaMinus className="w-5 h-5" />
                      ) : (
                        <FaPlus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <div className="pt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
