"use client";

import { useState } from "react";

function FAQ() {
  // openIndex tracks which FAQ is expanded (null = none open)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Kopen jullie ook auto’s in?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
    {
      question: "Welke betaalmogelijkheden bieden jullie aan?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
    {
      question: "Welke merken hebben jullie? ",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto p-6 faq-section">
      <h2 className="mb-6 text-center ft-48 white-text">
        <span className="orange-text">veelgestelde</span> vragen
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl shadow-sm"
          >
            {/* FAQ Button */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium"
            >
              {faq.question}
              {/* Simple Chevron SVG (rotates on toggle) */}
              <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              <path
                d="M0.957031 14.7609C0.957031 8.53197 6.00658 3.48242 12.2355 3.48242H18.7652C24.9941 3.48242 30.0436 8.53197 30.0436 14.7609C30.0436 20.9898 24.9941 26.0394 18.7651 26.0394H12.2355C6.00657 26.0394 0.957031 20.9898 0.957031 14.7609Z"
                fill="#708585"
              />
              <rect x="0.5" width="30" height="30" rx="15" fill="#708585" />
              <path
                d="M14.6875 21.5586L10.0938 16.9648L9.62891 16.5L10.5586 15.5703L11.0234 16.0352L14.4961 19.5078V7.75H15.8086V19.5078L19.2812 16.0352L19.7461 15.5703L20.6758 16.5L20.2109 16.9648L15.6172 21.5586L15.1523 22.0234L14.6875 21.5586Z"
                fill="#132025"
              />
            </svg>
 
             
            </button>

            {/* Collapsible Answer */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === i ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
