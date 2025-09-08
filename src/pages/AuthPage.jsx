import React, { useState } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite"; // ✅ Needed for unique IDs
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 If login was triggered from "Rent Now" button,
  // this will hold "/checkout/:id"
  const redirectTo = location.state?.redirectTo || "/";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // ✅ Login
        await account.createEmailPasswordSession(form.email, form.password);
        toast.success("Login successful!");

        // 👇 Go back to checkout if redirect was set
        navigate(redirectTo);
      } else {
        // ✅ Register
        await account.create(ID.unique(), form.email, form.password);
        toast.success("Account created! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 !p-8">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl !p-8">
        <h1 className="text-2xl font-bold !mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>
        <form onSubmit={handleSubmit} className="!space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full !p-3 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full !p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white !py-2 rounded hover:bg-orange-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="text-center !mt-4">
          {isLogin ? "No account?" : "Have account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="!text-orange-600 underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>

      {/* ✅ Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
