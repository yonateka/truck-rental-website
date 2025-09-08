import { getCurrentUser } from "../assets/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { account } from "../appwriteConfig";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Not logged in → send to AuthPage, and remember where to go after login
  if (!user) {
    return (
      <Navigate to="/auth" state={{ redirectTo: location.pathname }} replace />
    );
  }

  // Logged in → show protected page
  return children;
}
