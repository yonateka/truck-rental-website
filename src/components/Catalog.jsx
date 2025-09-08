// src/components/Catalog.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Catalog({ title, items }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredItems = items.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "all" || item.category === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 text-center !py-12 !px-6">
        <h1 className="text-4xl font-extrabold text-gray-700">{title}</h1>
        <p className="!mt-2 text-gray-900">
          Browse, search and filter {title.toLowerCase()}.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="max-w-6xl !mx-auto !py-6 !px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded !px-4 !py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-48 border border-gray-300 rounded !px-4 !py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="all">All Categories</option>
          <option value="Volvo">Volvo</option>
          <option value="Scania">Scania</option>
          <option value="Mack Anthem">Mack Anthem</option>
          <option value="Cascadia">Cascadia</option>
          <option value="Kenworth">Kenworth</option>
          <option value="Peterbilt">Peterbilt</option>
        </select>
      </div>

      {/* Grid */}
      <div className="!max-w-6xl !mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 !px-4 !pb-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="!h-48 w-full object-cover rounded-t-lg"
            />
            <div className="!p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm !mt-1">{item.year}</p>
              <ul className="text-gray-600 text-sm !mt-2 !space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <Link
                to={`/product/${item.id}`}
                className="!mt-4 inline-block bg-orange-500 !text-white !px-4 !py-2 rounded hover:bg-orange-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
