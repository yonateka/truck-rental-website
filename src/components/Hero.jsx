import React, { useState } from "react";
import "./Hero.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const slides = [
    {
      id: 1,
      img: assets.green_foton_two,
      title: "SY135C",
      desc: "Efficiency in the Smallest of Spaces",
    },
    {
      id: 2,
      img: assets.white_foton_two,
      title: "Concrete Machinery",
      desc: "Innovative concrete solutions for all projects",
    },
    {
      id: 3,
      img: assets.red_foton_two,
      title: "Electric Truck",
      desc: "Driving the future of sustainable transport",
    },
    {
      id: 4,
      img: assets.white_foton,
      title: "Service Philosophy",
      desc: "Reliable support with zero downtime",
    },
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="main-body">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[current].img})` }}
      >
        <div className="slide-content">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].desc}</p>
          <button onClick={() => navigate(`/large-trucks`)}>SEE MORE</button>
        </div>
      </div>

      <div className="thumbnails">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`thumb ${current === index ? "active" : ""}`}
            onClick={() => handleSlide(index)}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <span>{slide.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
