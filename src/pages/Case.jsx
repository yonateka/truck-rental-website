import React from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "Fleet Optimization for Logistics Inc.",
    client: "Logistics Inc.",
    description:
      "We helped Logistics Inc. reduce fuel costs by 18% and improve route efficiency with real-time tracking and predictive analytics.",
    image:
      "https://cdn.prod.website-files.com/670b21bb935205cca7afadb9/670b27ad73a92fa5b4a5db7b_6557eee97218db963005befb_64f7ba73b9ea255eb168364c_iStock-1409387561.webp",
    stats: [
      { label: "Fuel Cost Reduction", value: "18%" },
      { label: "Delivery Time Improved", value: "25%" },
    ],
  },
  {
    id: 2,
    title: "Heavy Equipment Rental Expansion",
    client: "Mega Build Co.",
    description:
      "A scalable rental platform allowed Mega Build Co. to manage over 1,500 trucks, monitor utilization, and boost revenue by 30%.",
    image:
      "https://i0.wp.com/theconstructor.org/wp-content/uploads/2018/11/Tracked-Excavator-1.jpg?resize=450%2C317&ssl=1",
    stats: [
      { label: "Fleet Managed", value: "1,500+" },
      { label: "Revenue Growth", value: "30%" },
    ],
  },
  {
    id: 3,
    title: "Smart Route Planning",
    client: "Urban Move",
    description:
      "Leveraging AI routing reduced idle time, minimized traffic delays, and increased on-time delivery rates to 96%.",
    image:
      "https://www.nissan-global.com/JP/INNOVATION/TECHNOLOGY/ARCHIVE/IRP/ASSETS/IMG/irp_06.jpg",
    stats: [
      { label: "On-Time Rate", value: "96%" },
      { label: "Idle Time Cut", value: "−40%" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="!py-16 bg-gray-50" id="case-studies">
      {/* Header */}
      <div className="!text-center !mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Featured <span className="text-orange-600">Case Studies</span>
        </h2>
        <p className="text-gray-600 !mt-4 max-w-2xl !mx-auto">
          Real-world success stories from our partners who optimized fleet
          operations and scaled their businesses using our solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 !px-6">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={study.image}
              alt={study.title}
              className="!h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="!p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">
                {study.title}
              </h3>
              <p className="text-sm text-orange-600 mb-3">{study.client}</p>
              <p className="text-gray-600 text-sm flex-grow">
                {study.description}
              </p>

              {/* Stats */}
              <div className="!mt-4 flex flex-wrap gap-4">
                {study.stats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-orange-50 text-orange-600 text-sm !px-3 !py-1 rounded"
                  >
                    <span className="font-bold">{s.value}</span> {s.label}
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="#"
                className="inline-block !mt-6 text-center !px-4 !py-2 border border-orange-600 !text-orange-600 rounded hover:bg-orange-600 hover:!text-white transition-colors"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
