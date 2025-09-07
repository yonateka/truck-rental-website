import React from "react";
import { motion } from "framer-motion";
import StatsSection from "./StatsSection";

// Sample team data
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/J.John_Portrait_Shot.jpg/250px-J.John_Portrait_Shot.jpg",
  },
  {
    name: "Jane Smith",
    role: "Operations Manager",
    image:
      "https://ethiopia.unfpa.org/sites/default/files/styles/original/public/news/2025-07/Untitled%20design%20%2887%29.webp?itok=vZYlDkgK",
  },
  {
    name: "Robert Johnson",
    role: "Customer Support Lead",
    image: "https://www.bu.edu/files/2019/02/Robin-DiAngelo-photo.jpg",
  },
];

export default function About() {
  return (
    <section className="bg-white">
      {/* HERO SECTION */}
      <div className="relative bg-gray-900 text-white text-center !py-20 !px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          About <span className="text-orange-400">Us</span>
        </h1>
        <p className="!mt-4 text-lg text-gray-300 max-w-2xl !mx-auto">
          TruckRent is committed to delivering reliable, safe, and efficient
          truck rental solutions for businesses and individuals alike. Our
          passion is providing seamless service from start to finish.
        </p>
      </div>

      {/* COMPANY MISSION */}
      <div className="!py-16 !px-6 max-w-5xl !mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Our <span className="text-orange-600">Mission</span>
        </h2>
        <p className="!mt-4 text-gray-600 text-lg">
          To provide top-notch logistics and vehicle rental services, ensuring
          every customer experiences safety, reliability, and convenience every
          mile of the journey.
        </p>
      </div>

      {/* COMPANY STATS */}
      <div className="!py-12 bg-orange-50">
        <div className="max-w-6xl !mx-auto flex flex-wrap justify-around gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-800">500+</h3>
            <p className="text-gray-600 !mt-1">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">1000+</h3>
            <p className="text-gray-600 !mt-1">Successful Deliveries</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">10+</h3>
            <p className="text-gray-600 !mt-1">Years of Experience</p>
          </div>
        </div>
      </div>
      <StatsSection />
      {/* TEAM SECTION */}
      <div className="!py-16 !px-6 max-w-6xl !mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center !mb-12">
          Meet Our <span className="text-orange-600">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg !p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="!w-32 !h-32 mx-auto rounded-full object-cover border-4 border-orange-500 shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-orange-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-gray-900 text-white text-center !py-16 !px-6">
        <h3 className="text-2xl font-bold">
          Want to Learn More About Our Services?
        </h3>
        <p className="!mt-3 text-gray-300 max-w-xl !mx-auto">
          Explore our services and solutions tailored to your trucking and
          logistics needs.
        </p>
        <a
          href="/contact"
          className="!mt-6 inline-block bg-orange-500 hover:bg-orange-600 !text-white !px-6 !py-3 rounded-lg shadow font-medium"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
