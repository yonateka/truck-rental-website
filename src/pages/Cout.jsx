// src/pages/Checkout.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mediumTrucks from "../assets/MediumTrucks";
import { account, databases } from "../appwriteConfig";

export default function Cout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null); // toast message

  const product = mediumTrucks.find((p) => p.id.toString() === id);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await account.get();
        setUser(res);
      } catch (err) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [navigate]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000); // auto-hide after 3s
  };

  const handleConfirmPurchase = async () => {
    try {
      await databases.createDocument(
        "68bdd364000957406541",
        "purchases",
        "unique()",
        {
          userId: user.$id,
          productId: product.id,
          productName: product.name,
          price: product.price,
          email: user.email,
        }
      );

      showToast("✅ Purchase saved to My Orders!");
      setTimeout(() => navigate("/"), 3200); // slight delay so toast shows
    } catch (err) {
      console.error(err);
      showToast("❌ Error confirming purchase", "error");
    }
  };

  if (loading) return <div className="!p-10 text-center">Loading...</div>;
  if (!product)
    return <div className="!p-10 text-center">Product not found</div>;

  return (
    <div className="relative">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 
          !px-6 !py-3 rounded-xl shadow-lg text-white text-center z-50 
          animate-fadeIn ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.msg}
        </div>
      )}

      <div className="!max-w-4xl !mx-auto !p-10 !m-8 bg-white rounded-3xl shadow-2xl">
        {/* TOP */}
        <div className="flex justify-between items-center !mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          <button
            onClick={() => navigate(`/medium-trucks`)}
            className="!px-6 !py-2 bg-gray-100 text-orange-700 rounded-lg border border-orange-600 hover:bg-gray-200 transition"
          >
            Back to Product
          </button>
        </div>

        {/* PRODUCT */}
        <div className="flex items-center gap-6 !mb-10 border-b !pb-6">
          <img
            src={product.image}
            alt={product.name}
            className="!w-48 !h-32 object-cover rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {product.name}
            </h2>
            <p className="text-gray-600 !mt-2">{product.description}</p>
            <p className="text-orange-600 font-bold text-2xl !mt-4">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="!mb-10 bg-gray-50 border rounded-xl !p-6 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-700 !mb-3">
            Order Summary
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-sm !space-y-1">
            {product.features.map((f, i) => (
              <li key={i}> {f}</li>
            ))}
          </ul>
        </div>

        {/* USER */}
        {user && (
          <div className="!mb-10">
            <h3 className="text-lg font-semibold text-gray-700 !mb-3">
              Your Account
            </h3>
            <div className="bg-gray-50 rounded-xl !p-6 shadow-inner">
              <p className="text-gray-700">👤 {user.name || "No Name"}</p>
              <p className="text-gray-700">📧 {user.email}</p>
            </div>
          </div>
        )}

        {/* CONFIRM */}
        <div className="text-center !mt-8">
          <button
            onClick={handleConfirmPurchase}
            className="!px-10 !py-4 bg-orange-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-orange-700 hover:scale-105 active:scale-95 transition transform duration-200"
          >
            Confirm Purchase
          </button>
        </div>

        {/* NAV */}
        <div className="flex justify-center gap-4 !mt-8">
          <button
            onClick={() => navigate(`/medium-trucks`)}
            className="!px-6 !py-2 bg-gray-100 text-orange-600 rounded-lg border border-orange-600o hover:bg-gray-200 transition"
          >
            Back to Product
          </button>
          <button
            onClick={() => navigate("/medium-trucks")}
            className="!px-6 !py-2 bg-gray-100 text-orange-600 border-orange-600 rounded-lg border hover:bg-gray-200 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
