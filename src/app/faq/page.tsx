"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How do we serve food?",
    answer:
      "We ensure high hygiene standards and serve fresh food with proper packaging.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "You can contact us via phone, email, or visit our restaurant during working hours.",
  },
  {
    question: "How is our food quality?",
    answer:
      "Our food is made from fresh, high-quality ingredients, ensuring great taste and safety.",
  },
  {
    question: "What will be delivered? And when?",
    answer:
      "Your order will include all selected items, delivered within the estimated time frame.",
  },
  {
    question: "How do we give home delivery?",
    answer:
      "We have a dedicated delivery team that ensures your food reaches you hot and fresh.",
  },
  {
    question: "Is this restaurant open 24 hours?",
    answer:
      "No, we operate from 10 AM to 11 PM daily. Check our website for holiday hours.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-60 flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/bg-1.jpg')" }}
      >
        <h1 className="text-4xl font-bold">FAQ Page</h1>
      </div>

      {/* FAQ Intro */}
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold">Questions? Look Here</h1>
        <p className="mt-3 text-gray-600">
          Find answers to commonly asked questions below.
        </p>
      </div>

      {/* FAQ Section with Consistent Box Sizes */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg bg-orange-50 shadow-md p-4 w-full max-w-[500px] min-h-[120px] flex flex-col justify-between"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center font-bold text-lg"
            >
              {item.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
