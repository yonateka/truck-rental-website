// src/components/News.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { key: "general", label: "Top Stories" },
    { key: "world", label: "World" },
    { key: "nation", label: "Nation" },
    { key: "business", label: "Business" },
    { key: "technology", label: "Technology" },
    { key: "sports", label: "Sports" },
    { key: "health", label: "Health" },
    { key: "science", label: "Science" },
    { key: "entertainment", label: "Entertainment" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  const fetchNews = async (selectedCategory = "general", keyword = "") => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;

      const url = keyword
        ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(
            keyword
          )}&lang=en&country=us&token=${apiKey}`
        : `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=us&token=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (err) {
      console.error("News fetch failed:", err);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      fetchNews(category);
    }
  }, [category]);

  useEffect(() => {
    if (searchTerm) {
      fetchNews("", searchTerm);
    }
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="!p-10 text-center text-gray-600 text-lg animate-pulse">
        Loading news…
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="!p-10 text-center text-gray-600 text-lg">
        No news available
      </div>
    );
  }

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="!py-16 !px-6 bg-white" id="News">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center !mb-10"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Latest <span className="text-orange-600">News</span>
        </h2>
        <p className="text-gray-500 !mt-4">
          Stay updated with the latest stories from around the world
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="flex justify-center !mb-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news…"
          className="!px-6 !py-3 w-full max-w-lg border rounded-l-full focus:ring-2 focus:ring-orange-500 outline-none"
        />
        <button
          onClick={() => setSearchTerm(query)}
          className="!px-6 !py-3 bg-orange-600 text-white font-semibold rounded-r-full hover:bg-orange-700 transition"
        >
          Search
        </button>
      </div>

      {/* Category Filters */}
      {!searchTerm && (
        <div className="flex flex-wrap justify-center gap-4 !mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`!px-6 !py-2 rounded-full font-medium transition shadow-md ${
                category === cat.key
                  ? "bg-orange-600 text-white scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid Layout */}
      <div className="max-w-6xl !mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {mainArticle && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <a
              href={mainArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <img
                src={
                  mainArticle.image ||
                  "https://via.placeholder.com/800x500?text=No+Image"
                }
                alt={mainArticle.title}
                className="w-full h-80 object-cover rounded-xl shadow-xl group-hover:opacity-90 transition"
              />
              <h3 className="!mt-6 text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                {mainArticle.title}
              </h3>
              <p className="!mt-4 text-gray-600 leading-relaxed">
                {mainArticle.description || "No description available."}
              </p>
            </a>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-8"
        >
          {sideArticles.map((article, idx) => (
            <motion.a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b pb-6 last:border-none group"
              custom={idx}
              variants={fadeInUp}
            >
              <img
                src={
                  article.image ||
                  "https://via.placeholder.com/400x250?text=No+Image"
                }
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg shadow-md group-hover:opacity-90 transition"
              />
              <h4 className="!mt-3 text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500 !mt-1">
                {article.publishedAt
                  ? new Date(article.publishedAt).toDateString()
                  : "Unknown date"}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
