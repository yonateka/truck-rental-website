import React from "react";

export default function FleetManagement() {
  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="bg-gray-900 text-white text-center !py-16 !px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Fleet <span className="text-orange-500">Management</span>
        </h1>
        <p className="!mt-4 max-w-2xl !mx-auto text-gray-300">
          Optimize your business operations with our comprehensive fleet
          management solutions.
        </p>
      </div>

      {/* DETAILS */}
      <div className="max-w-6xl !mx-auto !py-16 !px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 !mb-4">
            Smarter, Efficient & Scalable
          </h2>
          <p className="text-gray-600 !mb-4">
            Our fleet management service empowers businesses to monitor,
            maintain, and maximize vehicle performance, reducing costs and
            improving uptime.
          </p>
          <ul className="list-disc list-inside text-gray-700 !space-y-2">
            <li>GPS tracking and route optimization</li>
            <li>Maintenance scheduling & alerts</li>
            <li>Driver performance and safety monitoring</li>
            <li>Analytics to improve fuel efficiency</li>
          </ul>
        </div>
        <img
          src="https://cdn.prod.website-files.com/670b21bb935205cca7afadb9/670b27ad73a92fa5b4a5db7b_6557eee97218db963005befb_64f7ba73b9ea255eb168364c_iStock-1409387561.webp"
          alt="Fleet Management"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* CTA */}
      <div className="bg-orange-50 !py-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Take Control of Your Fleet
        </h3>
        <p className="text-gray-600 !mt-2">
          Let our experts help you streamline fleet operations and save costs.
        </p>
        <a
          href="/contact"
          className="inline-block !mt-6 bg-orange-500 hover:bg-orange-600 !text-white !px-6 !py-3 rounded-lg shadow font-medium"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
