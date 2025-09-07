import React from "react";
import Catalog from "../components/Catalog";

const largeTrucks = [
  {
    id: 1,
    name: "Volvo FH16",
    year: "2024",
    category: "Volvo",
    image:
      "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-trucks-59A1644-PR?wid=1024",
    features: ["Heavy load", "Powerful engine", "Fuel efficient"],
  },
  {
    id: 2,
    name: "Scania R730",
    year: "2024",
    category: "Scania",
    image:
      "https://img1.eurotransport.de/Scania-R730-Topline-Fahrzeuge-Test-Strimline-169FullWidth-27164d3b-240488.jpg",
    features: ["High torque", "Advanced aerodynamics", "Long-haul capability"],
  },
  {
    id: 3,
    name: "Mack Anthem",
    year: "2024",
    category: "Mack Anthem",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000269980/s18391.pcdn.co/wp-content/uploads/2017/09/Mack-Anthem-6.jpg",
    features: ["Durable chassis", "MP8 engine", "Comfort cab"],
  },
  {
    id: 4,
    name: "Freightliner Cascadia",
    year: "2024",
    category: "Cascadia",
    image:
      "https://www.trucknews.com/wp-content/uploads/2024/10/5gen-cascadia-with-trailer-menzies-1024x579.jpg",
    features: ["Aerodynamic design", "Detroit DD15 engine", "Smart telematics"],
  },
  {
    id: 5,
    name: "Kenworth T680",
    year: "2024",
    category: "kenworth",
    image:
      "https://www.trucknews.com/wp-content/uploads/2021/03/TT-Photo-1-1024x768.jpg",
    features: ["PACCAR MX-13 engine", "Spacious sleeper", "Fuel savings"],
  },
  {
    id: 6,
    name: "Peterbilt 579",
    year: "2024",
    category: "Peterbilt",
    image:
      "https://www.trucknews.com/wp-content/uploads/2021/02/pete-1-1024x626.jpg",
    features: ["PACCAR PX-9 engine", "Luxury interior", "Highway efficiency"],
  },
];

export default function LargeTrucks() {
  return <Catalog title="Large Trucks" items={largeTrucks} />;
}
