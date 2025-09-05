import React from "react";
import { motion } from "framer-motion";
import { testimonialData } from "../assets/assets";

export default function Testimonials() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="!py-16 bg-white" id="Testimonials">
      {/* Section Heading */}
      <div className="text-center !mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Customer <span className="text-orange-600">Testimonials</span>
        </h2>
        <p className="text-gray-500 !mt-4">
          Real Stories from Those Who Found Solution with Us
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {testimonialData.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="max-w-[340px] bg-white border rounded-2xl !px-8 !py-10 text-center shadow-[0_6px_20px_rgba(255,120,0,0.35)] hover:shadow-[0_8px_25px_rgba(255,120,0,0.55)] transition-shadow duration-300"
          >
            {/* Avatar */}
            <div className="flex justify-center">
              <img
                className="!w-24 !h-24 rounded-full object-cover border-4 border-orange-500 shadow-lg !mb-5"
                src={testimonial.image}
                alt={testimonial.alt}
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <span className="block text-sm text-orange-600 font-medium !mb-3">
              {testimonial.title}
            </span>

            {/* Star rating */}
            <div className="flex justify-center gap-1 !mb-4 text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.166L12 18.896l-7.334 3.864 1.4-8.166L.132 9.21l8.2-1.192L12 .587z" />
                </svg>
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
