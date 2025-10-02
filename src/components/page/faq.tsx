"use client";

import { useState } from "react";

function FAQ() {
  // openIndex tracks which FAQ is expanded (null = none open)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that lets you build modern websites without leaving your HTML.",
    },
    {
      question: "Is Next.js good for SEO?",
      answer:
        "Yes, Next.js supports server-side rendering and static site generation, making it SEO-friendly out of the box.",
    },
    {
      question: "Can I use Tailwind with Next.js?",
      answer:
        "Absolutely. Tailwind works seamlessly with Next.js for styling components and building responsive layouts.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
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
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
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
