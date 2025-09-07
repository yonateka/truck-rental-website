import React from "react";

const Faq = () => {
  const faqs = [
    {
      q: "How can I contact support during my rental?",
      a: "You can reach us via our 24/7 helpline, live chat, or email. Details are available on our Contact page.",
    },
    {
      q: "What if the truck breaks down?",
      a: "Immediate roadside assistance is available. We provide towing or on-site repairs depending on the issue.",
    },
    {
      q: "Can I extend my rental period?",
      a: "Yes, extensions can be requested through your account dashboard or by contacting support directly.",
    },
  ];
  return (
    <div className="bg-gray-50 !py-16 !px-6">
      <div className="max-w-4xl !mx-auto text-center !mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently <span className="text-orange-600">Asked Questions</span>
        </h2>
        <p className="!mt-3 text-gray-600">
          Answers to common queries about our customer support and rental
          process.
        </p>
      </div>

      <div className="max-w-4xl !mx-auto !space-y-6">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="border rounded-lg !p-4 bg-white shadow hover:shadow-md transition"
          >
            <summary className="font-semibold text-gray-800 cursor-pointer">
              {faq.q}
            </summary>
            <p className="!mt-2 text-green-600 text-sm">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
