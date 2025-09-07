import React from "react";

export default function TruckRental() {
  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="bg-gray-900 text-white text-center !py-16 !px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Truck <span className="text-orange-500">Rental</span>
        </h1>
        <p className="!mt-4 max-w-2xl !mx-auto text-gray-300">
          Flexible and affordable truck rental solutions tailored to your needs
          whether for a single day or long-term projects.
        </p>
      </div>

      {/* DETAILS */}
      <div className="max-w-6xl !mx-auto !py-16 !px-6 grid md:grid-cols-2 !gap-10 items-center">
        <img
          src="https://cdn.prod.website-files.com/643c88f77d21c082a4c59e2e/64468f2a1fad0ae6ba0cb596_62f12ef5b7b092fc7999f9b7_6271763ec548ec5ddf8dbca0_what-is-roadside-assistance-p-1600.webp"
          alt="Truck Rental"
          className="rounded-lg shadow-lg object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 !mb-4">
            Reliable, Safe & Ready When You Are
          </h2>
          <p className="text-gray-600 !mb-4">
            Our truck rental service provides a wide range of vehicles from
            light-duty pickups to heavy-duty haulers. Perfect for moving,
            transporting goods, or completing construction projects.
          </p>
          <ul className="list-disc list-inside text-gray-700 !space-y-2">
            <li>Short-term and long-term rental plans</li>
            <li>Modern, well-maintained fleet</li>
            <li>Insurance and roadside assistance included</li>
            <li>Transparent pricing, no hidden fees</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-orange-50 !py-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Ready to Rent a Truck Today?
        </h3>
        <p className="text-gray-600 !mt-2">
          Get in touch with our team and book the perfect vehicle for your job.
        </p>
        <a
          href="/contact"
          className="inline-block !mt-6 bg-orange-500 hover:bg-orange-600 !text-white !px-6 !py-3 rounded-lg shadow font-medium"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
