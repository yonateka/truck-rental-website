// src/components/ProtectedRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { account } from "../appwriteConfig";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    account
      .get()
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center !mt-20">Loading...</div>;
  return isAuth ? children : <Navigate to="/auth" />;
}
