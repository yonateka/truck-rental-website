import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=truck OR logistics&sortBy=popularity&pageSize=6&apiKey=b05ef01106a244538ed5b13ad2dd286d"
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("News fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-gray-600">Loading news…</div>;
  }

  return (
    <section className="!py-16 bg-white" id="News">
      {/* Section Heading */}
      <div className="text-center !mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Rental <span className="text-orange-600">News</span>
        </h2>
        <p className="text-gray-500 !mt-4">
          Latest Updates and Stories About Truck Rentals and Logistics
        </p>
      </div>

      {/* News Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {articles.slice(0, 6).map((article, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="max-w-[340px] bg-white border rounded-2xl !px-8 !py-10 text-center shadow-[0_6px_20px_rgba(255,120,0,0.35)] hover:shadow-[0_8px_25px_rgba(255,120,0,0.55)] transition-shadow duration-300"
          >
            {/* News Image */}
            <div className="flex justify-center">
              <img
                className="!w-24 !h-24 rounded-full object-cover border-4 border-orange-500 shadow-lg !mb-5"
                src={
                  article.urlToImage ||
                  "https://via.placeholder.com/150?text=No+Image"
                }
                alt={article.title}
              />
            </div>

            {/* News Title */}
            <h3 className="text-xl font-semibold text-gray-800 !mb-2">
              {article.title || "No Title"}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm !mb-4">
              {article.description
                ? article.description.slice(0, 100) + "…"
                : "No description available."}
            </p>

            {/* Read More Link */}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 font-black !px-12 !py-2 !mb-10 rounded "
            >
              Read more
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
