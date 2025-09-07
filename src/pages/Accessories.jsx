import React from "react";

const accessoriesData = [
  {
    title: "Engine",
    description:
      "Get certified parts for your engine systems including cooling, exhaust, filtration and lubrication.",
    img: "https://bahamas.macktrucks.com/parts-and-services/parts/media_1ddf1c292554fd79246f14bebdacbcfb649692a35.jpeg?width=2000&format=webply&optimize=medium",
    cta: "Find Parts",
  },
  {
    title: "Transmission",
    description:
      "Our transmissions work seamlessly with your engine and axles to ensure top performance and reliability.",
    img: "https://bahamas.macktrucks.com/parts-and-services/parts/media_1a0314c74acf9b6914bd189c08a4893475bc6b0fd.jpeg?width=2000&format=webply&optimize=medium",
    cta: "Find Parts",
  },
  {
    title: "Cab, Body & Accessories",
    description:
      "Discover premium accessories, painted parts, and aerodynamic solutions for your fleet.",
    img: "https://bahamas.macktrucks.com/parts-and-services/parts/media_165dbcdd0c89b6d2c215c58a2e4b16f852264cf11.jpeg?width=2000&format=webply&optimize=medium",
    cta: "Find Parts",
  },
  {
    title: "Overhaul",
    description:
      "Professional engine overhaul services performed by experts who built your engine in the first place.",
    img: "https://bahamas.macktrucks.com/parts-and-services/parts/media_131a9b67c978883ccf7379d045481fa8c09bfa471.jpeg?width=2000&format=webply&optimize=medium",
    cta: "Overhaul Services",
  },
];

export default function Accessories() {
  return (
    <section className="!py-16 bg-white">
      {/* Heading */}
      <div className="text-center !mb-12">
        <h2 className="text-4xl font-extrabold text-gray-700 tracking-tight">
          Truck <span className="text-gray-700">Accessories</span>
        </h2>
        <p className="text-gray-900 !mt-4">
          Genuine parts & upgrades to keep your fleet running at its best
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 !px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl !mx-auto">
        {accessoriesData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border rounded shadow hover:shadow-lg transition !p-4 flex flex-col"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full !h-48 object-cover rounded !mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800 !mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm flex-grow">
              {item.description}
            </p>
            <a
              href="#"
              className="!mt-6 inline-block text-center !px-4 !py-2 bg-orange-600 !text-white rounded hover:bg-white hover:!text-orange-600 hover:border hover:border-orange-600 transition-colors"
            >
              {item.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
