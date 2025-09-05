import { useState, useEffect } from "react";

export default function VehicleGallery() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: get 2020 makes (NHTSA returns Make_ID, Make_Name)
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
      .then((res) => res.json())
      .then((data) => {
        const sample = data.Results.slice(0, 8); // limit for demo
        // Attach dummy image + static year
        const withImages = sample.map((v) => ({
          id: v.Make_ID,
          name: v.Make_Name,
          year: "2020",
          image: `https://via.placeholder.com/250x150.png?text=${encodeURIComponent(
            v.Make_Name
          )}`,
        }));
        setVehicles(withImages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading vehicles…</div>;
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Vehicle Gallery
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {vehicles.map((v) => (
          <div
            key={v.id}
            className="border rounded shadow hover:shadow-lg transition p-3 bg-white"
          >
            <img
              src={v.image}
              alt={v.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-800">{v.name}</h3>
            <p className="text-sm text-gray-500">Year: {v.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
