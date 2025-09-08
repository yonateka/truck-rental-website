// src/pages/ProductDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import largeTrucks from "../assets/largeTrucks";
import { account } from "../appwriteConfig";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = largeTrucks.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="!p-12 !m-10 text-center text-gray-500 text-xl italic bg-gray-50 rounded-xl shadow">
        Product not found.
      </div>
    );
  }

  const handlePurchase = async () => {
    try {
      // ✅ Check if user is logged in
      const user = await account.get();

      if (user) {
        // Already logged in → go to checkout
        navigate(`/checkout/${product.id}`);
      }
    } catch (err) {
      // ❌ Not logged in → go to login, with redirectTo
      navigate("/login", { state: { redirectTo: `/checkout/${product.id}` } });
    }
  };

  return (
    <div className="!max-w-6xl !mx-auto !p-10 !m-10 bg-white shadow-2xl rounded-3xl">
      {/* TOP SECTION: IMAGE LEFT / DETAILS RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="!w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="!mb-4 text-3xl font-extrabold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            <p className="!mb-4 text-2xl font-bold text-orange-600">
              ${product.price.toLocaleString()}
            </p>

            {/* Inline Key Features */}
            <div className="bg-gray-50 border rounded-xl !p-4 !mb-6">
              <h3 className="font-semibold text-gray-700 !mb-2">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {product.features.map((f, i) => (
                  <li key={i}> {f}</li>
                ))}
              </ul>
            </div>

            <div className="!mb-6 !space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Type:</span>{" "}
                {product.type || "Heavy Duty Truck"}
              </p>
              <p>
                <span className="font-semibold">Condition:</span> New
              </p>
              <p>
                <span className="font-semibold">Customization:</span> Available
              </p>
            </div>
          </div>

          <button
            onClick={handlePurchase}
            className="!mt-6 !px-8 !py-4 bg-orange-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-orange-700 hover:scale-105 active:scale-95 transition transform duration-200"
          >
            Contact Supplier / Buy
          </button>
        </div>
      </div>

      {/* PRODUCT DESCRIPTION */}
      <div className="!mt-12 border-t !pt-8">
        <h2 className="text-2xl font-bold text-gray-800 !mb-4">
          Product Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* FULL SPECIFICATIONS */}
      <div className="!mt-12 border-t !pt-8">
        <h2 className="text-2xl font-bold text-gray-800 !mb-4">
          Specifications & Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-gray-700 text-base">
          {product.features.map((f, i) => (
            <li key={i} className="!pl-2">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
