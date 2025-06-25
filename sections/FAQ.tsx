"use client";
import { useState } from "react";
import { faqItems } from "@/constants/faqData";
import { ChevronDown, ChevronUp } from "lucide-react";
function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
