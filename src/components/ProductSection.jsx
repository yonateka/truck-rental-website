import React, { useEffect, useState } from "react";
import "./ProductSection.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const slides = [
    {
      badge: "HOT",
      img: assets.green_foton,
      title: "Over 36T Large Excavator",
      subtitle: "Configured To Pursue Peak Performance",
      specs: [
        { label: "Bucket Capacity", value: "1.5 – 8 m³" },
        { label: "Engine Power", value: "205 – 567 kW" },
        { label: "Operating Weight", value: "36 – 125 T" },
      ],
    },
    {
      badge: "NEW",
      img: assets.red_foton,
      title: "High-Performance Concrete Pump",
      subtitle: "Efficient pumping with cutting-edge technology",
      specs: [
        { label: "Output", value: "120 m³/h" },
        { label: "Engine Power", value: "210 kW" },
        { label: "Max Pressure", value: "8.5 MPa" },
      ],
    },
    {
      badge: "TOP",
      img: assets.white_foton,
      title: "Heavy-Duty Electric Truck",
      subtitle: "Zero-Emission Transport for the Future",
      specs: [
        { label: "Range", value: "350 km" },
        { label: "Battery Capacity", value: "450 kWh" },
        { label: "Max Load", value: "45 T" },
      ],
    },
  ];

  // create clones for seamless infinite loop  [last, ...slides, first]
  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  // position index inside "extended" array; start at 1 (first real slide)
  const [pos, setPos] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  const next = () => setPos((p) => p + 1);
  const prev = () => setPos((p) => p - 1);

  // autoplay every 3s
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => next(), 3000);
    return () => clearInterval(id);
  }, [paused]);

  // when we hit a clone, jump without transition
  const handleTransitionEnd = () => {
    if (pos === extended.length - 1) {
      // jumped past last real slide to cloned first
      setWithTransition(false);
      setPos(1);
      // force re-enable transition on next tick
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setWithTransition(true))
      );
    }
    if (pos === 0) {
      // jumped before first real slide to cloned last
      setWithTransition(false);
      setPos(slides.length);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setWithTransition(true))
      );
    }
  };

  const current = extended[pos];

  return (
    <section className="product-section" id="product">
      <h2 className="product-heading ">
        Explore <span className="text-orange-600">FOTON </span>Product
      </h2>

      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* slider window */}
        <div className="slider-window">
          <div
            className={`slider-track ${withTransition ? "" : "no-transition"}`}
            style={{ transform: `translateX(-${pos * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((item, i) => (
              <div className="slide" key={i}>
                {/* left: image */}
                <div className="product-image">
                  <span className="badge">{item.badge}</span>
                  <img src={item.img} alt={item.title} />
                </div>

                {/* right: info */}
                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p className="subtitle">{item.subtitle}</p>
                  <ul className="specs">
                    {item.specs.map((s, idx) => (
                      <li key={idx}>
                        <strong>{s.label}:</strong> {s.value}
                      </li>
                    ))}
                  </ul>
                  <div className="buttons">
                    <button className="btn-red">Inquiry</button>
                    <button
                      onClick={() => navigate(`/large-trucks`)}
                      className="btn-outline"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* directional arrows */}
          <button
            className="nav nav-left"
            aria-label="Previous product"
            onClick={prev}
          >
            ‹
          </button>
          <button
            className="nav nav-right"
            aria-label="Next product"
            onClick={next}
          >
            ›
          </button>
        </div>

        {/* small title under current (optional) */}
        <p className="sr-only">Currently viewing: {current.title}</p>
      </div>
    </section>
  );
};

export default ProductSection;
