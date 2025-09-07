import React from "react";

const Help = () => {
  return (
    <div id="contact" className="bg-orange-50 !py-16 !px-6 text-center">
      <h3 className="text-2xl font-bold text-gray-800">Need Assistance Now?</h3>
      <p className="!mt-3 text-gray-600 max-w-xl !mx-auto">
        Our support team is ready to help. Reach out to us and we’ll respond
        promptly.
      </p>
      <a
        href="/contact"
        className="!mt-6 inline-block bg-orange-500 hover:bg-orange-600 !text-white !px-6 !py-3 rounded-lg shadow font-medium"
      >
        Contact Support
      </a>
    </div>
  );
};

export default Help;
