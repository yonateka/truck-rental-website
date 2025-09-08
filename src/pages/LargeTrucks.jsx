import React from "react";
import Catalog from "../components/Catalog";
import largeTrucks from "../assets/largeTrucks";

export default function LargeTrucks() {
  return <Catalog title="Large Trucks" items={largeTrucks} />;
}
