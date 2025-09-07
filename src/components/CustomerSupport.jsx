import React from "react";
import { motion } from "framer-motion";

export default function CustomerSupport() {
  const supportServices = [
    {
      title: "24/7 Helpline",
      desc: "Our team is always available to answer your queries and assist you with bookings, vehicle issues, or account support.",
      img: "https://www.lifeline.org.nz/assets/Uploads/Blocks/Column/24-7-Phone-v7.svg",
    },
    {
      title: "Vehicle Assistance",
      desc: "Immediate roadside assistance and troubleshooting for any vehicle issues during your rental period, ensuring peace of mind.",
      img: "https://cdn.prod.website-files.com/643c88f77d21c082a4c59e2e/64468f2a1fad0ae6ba0cb596_62f12ef5b7b092fc7999f9b7_6271763ec548ec5ddf8dbca0_what-is-roadside-assistance-p-1600.webp",
    },
    {
      title: "Online Help Center",
      desc: "Access guides, FAQs, and tutorials to solve common problems quickly without waiting for support.",
      img: "https://img.freepik.com/premium-vector/hotline-customer-support-call-center-hotline-operators-with-headset-is-sitting-her-computer-talking-with-client-online-support-24-hours-online-customer-service-vector-illustration_735449-363.jpg?w=1060",
    },
  ];

  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="relative bg-gray-900 text-white text-center !py-20 !px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Customer <span className="text-orange-400">Support</span>
        </h1>
        <p className="!mt-4 text-lg text-gray-300 max-w-2xl !mx-auto">
          Our dedicated support team ensures that your rental experience is
          smooth, safe, and stress-free. Help is just a click or call away.
        </p>
        <a
          href="#services"
          className="inline-block !mt-8 bg-orange-500 hover:bg-orange-600 !text-white font-medium !px-6 !py-3 rounded-lg shadow"
        >
          Explore Support Options
        </a>
      </div>

      {/* SERVICE CARDS */}
      <div id="services" className="!py-16 !px-6 max-w-6xl !mx-auto">
        <div className="text-center !mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            How We <span className="text-orange-600">Help You</span>
          </h2>
          <p className="!mt-3 text-gray-600">
            Comprehensive support services designed to make your rental
            worry-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {supportServices.map((srv, i) => (
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
                className="!h-48 !w-full object-cover"
              />
              <div className="!p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {srv.title}
                </h3>
                <p className="!mt-2 text-gray-600 text-sm leading-relaxed">
                  {srv.desc}
                </p>
                <a
                  href="#contact"
                  className="!mt-4 inline-block !text-orange-600 font-semibold hover:underline"
                >
                  Contact Us →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
