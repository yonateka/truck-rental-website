import React from "react";
import Catalog from "../components/Catalog";
import mediumTrucks from "../assets/MediumTrucks";

export default function MediumTrucks() {
  return <Catalog title="Medium Trucks" items={mediumTrucks} />;
}
