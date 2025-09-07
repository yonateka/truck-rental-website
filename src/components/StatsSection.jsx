import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  const stats = [
    { number: "16", label: "Industrial Bases Outside Ethiopia" },
    { number: "7", label: "Industrial Clusters in Ethiopia" },
    { number: "47", label: "Lighthouse Factories Worldwide" },
    { number: "912", label: "Parts Warehouses Outside Ethiopia" },
    { number: "5", label: "R&D Centers" },
    { number: "900+", label: "Service Sites Outside Ethiopia" },
    { number: "89%", label: "Employee Localization Rate Outside Ethiopia" },
  ];

  return (
    <div className="stats-section" id="stats">
      <h2 className="stats-title">
        Quality <span className="text-orange-400">Changes</span> the World
      </h2>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-item">
            <h3 className="stat-number">{item.number}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
