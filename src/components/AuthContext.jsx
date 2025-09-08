import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";

// Create context
const AuthContext = createContext();

// Hook for easier usage
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check current user when app loads
  useEffect(() => {
    const checkUser = async () => {
      try {
        const current = await account.get();
        setUser(current);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  // ✅ Logout
  const logout = async () => {
    try {
      await account.deleteSession(); // only current session
      // or use: await account.deleteSessions(); // logout everywhere
      setUser(null);
      navigate("/"); // back to homepage
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
