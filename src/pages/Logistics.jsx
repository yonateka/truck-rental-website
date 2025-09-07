import React from "react";
import { motion } from "framer-motion";

export default function Logistics() {
  const services = [
    {
      title: "Freight & Cargo",
      desc: "Reliable domestic and international freight solutions with real-time tracking, ensuring your cargo arrives on time and intact.",
      img: "https://www.bizbloqs.com/storage/2021/09/4.-Warehouse_management_System.jpg",
    },
    {
      title: "Warehouse Management",
      desc: "Secure, temperature-controlled warehouses with smart inventory systems for faster order fulfillment and reduced costs.",
      img: "https://www.cafworldwide.com/hubfs/Blog/CAFWorldwide_Blog_WhatAreFreightManagementLogistics.jpg",
    },
    {
      title: "Fleet & Transport",
      desc: "Modern fleet of trucks and vans, route optimization, and live vehicle tracking for seamless, efficient deliveries.",
      img: "https://asstra.com/assets/images/logistics.jpeg",
    },
  ];

  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="relative bg-gray-900 text-white text-center !py-20 !px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          End-to-End <span className="text-orange-400">Logistics</span>{" "}
          Solutions
        </h1>
        <p className="!mt-4 text-lg text-gray-300 max-w-2xl !mx-auto">
          Fast, reliable, and scalable logistics services for businesses of any
          size. So you can focus on growth while we handle the movement.
        </p>
        <a
          href="#services"
          className="inline-block !mt-8 bg-orange-500 hover:bg-orange-600 !text-white font-medium !px-6 !py-3 rounded-lg shadow"
        >
          Explore Services
        </a>
      </div>

      {/* HIGHLIGHTS */}
      <div id="services" className="!py-16 !px-6 max-w-6xl !mx-auto">
        <div className="text-center !mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Core <span className="text-orange-600">Services</span>
          </h2>
          <p className="!mt-3 text-gray-600">
            From shipment planning to final deliver. we’ve got every stage
            covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={srv.img}
                alt={srv.title}
                className="!h-48 w-full object-cover"
              />
              <div className="!p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {srv.title}
                </h3>
                <p className="!mt-2 text-gray-600 text-sm leading-relaxed">
                  {srv.desc}
                </p>
                <a
                  href="#"
                  className="!mt-4 inline-block !text-orange-600 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-orange-50 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Ready to Optimize Your Logistics?
        </h3>
        <p className="!mt-3 text-gray-600 max-w-xl !mx-auto">
          Let’s create a tailored shipping and delivery plan that keeps your
          business moving.
        </p>
        <a
          href="/contact"
          className="!mt-6 inline-block bg-orange-500 hover:bg-orange-600 !text-white !px-6 !py-3 rounded-lg shadow font-medium"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
